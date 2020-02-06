import React, {useEffect, useState} from "react";

const Button = () => {

 //used after load


 useEffect(()=>{
     const title = document.getElementById('title-button');
     title.innerText = "Happy";
    console.log("test")
 });

    return (
        <div className="container">
            <p id="title-button">No</p>
            <button>Click me</button>
        </div>
        )
    };
export default Button;


