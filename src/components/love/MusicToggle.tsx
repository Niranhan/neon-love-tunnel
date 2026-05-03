import { useRef, useState } from "react";
import { Music2, VolumeX } from "lucide-react";

/**
 * Soft music toggle. Does NOT autoplay — user must click.
 * Drop a file at /public/music/love.mp3 to enable sound.
 */
const MusicToggle = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = async () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/music/love.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.4;
    }
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={playing ? "Pause music" : "Play music"}
      className="glass fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
      style={{ boxShadow: "var(--glow-soft)" }}
    >
      {playing ? <Music2 className="h-5 w-5 text-primary" /> : <VolumeX className="h-5 w-5 text-primary" />}
    </button>
  );
};

export default MusicToggle;
