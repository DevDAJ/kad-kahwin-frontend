import Text from '@/components/Text';

const TimeListItem = ({ time, tentative }: { time: string; tentative: string }) => {
  return (
    <li className="mb-2 flex flex-col items-center justify-center">
      <Text text={time} font="main" size="xl" weight="bold" color="text-slate-500" />
      <Text text={tentative} font="main" size="xl" weight="normal" color="text-slate-500" />
    </li>
  );
};

export default TimeListItem;
