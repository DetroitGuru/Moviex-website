import React from "react";
import "./style.scss";

const VideoPopup = ({ show, setShow, tmdbId }) => {
    const hidePopup = () => {
        setShow(false);
    };

    // Construct the VidSrc embed URL
    const vidSrcUrl = `https://vidsrc.cc/v2/embed/movie/${tmdbId}`;

    return (
        <div className={`videoPopup ${show ? "visible" : ""}`}>
            <div className="opacityLayer" onClick={hidePopup}></div>
            <div className="videoPlayer">
                <span className="closeBtn" onClick={hidePopup}>
                    Close
                </span>
                <iframe
                    src={vidSrcUrl}
                    frameBorder="0"
                    allowFullScreen
                    width="100%"
                    height="100%"
                    title="Video Player"
                    style={{ border: 'none' }}
                />
            </div>
        </div>
    );
};

export default VideoPopup;
