import Slide from "./Slide";
import axios from "axios";
import { useState, useEffect } from "react";

function Slideshow() {
  const [allImgs, setAllImgs] = useState([]);
  const fetchImgPath = () => {
    axios({
      method: "get",
      url: `https://api.thecatapi.com/v1/images/search?limit=3`,
      header: {
        api_key: process.env.REACT_APP_cat_api_key,
      },
    }).then((res) => {
      setAllImgs(res.data);
    });
  };

  useEffect(() => {
    fetchImgPath();
  }, []);

  // useEffect setInterval to go thru array and fade out one at a time
  return (
    <div>
      {allImgs.map((slide) => {
        return <Slide imgPath={slide.url} />;
      })}
      <Slide imgPath="" />
    </div>
  );
}

export default Slideshow;
