import React, { useState } from "react";
import './Weather.css';
import axios from 'axios';

export default function Weather() {

    const [weatherData, setWeatherData] = useState({ ready: false });

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: Math.round(response.data.main.temp),
            city: response.data.name,
            wind: response.data.wind.speed,
            feelsLike: Math.round(response.data.main.feels_like),
            humidity: response.data.main.humidity,
            description: response.data.weather[0].main,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
            date: "Thursday 9:30"
        });

    }


    if (ready) {
        return (<div className="Weather">
            <div className="container">
                <div className="weather-border">
                    <h1 id='city'>{weatherData.city}</h1>
                    <div className="d-flex weather-temperature">
                        <img src={weatherData.iconUrl} id="icon" align="left" alt="" />
                        <h2 id="temp-display">{weatherData.temperature}°F</h2>

                    </div>
                    <ul>
                        <li id="date">{weatherData.date}</li>
                        <li id="description" className="text-capitalize">{weatherData.description}</li>
                    </ul>
                    <form>
                        <div className="row">
                            <div className="col-9">
                                <input type="text" id="city-search" placeholder="Search for a new city" autocomplete="off" className="form-control" />
                            </div>
                            <div className="col-3">
                                <input type="submit" className="btn btn-primary" id="search-button" value="search" />
                            </div>
                        </div>
                    </form>

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
                    <a href="https://github.com/shel-brya" target="_blank" rel="noreferrer">here</a>
                </small>
            </div>
        </div>
        )
    } else {
        const apiKey = "3c949ba49d38be2487ee278e0d2d4059";
        let city = "Bloomington";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
        axios.get(apiUrl).then(handleResponse)
        return ("Loading...")
    }


}