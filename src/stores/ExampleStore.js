import sampleData from '../../static/sampleData.json';

const ExampleStore = {

  data: null,

  /**
   * Sample data loader, with setTimeout
   * emulating network response delay,
   * returning sample data from a local json file.
   * A real data loader would follow the same pattern,
   * but probably make an XHR and return the response data.
   */
  dataLoader: {
    query: (value) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          return resolve(sampleData);
        }, 1000);
      });
    }
  },

  /**
   * Check if the initial data load request has completed.
   * @return {Boolean}
   */
  hasLoadedInitialData: function () {

    return !!this.data;

  },

  /**
   * Make a request for data needed on application init.
   */
  loadInitialData: function () {

    // Sample query; format varies by data provider
    return this.dataLoader.query([
      {
        query: 'SELECT * FROM tablename',
        format: 'JSON'
      }
    ]).then((...responses) => {

      this.setData(this.parseData(...responses));
      console.log('[4] ExampleStore finishes loading and parsing initial data.');

    },
    (error) => {

      console.error('Example received error:', error);
      throw error;

    });

  },

  /**
   * Retrieve data from the store.
   */
  getData: function () {

    // For simplicity of example, we return all of the data.
    // A real application would more likely return a copy
    // (to avoid accidental mutation by consumers) 
    // of a subset of the data.
    return this.data;

  },

  /**
   * Cache the loaded, parsed data for future use by the application.
   */
  setData: function (data) {

    this.data = data;

  },

  /**
   * Parse returned data as necessary.
   */
  parseData: function (...data) {

    let firstResponse = data[0];
    return firstResponse;

  }


};

export default ExampleStore;
