import React, { useEffect, useRef, useState } from 'react';

const waveBars = 8;

const barStyles = (active: boolean, index: number) => ({
  display: 'inline-block',
  width: '6px',
  margin: '0 2px',
  height: active ? `${10 + (index % 5) * 3}px` : '16px',
  background: '#4f46e5',
  borderRadius: '3px',
  transition: 'height 0.3s',
  verticalAlign: 'bottom',
});

const AudioPause: React.FC = () => {
  const audioPlayerRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const onClick = () => {
    if (playing) {
      audioPlayerRef.current?.pause();
    } else {
      audioPlayerRef.current?.play();
    }
  };
  useEffect(() => {
    const unlockAudio = () => {
      audioPlayerRef.current?.play();
      window.removeEventListener('click', unlockAudio);
    };

    window.addEventListener('click', unlockAudio);
  }, []);
  return (
    <>
      <audio
        id="audio"
        loop
        autoPlay
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        ref={audioPlayerRef}
      >
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>
      <div
        className="fixed origin-center rotate-180 top-0 right-0 left-0 z-50 w-screen backdrop-opacity-100 py-2"
        onClick={onClick}
        title={playing ? 'Pause' : 'Play'}
      >
        {Array.from({ length: waveBars }).map((_, i) => (
          <span key={i} style={barStyles(playing, i)} />
        ))}
      </div>
    </>
  );
};

export default AudioPause;
