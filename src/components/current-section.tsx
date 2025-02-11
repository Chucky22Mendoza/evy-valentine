import { SectionsProps } from '../domain/sections';
import { ArrowRight } from 'lucide-react';

type Props = {
  section: SectionsProps;
  onClickArrow: () => void;
};

function CurrentSection({ section, onClickArrow }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-xl p-6">
      <div className="flex items-center justify-between mb-4">
        {section.icon}
        <h2 className="text-2xl font-semibold text-gray-800">
          {section.title}
        </h2>
        <ArrowRight
          className="w-6 h-6 text-pink-500 cursor-pointer hover:scale-110 transition-transform"
          onClick={onClickArrow}
        />
      </div>
      {section.children}
    </div>
  );
}

export default CurrentSection;
