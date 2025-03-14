import React from "react";

export default function Pause({ onClick }) {
    return (
        <button onClick={onClick} className="nextButton">
            <img src="src/assets/pause.svg" alt="Pause" className="nextButtonImg" />
        </button>
    );
};