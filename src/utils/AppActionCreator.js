import AppDispatcher from './AppDispatcher';

export const AppActionTypes = {

  itemSelected: 'itemSelected',
  mapMoved: 'mapMoved'

};

export const AppActions = {

  /**
   * Dispatch action when an item is selected (usually by user action).
   * @param {String} item     ID of the selected item.
   */
  itemSelected: (item) => {
    AppDispatcher.dispatch({
      type: AppActionTypes.itemSelected,
      value: item
    });
  },

  /**
   * Dispatch action when map is zoomed or panned.
   * @param {Object} mapState   { zoom, center: { lat, lng } }
   */
  mapMoved: (mapState) => {
    AppDispatcher.dispatch({
      type: AppActionTypes.mapMoved,
      value: mapState
    });
  }

};
