import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Three from "./components/Three";

function App() {
  return (
    <>
      <Canvas id="main-canvas" shadows={true} camera={{ position: [0, 0, 5] }}>
        <Suspense>
          <Three />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
