import React from "react";

export default function Prev({ onClick }) {
    return (
        <button className="nextButton" onClick={onClick}>
            <img className="nextButtonImg" src="src/assets/rewind-23.png" alt="Previous" />
        </button>
    );
};