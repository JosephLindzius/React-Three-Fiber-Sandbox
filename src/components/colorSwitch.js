import React from "react";
import {useTrail, animated} from "react-spring";


const fast = { tension: 1200, friction: 40 }
const slow = { mass: 10, tension: 200, friction: 50 }
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;
const url = ["./assets/images/sausage.png",
             "./assets/images/JJFLProfilePic.png",
             "./assets/images/logo512.png"];
function ColorMaker () {
    const [trail, set] = useTrail(10, () => ({xy: [0, 0], number: 4, config: i => (i === 0 ? fast : slow)}))
    return (
        <>


            <div className="hooks-main" onMouseMove={e => set({xy: [e.clientX, e.clientY]})}>
                {trail.map((props, index) => (
                    <animated.div key={index} style={{
                        transform: props.xy.interpolate(trans)}}>
                        <animated.img key={index} className="hooks-main profile" src={url[index]}/>
                    </animated.div>
                ))}
            </div>
        </>
    )
}

export default ColorMaker;

