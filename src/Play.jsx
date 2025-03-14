import React from "react";

export default function Play({ onClick }) {
    return (
        <button onClick={onClick} className="nextButton">
            <img src="src/assets/play.png" alt="Play" className="nextButtonImg" />
        </button>
    );
};