import React from "react";

export default function Shuffle({ onClick }) {
    return (
        <button onClick={onClick} className="nextButton">
            <img src="src/assets/shuffle.svg" alt="Shuffle" className="nextButtonImg" />
        </button>
    );
};