import logo from './logo.svg';
import './App.css';
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";

import React, {useState} from "react";
import Navigation from './components/Navigation';
import Contact from './components/Contact';


function App() {
  const [navStyle, setNavStyle] = useState('black');
  return (
    <>
    <Navigation navStyle={navStyle}/>
    {/* <Contact/> */}
    <Canvas
      shadows
      camera={{
        fov: 45,
        near: 0.01,
        far: 300,
        position: [ 4, 3, 20 ],
      
    }}
    // frameloop="demand"
    >
      <Experience navStyle={navStyle} setNavStyle={setNavStyle}/>
    </Canvas>
    </>
  );
}

export default App;
