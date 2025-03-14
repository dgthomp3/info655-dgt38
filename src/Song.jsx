import React from "react";

export default function Song({ title = "Unknown Title", artist = "Unknown Artist", year = "Unknown Year" }) {
    return (
        <div className="songStyle">
            <h4>{ title }</h4>
            <p>{ artist } <span className="yearStyle">({ year })</span></p>
        </div>
    );
};