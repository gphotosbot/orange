import { Canvas } from "@react-three/fiber";
import Particles from "./Particles";
import Header from "./Header";
import LoveMessages from "./LoveMessages";
import SlideShow from "./SlideShow";

export function CelebrationStage() {
  return (
    <div className='h-screen snap-y snap-mandatory overflow-y-auto relative bg-pink-200'>
      {/* Background Canvas - Fixed Position */}
      <div className='fixed inset-0 -z-1'>
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <ambientLight intensity={0.1} />
          <Particles />
        </Canvas>
      </div>

      <Header />
      <LoveMessages />
      <SlideShow />
    </div>
  );
}
