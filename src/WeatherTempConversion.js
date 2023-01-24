import React, { useState } from "react";

export default function WeatherTempConversion(props) {
    const [unit, setUnit] = useState('imperial');

    function convertCelsius(event) {
        event.preventDefault();
        setUnit("metric");
    }

    function convertFahrenheit(event) {
        event.preventDefault();
        setUnit("imperial");
    }

    if (unit === 'imperial') {
        return (
            <div className="TempConversion">
                <div className="d-flex">
                    <h2 id="temp-display">{props.temp}</h2>
                    <span>°F | <a href="/" onClick={convertCelsius}>°C</a></span>
                </div>
            </div>
        )
    } else {
        let celsius = (props.temp * 9) / 5 + 32;
        return (
            <div className="TempConversion">
                <div className="d-flex">
                    <h2 id="temp-display">{celsius}</h2>
                    <span><a href="/" onClick={convertFahrenheit}>°F </a> | °C</span>
                </div>
            </div>
        );
    }

}