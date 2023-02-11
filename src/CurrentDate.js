import React from "react";

export default function CurrentDate(props){
    //console.log(props.date);
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
    "Saturday"    
];

let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
    let day= days[props.date.getDay()];
    let month = months[props.date.getMonth()];
    let date = props.date.getDate();
    return (
        <div>
            {month} {date}, <br /> {day}
        </div>
    )
}