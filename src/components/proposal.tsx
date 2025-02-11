import { Heart } from 'lucide-react';

type Props = {
  onClick: () => void;
};

function Proposal({ onClick }: Props) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl shadow-2xl transform animate-bounce">
        <div className="text-center space-y-4">
          <Heart className="w-16 h-16 text-red-500 mx-auto" />
          <p className="text-2xl font-bold text-red-600">¡Te Amo!</p>
          <p className="text-lg text-gray-700">Gracias por ser mi San Valentín</p>
          <button
            onClick={onClick}
            className="px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
          >
            💖
          </button>
        </div>
      </div>
    </div>
  );
}

export default Proposal;
