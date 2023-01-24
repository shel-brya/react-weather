import React, { useState } from "react";
import axios from "axios";
import WeeklyForecastDay from "./WeeklyForecastDay";

export default function WeeklyForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        return (
            <div className="weekly-border">
                <div className="weekly-forecast" id="forecast">
                    <div className="row">
                        <div className="col-2">
                            <WeeklyForecastDay forecast={forecast[0]} />
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${props.apiKey}&units=imperial`;

        axios.get(apiUrl).then(handleResponse);
    }

}