import React from "react";

export default function Next({ onClick }) {
    return (
        <button className="nextButton" onClick={onClick}>
            <img className="nextButtonImg" src="src/assets/fast-forward-button.svg" alt="Next" />
        </button>
    )
}