import React from "react";

export default function Song({ title, artist, year }) {
    return (
        <div className="songStyle">
            <h4>{ title }</h4>
            <p>{ artist } <span className="yearStyle">({ year })</span></p>
        </div>
    );
};