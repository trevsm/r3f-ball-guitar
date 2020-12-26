import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

export const Terrain = () => {
  const ref = useRef()
  useEffect(() => {}, [])
  return (
    <>
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.5, 0]}
        receiveShadow
      >
        <planeBufferGeometry attach="geometry" args={[100, 100]} />
        <shadowMaterial attach="material" transparent opacity={0.4} />
      </mesh>
    </>
  )
}
