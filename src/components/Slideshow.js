// unloaded: scrolling background image of cute images, title, icons to begin slideshow, option for playing music, credits/info
// need loading icon

import Slide from "./Slide";
import axios from "axios";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
          });
          break;
        case "corgis":
          await axios({
            method: "get",
            url: `https://dog.ceo/api/breed/corgi/cardigan/images/random/10`,
          }).then((res) => {
            setAllImg(res.data.message);
            res.data.message.forEach((obj) => {
              const img = new Image();
              img.src = obj;
            });
          });
          break;
        case "dachshund":
          await axios({
            method: "get",
            url: `https://dog.ceo/api/breed/dachshund/images/random/10`,
          }).then((res) => {
            setAllImg(res.data.message);
            res.data.message.forEach((obj) => {
              const img = new Image();
              img.src = obj;
            });
          });
          break;
        case "golden-retriever":
          await axios({
            method: "get",
            url: `https://dog.ceo/api/breed/retriever/golden/images/random/10`,
          }).then((res) => {
            setAllImg(res.data.message);
            res.data.message.forEach((obj) => {
              const img = new Image();
              img.src = obj;
            });
          });
          break;
        case "huskys":
          await axios({
            method: "get",
            url: `https://dog.ceo/api/breed/husky/images/random/10`,
          }).then((res) => {
            setAllImg(res.data.message);
            res.data.message.forEach((obj) => {
              const img = new Image();
              img.src = obj;
            });
          });
          break;
      }
    };

    axiosRequest();
    setTimeout(() => {
      setImgsLoaded(true);
    }, 2500);
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
    const timeout = setTimeout(nextImg, timeoutDuration);

    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <div className="slideContainer">
      <AnimatePresence>
        {imgsLoaded ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {allImg.map((slide, i) => {
              return (
                <Slide
                  classes={"slide" + (i === activeImg ? " active" : "")}
                  key={i}
                  imgPath={props.show === "cats" ? slide.url : slide}
                />
              );
            })}
          </motion.div>
        ) : (
          <motion.div
            key="loader"
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <h2 style={{ color: "white", position: "absolute" }}>Loading...</h2>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Slideshow;
