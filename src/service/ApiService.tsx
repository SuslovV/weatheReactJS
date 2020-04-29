import axios from 'axios';

const API_URL = 'http://api.openweathermap.org/data/2.5/weather?';
const APP_ID = 'd8954c583ad1e899c3158485a5f7df54';

class ApiService {

    getByName(region: string) {
        const url = `${API_URL}q=${region}&appid=${APP_ID}&mode=json&units=metric`;
        console.log("адрес " + url);
        return axios.get(url);
    }
}

export default new ApiService();