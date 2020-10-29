import requestor from 'helpers/http-requester/instance';
import { WEATHER_API_URL, WEATHER_API_KEY } from 'env'
import { ICoordination } from 'components/templates/Profile';

// const alalah = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}";

const getWeatherDetails = async (url: string) => {
    
    const result = await requestor.execute({
        url,
        method: "GET",
    });

    return result

};

const fetcherWeatherDetails = (url: string) => getWeatherDetails(url).then(res => res.response.data);


export {
    getWeatherDetails,
    fetcherWeatherDetails
}
