import React, { useState, useEffect } from 'react';
import { Heart, Music, Star, Gift, Sparkles, Cake } from 'lucide-react';
import { MusicPlayer } from './components/MusicPlayer';

function App() {
  const [started, setStarted] = useState(false);
  const [showBalloons, setShowBalloons] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showHearts, setShowHearts] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [clickedHearts, setClickedHearts] = useState<number[]>([]);

  const birthdayWishes = [
    "🎉 May your day be filled with happiness and your year with joy! 🎉",
    "🌟 Wishing you a birthday as beautiful as your heart! 🌟",
    "🎂 Another year of amazing memories and adventures ahead! 🎂",
    "💖 You deserve all the love and happiness in the world! 💖",
    "🎈 May all your dreams come true on this special day! 🎈",
    "✨ Shine bright like the star you are, Sweety! ✨",
    "🌸 Your smile lights up the world around you! 🌸",
    "🎊 Celebrating the wonderful person you are today! 🎊"
  ];

  const heartMessages = [
    "You light up every room you enter! ✨",
    "Your smile is absolutely contagious! 😊",
    "You make the world a better place! 🌍",
    "You're absolutely amazing, Sweety! 💫",
    "Your kindness knows no bounds! 🤗",
    "You're a true gem! 💎",
    "Your laughter is music to our ears! 🎵",
    "You bring joy wherever you go! 🌈",
    "You're simply wonderful! 🌟",
    "Your heart is pure gold! 💛",
    "You're a blessing to everyone! 🙏",
    "You're incredibly special! 💝"
  ];

  const handleStart = () => {
    setStarted(true);
    
    // Step-by-step magical reveal
    setTimeout(() => setShowBalloons(true), 500);
    setTimeout(() => setMusicPlaying(true), 1000);
    setTimeout(() => setShowTitle(true), 1500);
    setTimeout(() => setShowGallery(true), 3000);
    setTimeout(() => setShowHearts(true), 4000);
    setTimeout(() => setShowMessage(true), 5500);
  };

  const handleHeartClick = (index: number) => {
    if (!clickedHearts.includes(index)) {
      setClickedHearts([...clickedHearts, index]);
      
      // Create a beautiful alert with the message
      const message = heartMessages[index % heartMessages.length];
      
      // Custom styled alert
      const alertDiv = document.createElement('div');
      alertDiv.innerHTML = `
        <div style="
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: linear-gradient(135deg, #fce7f3, #e0e7ff);
          padding: 20px 30px;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          z-index: 10000;
          text-align: center;
          border: 2px solid #ec4899;
          max-width: 300px;
        ">
          <div style="font-size: 18px; color: #be185d; font-weight: bold; margin-bottom: 10px;">
            💖 Special Message 💖
          </div>
          <div style="font-size: 16px; color: #7c3aed;">
            ${message}
          </div>
          <button onclick="this.parentElement.parentElement.remove()" style="
            margin-top: 15px;
            background: #ec4899;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 10px;
            cursor: pointer;
            font-weight: bold;
          ">
            Thank You! 💕
          </button>
        </div>
      `;
      document.body.appendChild(alertDiv);
      
      // Auto remove after 5 seconds
      setTimeout(() => {
        if (alertDiv.parentElement) {
          alertDiv.remove();
        }
      }, 5000);
    }
  };

  const generateBalloons = () => {
    return Array.from({ length: 20 }, (_, i) => (
      <div
        key={i}
        className={`balloon balloon-${i % 5}`}
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${4 + Math.random() * 3}s`
        }}
      >
        {['🎈', '🎀', '🌟', '💝', '🎊'][i % 5]}
      </div>
    ));
  };

  const generateFloatingHearts = () => {
    return Array.from({ length: 15 }, (_, i) => (
      <div
        key={i}
        className={`floating-heart ${clickedHearts.includes(i) ? 'clicked' : ''}`}
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 4}s`,
          animationDuration: `${5 + Math.random() * 4}s`
        }}
        onClick={() => handleHeartClick(i)}
      >
        <Heart 
          className={`heart-icon ${clickedHearts.includes(i) ? 'text-red-500' : 'text-pink-300'}`}
          fill={clickedHearts.includes(i) ? 'currentColor' : 'none'}
        />
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300 overflow-hidden relative">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 text-6xl animate-pulse">💝</div>
        <div className="absolute top-32 right-20 text-4xl animate-bounce">🌟</div>
        <div className="absolute bottom-20 left-20 text-5xl animate-pulse">🎂</div>
        <div className="absolute bottom-32 right-10 text-4xl animate-bounce">🎉</div>
        <div className="absolute top-1/2 left-1/4 text-3xl animate-spin">✨</div>
        <div className="absolute top-1/3 right-1/3 text-4xl animate-pulse">🌸</div>
        <div className="absolute bottom-1/3 left-1/2 text-3xl animate-bounce">🎊</div>
      </div>

      {/* Sparkle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 50 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-pink-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Music Player */}
      <MusicPlayer isPlaying={musicPlaying} />

      {/* Flying Balloons */}
      {showBalloons && (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-10">
          {generateBalloons()}
        </div>
      )}

      {/* Floating Hearts */}
      {showHearts && (
        <div className="fixed top-0 left-0 w-full h-full z-20">
          {generateFloatingHearts()}
        </div>
      )}

      {/* Start Button */}
      {!started && (
        <div className="flex items-center justify-center min-h-screen">
          <button
            onClick={handleStart}
            className="group relative px-16 py-8 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-white text-3xl font-bold rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-110 animate-pulse"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center gap-4">
              <Sparkles className="animate-spin" size={32} />
              🎉 Start the Magic 🎉
              <Sparkles className="animate-spin" size={32} />
            </span>
          </button>
        </div>
      )}

      {/* Main Content */}
      {started && (
        <div className="relative z-30">
          {/* Birthday Title */}
          {showTitle && (
            <div className="text-center py-20 animate-fadeInUp">
              <div className="mb-8">
                <Cake className="mx-auto text-pink-600 animate-bounce" size={80} />
              </div>
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-glow mb-6">
                Happy Birthday
              </h1>
              <h2 className="text-5xl md:text-7xl font-bold text-purple-700 animate-bounce mb-4">
                Sweety! 🎉
              </h2>
              <div className="mt-8 text-2xl md:text-3xl text-pink-600 animate-pulse">
                ✨ Your special day is here! ✨
              </div>
              <div className="mt-4 text-lg md:text-xl text-purple-600">
                🌟 May this year bring you endless joy and beautiful moments! 🌟
              </div>
            </div>
          )}

          {/* Scrolling Birthday Wishes */}
          {showTitle && (
            <div className="relative overflow-hidden bg-gradient-to-r from-pink-400/20 to-purple-400/20 backdrop-blur-sm py-8 mb-12 border-y border-pink-300/30">
              <div className="marquee text-2xl md:text-3xl font-semibold text-purple-700">
                {birthdayWishes.join(' • ')} • {birthdayWishes.join(' • ')}
              </div>
            </div>
          )}

          {/* Photo Gallery */}
          {showGallery && (
            <div className="container mx-auto px-4 py-16 animate-fadeInUp">
              <h3 className="text-4xl md:text-5xl font-bold text-center text-purple-700 mb-16 animate-pulse">
                📸 Beautiful Memories 📸
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="relative group overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    >
                      <img
                        src="/s2.jpg"
                        alt={`Memory ${i}`}
                        className="aspect-square w-full h-full object-cover object-center rounded-3xl transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                ))}
              </div>
            </div>
          )}

          {/* Special Message */}
          {showMessage && (
            <div className="text-center py-20 animate-fadeInUp">
              <div className="bg-white/30 backdrop-blur-md rounded-3xl p-12 mx-4 max-w-3xl mx-auto border-2 border-pink-200/50 shadow-2xl">
                <div className="text-4xl md:text-5xl font-bold text-purple-700 mb-8 animate-pulse">
                  🌟 Special Message for Sweety 🌟
                </div>
                <p className="text-xl md:text-2xl text-pink-700 mb-8 leading-relaxed">
                  "May your life be filled with endless joy, love, and beautiful moments. 
                  You bring so much happiness to everyone around you! Your kindness, 
                  your smile, and your wonderful heart make this world a brighter place."
                </p>
                <div className="text-2xl md:text-3xl font-bold text-purple-600 animate-bounce mb-6">
                  With lots of love and best wishes! ❤️
                </div>
                <div className="text-lg md:text-xl text-pink-600 italic">
                  From your secret well-wisher 💕
                </div>
                <div className="mt-8 flex justify-center gap-4 text-3xl">
                  <span className="animate-bounce">🎂</span>
                  <span className="animate-pulse">🎉</span>
                  <span className="animate-bounce">🎈</span>
                  <span className="animate-pulse">💖</span>
                  <span className="animate-bounce">🌟</span>
                </div>
              </div>
            </div>
          )}

          {/* Interactive Instructions */}
          {showHearts && (
            <div className="text-center py-12">
              <div className="bg-pink-100/50 backdrop-blur-sm rounded-2xl p-6 mx-4 max-w-md mx-auto border border-pink-300/30">
                <p className="text-pink-700 font-semibold mb-2">
                  💡 Click on the floating hearts for special messages!
                </p>
                <p className="text-sm text-purple-600">
                  Each heart contains a beautiful wish just for you! 💕
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;