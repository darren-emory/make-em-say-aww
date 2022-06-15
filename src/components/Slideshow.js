// unloaded: scrolling background image of cute images, title, icons to begin slideshow, option for playing music, credits/info
// need a loading state with icon
// loaded: sound icon muted/unmuted/ back button to go back to first state
//

import Slide from "./Slide";
import axios from "axios";
import { useState, useEffect } from "react";

function Slideshow(props) {
  const [allImg, setAllImg] = useState([]);
  const [activeImg, setActiveImg] = useState(0);
  const [imgsLoaded, setImgsLoaded] = useState(false);

  useEffect(() => {
    const axiosRequest = async () => {
      switch (props.show) {
        case "cats":
          await axios({
            method: "get",
            url: `https://api.thecatapi.com/v1/images/search?limit=10`,
            // header: {
            //   api_key: process.env.REACT_APP_cat_api_key,
            // },
          }).then((res) => {
            setAllImg(res.data);
            res.data.forEach((obj) => {
              const img = new Image();
              img.src = obj.url;
            });
            res.data.unshift({ url: "../img/placeholder.gif" });
          });
          break;
        case "corgis":
          await axios({
            method: "get",
            url: `https://dog.ceo/api/breed/corgi/cardigan/images/random/5`,
          }).then((res) => {
            setAllImg(res.data.message);
            res.data.message.forEach((obj) => {
              const img = new Image();
              img.src = obj;
            });
            res.data.message.unshift("../img/placeholder.gif");
          });
          break;
        case "golden-retriever":
          await axios({
            method: "get",
            url: `https://dog.ceo/api/breed/retriever/golden/images/random/5`,
          }).then((res) => {
            setAllImg(res.data.message);
            res.data.message.forEach((obj) => {
              const img = new Image();
              img.src = obj;
            });
            res.data.message.unshift("../img/placeholder.gif");
          });
          break;
        case "huskys":
          await axios({
            method: "get",
            url: `https://dog.ceo/api/breed/husky/images/random/5`,
          }).then((res) => {
            setAllImg(res.data.message);
            res.data.message.forEach((obj) => {
              const img = new Image();
              img.src = obj;
            });
            res.data.message.unshift("../img/placeholder.gif");
          });
          break;
      }
    };

    axiosRequest();
    setTimeout(() => {
      setImgsLoaded(true);
    }, 1000);
  }, []);

  const nextImg = () => {
    if (allImg.length - 1 === activeImg && activeImg !== 0) {
      setActiveImg(0);
    } else {
      setActiveImg(activeImg + 1);
    }
  };

  useEffect(() => {
    let timeoutDuration = 4000;
    if (activeImg === 0) timeoutDuration = 3000;

    const timeout = setTimeout(nextImg, timeoutDuration);

    return () => {
      clearTimeout(timeout);
    };
  }, [activeImg]);

  return (
    <div className="slideContainer">
      {imgsLoaded ? (
        <>
          {allImg.map((slide, i) => {
            return (
              <Slide
                classes={"slide" + (i === activeImg ? " active" : "")}
                key={i}
                imgPath={props.show === "cats" ? slide.url : slide}
              />
            );
          })}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Slideshow;
