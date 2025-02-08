import { useEffect, useRef, useState } from "react";
import ImageSS from "./ImageSS";
import { motion } from "framer-motion";

const images = [
  "https://picsum.photos/500/500?random=1",
  "https://picsum.photos/500/500?random=2",
  "https://picsum.photos/500/500?random=3",
  "https://picsum.photos/500/500?random=4",
  "https://picsum.photos/500/500?random=5",
  "https://picsum.photos/500/500?random=6",
  "https://picsum.photos/500/500?random=7",
];

const blobs = [
  {
    transform: "translate(471.85600353062523 504.7754736627099)",
    path: "M323.1 -382.7C408.8 -313.1 461.4 -201.9 492.3 -79.1C523.1 43.7 532.2 178.1 474.5 270C416.7 361.8 292.1 411.1 172.1 441.1C52 471.1 -63.6 481.7 -159.2 444.1C-254.8 406.4 -330.4 320.4 -383.9 223.6C-437.4 126.8 -468.8 19.3 -458.4 -87.9C-447.9 -195.2 -395.6 -302.1 -312.2 -372.1C-228.8 -442 -114.4 -475 2.1 -477.6C118.7 -480.1 237.4 -452.3 323.1 -382.7",
    title: "title 1",
    message: "message 1",
  },
  {
    transform: "translate(491.73823267627984 547.495045261099)",
    path: "M345.9 -279C441.1 -156.5 506.2 -13 479.9 112.5C453.6 238 335.9 345.6 206.8 394.2C77.7 442.9 -62.8 432.6 -179.3 375.4C-295.8 318.1 -388.2 213.9 -435.8 78.6C-483.3 -56.8 -486 -223.2 -405.9 -342.3C-325.8 -461.5 -162.9 -533.2 -18.8 -518.3C125.4 -503.3 250.7 -401.6 345.9 -279",
    title: "title 2",
    message: "message 2",
  },
  {
    transform: "translate(504.85696594463764 510.91750821131507)",
    path: "M282.6 -375.6C381.5 -317.1 487.5 -255 515.9 -167.6C544.3 -80.2 495.2 32.3 452 141.2C408.8 250.1 371.6 355.2 297.3 411C223 466.9 111.5 473.4 -2.4 476.8C-116.4 480.2 -232.8 480.4 -310.4 425.6C-388.1 370.8 -427.1 261.1 -467.9 148.8C-508.8 36.6 -551.6 -78.3 -526.6 -176.1C-501.7 -273.8 -409 -354.5 -309.9 -413C-210.8 -471.5 -105.4 -507.8 -6.8 -498.4C91.8 -489.1 183.7 -434.2 282.6 -375.6",
    title: "title 3",
    message: "message 3",
  },
  {
    transform: "translate(497.90683897338533 555.9969691997308)",
    path: "M278.7 -457.3C351.9 -386.6 395.6 -293.6 435.8 -200.5C476 -107.4 512.7 -14.2 515.9 85.5C519.1 185.2 488.9 291.3 420 355.2C351.1 419.2 243.4 440.8 144.6 450.8C45.7 460.9 -44.3 459.3 -134.6 440.8C-224.9 422.3 -315.4 387 -370.3 321.8C-425.2 256.7 -444.6 161.7 -471 60.2C-497.3 -41.4 -530.6 -149.5 -499.2 -232C-467.7 -314.4 -371.4 -371.3 -277.5 -432.6C-183.5 -493.8 -91.7 -559.4 5.5 -568C102.7 -576.5 205.4 -528 278.7 -457.3",
    title: "title 4",
    message: "message 4",
  },
  {
    transform: "translate(474.67070565261906 459.52020284455097)",
    path: "M267.7 -469.8C335.3 -424.5 370.6 -329.5 424.8 -242.9C479 -156.3 552 -78.1 555.5 2C559 82.2 493 164.3 438.6 250.5C384.1 336.7 341.3 426.8 270.2 489.8C199 552.7 99.5 588.3 -0.6 589.3C-100.7 590.4 -201.3 556.7 -290.1 504C-378.9 451.2 -455.7 379.4 -486.7 292.2C-517.7 205 -502.9 102.5 -488.7 8.2C-474.6 -86.2 -461.2 -172.3 -426.6 -253.3C-392 -334.3 -336.2 -410.1 -261.6 -451.3C-187 -492.6 -93.5 -499.3 3.2 -504.9C100 -510.5 200 -515.1 267.7 -469.8",
    title: "title 5",
    message: "message 5",
  },
  {
    transform: "translate(468.16654317502883 521.5798631619427)",
    path: "M347.2 -278.3C447.2 -151.3 523.9 -7.1 503.6 128.2C483.2 263.5 365.9 389.9 227.1 447.4C88.4 504.8 -71.9 493.4 -189.5 424.8C-307.1 356.1 -382 230.2 -419.2 89.4C-456.3 -51.4 -455.7 -207.1 -379.5 -328.7C-303.4 -450.2 -151.7 -537.6 -14.1 -526.4C123.5 -515.2 247.1 -405.4 347.2 -278.3",
    title: "title 6",
    message: "message 6",
  },
  {
    transform: "translate(479.9364185922932 536.5915057170059)",
    path: "M323.2 -325.7C424.9 -221.6 517.4 -110.8 531 13.6C544.6 137.9 479.1 275.8 377.4 358.9C275.8 442.1 137.9 470.6 13.7 456.9C-110.5 443.2 -221 387.3 -315 304.1C-409 221 -486.5 110.5 -492.3 -5.8C-498.1 -122.1 -432.2 -244.2 -338.2 -348.4C-244.2 -452.5 -122.1 -538.8 -5.7 -533.1C110.8 -527.4 221.6 -429.9 323.2 -325.7",
    title: "title 7",
    message: "message 7",
  },
];

export default function SlideShow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  const startTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 10000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const goToNext = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setCurrentIndex((prev) => (prev + 1) % images.length);
    startTimer();
  };

  const goToPrevious = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    startTimer();
  };

  return (
    <div className='h-dvh snap-start flex items-center justify-center relative'>
      <ImageSS
        blobs={blobs}
        images={images}
        currentIndex={currentIndex}
      />

      {/* Progress bar */}
      <div className='absolute top-4 left-1/2 -translate-x-1/2 w-[min(600px,80vw)] h-1 bg-gray-200 rounded-full overflow-hidden'>
        <motion.div
          className='h-full bg-purple-500'
          initial={{ width: "0%" }}
          animate={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Enhanced Navigation Buttons */}
      <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4'>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={goToPrevious}
          className='bg-white/80 hover:bg-white shadow-lg p-3 rounded-full transition-all'
          aria-label='Previous slide'>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M15 19l-7-7 7-7'
            />
          </svg>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={goToNext}
          className='bg-white/80 hover:bg-white shadow-lg p-3 rounded-full transition-all'
          aria-label='Next slide'>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 5l7 7-7 7'
            />
          </svg>
        </motion.button>
      </div>
    </div>
  );
}
