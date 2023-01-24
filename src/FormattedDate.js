import React from "react";

export default function FormattedDate(props) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let hours = props.date.getHours();
    let mins = props.date.getMinutes();
    let day = days[props.date.getDay()];

    if (hours < 10) {
        hours = `0${hours}`;
    }

    if (mins < 10) {
        mins = `0${mins}`;
    }

    return (
        <div>{day} {hours}:{mins}</div>
    );
}