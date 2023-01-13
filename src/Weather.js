import React from "react";

export default function Weather() {
    return (
        <div className="Weather">
            <div className="container">
                <div className="weather-border">
                     <h1 id='city'>Bloomington</h1>
                    <div className="d-flex weather-temperature">
                        <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" id="icon"/>
                        <div id="temperature">37°F</div>
                    </div>
                    <ul>
                        <li id="date">9:30</li>
                        <li id="description">Cloudy</li>
                    </ul>
                    <form id="search-form" className="mb-3">
                        <div className="row">
                            <div className="col-9">
                                <input type="text" id="city-search" placeholder="Search for a new city" autocomplete="off" className="form-control"/>
                            </div>
                            <div className="col-3 p-0">
                                <input type="submit" className="btn btn-primary" id="search-button" value="search"/>
                            </div>
                        </div>
                    </form>

                    <div className="percentage-table">
                        <div className="row even-space">
                            <div class="col-2">Humidity</div>
                            <div class="col-2">Feels like</div>
                            <div class="col-2">Wind</div>
                        </div>
                        <div class="row even-space">
                            <div class="col-2"><span id="humidity"></span>15%</div>
                            <div class="col-2"><span id="feels-like"></span>28°F</div>
                            <div class="col-2"><span id="wind"></span>15mph</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}