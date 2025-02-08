import { useTypewriter } from "react-simple-typewriter";

const loveMessages = [
  "My dearest, you make every day feel like Valentine's Day...",
  "Your love is the most precious gift I could ever receive...",
  "With you, my heart found its home...",
];

function LoveMessages() {
  const [text] = useTypewriter({
    words: loveMessages,
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 50,
  });

  return (
    <div className='h-dvh snap-start bg-[##f28bb7]/30 flex flex-col items-center justify-center relative'>
      <img
        src='/image/designCloud.svg'
        alt='cloud decoration'
        className='absolute -top-4 scale-x-[-1] right-0 w-48 h-48 rotate-180'
      />
      <img
        src='/image/designCloud.svg'
        alt='cloud decoration'
        className='absolute -top-4 left-0 w-48 h-48 rotate-180'
      />
      <img
        src='/image/designCloud.svg'
        alt='cloud decoration'
        className='absolute -bottom-4 -right-6 w-40 h-40 rotate-270'
      />
      <img
        src='/image/rb-cloud.svg'
        alt='cloud decoration'
        className='absolute scale-x-[-1] -bottom-4 -left-6 w-40 h-40 rotate-270'
      />
      <nav className='flex absolute top-0 left-0 w-full items-center justify-between gap-6'>
        <img
          src='/image/hangingHeart.svg'
          alt='logo'
          className='w-32 h-32'
        />
        <img
          src='/image/hangingHeart.svg'
          alt='logo'
          className='w-32 h-32'
        />
      </nav>
      <div className='flex flex-col items-center justify-center'>
        <div className='relative flex max-w-2xl max-h-2xl items-center justify-center w-full h-full  -mb-16 z-10'>
          <img
            src='/image/image.png'
            className='h-3/4 w-3/4'
          />
          <img
            src='/image/threeHeart.svg'
            alt='cloud decoration'
            className='w-32 h-32 scale-x-[-1] absolute bottom-4 -left-4'
          />
          <img
            src='/image/threeHeart.svg'
            alt='cloud decoration'
            className='w-32 h-32  absolute bottom-7 -right-2'
          />
        </div>
        <div className="bg-[url('/image/cloudContainer.svg')] bg-cover bg-center w-dvw h-64 flex items-center justify-center">
          <p className='text-rose-700 font-libreItalic text-xl px-4 align-middle text-center'>
            {text}
          </p>
        </div>
      </div>

      <footer className='absolute bottom-8 text-center'>
        <p className='text-rose-700 font-serif'>
          Forever yours, with all my love ❤️
        </p>
      </footer>
    </div>
  );
}

export default LoveMessages;
