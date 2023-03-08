import React, { useState, forwardRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles.scss'
import './header.scss'
import { motion } from 'framer-motion';


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
        <motion.div
          className="hero-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="text-content">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
              transition={{ duration: 0.5 }}
            >
              Finding harmony in our designs
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { delay: 0.1 } }}
              transition={{ duration: 0.5 }}
            >
              Tired of lengthy and frustrating design processes? We have made quality
              our habit, it's not something we strive for - we live by
            </motion.p>
            <div className="cta">
              <Link to="/contact">
                <button className="btn primary">Send Inquiry</button>
              </Link>
              <button className="btn secondary" onClick={handleButtonClick}>
                Play Video
              </button>
            </div>
            {showVideo && (
              <Video
                ref={videoRef}
                className="header-video"
                width="600"
                height="300"
                controls
                muted
              >
                <source src="/assets/projectVideo.mp4" type="video/mp4" />
              </Video>
            )}
          </div>
        </motion.div>
      );
      
}

export default Header;
