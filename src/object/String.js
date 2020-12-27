import React, { useEffect, useRef, useState } from 'react'
import { useSpring, a } from 'react-spring/three'
import * as Tone from 'tone'
// import { MeshWobbleMaterial } from '@react-three/drei'
import { useBox } from '@react-three/cannon'

const key = 'cdefgab'
const oct = '1234'
const song = [
  'g2',
  'e3',
  'd3',
  'c3',
  'g2',
  '',
  'g2',
  'g2',
  'g2',
  'e3',
  'd3',
  'c3',
  'a2',
  '',
  'a2',
  'f3',
  'e3',
  'd3',
  'b2',
  '',

]

const noteToWidth = note => {
  if (note.length) {
    const a = key.indexOf(note[0])
    const b = oct.indexOf(note[1]) * key.length
    return ((a + b) * 20) / 27 - 20
  } else return 0
}

export const Strings = props => {
  return (
    <>
      <String position={[0, 2.5, 0]} idx={0} />
      <String position={[0, -0.5, 0]} idx={1} />
      <String position={[0, -3.5, 0]} idx={2} />
      <String position={[0, -6.5, 0]} idx={3} />
      <String position={[0, -9.5, 0]} idx={4} />
    </>
  )
}

export const String = props => {
  const synth = useRef(new Tone.Synth().toDestination())
  const idx = useRef(props.idx)

  const [active, setActive] = useState(false)
  const [width, setWidth] = useState(noteToWidth(song[idx.current]))

  const toggleActive = () => {
    setActive(true)
    setTimeout(() => {
      setActive(false)
      increaseIdx()
    }, 200)
  }

  const increaseIdx = () => {
    if (idx.current + 5 < song.length) {
      idx.current += 5
    } else {
      idx.current = props.idx
    }
    setTimeout(() => {
      setWidth(noteToWidth(song[idx.current]))
    }, 500)
  }

  const playNote = () => {
    if (song[idx.current].length && Tone.context.state === 'running')
      synth.current.triggerAttackRelease(song[idx.current], '8n')
  }

  const [ref, api] = useBox(() => ({
    mass: 0,
    position: props.position,
    args: [15, 0.2, 0.2],
    type: 'Dynamic',
    onCollide: e => {
      playNote()
      toggleActive()
    },
  }))

  const aProps = useSpring({
    color: active ? 'red' : 'white',
  })

  return (
    <a.mesh ref={ref}>
      <boxBufferGeometry attach="geometry" args={[width, 0.2, 0.2]} />
      <a.meshStandardMaterial attach="material" color={aProps.color} />
    </a.mesh>
  )
}
