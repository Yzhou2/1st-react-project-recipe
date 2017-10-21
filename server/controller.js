const axios = require('axios');
const config = require('./config');


module.exports = {
  getRecipes: (req, res) => {
    console.log('endpoint hitttttttt')
    console.log(req.params.cat, 'this is the recipe catogorie')
    axios.get(`http://food2fork.com/api/search?key=${config.key}&q=${req.params.cat}`).then(
     response => {
       console.log('hey yo im response', response.data.recipes)
       return res.send(response.data.recipes)}

     )
  },
}
