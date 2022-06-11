import { useEffect, useState } from "react";

function Slide(props) {
  return (
    <div
      className={props.classes}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${props.imgPath})`,
        backgroundPosition: "50% 50%",
        display: "flex",
        width: "100vw",
        height: "100vh",
      }}
    ></div>
  );
}

export default Slide;
