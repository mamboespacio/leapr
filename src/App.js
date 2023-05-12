import logo from "./logo.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import React, { useEffect, useState, Suspense } from "react";
import Navigation from "./components/Navigation";
import Contact from "./components/Contact";
import { Loader } from "@react-three/drei";
import Cover from "./components/Cover";

function App() {
  const [navStyle, setNavStyle] = useState("black");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
  });

  return (
    <>
      <Navigation navStyle={navStyle} />
      {loading && <Cover />}
      <Contact />

      <Canvas
        shadows
        frameloop="always"
        performance={{ debounce: 200 }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <Experience navStyle={navStyle} setNavStyle={setNavStyle} />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}

export default App;
