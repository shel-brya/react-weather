import React from "react";

export default function WeeklyForecastDay(props) {

    function forecastDate() {
        let date = new Date(props.forecast.dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
    }

    return (
        <div>
            <div className="weekly-forecast-date">{forecastDate()}</div>
            <img src={`http://openweathermap.org/img/wn/${props.forecast.weather[0].icon}@2x.png`} alt="weather icon" />
            <div className="weekly-forecast-temp">
                <span className="weekly-high">{Math.round(props.forecast.temp.max)}°</span>
                <span className="weekly-low">{Math.round(props.forecast.temp.min)}°</span>
            </div>
        </div>
    )
}