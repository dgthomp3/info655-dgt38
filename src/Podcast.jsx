import React from "react";

export default function Podcast({ season, episode, episodeTitle }) {
    return (
        <div className="podStyle">
            <h3>{ episodeTitle }</h3>
            <span className="epiStyle">{season != undefined ? `S${season}E${episode}` : `Episode ${episode}`}</span>
        </div>
    );
};