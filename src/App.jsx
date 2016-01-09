// import node modules
import d3 from 'd3';
import * as React from 'react';
import Modal from 'react-modal';
import { Map, TileLayer, GeoJson } from 'react-leaflet';

// import components from @panorama/toolkit
import {
  CartoDBTileLayer,
  HashManager,
  IntroManager,
  Legend,
  Punchcard
} from '@panorama/toolkit';

/*
 * Data flow via Flux:
 * https://facebook.github.io/flux/docs/overview.html
 * 
 *                  ┌-----   actions   <-----┐
 *                  v                        |
 * actions --> dispatcher --> stores --> root view
 */

// stores
import ExampleStore from './stores/ExampleStore';

// local (not installed via npm) components (views)
import ExampleComponent from './components/ExampleComponent.jsx';

// utils
// TODO: refactor to use same structure as PanoramaDispatcher;
// Having `flux` as a dependency, and two different files, is overkill.
import { AppActions, AppActionTypes } from './utils/AppActionCreator';
import AppDispatcher from './utils/AppDispatcher';

// config
import tileLayers from '../basemaps/tileLayers.json';
import cartodbConfig from '../basemaps/cartodb/config.json';
import cartodbLayers from '../basemaps/cartodb/basemaps.json';


// main app container
class App extends React.Component {

  constructor (props) {

    super(props);

    console.log('Welcome to your Panorama data flow tour!');
    console.log('Panorama applications use a variant of the `Flux` pattern, and store application state in the URL hash.');
    console.log('Here\'s an overview:');
    console.log('The root of the application (`App`) listens for changes in application state, stores them in the hash.');
    console.log('When the hash changes, App responds by passing the new state down through all its child components.');
    console.log('In this pattern, the hash is the single source of truth for application state, and all components are stateless; they do as they are told by the root of the application, which in turn is directed by the hash.');
    console.log('* * * * * * * * * *');

    this.handleAppStateChanges();

    // set up initial state in constructor
    // (instead of ES5-style getInitialState)
    this.state = this.getDefaultState();

    // bind handlers to this component instance,
    // since React no longer does this automatically when using ES6
    this.onWindowResize = this.onWindowResize.bind(this);
    this.hashChanged = this.hashChanged.bind(this);
    this.onMapMoved = this.onMapMoved.bind(this);
    this.onLegendItemSelected = this.onLegendItemSelected.bind(this);
    this.toggleAbout = this.toggleAbout.bind(this);
    this.triggerIntro = this.triggerIntro.bind(this);
    this.onIntroExit = this.onIntroExit.bind(this);

  }

  handleAppStateChanges () {

    console.log('[1] App registers with AppDispatcher to be notified of changes in application state, most frequently caused by user actions.');

    // Register callback to handle all updates
    AppDispatcher.register((action) => {

      let key;

      switch (action.type) {

      case AppActionTypes.itemSelected:
        key = App.STATE_KEYS.ITEM;
        break;

      case AppActionTypes.mapMoved:
        this.mapHashUpdated = true;
        key = HashManager.MAP_STATE_KEY;
        break;

      }

      if (key) {
        let hash = {};
        hash[key] = action.value;
        console.log('[6a] App is notified of a change in application state of type and value { ' + action.type + ': ' + action.value + ' }. It updates the hash with the new state....');
        HashManager.updateHash(hash);
      }

      return true;

    });

  }


  // ============================================================ //
  // React Lifecycle
  // ============================================================ //

  getDefaultState () {

    return {
      dimensions: {
        upperLeft: {
          width: 0,
          height: 0
        },
        upperRight: {
          width: 0,
          height: 0
        }
      },
      selectedItemId: 0,

      // Override defaults with map state in hash, if present
      map: Object.assign({}, {
        zoom: 5,
        center: [-3.300, 2.800]
      }, HashManager.getState(HashManager.MAP_STATE_KEY))
    };

  }

  static STATE_KEYS = {
    'ITEM': 'item'
  };

