import BlobImage from "./BlobImage";
import { motion } from "framer-motion";

export default function ImageSS({
  blobs,
  images,
  currentIndex,
}: {
  blobs: {
    transform: string;
    path: string;
    title: string;
    message: string;
  }[];
  images: string[];
  currentIndex: number;
}) {
  return (
    <div className='h-auto w-full relative'>
      <motion.div
        className='relative w-[min(600px,100vw)] aspect-square mx-auto bg-black'
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        key={currentIndex}>
        <BlobImage
          blobTransform={blobs[currentIndex].transform}
          blobPath={blobs[currentIndex].path}
          imageSrc={images[currentIndex]}
          imageAlt={`Slide ${currentIndex + 1}`}
          className='w-full h-full'
        />

        {/* Decorative elements with animations */}
        <motion.img
          src='/image/threeHeart.svg'
          alt='decoration'
          className='absolute bottom-20 -left-0 w-20 h-20'
          animate={{ rotate: [-15, -5, -15] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.img
          src='/image/threeHeart.svg'
          alt='decoration'
          className='absolute -top-0 -right-0 w-20 h-20'
          animate={{ rotate: [15, 5, 15] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Title and message overlay */}
        <div className='p-4 bg-gradient-to-t bg-white text-black'>
          <h2 className='text-xl font-bold'>{blobs[currentIndex].title}</h2>
          <p className='text-sm'>{blobs[currentIndex].message}</p>
        </div>
      </motion.div>
    </div>
  );
}
