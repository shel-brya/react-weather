import React, { useState } from "react";
import './Weather.css';
import axios from 'axios';
import FormattedDate from "./FormattedDate";
import WeatherSearch from "./WeatherSearch";
import WeatherTempConversion from "./WeatherTempConversion";

const apiKey = "3c949ba49d38be2487ee278e0d2d4059";

export default function Weather() {

    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState('');

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: Math.round(response.data.main.temp),
            city: response.data.name,
            wind: response.data.wind.speed,
            feelsLike: Math.round(response.data.main.feels_like),
            humidity: response.data.main.humidity,
            description: response.data.weather[0].main,
            iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            date: new Date(response.data.dt * 1000)
        });
    }


    function handleSubmit(event) {
        event.preventDefault();
        //Reset city state variable to an empty string for WeatherSearch's input
        setCity('');

        //Get city name value from event object
        const cityName = event.target[0].value;
        //Use city name value from event, as an url param for new request.
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`;
        axios.get(apiUrl).then(handleResponse)
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <div className="container">
                    <div className="weather-border">
                        <h1 id='city'>{weatherData.city}</h1>
                        <WeatherTempConversion temp={weatherData.temperature} />
                        <div className="d-flex">
                            <img src={weatherData.iconUrl} id="icon" align="left" alt="" />
                        </div>
                        {/* <div className="d-flex weather-temperature">
                            <img src={weatherData.iconUrl} id="icon" align="left" alt="" />
                            <h2 id="temp-display">{weatherData.temperature}°F</h2>
                        </div> */}
                        <ul>
                            <li id="date"><FormattedDate date={weatherData.date} /></li>
                            <li id="description" className="text-capitalize">{weatherData.description}</li>
                        </ul>
                        <WeatherSearch
                            city={city}
                            handleSubmit={handleSubmit}
                            handleCityChange={handleCityChange} />
                        <div className="percentage-table">
                            <div className="row even-space">
                                <div className="col-2">Humidity</div>
                                <div className="col-2">Feels like</div>
                                <div className="col-2">Wind</div>
                            </div>
                            <div className="row even-space">
                                <div className="col-2"><span id="humidity"></span>{weatherData.humidity}%</div>
                                <div className="col-2"><span id="feels-like"></span>{weatherData.feelsLike}°F</div>
                                <div className="col-2"><span id="wind"></span>{weatherData.wind} mph</div>
                            </div>

                        </div>

                    </div>
                    {/* <div class="weekly-border">
                    <div class="weekly-forecast" id="forecast"></div>
                </div> */}
                    <small class="repo">
                        Open Source Repository
                        <a href="https://github.com/shel-brya" target="_blank" rel="noopener noreferrer">here</a>
                    </small>
                </div>
            </div>
        )
    } else {

        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Bloomington&appid=${apiKey}&units=imperial`;
        axios.get(apiUrl).then(handleResponse)
        return ("Loading...")
    }
}