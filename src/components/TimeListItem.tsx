import Text from '@/components/Text';

const TimeListItem = ({ time, tentative }: { time: string; tentative: string }) => {
  return (
    <li className="mb-2 flex flex-col items-start">
      <Text text={time} font="garamond" size="3xl" weight="bold" color="text-black" />
      <Text text={tentative} font="garamond" size="3xl" weight="normal" color="text-black" />
    </li>
  );
};

export default TimeListItem;
