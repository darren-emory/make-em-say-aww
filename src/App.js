import { useState } from "react";
import Slideshow from "./components/Slideshow";

function App() {
  const [playSlideshow, setPlaySlideshow] = useState("none");
  return (
    <div className="App">
      {playSlideshow !== "none" ? (
        <Slideshow show={playSlideshow} />
      ) : (
        <>
          <button onClick={() => setPlaySlideshow("cats")}>CATS</button>
          <button onClick={() => setPlaySlideshow("corgis")}>CORGIS</button>
        </>
      )}
    </div>
  );
}

export default App;
