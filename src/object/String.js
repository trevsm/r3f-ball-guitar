import React, { useRef } from 'react'
import { useBox } from '@react-three/cannon'
import { useFrame } from 'react-three-fiber'

export const String = props => {

  const [ref, api] = useBox(() => ({
    mass: 1,
    position: [0, 1, 0],
    args:[2, 0.1, 0.1],
    onCollide: () => {
      console.log('collision!')
    },
  }))

  useFrame(()=>{
      ref.current.position.x = 0
      ref.current.position.y = 2
  })

  return (
    <mesh ref={ref}>
      <boxBufferGeometry attach="geometry" args={[2, 0.1, 0.1]} />
      <meshStandardMaterial attach="material" color={'peachpuff'} />
    </mesh>
  )
}
