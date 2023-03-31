import logo from './logo.svg';
import './App.css';
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";

import React, {useState, Suspense} from "react";
import Navigation from './components/Navigation';
import Contact from './components/Contact';
import { Loader } from '@react-three/drei';

function App() {

  const [navStyle, setNavStyle] = useState('black');

  return (
    <>
      <Navigation navStyle={navStyle}/>
      <Contact/>
      
      <Canvas
        shadows
        frameloop="always"
        performance={{ debounce: 200 }}
        dpr={[1,2]}
      >
        <Suspense fallback={null}>
         <Experience navStyle={navStyle} setNavStyle={setNavStyle}/>
        </Suspense> 
      </Canvas>
      <Loader/>
    </>
  );
}

export default App;
