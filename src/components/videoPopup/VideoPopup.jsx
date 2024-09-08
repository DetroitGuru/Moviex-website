import React from "react";
import ReactPlayer from "react-player/vidsrc";

import "./style.scss";

const VideoPopup = ({ show, setShow, tmdbId, settmdbId }) => {
    const hidePopup = () => {
        setShow(false);
        settmdbId(null);
    };
    return (
        <div className={`videoPopup ${show ? "visible" : ""}`}>
            <div className="opacityLayer" onClick={hidePopup}></div>
            <div className="videoPlayer">
                <span className="closeBtn" onClick={hidePopup}>
                    Close
                </span>
                <ReactPlayer
                    url={`https://vidsrc.cc/v2/embed/movie/${tmdbId}`}
                    controls
                    width="100%"
                    height="100%"
                    // playing={true}
                />
            </div>
        </div>
    );
};

export default VideoPopup;
