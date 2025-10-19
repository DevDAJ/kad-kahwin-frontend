import BottomBar from '@/components/BottomBar';
import MainSection from './sections/main';
import Details from './sections/details';
import AudioPause from '@/components/AudioPause';
import { useCallback, useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function Main() {
  const [isFirstClick, setIsFirstClick] = useState(true);

  const onClick = useCallback(() => {
    setIsFirstClick(false);
  }, []);

  useEffect(() => {
    if (!isFirstClick) {
      const distance = window.innerHeight - 120;
      const duration = 1500; // duration in ms — make this higher to scroll slower

      const startY = window.scrollY;
      const targetY = startY + distance;
      const startTime = performance.now();

      const animateScroll = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1); // clamp to 0–1

        const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

        const easedProgress = easeInOutQuad(progress);
        const currentY = startY + (targetY - startY) * easedProgress;

        window.scrollTo(0, currentY);

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    }
  }, [isFirstClick]);

  return (
    <>
      {isFirstClick && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full z-[100] bg-cover bg-main"
          initial={{ opacity: 100, y: 0 }}
          exit={{ opacity: 0, y: 10, animationDuration: 10 }}
        >
          <div className="w-full md:w-1/2 min-h-screen flex flex-col items-center justify-center mx-auto shadow-lg pb-40 bg-main">
            <MainSection key="firstMain" firstClick={isFirstClick} clicked={onClick} />
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
    </>
  );
}
