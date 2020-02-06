import React, {useState} from "react";
import {useSpring, animated} from 'react-spring'


function Stroke () {
    const [state, toggle] = useState(true);
    const props = useSpring({ x: 200, y:0, from: { x: 0, y: state ? 1 : 0 } })

    return (
        <div onClick={() => toggle(!state)} className="star">
            <animated.svg viewBox="0 0 45 44" stroke-width="2" fill="white" stroke="rgb(45, 55, 71)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="156" stroke-dashoffset={props.x}>
                <polygon points="22.5 35.25 8.68704657 42.5118994 11.3250859 27.1309497 0.150171867 16.2381006 15.5935233 13.9940503 22.5 0 29.4064767 13.9940503 44.8498281 16.2381006 33.6749141 27.1309497 36.3129534 42.5118994"/>
            </animated.svg>
        </div>
    )
}

export default Stroke;
