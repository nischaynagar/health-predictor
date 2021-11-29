import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";

const ProgressComponent = ({ progressVal, colorVal }) => {
  const [progress, setProgress] = useState(progressVal);
  const [color, setColor] = useState(colorVal);
  const colorArray = ["#FF0000", "#63E13D"];

  const randomColor = () => {
    return colorArray[Math.floor(Math.random() * colorArray.length)];
  };

  const randomProgressValue = () => {
    const progressValue = Math.floor(Math.random() * 101);
    setProgress(progressValue);
    setColor(colorArray[1]);
    if (progressValue >= 50) {
      setColor(colorArray[0]);
    }
  };

  useEffect(() => {
    setProgress(progressVal);
    setColor(colorVal);
  }, [progressVal, colorVal]);

  return (
    <div className="app">
      <ProgressBar
        progress={progress}
        size={180}
        strokeWidth={4}
        circleOneStroke="#d9edfe"
        circleTwoStroke={color}
      />
      {/* <button onClick={randomProgressValue}>Random</button> */}
    </div>
  );
};

export default ProgressComponent;
