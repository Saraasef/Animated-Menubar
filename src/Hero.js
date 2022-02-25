import React from 'react';
import { useSpring, animated } from "react-spring";

function Hero() {

    const styles = useSpring({
        loop: true,
        to: [
          { opacity: 1, color: '#ffaaee' },
          { opacity: 0, color: 'rgb(14,26,19)' },
        ],
        from: { opacity: 0, color: 'red' },
      })
  
    return (
<div className="herotext">
<animated.div style={styles}>This is a Hero section</animated.div>
</div>
        );
    }
    
    export default Hero;