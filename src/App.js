import React from 'react'

import { Canvas } from 'react-three-fiber'
import { OrbitControls } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Lighting } from './lighting/Lighting'
import { Balls } from './object/Ball'
import { Strings } from './object/String'

import './App.css'

export default function App() {
  const bpm = 10 // beats per min
  const count = 3 // number of balls
  const r = 20 // radius
  const ballSize = 1 // size of each ball
  const p0 = [0, 0, 0] // ball position

  return (
    <Canvas
      shadowMap
      gl={{ alpha: false }}
      camera={{ position: [0, 0, 50], fov: 60 }}
    >
      <Lighting />
      <OrbitControls />
      <Physics>
        <Balls bpm={bpm} count={count} ballSize={ballSize} p0={p0} radius={r} />
        <Strings stringCount={5} />
      </Physics>
    </Canvas>
  )
}
