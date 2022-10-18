import React from "react";
import Content from "./Content";

function App() {
  const fname = "WebPal";
  const currDate = new Date().toLocaleDateString();
  const currTime = new Date().toLocaleTimeString();
  const img1 = "https://picsum.photos/200/300";
  const img2 = "https://picsum.photos/250/300";
  const img3 = "https://picsum.photos/300/300";

  const links = "https://www.youtube.com/";

  let curTime = new Date();
  curTime = curTime.getHours();
  let greet = "";
  const cssStyle = {};

  if (curTime >= 1 && curTime < 12) {
    greet = "Good Morning";
    cssStyle.color = "green";
  } else if (curTime >= 12 && curTime < 16) {
    greet = "Good Afternoon";
    cssStyle.color = "blue";
  } else if (curTime >= 16 && curTime < 20) {
    greet = "Good Evening";
    cssStyle.color = "red";
  } else {
    greet = "Good Night";
    cssStyle.color = "black";
  }

  const headings = {
    color: "#800000",
    textTransform: "capitalize",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "xxx-large",
    textShadow: "0px 6x 4px #f fe9c5",
    // backgroundColor: "chartreuse",
    // boxSizing: "border-box",
    // borderRadius: "20px",
    // padding: 0,
    // margin: 0,
    // borderColor: "black",
  };
  return (
    <>
      <div className="head">
        <h1 className="head_div" style={headings}>{`${fname}`}</h1>
        <div className="second_head">
          <div className="nav">
            <p className="nav1">Home</p>
            <p className="nav2">About us</p>
            <p className="nav3">Services</p>
            <p className="nav4">Legal</p>
            <p className="nav5">Blog</p>
            <p className="nav6">Contact us</p>
          </div>
          <div className="time">
            <p>Date : {currDate} </p>

            <p>Time : {currTime} </p>
          </div>
        </div>
      </div>
      <div className="greet">
        <h2>
          Hello Sir/Madam, <span style={cssStyle}>{greet}</span>
        </h2>
      </div>

      <div className="img_div">
        <img src={img1} alt="randomimage" />
        <img src={img2} alt="randomimage" />

        <a href={links} target="_blank">
          <img src={img3} alt="randomimage" />
        </a>
      </div>

      <Content />
    </>
  );
}

export default App;