  componentWillMount () {

    this.computeComponentDimensions();
    
    console.log('[2] Immediately before the root component (`App`) mounts, it requests initial data from ExampleStore.');
    ExampleStore.loadInitialData()
    .then(() => {

      console.log('[5] App responds to the initial data load by manually triggering `hashChanged()` in order to `render()` application with the loaded data.');
      this.hashChanged();

    }, (error) => {

      // fail loudly, do not swallow the error
      throw error;

    });

    // Prepare object to deliver default application state to HashManager,
    // with initial values paired with keys to use in the hash.
    let initialState = {};
    initialState[App.STATE_KEYS.ITEM] = this.state.selectedItemId;
    initialState[HashManager.MAP_STATE_KEY] = {
      zoom: this.state.map.zoom,
      center: this.state.map.center
    };

    // Overwrite default states with any states present in the hash
    initialState = Object.assign({}, initialState, HashManager.getState());

    // Update hash with merged result.
    // Do this before setting up the `hashChanged` event handler,
    // so that `render()` is not called until initial data are loaded.
    console.log('[3a] The hash is updated with a merge of default state and state already existing in the hash.');
    HashManager.updateHash(initialState);

    // Handle all hash changes subsequent to the above initialization.
    console.log('[3b] App registers with HashManager to be notified of subsequent changes in the hash.');
    HashManager.addListener(HashManager.EVENT_HASH_CHANGED, this.hashChanged);

  }

  componentDidMount () {

    window.addEventListener('resize', this.onWindowResize);

  }

  componentWillUnmount () {

    HashManager.removeListener(HashManager.EVENT_HASH_CHANGED, this.hashChanged);
    window.removeEventListener('resize', this.onWindowResize);

  }

  shouldComponentUpdate (nextProps, nextState) {

    // Do not re-render if the state change was just map state.
    return !this.mapHashUpdated;

  }

  componentDidUpdate () {

    //

  }



  // ============================================================ //
  // Handlers
  // ============================================================ //

  hashChanged (event, suppressRender) {

    // Ignore hash changes before initial data have loaded.
    if (!ExampleStore.hasLoadedInitialData()) { return; }

    if (event) {
      console.log('[6b] ...App handles a change in the hash. A setState() call updates the application with the new state and triggers a render(), from where the new state will flow down the component tree.');
    }

    let data = ExampleStore.getData(),
      selectedItemId = HashManager.getState(App.STATE_KEYS.ITEM),
      mapState = HashManager.getState(HashManager.MAP_STATE_KEY),
      newState;

    newState = {
      exampleComponent: {
        title: data.exampleTitle,
        loading: false
      },
      selectedItem: selectedItemId,
      legend: {
        ...data.legend, // merge existing state into new state
        selectedItem: selectedItemId
      },
      punchcard: this.parsePunchcardData(data.punchcard)
    };

    if (mapState) {
      newState.zoom = mapState.zoom;
      newState.center = mapState.center;
    }

    // setState with the updated data, which causes a re-render()
    this.setState(newState);

    this.mapHashUpdated = false;

  }

  onLegendItemSelected (value, index) {

    if (!isNaN(index)) {
      AppActions.itemSelected(index);
    }

  }

  onMapMoved (event) {

    if (event && event.target) {
      AppActions.mapMoved({
        zoom: event.target.getZoom(),
        center: event.target.getCenter()
      });
    }

  }

  onWindowResize (event) {

    this.computeComponentDimensions();

  }

  toggleAbout () {

    this.setState({
      aboutModalOpen: !this.state.aboutModalOpen
    });

  }

  triggerIntro (event) {

    if (this.state.aboutModalOpen) {
      this.toggleAbout();
    }

    this.setState({
      intro: {
        open: true,
        step: (event && event.currentTarget) ? parseInt(event.currentTarget.dataset.step) : null,
        config: {
          showStepNumbers: false,
          skipLabel: '×',
          nextLabel: '⟩',
          prevLabel: '⟨',
          doneLabel: '×'
        },

        steps: [
          {
            element: '.left-column .top-row.template-tile',
            intro: 'copy for step ONE goes here',
            position: 'right'
          },
          {
            element: '.left-column .bottom-row.template-tile',
            intro: 'copy for step TWO goes here',
            position: 'top'
          },
          {
            element: '.right-column .top-row.template-tile',
            intro: 'copy for step THREE goes here',
            position: 'left'
          },
          {
            element: '.right-column .bottom-row.template-tile',
            intro: 'copy for step FOUR goes here',
            position: 'top'
          }
        ],

        onExit: this.onIntroExit
      }
    });

  }

