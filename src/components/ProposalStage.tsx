import { useState, useRef, useEffect } from "react";
import { Heart } from "lucide-react";

interface ProposalStageProps {
  onAccept: () => void;
}

export function ProposalStage({ onAccept }: ProposalStageProps) {
  const [noCount, setNoCount] = useState(0);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [showWhyMessage, setShowWhyMessage] = useState(false);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const messages = [
    "Are you sure? 🥺",
    "Really sure? 😢",
    "Think again! 💝",
    "Last chance! 💕",
    "Surely not? 🌹",
    "You're breaking my heart! 💔",
  ];

  const moveButton = () => {
    if (noButtonRef.current) {
      const x = Math.random() * (window.innerWidth - 100);
      const y = Math.random() * (window.innerHeight - 50);
      setNoButtonPosition({ x, y });
    }
  };

  const handleNoClick = () => {
    setNoCount(prev => prev + 1);
    setShowWhyMessage(true);
    moveButton();
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (noButtonRef.current && noCount >= messages.length - 1) {
        const buttonRect = noButtonRef.current.getBoundingClientRect();
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const threshold = 100;

        if (
          mouseX > buttonRect.left - threshold &&
          mouseX < buttonRect.right + threshold &&
          mouseY > buttonRect.top - threshold &&
          mouseY < buttonRect.bottom + threshold
        ) {
          moveButton();
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [noCount]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-rose-200 flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8">
        <h1 className="font-montez  text-4xl md:text-6xl text-rose-600 mb-4">
          Will you be my Valentine?
        </h1>
        <div className="flex justify-center gap-2 mb-4">
          <Heart className="text-rose-500 animate-pulse" size={32} />
          <Heart className="text-rose-600 animate-pulse" size={32} />
          <Heart className="text-rose-500 animate-pulse" size={32} />
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <button
          onClick={onAccept}
          className="px-8 py-4 font-libreItalic bg-rose-500 text-white rounded-full text-xl hover:bg-rose-600 transform hover:scale-110 transition-all shadow-lg"
        >
          Yes! 💖
        </button>

        <button
          ref={noButtonRef}
          onClick={handleNoClick}
          className="px-8 py-4 font-libreItalic bg-gray-400 text-white rounded-full text-xl  hover:bg-gray-500 transition-all shadow-lg"
          style={
            noCount > 0
              ? {
                  position: 'absolute',
                  left: noButtonPosition.x,
                  top: noButtonPosition.y,
                  transform: 'translate(-50%, -50%)',
                }
              : {}
          }
        >
          No 😢
        </button>
      </div>

      {showWhyMessage && (
        <div className="mt-8 text-center">
          <p className="text-2xl text-rose-700 font-serif animate-bounce">
            {messages[Math.min(noCount, messages.length - 1)]}
          </p>
        </div>
      )}
    </div>
  );
}