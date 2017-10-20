import axios from 'axios';
import keys from './keys';

export function foods( food ) {
  console.log(food)
  return axios.get(` http://food2fork.com/api/search?key=${keys.key}&q=${food}`)
  .then(res => {
    console.log(res.data.recipes);
    return res.data.recipes;
  })
}
