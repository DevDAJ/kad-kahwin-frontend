import { FaWhatsapp } from 'react-icons/fa';
import { PhoneIcon } from '@heroicons/react/24/outline';
import Text from './Text';

const LabelText: Parameters<typeof Text>[0] = {
  font: 'main',
  size: '2xl',
  weight: 'normal',
  color: 'text-gray-700',
};

const PhoneInfo = ({ name, phoneNumber }: { name: string; phoneNumber: string }) => {
  const whatsapp = `https://api.whatsapp.com/send?phone=6${phoneNumber}`;

  return (
    <div className="flex justify-between">
      <div>
        <Text text={name} {...LabelText} />
      </div>
      <div className="flex flex-row gap-2">
        <a href={whatsapp}>
          <FaWhatsapp className="w-6 h-6 text-green-300" />
        </a>
        <a href={`tel:${phoneNumber}`}>
          <PhoneIcon className="w-5.5 h-5.5" />
        </a>
      </div>
    </div>
  );
};
export default PhoneInfo;
