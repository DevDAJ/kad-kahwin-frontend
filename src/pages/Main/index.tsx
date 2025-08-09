import BottomBar from '@/components/BottomBar';
import MainSection from './sections/main';
import Details from './sections/details';
import AudioPause from '@/components/AudioPause';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Main() {
  const [isFirstClick, setIsFirstClick] = useState(true);
  return (
    <AnimatePresence>
      {isFirstClick && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full z-[100] bg-cover bg-main"
          initial={{ opacity: 100, y: 0 }}
          exit={{ opacity: 0, y: 10, animationDuration: 10 }}
        >
          <div className="w-full md:w-1/2 min-h-screen flex flex-col items-center justify-center mx-auto shadow-lg pb-40 bg-main">
            <MainSection
              key="firstMain"
              firstClick={isFirstClick}
              clicked={() => setIsFirstClick(false)}
            />
          </div>
        </motion.div>
      )}
      <img
        src="/bg.png"
        className="fixed top-0 left-0 w-full h-full -z-10 bg-cover [transform:translate3d(0,0,0)]"
      />
      {!isFirstClick && (
        <>
          <AudioPause />
          <div className="w-full md:w-1/2 min-h-screen flex flex-col items-center justify-center mx-auto shadow-lg pb-40 bg-main">
            <MainSection />
            <Details />
          </div>
          <BottomBar />
        </>
      )}
    </AnimatePresence>
  );
}
