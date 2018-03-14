import axios from 'axios'

export const AXIOS = axios.create({
  baseURL: 'http://172.255.152.115:8081',
  headers: {
    'Access-Control-Allow-Origin': 'http://172.255.152.115:8081'
  }
})
