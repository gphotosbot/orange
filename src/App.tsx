import { useState } from 'react';

import { CelebrationStage } from './components/CelebrationStage';
import { ProposalStage } from './components/ProposalStage';

function App() {
  const [accepted, setAccepted] = useState(true);

  if (!accepted) {
    return <ProposalStage onAccept={() => setAccepted(true)} />;
  }

  return <CelebrationStage />;
}

export default App;