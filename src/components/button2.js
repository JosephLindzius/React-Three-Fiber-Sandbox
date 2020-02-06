import React, {useState} from "react";

const Button2 = () => {
    let [count, setCount] = useState(0);


    function increment () {
        setCount(count++);
        return count;
    }

    return (
        <div className="container">
            <p>{count}</p>
            <button onClick={increment}>Click me</button>
        </div>
        )
    };
export default Button2;
