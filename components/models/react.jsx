"use client";


import { useRef } from "react";
import {  useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function MeshComponent() {
    const fileUrl = "/scene.gltf";
    const mesh = useRef(null);
    const gltf = useLoader(GLTFLoader, fileUrl);
  //   useFrame(() => {
  //     mesh.current.rotation.y += 0.01;
  //  });

    return (
      <mesh >
        <primitive object={gltf.scene} />
      </mesh>
    );
  }