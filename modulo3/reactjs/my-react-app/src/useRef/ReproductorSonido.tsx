import { useRef } from 'react';

const ReproductorSonido: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const reproducir = () => {
    audioRef.current?.play();
  };

  return (
    <div>
      <button onClick={reproducir}>🔊 Reproducir sonido</button>
      <audio
        ref={audioRef}
        src="https://www.soundjay.com/buttons/button-3.mp3"
      />
    </div>
  );
};

export default ReproductorSonido;
