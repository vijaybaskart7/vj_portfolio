import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Model from './model'

export default function Scene() {
   return (
      <>
      <Canvas
         camera={{ position: [0, 0, 15.25], fov: 9 }}
         style={{
            backgroundColor: '#D6E2DD',
            width: '30vw',
            height: '100vh',
         }}
      >
         <ambientLight intensity={1.25} />
         <ambientLight intensity={0.3} />
         <directionalLight intensity={0.4} />
         <Suspense fallback={null}>
            <Model position={[0.025, -0.9, 2]} />
         </Suspense>
         <OrbitControls />
      </Canvas>
      </>
   )
}