import Slide from "./Slide";
import { useEffect } from "react";

function Slideshow() {
  // move axios to this component to get multi-line results and then map thru <Slide /> component and passing URL
  // useEffect setInterval to go thru array and fade out one at a time
  return (
    <div>
      <Slide />
      <Slide />
      <Slide />
    </div>
  );
}

export default Slideshow;
