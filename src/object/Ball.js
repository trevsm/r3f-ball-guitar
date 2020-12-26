import React, { useEffect, useRef } from 'react'
import { useFrame } from 'react-three-fiber'
import { useSphere } from '@react-three/cannon'

const bpm = 86 // beats per min
const r = 3 // radius
const count = 3 // number of balls
const ballSize = 0.2 // size of each ball
const p0 = [0, 1, 0] // ball position

export const Ball = props => {
  const position = useRef([0, 0, 0])

  const [ref, api] = useSphere(() => ({
    mass: 0,
    position: [0, 0, 0],
    size: [props.ballSize, 32, 32],
  }))

  const pos = props.position

  const t = useRef(props.startPos)

  useFrame(() => {
    t.current += props.speed / 10000 + 0.0027

    position.current[0] =
      pos[0] +
      (props.radius * Math.cos(t.current)) /
        (1 + Math.pow(Math.sin(t.current), 2))

    position.current[1] =
      pos[1] +
      (props.radius * Math.sin(t.current) * Math.cos(t.current)) /
        (1 + Math.pow(Math.sin(t.current), 2))

    const v = [
      pos[0] +
        (props.radius * Math.cos(t.current)) /
          (1 + Math.pow(Math.sin(t.current), 2)),
      pos[1] +
        (props.radius * Math.sin(t.current) * Math.cos(t.current)) /
          (1 + Math.pow(Math.sin(t.current), 2)),
      0,
    ]

    api.position.set(v[0], v[1], v[2])
  })

  useEffect(() => {
    api.position.subscribe(p => (position.current = p))
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

export const Balls = () => {
  let ballArr = []
  for (let i = 0; i < count; i++) {
    ballArr.push(
      <Ball
        speed={bpm}
        startPos={(i * (2 * Math.PI)) / count}
        ballSize={ballSize}
        position={p0}
        radius={r}
      />
    )
  }
  return ballArr
}
