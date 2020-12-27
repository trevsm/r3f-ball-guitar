import React, { useRef, useState } from 'react'
import { useSpring, a } from 'react-spring/three'
import * as Tone from 'tone'
// import { MeshWobbleMaterial } from '@react-three/drei'
import { useBox } from '@react-three/cannon'

const key = 'cdefgab'
const oct = '1234'

const noteToWidth = note => {
  const a = note[0]
  const b = note[1]
  return a
}

export const Strings = props => {
  let stringArr = []
  let pos = props.stringCount / 2
  for (let i = 0; i < props.stringCount; i++) {
    stringArr.push(
      <String
        position={[0, pos - i * 2, 0]}
        size={[10, 0.2, 0.2]}
        note={key[i] + oct[3]}
      />
    )
  }
  return stringArr
}

export const String = props => {
  const [active, setActive] = useState(false)

  const [ref, api] = useBox(() => ({
    mass: 0,
    position: props.position,
    args: [10, 0.2, 0.2],
    type: 'Dynamic',
    onCollide: e => {
      console.log(noteToWidth(props.note))
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
      <boxBufferGeometry attach="geometry" args={props.size} />
      <a.meshStandardMaterial attach="material" color={aProps.color} />
    </a.mesh>
  )
}
