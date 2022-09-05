import axios from "axios";

export default class Api {

    constructor() {
        this.app = axios.create({
            baseURL: process.env.REACT_APP_API_URL + "/",
        })

    }

    config(token) {
        return {
            headers: { Authorization: `Bearer ${token}` }
        };
    }
}
