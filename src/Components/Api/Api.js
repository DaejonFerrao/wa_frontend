 export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a2a8163d54msh4e44b0cbbfbc945p16196fjsn9ac3abf0a6dc',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities"

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "bf2c20a1f20c38e0a1d11eb86ac5fe91";

export const AIR_POLLUTION_URL = "http://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid={API key}"