import React from 'react';

function VideoBackground({ children }) {
    return (
        <div className="video-background">
            <iframe
                title="YouTube Video"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/ZNqnw_1trjs"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
            ></iframe>
            {children}
        </div>
    );
}

export default VideoBackground;

