import React from "react";

export default function CurrentDate(props){
    let days = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
    "Sat"    
];

let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"
];
    let day= days[props.date.getDay()];
    let month = months[props.date.getMonth()];
    let date = props.date.getDate();
    return (
        <div>
            {month} {date}, {day}
        </div>
    )
}