import React, { useRef } from 'react'
import { Sky } from '@react-three/drei'

export const Lighting = props => {
  return (
    <>
      {/* <Sky sunPosition={[10,10,10]}/> */}
      {/* <directionalLight position={[10,10,10]}/> */}
      <ambientLight intensity={1} />
    </>
  )
}
