import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import PlayerModel from './PlayerModel'; // We will create this component next

const GameScene = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <PlayerModel />
      </Suspense>
    </Canvas>
  );
};

export default GameScene;
