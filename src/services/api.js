import axios from 'axios';

//RODAR COM IPV4: JSON-SERVER --WATCH -D 180 -- HOST (SEU IP) DB.JSON

const api = axios.create({
  baseURL: 'http://192.168.3.3:3000'
})

export default api;