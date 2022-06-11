function Slide(props) {
  return (
    <div
      className="slideContainer"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${props.imgPath})`,
        position: "absolute",
        display: "flex",
        width: "100vw",
        height: "100vh",
      }}
    ></div>
  );
}

export default Slide;
