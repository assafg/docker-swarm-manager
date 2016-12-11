import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.33.10:3000/';

export const swarmServiceList = () => axios.get('/api/swarmService');
export const swarmNodeList = () => axios.get('/api/swarmNode');

export const swarmServiceInspect = name => axios.get(`/api/swarmService/${name}`);
