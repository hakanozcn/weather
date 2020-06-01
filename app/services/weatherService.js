
import baseService from './baseService'

const apiKey='58ab852715739eebe02b380b4dfae213';
const weatherServiceUrl='http://api.openweathermap.org/data/2.5/';

export default class weatherService {
    
     getWeatherByCity(city) {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
           return baseService(`${weatherServiceUrl}weather?q=${city}&appid=${apiKey}`,requestOptions);
    }
    getWeatherByCityWeek(city) {
      var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
         return baseService(`${weatherServiceUrl}forecast?q=${city}&appid=${apiKey}`,requestOptions);
  }



}