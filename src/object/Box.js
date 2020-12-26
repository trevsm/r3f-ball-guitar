import React, { useRef, useState } from 'react'
import { useFrame } from 'react-three-fiber'

export const Box = props => {
  const ref = useRef()
  const pos = props.position

  const t = useRef(props.startPos)

  useFrame(() => {
    t.current += props.speed / 10000 + 0.002

    ref.current.position.x = pos[0] + props.radius * Math.sin(t.current)

    ref.current.position.y =
      pos[1] + (props.invert ? -1 : 1) * props.radius * Math.cos(t.current)
  })

  return (
    <mesh ref={ref}>
      <sphereBufferGeometry attach="geometry" args={[0.2, 25, 25]} />
      <meshStandardMaterial attach="material" roughness={0} metalness={0.1} />
    </mesh>
  )
}
