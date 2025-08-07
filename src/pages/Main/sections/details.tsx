import Countdown from '@/components/Countdown';
import Info from '@/components/Info';
import Text from '@/components/Text';
import TimeListItem from '@/components/TimeListItem';
import { CalendarDaysIcon, ClockIcon, MapPinIcon, ListBulletIcon } from '@heroicons/react/24/solid';
import { useDate } from '@/hooks/useDate';
import config from '../../../config';

const TextStyles: Parameters<typeof Text>[0] = {
  font: 'garamond',
  size: '2xl',
  weight: 'medium',
  color: 'text-[#DAA520]',
};
const ParentTextStyles: Parameters<typeof Text>[0] = {
  font: 'garamond',
  size: '3xl',
  weight: 'medium',
  color: 'text-black',
};
const SpouseTextStyles: Parameters<typeof Text>[0] = {
  font: 'dancing',
  size: '4xl',
  weight: 'medium',
  color: 'text-black',
};
const IconStyles: Parameters<
  React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, 'ref'>>
>[0] = {
  className: 'text-[#DAA520] text-5xl',
  width: 64,
};

export default function Details() {
  const { day, fullDate } = useDate(config.marriageDate, 'ms-MY');
  return (
    <div className="w-full mx-auto min-h-screen flex flex-col items-center px-4">
      <img
        src="https://www.onlinekad.com/images/greeting-1.webp"
        alt="Greeting"
        className="w-[70%] md:w-1/2 h-auto object-cover rounded-lg mb-4"
      />
      <Text text={config.welcomeText} {...TextStyles} />
      <br />
      <Text text={config.parentsNames.father} {...ParentTextStyles} />
      <Text text="&" {...ParentTextStyles} />
      <Text text={config.parentsNames.mother} {...ParentTextStyles} />
      <br />
      <Text text={config.invitationText} {...TextStyles} />
      <br />
      <Text text={config.coupleNames.groom.full} {...SpouseTextStyles} />
      <Text text="&" font="dancing" {...SpouseTextStyles} />
      <Text text={config.coupleNames.bride.full} {...SpouseTextStyles} />
      <br />
      <Info icon={<CalendarDaysIcon {...IconStyles} />} text={`${day}, ${fullDate}`} />
      <Info icon={<ClockIcon {...IconStyles} />} text={config.eventDetails.time} />
      <Info icon={<MapPinIcon {...IconStyles} />} text={config.eventDetails.venue} />
      <Info icon={<ListBulletIcon {...IconStyles} />}>
        <ul>
          {config.eventTentative.map((item, index) => (
            <TimeListItem key={index} time={item.time} tentative={item.tentative} />
          ))}
        </ul>
      </Info>
      <Text text="Akan berlangsung dalam" font="noticia" size="3xl" weight="bold" />
      <br />

      <Countdown targetDate={config.marriageDate} />
    </div>
  );
}
