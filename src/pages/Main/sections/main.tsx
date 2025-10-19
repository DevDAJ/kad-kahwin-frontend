import Text from '@/components/Text';
import { useDate } from '@/hooks/useDate';
import config from '../../../config';

const SpouseTextStyles: Parameters<typeof Text>[0] = {
  font: 'cursive',
  size: '5xl',
  weight: 'normal',
  color: 'text-gray-700',
};
const DateTextStyles: Parameters<typeof Text>[0] = {
  font: 'main',
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
  const { day, fullDate, dayNum, month, time, year } = useDate(config.marriageDate, 'ms-MY');
  const venueSplits = config.eventDetails.venue.split(', ');
  return (
    <div className="w-full mx-auto mb-20 p-4 flex flex-col items-center justify-start pt-15 gap-3 bg-cover bg-no-repeat bg-center">
      <Text text="بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ" font="arabic" size="2xl" />
      <div>
        <Text text="Walimatul Urus" font="main" size="2xl" weight="medium" color="text-gray-700" />
      </div>
      <div className="flex flex-col items-center justify-center space-x-2 mt-6 gap-2">
        <Text text={config.coupleNames.groom.short} {...SpouseTextStyles} />
        <Text text="&" color="text-slate-500" size="4xl" font="main" />
        <Text text={config.coupleNames.bride.short} {...SpouseTextStyles} />
      </div>
      {firstClick && (
        <button
          onClick={clicked}
          className="btn btn-primary fixed bottom-5 bg-slate-600 text-white px-4 py-2 rounded-lg cursor-pointer"
        >
          Buka
        </button>
      )}
      <div className="flex flex-col items-center justify-center space-x-2 mt-4 gap-2 uppercase">
        <Text text={month} {...DateTextStyles} />
        <div className="flex w-screen uppercase">
          <div className="flex-1 justify-end flex px-2 items-center">
            <Text text={day} {...DateTextStyles} />
          </div>
          <div className="px-2 border-amber-800 border-r-2 border-l-2">
            <Text text={dayNum} {...DateTextStyles} size="7xl" />
          </div>
          <div className="flex-1 flex justify-start px-2 items-center">
            <Text text={time} {...DateTextStyles} />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <Text text={year} {...DateTextStyles} weight="bold" size="3xl" />
        </div>
      </div>

      <div>
        {venueSplits.map(
          (text, index) =>
            ![2, 4].includes(index) &&
            ([1, 3].includes(index) ? (
              <Text {...DateTextStyles} text={`${venueSplits[index]}, ${venueSplits[index + 1]}`} />
            ) : (
              <Text {...DateTextStyles} text={text} />
            )),
        )}
      </div>
    </div>
  );
}
