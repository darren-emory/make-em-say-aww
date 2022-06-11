import Slide from "./Slide";
import axios from "axios";
import { useState, useEffect } from "react";
import { act } from "react-dom/test-utils";

function Slideshow() {
  const [allImg, setAllImg] = useState([]);
  const [activeImg, setActiveImg] = useState(0);
  const fetchImg = () => {
    axios({
      method: "get",
      url: `https://api.thecatapi.com/v1/images/search?limit=3`,
      header: {
        api_key: process.env.REACT_APP_cat_api_key,
      },
    }).then((res) => {
      setAllImg(res.data);
    });
  };

  const nextImg = () => {
    setActiveImg(activeImg + 1);
  };

  useEffect(() => {
    fetchImg();

    const timeout = setTimeout(nextImg, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, [activeImg]);

  // useEffect setInterval to go thru array and fade out one at a time
  return (
    <div className="slideContainer">
      {allImg.map((slide, i) => {
        return (
          <div>
            <Slide
              classes={"slide " + (i === activeImg ? "active" : "")}
              key={i}
              imgPath={slide.url}
              delay="5000"
            />
          </div>
        );
      })}
    </div>
  );
}

export default Slideshow;
