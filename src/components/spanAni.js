import React from "react";
import {useSpring, animated} from 'react-spring'

function Span () {
    const props = useSpring({ number: 1, from: { number: 0 } });
    return <animated.span>{props.number}</animated.span>
}

export default Span;
