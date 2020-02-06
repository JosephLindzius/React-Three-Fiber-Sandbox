import React, {Suspense, useEffect, useRef, useState} from 'react';
import Button2 from "./components/button2";
import './App.scss';



import SpringHappy from "./components/spring";
import Stroke from "./components/SVGAni";
import Span from "./components/spanAni";
import ExampleProps from "./components/example";
import Click from "./components/cube";
import ColorMaker from "./components/colorSwitch";




import Garden from "./components/gardenWorld";
import World from "./components/cannonWorldX";

import Pool from './components/Pool/views/Poolview'
import PlantCanvas from "./components/PlantCanvas";




function App() {
  const name = 'Aduium';
    const [showPlane, set] = useState(true)
    // When React removes (unmounts) the upper plane after 5 sec, objects should drop ...
    // This may seem like magic, but as the plane unmounts it removes itself from cannon and that's that
    useEffect(() => void setTimeout(() => set(false), 5000), [])

  return (
    <div className="App">
        <div className="boxCanvas">
            <Pool/>
        </div>
        <div className="boxCanvas">
            <PlantCanvas/>
        </div>
        <div className="wrapper">
            <Span/>
            <ExampleProps/>
        </div>
        <h1 className="main-title"> hello {name}</h1>
        <div>
            <Button2/>
        </div>
        <div>
            <Stroke/>
        </div>

        <div className="clickDance">
            <Click/>
        </div>
        <div>
            <SpringHappy/>
        </div>
        <div>
            <SpringHappy/>
        </div>
        <Garden/>
        <World/>
      <footer className="footer">
          <div>
              <ColorMaker/>
          </div>
      </footer>
    </div>
  );
}

export default App;
