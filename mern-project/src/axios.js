import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://scc-mern-project.herokuapp.com/'
})

export default instance
