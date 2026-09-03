import React, { useRef, useMemo, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const Particles = () => {
  const pointsRef = useRef()
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  const particleCount = 1200

  const { positions, colors, sizes } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)

    const colorPalette = [
      new THREE.Color('#0b0ff0'), // indigo
      new THREE.Color('#a4fc00'), // lighter indigo
      new THREE.Color('#07186c'), // pale indigo
      new THREE.Color('#ffffff'), // white sparkle
    ]

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 14
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10

      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)]
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b

      sizes[i] = Math.random() * 0.04 + 0.01
    }

    return { positions, colors, sizes }
  }, [])

  useFrame((state, delta) => {
    if (!pointsRef.current) return

    // slow continuous drift
    pointsRef.current.rotation.y += delta * 0.015
    pointsRef.current.rotation.x += delta * 0.004

    // gentle mouse parallax
    const targetX = (state.mouse.x * 0.3)
    const targetY = (state.mouse.y * 0.3)
    pointsRef.current.rotation.y += (targetX - pointsRef.current.rotation.y) * 0.0
    pointsRef.current.position.x += (targetX - pointsRef.current.position.x) * 0.02
    pointsRef.current.position.y += (targetY - pointsRef.current.position.y) * 0.02
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach='attributes-position' count={particleCount} array={positions} itemSize={3} />
        <bufferAttribute attach='attributes-color' count={particleCount} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.088}
        vertexColors
        transparent
        opacity={0.75}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

const ParticleBackground = () => {
  return (
    <div className='absolute inset-0 -z-10'>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <Particles />
      </Canvas>
    </div>
  )
}

export default ParticleBackground