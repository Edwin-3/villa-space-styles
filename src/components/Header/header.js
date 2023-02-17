import React, { useState, forwardRef, useEffect } from 'react';
import '../styles.scss'
import './header.scss'

const Video = forwardRef((props, ref) => (
    <video {...props} ref={ref} />
));

function Header() {
    const [showVideo, setShowVideo] = useState(false);
    const videoRef = React.useRef(null);

    const handleButtonClick = () => {
        setShowVideo(true);
        videoRef.current.play();
    };

    const handleClickOutside = (e) => {
        if (videoRef.current && !videoRef.current.contains(e.target)) {
          videoRef.current.pause()
          setShowVideo(false)
        }
      }

      useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
          document.removeEventListener('mousedown', handleClickOutside)
        }
      }, [])

    return (
        <div className="hero-section" onClick={handleClickOutside}>
            <div className='text-content'>
                <h1>Finding harmony in our designs</h1>
                <p>Tired of lengthy and frustrating design processes? We have made quality our habit, it's not something we strive for - we live by</p>
                <div className='cta'>
                    <button className='btn primary'>Send Inquiry</button>
                    <button className='btn secondary' onClick={handleButtonClick} >Play Video</button>
                </div>
                {showVideo && (
                    <Video ref={videoRef} className="header-video" width="600" height="300" controls muted>
                        <source src='/assets/projectVideo.mp4' type="video/mp4" />
                    </Video>
                )}
            </div>
        </div>
    );
}

export default Header;
