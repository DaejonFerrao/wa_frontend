import "./Weather.css";
import Sunny from "../../Assets/01d.png";

const Weather = ({ data }) => {

    if (!data || !data.city) {
        return <div>No weather data available</div>;
    }
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{data.city}</p>
                    {data.weather && data.weather[0] && (
                        <p className="desc">{data.weather[0].description}</p>
                    )}
                </div>
                {data.weather && data.weather[0] && (
                    <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
                )}
            </div>
            <div className="bottom">
                <p className="temp-1">{Math.round(data.main.temp)}°C</p>
                <div className="details">
                    <div className="para-row">
                        <span className="para-label top">Details</span>
                    </div>
                    <div className="para-row">
                        <span className="para-label">feels like</span>
                        <span className="para-value">{Math.round(data.main.feels_like)}</span>
                    </div>
                    <div className="para-row">
                        <span className="para-label">Wind</span>
                        <span className="para-value">{data.wind.speed} m/s</span>
                    </div>
                    <div className="para-row">
                        <span className="para-label">Humidity</span>
                        <span className="para-value">{data.main.humidity}</span>
                        <div className="para-row">
                            <span className="para-label">Pressure</span>
                            <span className="para-value">{data.main.pressure}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Weather;