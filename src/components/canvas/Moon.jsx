import * as THREE from "three";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { moon } from "../../assets";

function Moon() {
  const moontexture = useLoader(THREE.TextureLoader, moon);
  return (
    <mesh>
      <sphereGeometry args={[4, 64, 64]} />
      <meshStandardMaterial map={moontexture} />
    </mesh>
  );
}

function MoonCanvas() {
  return (
    <div className="moon-ctn">
      <Canvas
        shadows
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 70,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.8}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Moon />
        <ambientLight intensity={1.5} />
        <Preload all />
      </Canvas>
    </div>
  );
}

export default MoonCanvas;
