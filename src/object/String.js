import React, { useRef } from 'react'
import { useBox } from '@react-three/cannon'
import { useFrame } from 'react-three-fiber'

export const String = props => {
  const [ref, api] = useBox(() => ({
    mass: 1,
    position: [0, 1, 0],
    size: [2, 0.1, 0.1],
    type: 'Dynamic',
    onCollide: (e) => {
      console.log(e.target)
    },
    tolerance: 10,
  }))

  function resetMovement() {
    api.position.set(0, 1, 0)
    api.rotation.set(0, 0, 0)

    ref.current.rotation.x = 0
    ref.current.rotation.y = 0
    ref.current.rotation.z = 0

    ref.current.position.x = 0
    ref.current.position.y = 1
    ref.current.position.z = 0
  }

  useFrame(() => {
    resetMovement()
  })

  return (
    <mesh ref={ref}>
      <boxBufferGeometry attach="geometry" args={[2, 0.1, 0.1]} />
      <meshStandardMaterial attach="material" color={'peachpuff'} />
    </mesh>
  )
}
