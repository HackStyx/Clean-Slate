import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStickyNote, faTasks, faCog } from '@fortawesome/free-solid-svg-icons';
import "./App.css";
import SearchBar from "./components/SearchBar";
import FullscreenToggle from "./components/FullscreenToggle";
import Notes from "./components/Notes";
import TodoList from "./components/TodoList";
import SettingsModal from "./components/SettingsModal";

function App() {
  const [backgroundGradient, setBackgroundGradient] = useState("");
  const [time, setTime] = useState(new Date());
  const [name, setName] = useState(
    localStorage.getItem("userName") || "Prince"
  );
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showNotes, setShowNotes] = useState(localStorage.getItem('isPinned') === 'true');
  const [showTodoList, setShowTodoList] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [quote, setQuote] = useState("");
  const [searchBarPosition, setSearchBarPosition] = useState(localStorage.getItem('searchBarPosition') || 'default');
  const searchBarRef = useRef(null);
  const [searchBarSize, setSearchBarSize] = useState(localStorage.getItem('searchBarSize') || 'medium');

  const generateRandomGradient = () => {
    const colors = [
      "#e63946", "#f1faee", "#a8dadc", "#457b9d", "#1d3557",
      "#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff",
    ];

    const getRandomColor = () =>
      colors[Math.floor(Math.random() * colors.length)];
    const color1 = getRandomColor();
    const color2 = getRandomColor();

    return `linear-gradient(to bottom right, ${color1}, ${color2})`;
  };

  useEffect(() => {
    const savedBackgroundOption = localStorage.getItem('backgroundOption') || 'default';
    const savedCustomGradient = localStorage.getItem('customGradient') || '#e63946,#f1faee';
    if (savedBackgroundOption === 'custom') {
      setBackgroundGradient(`linear-gradient(to bottom right, ${savedCustomGradient})`);
    } else {
      setBackgroundGradient(generateRandomGradient());
    }
  }, []);
  
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 9999);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const quotes = [
      "Time goes on. So whatever you're going to do, do it. Do it now. Don't wait.",
      "Your time is limited, so don't waste it living someone else's life.",
      "The only way to do great work is to love what you do.",
      "The future belongs to those who believe in the beauty of their dreams.",
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      "Believe you can and you're halfway there.",
      "Don’t watch the clock; do what it does. Keep going.",
      "Success is how high you bounce when you hit bottom.",
      "You miss 100% of the shots you don’t take.",
      "What you get by achieving your goals is not as important as what you become by achieving your goals.",
      "The harder you work for something, the greater you’ll feel when you achieve it.",
      "Dream bigger. Do bigger.",
      "Don’t stop when you’re tired. Stop when you’re done.",
      "Wake up with determination. Go to bed with satisfaction.",
      "Do something today that your future self will thank you for.",
      "Little things make big days.",
      "It’s going to be hard, but hard does not mean impossible.",
      "Don’t wait for opportunity. Create it.",
      "The key to success is to focus on goals, not obstacles.",
      "Dream it. Wish it. Do it.",
      "You don’t have to be great to start, but you have to start to be great.",
      "Don’t limit your challenges. Challenge your limits.",
      "Don’t let yesterday take up too much of today.",
      "It always seems impossible until it’s done.",
      "Act as if what you do makes a difference. It does.",
      "Success usually comes to those who are too busy to be looking for it.",
      "Don’t be afraid to give up the good to go for the great.",
      "I find that the harder I work, the more luck I seem to have.",
      "Success is the sum of small efforts, repeated day-in and day-out.",
      "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",
      "Whatever you hold in your mind on a consistent basis is exactly what you will experience in your life.",
      "Hardships often prepare ordinary people for an extraordinary destiny.",
      "The only limit to our realization of tomorrow is our doubts of today.",
      "The successful warrior is the average man, with laser-like focus.",
      "The future depends on what you do today.",
      "Fall seven times, stand up eight.",
      "Your limitation—it’s only your imagination.",
      "Push yourself, because no one else is going to do it for you.",
      "Great things never come from comfort zones.",
      "The harder you fall, the higher you bounce.",
      "Dream it. Believe it. Build it.",
      "Success is not in what you have, but who you are.",
      "If you want to achieve greatness stop asking for permission.",
      "Opportunities don't happen. You create them.",
      "Start where you are. Use what you have. Do what you can.",
      "Good things come to those who work for it.",
      "Believe in yourself and all that you are.",
      "Success is walking from failure to failure with no loss of enthusiasm.",
      "Success doesn't just find you. You have to go out and get it.",
    ];

    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  useEffect(() => {
    const isPinned = localStorage.getItem('isPinned') === 'true';
    if (isPinned) {
      setShowNotes(true);
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        searchBarRef.current.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const greeting = () => {
    const hour = time.getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  const updateName = (newName) => {
    setName(newName);
    localStorage.setItem("userName", newName);
  };

  return (
    <div
      className={`min-h-screen text-white p-6 ${
        isFullscreen ? "fullscreen" : ""
      }`}
      style={{ backgroundImage: backgroundGradient }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-40">
        {searchBarPosition === 'default' && (
          <div className="flex-grow max-w-md">
            <SearchBar ref={searchBarRef} size={searchBarSize} />
          </div>
        )}
        <div className="flex space-x-6 ml-auto text-shadow">
          <FullscreenToggle
            isFullscreen={isFullscreen}
            setIsFullscreen={setIsFullscreen}
          />
          <FontAwesomeIcon
            icon={faStickyNote}
            className="cursor-pointer text-2xl"
            onClick={() => setShowNotes(!showNotes)}
          />
          <FontAwesomeIcon
            icon={faTasks}
            className="cursor-pointer text-2xl"
            onClick={() => setShowTodoList(!showTodoList)}
          />
          <FontAwesomeIcon
            icon={faCog}
            className="cursor-pointer text-2xl"
            onClick={() => setShowSettings(!showSettings)}
          />
        </div>
      </div>

      {/* Main content */}
      <div className="text-center mt-40 text-shadow">
        <h1 className="greeting-line">
          <span className="greeting">{greeting()}</span>,{" "}
          <span className="name">{name}</span>
        </h1>
        {searchBarPosition === 'centered' && (
          <div className="flex justify-center mt-6 mb-6">
            <SearchBar ref={searchBarRef} size={searchBarSize} />
          </div>
        )}
        <div className="text-9xl mb-6">{formatTime(time)}</div>
        <p className="text-xl max-w-2xl mx-auto">"{quote}"</p>
      </div>

      {(showNotes || localStorage.getItem('isPinned') === 'true') && (
        <Notes 
          onClose={() => {
            if (localStorage.getItem('isPinned') !== 'true') {
              setShowNotes(false);
            }
          }} 
        />
      )}
      {showTodoList && (
        <TodoList onClose={() => setShowTodoList(false)} />
      )}
      {showSettings && (
        <SettingsModal
          setName={updateName}
          setBackgroundGradient={setBackgroundGradient}
          setSearchBarPosition={setSearchBarPosition}
          setSearchBarSize={setSearchBarSize}
          onClose={() => setShowSettings(false)}
        />
      )}
    </div>
  );
}

export default App;
