import React from 'react'

import { Canvas } from 'react-three-fiber'
import { OrbitControls } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Lighting } from './lighting/Lighting'
import { Terrain } from './terrain/Terrain'
import { Balls } from './object/Ball'
import {String} from './object/String'

import './App.css'

export default function App() {
  return (
    <Canvas
      shadowMap
      gl={{ alpha: false }}
      camera={{ position: [0, 0, 10], fov: 60 }}
    >
      <Lighting />
      <OrbitControls />
      <Physics>
        <Balls />
        <String />
      </Physics>
    </Canvas>
  )
}
