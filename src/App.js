import { useState, useRef } from "react";
import Slideshow from "./components/Slideshow";

function App() {
  const [playSlideshow, setPlaySlideshow] = useState("none");
  const [playAudio, setPlayAudio] = useState("Play Cute Music");
  const audioRef = useRef();

  const handlePlayMusic = () => {
    if (playAudio === "Play Cute Music") {
      audioRef.current.play();
      setPlayAudio("Stop Cute Music");
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setPlayAudio("Play Cute Music");
    }
  };

  return (
    <div className="App">
      <audio
        src="../audio/Monkeys_Spinning_Monkeys.ogg"
        ref={audioRef}
        volume="0.3"
      />
      {playSlideshow !== "none" ? (
        <>
          <button onClick={() => setPlaySlideshow("none")}>Back</button>
          <button onClick={handlePlayMusic}>{playAudio}</button>
          <Slideshow show={playSlideshow} />
        </>
      ) : (
        <>
          <button onClick={() => setPlaySlideshow("cats")}>CATS</button>
          <button onClick={() => setPlaySlideshow("corgis")}>CORGIS</button>
          <button onClick={() => setPlaySlideshow("golden-retriever")}>
            GOLDEN RETRIEVERS
          </button>
          <button onClick={() => setPlaySlideshow("huskys")}>HUSKYS</button>
          <button onClick={() => setPlaySlideshow("dachshund")}>
            WEINER DOGS
          </button>
          <button onClick={handlePlayMusic}>{playAudio}</button>
        </>
      )}
    </div>
  );
}

export default App;
