import Slide from "./Slide";
import axios from "axios";
import { useState, useEffect } from "react";

function Slideshow(props) {
  const [allImg, setAllImg] = useState([]);
  const [activeImg, setActiveImg] = useState(0);
  const axiosRequest = () => {
    switch (props.show) {
      case "cats":
        axios({
          method: "get",
          url: `https://api.thecatapi.com/v1/images/search?limit=3`,
          // header: {
          //   api_key: process.env.REACT_APP_cat_api_key,
          // },
        }).then((res) => {
          setAllImg(res.data);
        });
        break;
      case "corgis":
        axios({
          method: "get",
          url: `https://dog.ceo/api/breed/corgi/cardigan/images/random/10`,
        }).then((res) => {
          setAllImg(res.data.message);
        });
        break;
    }
  };

  useEffect(() => {
    axiosRequest();
  }, []);

  const nextImg = () => {
    setActiveImg(activeImg + 1);
  };

  useEffect(() => {
    const timeout = setTimeout(nextImg, 4000);

    return () => {
      clearTimeout(timeout);
    };
  }, [activeImg]);

  return (
    <div className="slideContainer">
      {allImg.map((slide, i) => {
        return (
          <div>
            <Slide
              classes={"slide" + (i === activeImg ? " active" : "")}
              key={i}
              imgPath={props.show === "cats" ? slide.url : slide}
              delay="5000"
            />
          </div>
        );
      })}
    </div>
  );
}

export default Slideshow;
