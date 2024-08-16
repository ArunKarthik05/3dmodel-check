"use client"

import MeshComponent from "../models/react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function ReactIcon() {
    return (
      <div className='flex justify-center items-center h-[40vh] w-[40vw]'>
        <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1} 
          castShadow 
        />
          <spotLight 
          color={"red"} 
          position={[10, 20, 10]} 
          angle={0.3} 
          penumbra={1} 
          intensity={0.5} 
          castShadow 
        />
        {/* <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} /> */}
        <MeshComponent />
        </Canvas>
      </div>
    );
  }