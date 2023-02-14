import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience'
import React from 'react';

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
<Canvas
    shadows
    camera={ {
        fov: 45,
        near: 0.01,
        far: 1000,
        position: [ 4, 3, 20 ],
    } }
>
<Experience />
</Canvas>
)