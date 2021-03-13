import axios from "axios";

const URL = 'https://api.nasa.gov/neo/rest/v1/';

const http = axios.create({baseURL: URL});

export default http;