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
        width: "50vw",
        height: "50vh",
      }}
    ></div>
  );
}

export default Slide;
