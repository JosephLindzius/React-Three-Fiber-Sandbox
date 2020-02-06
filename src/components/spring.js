import React from "react";
import {useSpring, animated} from 'react-spring'

function SpringHappy () {
    const props = useSpring({opacity: 1, from: { opacity: 0}});
    return (
            <div>
                <animated.h2 className="textAnime" style={props}>Happy</animated.h2>
            </div>
        )
}


export default SpringHappy;
