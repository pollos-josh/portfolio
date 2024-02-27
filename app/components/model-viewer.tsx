// model-viewer.tsx
"use client";

import * as THREE from 'three';
import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export const ModelViewer: React.FC = () => {
    return (
        <Canvas style={{ height: '100vh', width: '100%' }}>
            <BustModel />
        </Canvas>
    );
};

const BustModel: React.FC = () => {
    const modelRef = useRef<THREE.Object3D>();

    const gltf: GLTF = useLoader(GLTFLoader, '/bust.glb');


    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.01;
            modelRef.current.position.z = -10; // Move back along the z-axis
        }
    });

    // Collect materials from the GLTF scene graph
    const materials: THREE.Material[] = [];

    gltf.scene.traverse((node) => {
        if (node instanceof THREE.Mesh && node.material) {
            if (!materials.includes(node.material)) {
                materials.push(node.material);
            }
        }
    });

    // Apply collected materials to each mesh in the scene
    gltf.scene.traverse((node) => {
        if (node instanceof THREE.Mesh && node.material) {
            const materialIndex = materials.indexOf(node.material);
            if (materialIndex !== -1) {
                node.material = materials[materialIndex];
            }
        }
    });

    return (
    <>
        <primitive object={gltf.scene} ref={modelRef} />
        <ambientLight intensity={0.5} color="#212d2e"/>
        <pointLight position={[10, 5, 0]} intensity={1000} color="#dfc0cf"/>
    </>
    );
};
