import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Three from "./components/Three";
import { Loader } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas id="main-canvas" shadows={true} camera={{ position: [0, 0, 5] }}>
        <Suspense fallback={null}>
          <Three />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}

export default App;
