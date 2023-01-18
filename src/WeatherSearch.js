import React from "react";


export default function WeatherSearch(props) {

    return (
        <div className="WeatherSearch">
            <div className="container">
                <div className="weather-border">
                    <form onSubmit={props.handleSubmit}>
                        <div className="row">
                            <div className="col-9">
                                <input
                                    type="text"
                                    id="city-search"
                                    placeholder="Search for a new city"
                                    autocomplete="off"
                                    className="form-control"
                                    onChange={props.handleCityChange}
                                    value={props.city}
                                />
                            </div>
                            <div className="col-3">
                                <input type="submit" className="btn btn-primary" id="search-button" value="search" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}