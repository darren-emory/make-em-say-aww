import { useState } from "react";
import Slideshow from "./components/Slideshow";

function App() {
  const [playSlideshow, setPlaySlideshow] = useState(false);
  return (
    <div className="App">
      {playSlideshow ? (
        <Slideshow />
      ) : (
        <button onClick={() => setPlaySlideshow(true)}>Show Slideshow</button>
      )}
    </div>
  );
}

export default App;
