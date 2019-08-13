
let quotes = "https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?CMC_PRO_API_KEY=8ccfe4e8-7cf1-4a84-9b2f-f0047b8d3365";
let cryptocurrency = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=8ccfe4e8-7cf1-4a84-9b2f-f0047b8d3365";
// The amount of milliseconds (ms) after which we should update our currency
// charts.
let UPDATE_INTERVAL = 60 * 1000;

let app = new Vue({
  el: "#app",
  data: {
    coins: {}
  },
  methods: {

    /**
     * Get the top 10 cryptocurrencies by value.  This data is refreshed each 5
     * minutes by the backing API service.
     */
    getCoins: function() {
      let self = this;

      axios.get(cryptocurrency)
        .then((resp) => {
          this.coins = resp.data.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },

    getQuotes: function() {
      let self = this;

      axios.get(quotes)
        .then((resp) => {
          this.quotes = resp.data.data;
          console.log(resp.data.data);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    /**
     * Return a CSS color (either red or green) depending on whether or
     * not the value passed in is negative or positive.
     */
    getColor: (num) => {
      return num > 0 ? "color:green;" : "color:red;";
    },
  },

  /**
   * Using this lifecycle hook, we'll populate all of the cryptocurrency data as
   * soon as the page is loaded a single time.
   */
  created: function () {
  	this.getCoins();
    this.getQuotes();
  }
});

/**
 * Once the page has been loaded and all of our app stuff is working, we'll
 * start polling for new cryptocurrency data every minute.
 *
 * This is sufficiently dynamic because the API's we're relying on are updating
 * their prices every 5 minutes, so checking every minute is sufficient.
 */
setInterval(() => {
  app.getCoins();
}, UPDATE_INTERVAL);