  onIntroExit () {

    this.setState({
      intro: {
        open: false
      }
    });

  }



  // ============================================================ //
  // Helpers
  // ============================================================ //

  computeComponentDimensions () {

    // based off of sizes stored within _variables.scss --
    // if you change them there, change them here.
    let containerPadding = 20,
      headerHeight = 90,
      breakpointWidthWide = 1280,
      bottomRowHeightShort = 230,
      bottomRowHeightTall = 310,
      bottomRowHeight,
      dimensions = {};

    // Calculate bottom row height as set by media breakpoints
    let bottomRowEl = document.querySelector('.bottom-row'),
      bottomRowHeightStyle;

    if (bottomRowEl) {
      bottomRowHeightStyle = window.getComputedStyle(bottomRowEl);
      bottomRowHeight = bottomRowEl.offsetHeight + parseFloat(bottomRowHeightStyle.marginTop.replace('px', '')) + parseFloat(bottomRowHeightStyle.marginBottom.replace('px', ''));
    } else {
      bottomRowHeight = window.innerWidth < breakpointWidthWide ? bottomRowHeightShort : bottomRowHeightTall;
    }

    dimensions.upperRight = {
      height: window.innerHeight - bottomRowHeight - 3 * containerPadding
    };
    dimensions.upperLeft = {
      height: dimensions.upperRight.height - headerHeight
    };
    dimensions.lowerLeft = {
      height: bottomRowHeight - 2 * containerPadding
    };
    dimensions.lowerRight = {
      height: dimensions.lowerLeft.height
    };

    this.setState({ dimensions: dimensions });

  }

  parsePunchcardData (data) {

    // Our sample data, loaded from sampleData.json in ExampleStore, contains three different datasets.
    // Map each dataset to a Punchcard config and store in `punchcardData` array.
    // Then, as the ItemSelector selected item changes,
    // we simply pass the corresponding mapped data + config into Punchcard.
    let punchcardData = data.map(dataset => {

      let config = {
        loading: false,
        radiusMaxValue: 0,
        colorAccessor: d => d.aggregateNormalizedValue,
        valueAccessor: d => d.normalizedValue,
        colorScale: d3.scale.ordinal().range(['rgb(188, 35, 64)', 'rgb(228, 104, 75)', 'rgb(187, 27, 105)', 'rgb(103, 116, 99)', 'rgb(26, 169, 143)', 'rgb(10, 103, 150)', 'rgb(67, 40, 93)', 'rgb(86, 96, 99)']),
        textValueFormatter: d3.format(',0'),
        selectAccessor: d => d.name,
        headerMargin: 110
      };

      dataset.categories.forEach(d => {
        config.radiusMaxValue = Math.max(config.radiusMaxValue, d3.max(d.commodities, v => v.normalizedValue));
      });

      config.colorScale.domain([1, d3.max(dataset.categories, config.colorAccessor)]);

      // Merge parsed data with header data and config
      return Object.assign({
        data: dataset.categories,
        header: dataset.header
      }, config);

    });

    return punchcardData;

  }



  // ============================================================ //
  // Render functions
  // ============================================================ //

  renderTileLayers () {

    let layers = [];

    if (cartodbLayers.layergroup && cartodbLayers.layergroup.layers) {
      layers = layers.concat(cartodbLayers.layergroup.layers.map((item, i) => {
        return (
          <CartoDBTileLayer
            key={ 'cartodb-tile-layer-' + i }
            userId={ cartodbConfig.userId }
            sql={ item.options.sql }
            cartocss={ item.options.cartocss }
          />
        );
      }));
    }

    if (tileLayers.layers) {
      layers = layers.concat(tileLayers.layers.map((item, i) => {
        return (
          <TileLayer
            key={ 'tile-layer-' + i }
            url={ item.url }
          />
        );
      }));
    }

    return layers;
  }

