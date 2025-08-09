import Countdown from '@/components/Countdown';
import Info from '@/components/Info';
import Text from '@/components/Text';
import TimeListItem from '@/components/TimeListItem';
import { CalendarDaysIcon, ClockIcon, MapPinIcon, ListBulletIcon } from '@heroicons/react/24/solid';
import { useDate } from '@/hooks/useDate';
import config from '../../../config';

const TextStyles: Parameters<typeof Text>[0] = {
  font: 'main',
  size: 'xl',
  weight: 'light',
  color: 'text-slate-500',
};
const ParentTextStyles: Parameters<typeof Text>[0] = {
  font: 'cursive',
  size: '4xl',
  weight: 'medium',
  color: 'text-black',
};
const SpouseTextStyles: Parameters<typeof Text>[0] = {
  font: 'cursive',
  size: '4xl',
  weight: 'medium',
  color: 'text-black',
};
const IconStyles: Parameters<
  React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, 'ref'>>
>[0] = {
  className: 'text-slate-500 text-xl',
  width: 58,
};

export default function Details() {
  return (
    <div className="w-full mx-auto flex flex-col items-center px-4 md:mb-20">
      <Text text={config.welcomeText} {...TextStyles} font="arabic" color="text-black" size="2xl" />
      <br />
      <Text text={config.parentsNames.father} {...ParentTextStyles} />
      <Text text="&" {...ParentTextStyles} />
      <Text text={config.parentsNames.mother} {...ParentTextStyles} />
      <br />
      <Text text={config.invitationText} {...TextStyles} />
      <br />
      <Text text={config.coupleNames.groom.full} {...SpouseTextStyles} />
      <Text text="&" {...SpouseTextStyles} />
      <Text text={config.coupleNames.bride.full} {...SpouseTextStyles} />
      <br />

      <Countdown targetDate={config.marriageDate} />
    </div>
  );
}
