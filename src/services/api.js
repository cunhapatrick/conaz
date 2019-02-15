import axios from 'axios';

export default axios.create({
  baseURL: "https://fcc-weather-api.glitch.me/api/"
})
