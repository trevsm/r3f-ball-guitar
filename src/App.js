import React from 'react'

import { Canvas } from 'react-three-fiber'

import { Lighting } from './lighting/Lighting'
import { Terrain } from './terrain/Terrain'
import { Box } from './object/Box.js'

import './App.css'

export default function App() {
  const bpm = 42
  const r = 2
  const p0 = [0, 3, 0]
  const p1 = [r * 2, 3, 0]

  return (
    <Canvas
      shadowMap
      gl={{ alpha: false }}
      camera={{ position: [0, 0, 10], fov: 60 }}
    >
      <Lighting />
      <Box speed={bpm} startPos={0} position={p0} radius={r} />
      <Box speed={bpm} startPos={(2 * Math.PI) / 3} position={p0} radius={r} />
      <Box
        speed={bpm}
        startPos={(2 * 2 * Math.PI) / 3}
        position={p0}
        radius={r}
      />
      <Box speed={bpm} startPos={0} position={p1} radius={r} invert />
      <Box
        speed={bpm}
        startPos={(2 * Math.PI) / 3}
        position={p1}
        radius={r}
        invert
      />
      <Box
        speed={bpm}
        startPos={(2 * 2 * Math.PI) / 3}
        position={p1}
        radius={r}
        invert
      />
      <Terrain />
    </Canvas>
  )
}
