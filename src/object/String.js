import React, { useRef, useState } from 'react'
import { useSpring, a } from 'react-spring/three'
import * as Tone from 'tone'
// import { MeshWobbleMaterial } from '@react-three/drei'
import { useBox } from '@react-three/cannon'

const key = 'cdefgab'
const oct = '1234'

const noteToWidth = note => {
  const a = key.indexOf(note[0])
  const b = oct.indexOf(note[1]) * key.length
  return (((a + b) * 20) / 27) - 20
}

export const Strings = props => {
  let stringArr = []
  let pos = 5 / 2
  let sS = 3
  for (let i = 0; i < 5; i++) {
    let a = Math.floor(Math.random() * 6)
    let b = Math.floor(Math.random() * 3)
    stringArr.push(
      <String position={[0, pos - i * sS, 0]} note={key[a] + oct[b]} />
    )
  }
  return stringArr
}

export const String = props => {
  const [active, setActive] = useState(false)

  const [ref, api] = useBox(() => ({
    mass: 0,
    position: props.position,
    args: [15, 0.2, 0.2],
    type: 'Dynamic',
    onCollide: e => {
      const synth = new Tone.Synth().toDestination()
      synth.triggerAttackRelease(props.note, '8n')
      setActive(true)
      setTimeout(() => {
        setActive(false)
      }, 200)
    },
  }))

  const aProps = useSpring({
    color: active ? 'red' : 'white',
  })

  return (
    <a.mesh ref={ref}>
      <boxBufferGeometry
        attach="geometry"
        args={[noteToWidth(props.note), 0.2, 0.2]}
      />
      <a.meshStandardMaterial attach="material" color={aProps.color} />
    </a.mesh>
  )
}
