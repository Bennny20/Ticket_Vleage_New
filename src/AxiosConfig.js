import axios from 'axios';
// var path = "https://jsonplaceholder.typicode.com/";
var path = "http://localhost:8800/api/";
const access_token = localStorage.getItem("access_token");
const instance = axios.create({
  baseURL: path,
  withCredentials: false,
  Cookie : `access_token=${access_token}`,
  headers: {
    Accept: "application/json",
    Cookie: `access_token=${access_token}`,
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Expose-Headers': '*',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  }
});

export default instance;