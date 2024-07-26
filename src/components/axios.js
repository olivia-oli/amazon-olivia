import axios from 'axios';

const instance = axios.create({
    base: "http://127.0.0.1:5001/clone-2a7a6/us-central1/api"
})

export default instance