  render () {

    let modalStyle = {
      overlay : {
        backgroundColor: null
      },
      content : {
        top: null,
        left: null,
        right: null,
        bottom: null,
        border: null,
        background: null,
        borderRadius: null,
        padding: null,
        position: null
      }
    };

    return (
      <div className='container full-height'>

        <div className='row full-height'>
          <div className='columns eight left-column full-height'>
            <header className='row u-full-width'>
              <h1><span className='header-main'>PANORAMA TEMPLATE</span></h1>
              <h4 onClick={ this.toggleAbout }>ABOUT THIS MAP</h4>
              <button className='intro-button' data-step='1' onClick={ this.triggerIntro }><span className='icon info'/></button>
            </header>
            <div className='row top-row template-tile' style={ { height: this.state.dimensions.upperLeft.height + 'px' } }>
            <Map { ...this.state.map } onLeafletMoveend={ this.onMapMoved }>
                { this.renderTileLayers() }
              </Map>
            </div>
            <div className='row bottom-row template-tile'>
              <h2>Local component:</h2>
              <ExampleComponent { ...this.state.exampleComponent } />
              <button className='intro-button' data-step='2' onClick={ this.triggerIntro }><span className='icon info'/></button>
            </div>
          </div>
          <div className='columns four right-column full-height'>
            <div className='row top-row template-tile' style={ { height: this.state.dimensions.upperRight.height + 'px' } }>
              { this.state.punchcard ?
                <div className='punchcard-header'>
                  <h2 className='col'>{ this.state.punchcard[this.state.selectedItem].header.title.toUpperCase() }</h2>
                  <h3 className='col'><span className='subtitle'>{ this.state.punchcard[this.state.selectedItem].header.subtitle }</span><span className='caption'>{ this.state.punchcard[this.state.selectedItem].header.caption }</span></h3>
                </div> : null }
              { this.state.punchcard ? <Punchcard { ...this.state.punchcard[this.state.selectedItem] } /> : null }
              <button className='intro-button' data-step='3' onClick={ this.triggerIntro }><span className='icon info'/></button>
            </div>
            <div className='row bottom-row template-tile'>
              <h2>Imported component:</h2>
              { this.state.legend ? <Legend { ...this.state.legend } onItemSelected={ this.onLegendItemSelected }/> : null }
              <button className='intro-button' data-step='4' onClick={ this.triggerIntro }><span className='icon info'/></button>
            </div>
          </div>
        </div>

        <Modal isOpen={ this.state.aboutModalOpen } onRequestClose={ this.toggleAbout } style={ modalStyle }>
          <button className='close' onClick={ this.toggleAbout }><span>×</span></button>
          <h3>About this Map</h3>
          <p>"Oh, if you take it that way," said John Bunsby, "I've nothing more to say." John Bunsby's suspicions were confirmed.  At a less advanced season of the year the typhoon, according to a famous meteorologist, would have passed away like a luminous cascade of electric flame; but in the winter equinox it was to be feared that it would burst upon them with great violence.</p>
          <h3>Sources</h3>
          <p>The pilot took his precautions in advance.  He reefed all sail, the pole-masts were dispensed with; all hands went forward to the bows.  A single triangular sail, of strong canvas, was hoisted as a storm-jib, so as to hold the wind from behind.  Then they waited.</p>
          <h3>Suggested Reading</h3>
          <p>John Bunsby had requested his passengers to go below; but this imprisonment in so narrow a space, with little air, and the boat bouncing in the gale, was far from pleasant.  Neither Mr. Fogg, Fix, nor Aouda consented to leave the deck.</p>
          <h3>Acknowledgements</h3>
          <p>The storm of rain and wind descended upon them towards eight o'clock. With but its bit of sail, the Tankadere was lifted like a feather by a wind, an idea of whose violence can scarcely be given.  To compare her speed to four times that of a locomotive going on full steam would be below the truth.</p>
        </Modal>

        <IntroManager { ...this.state.intro } />

      </div>
    );

  }

}

export default App;
