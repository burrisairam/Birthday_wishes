import React, { useEffect, useRef, useState } from 'react';
import { Music, Volume2, VolumeX, Play, Pause } from 'lucide-react';

interface MusicPlayerProps {
  isPlaying: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ isPlaying }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);
  // Replace this with your Telugu song file path or URL
  const songUrl = '/songs/Darling2.mp3';

  // Place your downloaded song file in the "public/songs" directory of your project.
  // For example, if your file is named "telugu-song.mp3", the path should be: public/songs/telugu-song.mp3
  // The songUrl variable above already points to "/songs/telugu-song.mp3"
  // No code needed here; just ensure the file exists at the correct path.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = isMuted;

    if (isPlaying && !isMuted) {
      audio.play();
      setIsPlaying2(true);
    } else {
      audio.pause();
      setIsPlaying2(false);
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [isPlaying, isMuted]);

  const toggleMute = () => {
    setIsMuted((m) => !m);
  };

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying2) {
      audio.pause();
      setIsPlaying2(false);
    } else {
      audio.play();
      setIsPlaying2(true);
    }
  };

  if (!isPlaying) return null;

  return (
    <div className="fixed top-4 right-4 z-50">
      <audio ref={audioRef} src={songUrl} loop />
      <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-4 py-3 shadow-lg border border-white/30">
        <Music className="text-pink-600 animate-pulse" size={20} />
        <span className="text-pink-600 text-sm font-medium hidden sm:block">
          Telugu Song ♪
        </span>
        <div className="flex gap-2">
          <button
            onClick={togglePlayPause}
            className="p-1 rounded-full hover:bg-white/20 transition-colors"
            title={isPlaying2 ? "Pause" : "Play"}
          >
            {isPlaying2 ? (
              <Pause className="text-pink-600" size={16} />
            ) : (
              <Play className="text-pink-600" size={16} />
            )}
          </button>
          <button
            onClick={toggleMute}
            className="p-1 rounded-full hover:bg-white/20 transition-colors"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <VolumeX className="text-pink-600" size={16} />
            ) : (
              <Volume2 className="text-pink-600" size={16} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
