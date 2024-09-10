import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import './WeatherApp.css';

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({});

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div className="weather-app-container">
            <h1 className="weather-app-title">Weather App</h1>
            
            {Object.keys(weatherInfo).length === 0 
                ? <SearchBox updateInfo={updateInfo}/>
                : <>
                    <SearchBox updateInfo={updateInfo}/>
                    <InfoBox info={weatherInfo}/>
                </>
            }
            
        </div>
    )
}
