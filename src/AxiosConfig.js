import axios from 'axios';
// var path = "https://jsonplaceholder.typicode.com/";
var path = "http://localhost:8800/api/";

const instance = axios.create({
  baseURL: path,
  withCredentials: false,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  }
});

export default instance;