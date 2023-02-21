import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";

import React from "react";
import Navigation from './components/Navigation';

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <>
    <Navigation/>
    <Canvas
      shadows
      camera={{
        fov: 45,
        near: 0.01,
        far: 300,
        position: [ 4, 3, 20 ],
    }}>
      <Experience />
    </Canvas>
  </>
)
