function Slide(props) {
  return (
    <div
      className={props.classes}
      style={{
        backgroundSize: "cover",
        backgroundColor: "black",
        backgroundImage: `url(${props.imgPath})`,
        backgroundPosition: "50% 50%",
        position: "absolute",
        display: "block",
        width: "100vw",
        height: "100vh",
      }}
    ></div>
  );
}

export default Slide;
