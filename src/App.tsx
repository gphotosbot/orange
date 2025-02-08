import React, { useState } from 'react';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PresentationControls } from '@react-three/drei';
import { Heart } from 'lucide-react';
import { Letter3D } from './components/Letter3D';
import { LoveMessage } from './components/LoveMessage';
import { ProposalStage } from './components/ProposalStage';
import { CelebrationStage } from './components/CelebrationStage';

function App() {
  const [accepted, setAccepted] = useState(true);

  if (!accepted) {
    return <ProposalStage onAccept={() => setAccepted(true)} />;
  }

  return <CelebrationStage />;
}

export default App;