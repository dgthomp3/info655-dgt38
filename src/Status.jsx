import React from "react";

export default function Status({ title, status }) {
    return (
        <div className="status">
            {status} {title}
        </div>
    );
};