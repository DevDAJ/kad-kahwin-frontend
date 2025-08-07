import { useEffect, useState } from 'react';
import Text from './Text';

interface CountdownProps {
  targetDate: string | Date;
}

const Countdown = ({ targetDate }: CountdownProps) => {
  const calculateTimeLeft: () => Record<string, number> = () => {
    const difference = (new Date(targetDate) as any) - (new Date() as any);
    if (difference <= 0) return {};

    const timeLeft = {
      hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
      jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minit: Math.floor((difference / 1000 / 60) % 60),
      saat: Math.floor((difference / 1000) % 60),
    };

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const WrapperComponent = (props: any) => (
    <div className="flex gap-10 text-lg font-mono bg-[#DAA520] p-10 rounded-2xl text-white mx-10  ">
      {props.children}
    </div>
  );
  if (Object.keys(timeLeft).length === 0) {
    return <WrapperComponent>Time’s up!</WrapperComponent>;
  }

  return (
    <WrapperComponent>
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center justify-center">
          <span>{value}</span> <span>{unit}</span>
        </div>
      ))}
    </WrapperComponent>
  );
};

export default Countdown;
