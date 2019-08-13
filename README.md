# Capital-Assets-CryptoDashboard

This website indexes the top 100 cryptocurrencies using the Cryptocurrency API Listings Latest API of CoinMarketCap There is as well a Global Metrics API of CoinMarketCap

Please note that since there is an issue with the cors use the following chrome extension Moesif CORS : 

https://chrome.google.com/webstore/detail/moesif-orign-cors-changer/digfbfaphojjndkpccljibejjbppifbc

![website image][]

## Technical Details

This application is built with HTML and [Bootstrap][] for CSS.  

The Javascript part of the site is powered by [Vue.js][], a very simple
Javascript framework.

[vue2-filters][], a simple Vue.js library that provides some useful template
  filters for displaying text. In this app, I only the filter for helping to
  display currency values nicely.
[axios][], a simple Javascript library for making HTTP requests

Finally, the data on this website is powered by two separate, free, API
services:

[coinmarketcap][], which provides a list of the top 100 cryptocurrencies, and their price details
  
  
[Bootstrap]: http://getbootstrap.com/ "Twitter Bootstra"
[Vue.js]: https://vuejs.org/ "Vue.js"
[vue2-filters]: https://www.npmjs.com/package/vue2-filters "vue2-filters"
[axios]: https://github.com/mzabriskie/axios "axios"
[coinmarketcap]: https://coinmarketcap.com/api/ "coinmarketcap API"
[website image]: /application/images/image.png "Screenshot"
