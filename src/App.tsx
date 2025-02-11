import { useState, useEffect } from 'react';
import { Heart, Stars, Gift, Music, Camera, Book, Coffee, Sparkles, Play, Pause, Volume2 } from 'lucide-react';
import CurrentSection from './components/current-section';
import { cards, SectionsProps } from './domain/sections';
import Card from './components/card';
import Proposal from './components/proposal';

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [showProposal, setShowProposal] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio('/audio.mp3'));

  useEffect(() => {
    audio.addEventListener('ended', () => setIsPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setIsPlaying(false));
      audio.pause();
    };
  }, [audio]);

  useEffect(() => {
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying, audio]);

  const sections: SectionsProps[] = [
    {
      icon: <Heart className="w-12 h-12 text-red-500" />,
      title: "Mi Amor",
      children: (<Card {...cards[0]} />)
    },
    {
      icon: <Stars className="w-12 h-12 text-pink-500" />,
      title: "Nuestro Amor",
      children: (<Card {...cards[1]} />)
    },
    {
      icon: <Gift className="w-12 h-12 text-red-400" />,
      title: "Para Ti",
      children: (<Card {...cards[2]} />)
    },
    {
      icon: <Music className="w-12 h-12 text-pink-400" />,
      title: "Nuestra Canción",
      children: (
        <Card {...cards[3]}>
          <div className="flex items-center justify-center space-x-4 mt-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center space-x-2"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6" />
              ) : (
                <Play className="w-6 h-6" />
              )}
              <span>{isPlaying ? 'Pausar' : 'Reproducir'}</span>
            </button>
            <Volume2 className="w-6 h-6 text-pink-500" />
          </div>
          <p className="text-sm text-gray-600 text-center mt-2">
            Nuestra canción especial
          </p>
        </Card>
      )
    },
    {
      icon: <Camera className="w-12 h-12 text-red-500" />,
      title: "Momentos Juntos",
      children: (<Card {...cards[4]} />)
    },
    {
      icon: <Book className="w-12 h-12 text-pink-500" />,
      title: "Nuestra Historia",
      children: (<Card {...cards[5]} />)
    },
    {
      icon: <Coffee className="w-12 h-12 text-red-400" />,
      title: "Momentos Especiales",
      children: (<Card {...cards[6]} />)
    },
    {
      icon: <Sparkles className="w-12 h-12 text-pink-400" />,
      title: "Mi Propuesta",
      children: (
        <Card {...cards[7]}>
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-red-600 animate-pulse">
              ¿Quieres ser mi San Valentín?
            </h3>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setShowProposal(true)}
                className="px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                ¡Sí, acepto! 💝
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 justify-center mt-4">
            {Array(6).fill(0).map((_, i) => (
              <Heart
                key={i}
                className="w-8 h-8 text-red-500 animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </Card>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-pink-100 pb-8">
      <div className="max-w-md mx-auto p-6">
        <div className="text-center mb-8">
          <Heart className="w-16 h-16 text-red-500 mx-auto animate-bounce" />
          <h1 className="text-3xl font-bold text-red-600 mt-4">
            Feliz San Valentín
          </h1>
          <p className="text-pink-600 mt-2">Mi Amor</p>
        </div>

        <div className={`transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
          <CurrentSection
            section={sections[currentSection]}
            onClickArrow={() => {
              setIsVisible(false);
              setTimeout(() => {
                setCurrentSection((prev) => (prev + 1) % sections.length);
                setIsVisible(true);
              }, 500);
            }}
          />
        </div>

        <div className="flex justify-center mt-6 space-x-2 flex-wrap">
          {sections.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentSection === index ? 'bg-red-500' : 'bg-pink-200'} hover:bg-red-300`}
              onClick={() => {
                setIsVisible(false);
                setTimeout(() => {
                  setCurrentSection(index);
                  setIsVisible(true);
                }, 500);
              }}
            />
          ))}
        </div>
      </div>
      {showProposal && (<Proposal onClick={() => setShowProposal(false)} />)}
    </div>
  );
}

export default App;
