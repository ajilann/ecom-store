import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-challenge-4b2b2.cloudfunctions.net/api' 
    //'http://localhost:5001/ecom-store-b501f/us-central1/api' 
     // the api ( cloud function) url
});

export default instance;