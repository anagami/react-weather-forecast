import axios from 'axios';

const API_KEY = '68bd4d4730e45df22e96d8af424cf055';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/`;
const API_CONF = `appid=${API_KEY}&units=metric`;
const LS_KEY = 'openweather_favorites';


export default {
    now(data, type='q') {
        let reqUrl = `${ROOT_URL}weather?${API_CONF}`;

        if ( type == 'coords' ) {
            reqUrl += `&lat=${data.latitude}&lon=${data.longitude}`;
        } else {
            reqUrl += `&${type}=${data}`;
        }

        return axios.get(reqUrl);
    },
    forecast5(cityId) {
        return axios.get(`${ROOT_URL}forecast?${API_CONF}&id=${cityId}`);
    },
    getLocation() {
        let promise = new Promise(function(resolve, reject) {
                navigator.geolocation.getCurrentPosition(
                    pos => resolve(pos.coords),
                    () => reject()
                );
            });

        return promise;
    },
    getFavorites() {
        let allRecords = JSON.parse( localStorage.getItem(LS_KEY) ) || [],
            promise = new Promise(function(resolve) {
                resolve(allRecords);
            });

        return promise;
    },
    setFavorites(city) {
        let allRecords = JSON.parse( localStorage.getItem(LS_KEY) ) || [],
            promise = new Promise(function(resolve) {
                allRecords.push(city);
                localStorage.setItem(LS_KEY, JSON.stringify(allRecords));
                resolve(allRecords);
            });

        return promise;
    },
    deleteFavorites(city) {
        let allRecords = JSON.parse( localStorage.getItem(LS_KEY) ) || [],
            promise = new Promise(function(resolve) {
                if ( allRecords.length ) {
                    let index = allRecords.map(c => c.id).indexOf(city.id);

                    allRecords.splice(index, 1);
                    localStorage.setItem(LS_KEY, JSON.stringify(allRecords));
                }

                resolve(allRecords);
            });

        return promise;
    }
}
