import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const ProgressComponent = ({ progressVal }) => {
  const [progress, setProgress] = useState(progressVal);
  const [color, setColor] = useState("");
  const colorArray = ["#FF0000", "#63E13D"];

  const randomColor = () => {
    return colorArray[Math.floor(Math.random() * colorArray.length)];
  };

  const randomProgressValue = () => {
    const progressValue = Math.floor(Math.random() * 101);
    setProgress(progressValue);
    // const randomProgressColor = randomColor();
    // setColor(randomProgressColor);
    setColor(colorArray[1]);
    if (progressValue >= 50) {
      setColor(colorArray[0]);
    }
  };

  const onChange = (e) => {
    if (e.target.value) {
      if (e.target.value > 100) {
        setProgress(100);
      } else if (e.target.value < 0) {
        setProgress(0);
      } else {
        setProgress(e.target.value);
      }
      setColor(colorArray[1]);
      if (progress >= 50) {
        setColor(colorArray[0]);
      }
    } else {
      setProgress(0);
    }
  };

  return (
    <div className="app">
      <ProgressBar
        progress={progress}
        size={180}
        strokeWidth={4}
        circleOneStroke="#d9edfe"
        circleTwoStroke={color}
      />
      <button onClick={randomProgressValue}>Random</button>
    </div>
  );
};

export default ProgressComponent;
