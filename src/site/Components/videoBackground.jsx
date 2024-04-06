import React from 'react';

function VideoBackground({ children }) {
    return (
        <div className="video-background">
            <iframe
                title="YouTube Video"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/ZNqnw_1trjs"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
            {children}
        </div>
    );
}

export default VideoBackground;



