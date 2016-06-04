// import 'whatwg-fetch'
// import Promise from 'promise-polyfill'

const API_KEY = '68bd4d4730e45df22e96d8af424cf055';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/`;
const API_CONF = `appid=${API_KEY}&units=metric`;
const LS_KEY = 'openweather_favorites';


export default {
    now(data, type) {
        switch(type) {
            case 'coords':
                return fetch(`${ROOT_URL}weather?${API_CONF}&lat=${data.latitude}&lon=${data.longitude}`).then(res => res.json());
            case 'id':
                return fetch(`${ROOT_URL}weather?${API_CONF}&id=${data}`).then(res => res.json());
            case 'name':
            default:
                return fetch(`${ROOT_URL}weather?${API_CONF}&q=${data}`).then(res => res.json());
        }
    },
    forecast5(cityId) {
        return fetch(`${ROOT_URL}forecast?${API_CONF}&id=${cityId}`).then(res => res.json());
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
                    let index = allRecords.findIndex(c => c.id == city.id);
                    allRecords.splice(index, 1);
                    localStorage.setItem(LS_KEY, JSON.stringify(allRecords));
                }

                resolve(allRecords);
            });

        return promise;
    }
}
