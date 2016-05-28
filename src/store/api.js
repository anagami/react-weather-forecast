import 'whatwg-fetch'

const API_KEY = '68bd4d4730e45df22e96d8af424cf055';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/`;
const API_CONF = `appid=${API_KEY}&units=metric`



export default {
    currentLocation(pos) {
        let { latitude, longitude } = pos.coords

        return fetch(`${ROOT_URL}weather?${API_CONF}&lat=${latitude}&lon=${longitude}`).then(res => res.json())
    },
    forecast5(cityId) {
        return fetch(`${ROOT_URL}forecast?${API_CONF}&id=${cityId}`).then(res => res.json())
    }
}
