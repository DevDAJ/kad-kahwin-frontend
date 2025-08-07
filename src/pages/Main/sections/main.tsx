import Text from '@/components/Text';
import { useDate } from '@/hooks/useDate';
import config from '../../../config';

const SpouseTextStyles: Parameters<typeof Text>[0] = {
  font: 'mea',
  size: '7xl',
  weight: 'normal',
  color: 'text-gray-700',
};
const DateTextStyles: Parameters<typeof Text>[0] = {
  font: 'noticia',
  size: '2xl',
  weight: 'normal',
  color: 'text-gray-700',
};

export default function Main({
  firstClick = false,
  clicked,
}: {
  firstClick?: boolean;
  clicked?: () => void;
}) {
  const { day, fullDate } = useDate(config.marriageDate, 'ms-MY');
  return (
    <div className="w-full mx-auto min-h-screen p-4 flex flex-col items-center justify-around">
      <div>
        <Text text="Walimatul Urus" font="noticia" size="2xl" weight="bold" color="text-black" />
      </div>
      <div className="flex flex-col items-center justify-center space-x-2 mt-4">
        <Text text={config.coupleNames.groom.short} {...SpouseTextStyles} />
        <Text text="&" {...SpouseTextStyles} />
        <Text text={config.coupleNames.bride.short} {...SpouseTextStyles} />
      </div>
      {firstClick && (
        <button
          onClick={clicked}
          className="btn btn-primary fixed bottom-[23vh] bg-slate-600 text-white px-4 py-2 rounded-lg cursor-pointer"
        >
          Buka
        </button>
      )}
      <div className="flex flex-col items-center justify-center space-x-2 mt-4">
        <Text text={day} {...DateTextStyles} />
        <Text text={fullDate} {...DateTextStyles} />
      </div>
    </div>
  );
}
