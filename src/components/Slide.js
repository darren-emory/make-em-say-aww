import axios from "axios";
import { useState, useEffect } from "react";

function Slide() {
  const [imgPath, setImgPath] = useState("");
  const fetchImgPath = () => {
    axios({
      method: "get",
      url: `https://api.thecatapi.com/v1/images/search?size=full`,
      params: {
        // api_key: process.env.REACT_APP_cat_api_key,
      },
    }).then((res) => {
      setImgPath(res.data[0].url);
    });
  };

  useEffect(() => {
    fetchImgPath();
  }, []);

  return (
    <div
      className="slideContainer"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${imgPath})`,
        display: "flex",
        width: "50vw",
        height: "50vh",
      }}
    ></div>
  );
}

export default Slide;
