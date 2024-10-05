import axios from 'axios';

const baseURL = import.meta.env.VITE_UNSPLASH_API
const apiKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY

const Axios = axios.create({
  baseURL,
  headers:{
    Authorization: `Client-ID ${apiKey}`,
  }
});

export default Axios;