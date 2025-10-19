import Countdown from '@/components/Countdown';
import Info from '@/components/Info';
import Text from '@/components/Text';
import TimeListItem from '@/components/TimeListItem';
import { CalendarDaysIcon, ClockIcon, MapPinIcon, ListBulletIcon } from '@heroicons/react/24/solid';
import { useDate } from '@/hooks/useDate';
import config from '../../../config';
import Divider from '@/components/Divider';

const TextStyles: Parameters<typeof Text>[0] = {
  font: 'main',
  size: 'xl',
  weight: 'light',
  color: 'text-slate-500',
};
const ParentTextStyles: Parameters<typeof Text>[0] = {
  font: 'main',
  size: '2xl',
  weight: 'medium',
  color: 'text-black',
};
const SpouseTextStyles: Parameters<typeof Text>[0] = {
  font: 'cursive',
  size: '4xl',
  weight: 'medium',
  color: 'text-black',
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
      <br />
      <Text text="&" {...SpouseTextStyles} />
      <br />
      <Text text={config.coupleNames.bride.full} {...SpouseTextStyles} />
      <br />
      <Divider />
      <div className="w-full flex flex-col items-center justify-center my-10">
        <Text text="Doa Pengantin" {...TextStyles} font="cursive" size="4xl" color="text-black" />
        <br />
        <Text
          text="بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ"
          font="arabic"
          size="2xl"
          color="text-slate-500"
        />
        <Text text={config.doaPengantin} {...TextStyles} font="arabic" size="lg" />
      </div>
      <Divider isRotate />
      <br />
      <Text text="Atur Cara Majlis" {...SpouseTextStyles} font="cursive" />
      <div className="flex flex-col gap-2 py-2">
        {config.eventTentative.map(({ tentative, time }) => (
          <div className="flex flex-col">
            <Text text={tentative} size="xl" color="text-slate-500" />
            <Text text={time} size="xl" color="text-slate-800" />
          </div>
        ))}
      </div>
      <br />
      <Text text="Sila RSVP kehadiran anda sebelum 15 Disember 2025" {...TextStyles} />
      <br />
      <Countdown targetDate={config.marriageDate} />
    </div>
  );
}
