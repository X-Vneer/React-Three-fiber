import React from "react";
import * as THREE from "three";
import {
  ContactShadows,
  Environment,
  Float,
  OrbitControls,
  softShadows,
} from "@react-three/drei";
import { LayerMaterial, Noise, Color, Gradient } from "lamina";

softShadows();
function Striplight(props) {
  return (
    <mesh {...props}>
      <boxGeometry />
      <meshBasicMaterial color="white" />
    </mesh>
  );
}
const Three = () => {
  return (
    <>
      <pointLight position={[10, 10, 5]} />
      <pointLight position={[-10, -10, -5]} />
      <OrbitControls
        autoRotate
        minPolarAngle={Math.PI / 2.8}
        maxPolarAngle={Math.PI / 1.8}
        minDistance={3}
        maxDistance={10}
      />
      <group position={[0, -1.5, 0]}>
        <Float
          position={[0, 2.15, 0]}
          speed={2}
          rotationIntensity={10}
          floatIntensity={2}
        >
          <mesh castShadow receiveShadow>
            <torusKnotGeometry args={[1, 0.25, 256, 24, 1, 3]} />
            <meshStandardMaterial
              color="white"
              roughness={0.1}
              metalness={0.925}
            />
          </mesh>
        </Float>
        <ContactShadows scale={10} blur={3} opacity={0.25} far={15} />
      </group>

      <ambientLight args={["#ffffff", 0.4]} />

      {/* enviroment */}

      <Environment background resolution={64}>
        <Striplight position={[10, 2, 0]} scale={[1, 3, 10]} />
        <Striplight position={[-10, 2, 0]} scale={[1, 3, 10]} />
        <mesh scale={100}>
          <sphereGeometry args={[1, 64, 64]} />
          <LayerMaterial side={THREE.BackSide}>
            <Color color="#0067c4" alpha={1} mode="normal" />
            <Gradient
              colorA="#b700da"
              colorB="#26d9fe"
              alpha={0.8}
              contrast={0.8}
            />
            <Noise mapping="local" type="cell" scale={0.5} mode="softlight" />
          </LayerMaterial>
        </mesh>
      </Environment>
    </>
  );
};

export default Three;
