import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://my-burger-builder-a095e.firebaseio.com/',
});

export default instance;