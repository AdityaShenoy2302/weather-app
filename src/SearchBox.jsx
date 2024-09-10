import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import ErrorMessage from './ErrorMessage';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("")
    let [error, setError] = useState("")

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "d33d74edefed1c47222a729738047347"

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            // console.log(jsonResponse)

            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            }
            console.log(result)
            return result;
        }
        catch(err) {
            throw err;
        }
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(city);
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setCity("");
            setError("");
        }
        catch(err) {
            setError("No such place exisits");
        }
    }

    if (error) {
        return <ErrorMessage message={error} />;
    }

    return (
        <div className='searchbox'> 
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="Region Name" variant="outlined" 
                required 
                value={city} 
                onChange={handleChange}/>
                <br></br><br></br>
                <Button variant="contained" type="submit">Search</Button>
            </form>
        </div>
    )
}