import React from "react";
import Song from "./Song";
import Podcast from "./Podcast";

export default function Playlist({ data , onDoubleClick }) {
    return (
        <div>
            <div>
                {data.map((item, index) => 
                    <div className="audioItemStyle" key={index} onDoubleClick={() => onDoubleClick(item)}>
                    { item.artist ? (
                        <Song key={index} {...item} />
                    ) :  item.episodeTitle ? (
                        <Podcast key={index} {...item} />
                    ) : null}
                    </div>
                )}
            </div>
        </div>
    );
};