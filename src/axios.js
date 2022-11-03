import axios from "axios";

let base = axios.create({
    baseURL: "https://api.opensea.io/api/v1",
    headers: {
        'Content-Type': 'application/json',
    }
})

export default base;