import React from "react";

export default function ProgressBar({ percent, text }) {
    return (
        <>
            <label for="file">{text} ({percent}): </label>
            <progress id="file" value={percent} max="100"></progress>
        </>
    );
}
