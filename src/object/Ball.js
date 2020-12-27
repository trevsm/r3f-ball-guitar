import React, { useEffect, useRef } from 'react'
import { useFrame } from 'react-three-fiber'
import { useSphere } from '@react-three/cannon'


export const Ball = props => {
  const [ref, api] = useSphere(() => ({
    mass: 0,
    position: props.position,
    size: [props.ballSize, 32, 32],
  }))

  const t = useRef(props.startPos)

  useFrame(() => {
    t.current -= props.speed / 41000

    const v = [
      ((props.radius / 2) * Math.cos(t.current)) /
        (1 + Math.pow(Math.sin(t.current), 2)),
      (props.radius * Math.sin(t.current) * Math.cos(t.current)) /
        (1 + Math.pow(Math.sin(t.current), 2)) -
        3.5,
      0,
    ]

    api.position.set(v[0], v[1], v[2])
  })

  return (
    <mesh ref={ref}>
      <sphereBufferGeometry attach="geometry" args={[props.ballSize, 32, 32]} />
      <meshStandardMaterial
        attach="material"
        roughness={0}
        metalness={0.1}
        color={'peachpuff'}
      />
    </mesh>
  )
}

export const Balls = props => {
  let ballArr = []
  for (let i = 0; i < props.count; i++) {
    ballArr.push(
      <Ball
        speed={props.bpm}
        startPos={(i * (2 * Math.PI)) / props.count}
        ballSize={props.ballSize}
        position={props.p0}
        radius={props.radius}
      />
    )
  }
  return ballArr
}
