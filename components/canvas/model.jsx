'use client';

import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/metaball.glb')
  return (
    <group {...props} dispose={null}>
      <PerspectiveCamera
        name="Camera"
        makeDefault={false}
        far={1000}
        near={0.1}
        fov={13.586}
        position={[12.354, -0.79, 31.54]}
        rotation={[0.044, 0.342, -0.015]}
      />
      <mesh
        name="Icosphere001"
        geometry={nodes.Icosphere001.geometry}
        material={materials['Material.003']}
        position={[1.127, 2.953, -2.775]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.927}
      />
      <mesh
        name="Icosphere002"
        geometry={nodes.Icosphere002.geometry}
        material={materials['Material.003']}
        position={[4.02, 1.542, -2.775]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={-1.472}
      />
      <mesh
        name="Icosphere003"
        geometry={nodes.Icosphere003.geometry}
        material={materials['Material.003']}
        position={[2.615, -1.709, -2.775]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={-1.151}
      />
      <mesh
        name="Icosphere004"
        geometry={nodes.Icosphere004.geometry}
        material={materials['Material.003']}
        position={[0.911, 0.207, -2.775]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={-0.832}
      />
      <mesh
        name="Icosphere006"
        geometry={nodes.Icosphere006.geometry}
        material={materials['Material.003']}
        position={[-1.374, 0.59, -2.775]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={-0.832}
      />
      <mesh
        name="Icosphere007"
        geometry={nodes.Icosphere007.geometry}
        material={materials['Material.003']}
        position={[-3.376, 0.023, -2.775]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={-0.717}
      />
      <mesh
        name="Icosphere008"
        geometry={nodes.Icosphere008.geometry}
        material={materials['Material.003']}
        position={[-4.966, 0.889, -2.775]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={-0.645}
      />
      <mesh
        name="Icosphere009"
        geometry={nodes.Icosphere009.geometry}
        material={materials['Material.003']}
        position={[-0.613, 2.192, -2.775]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={-0.36}
      />
      <mesh
        name="Icosphere010"
        geometry={nodes.Icosphere010.geometry}
        material={materials['Material.003']}
        position={[-3.689, 2.578, -2.775]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={-1.145}
      />
      <mesh
        name="Icosphere011"
        geometry={nodes.Icosphere011.geometry}
        material={materials['Material.003']}
        position={[-1.474, 3.87, -2.775]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={-0.617}
      />
      <mesh
        name="Mball010"
        geometry={nodes.Mball010.geometry}
        material={materials['Material.001']}
        position={[2.61, -1.734, -2.775]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.228}
      />
    </group>
  )
}

useGLTF.preload('/metaball.glb')