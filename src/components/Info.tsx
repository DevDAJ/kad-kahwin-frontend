// Info is a component that has an icon then a text or a component below it
import { ReactNode } from 'react';
import Text from './Text';
interface InfoProps {
  icon: ReactNode;
  text?: string;
  children?: ReactNode;
}

const TextStyles: Parameters<typeof Text>[0] = {
  font: 'main',
  size: 'xl',
  weight: 'bold',
  color: 'text-slate-500',
};

export default function Info({ icon, text, children }: InfoProps) {
  return (
    <div className="flex flex-col items-center space-x-4 p-4 gap-4">
      {icon}
      <div className="flex-1">
        {text && <Text text={text} {...TextStyles} />}
        {children && <div className="mt-2 text-gray-600">{children}</div>}
      </div>
    </div>
  );
}
