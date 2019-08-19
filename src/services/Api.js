import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: process.env.VUE_APP_PATH
    // baseURL: `http://127.0.0.1:9000`
  })
}
