import { InputAdornment, OutlinedInput } from "@mui/material";
import React from "react";

function Home() {
  return (
    <div className="py-4 mb-4">
      <div className="mb-4">
        <h3>Introduction</h3>
        Welcome to our web application “Health Predictor”. Health Predictor is a
        web application which uses machine learning to check a person’s health
        for various diseases in areas where immediate medical assistance is a
        scarcity.
      </div>
      <div className="mb-4">
        <h3>Motivation</h3>
        The Medical field has advanced a lot in the last few decades but this
        advancement doesn’t necessarily correlate to increase in the number of
        skilled medical professionals as a result there are many areas where
        immediate medical assistance is not available not to mention quality
        medical assistance as well. This scarcity of resources, a lot of times,
        leads to misinformation being garnered by the people and wrong
        treatments being deployed on the patient leading to worsening the
        condition of the patient or even death and sometimes people aren’t even
        aware that they might be infected which could lead to delayed checkups
        and diagnoses. These issues have been floating around for a long time
        without any proper method to counter them which is why we developed
        “Health Predictor” to enable people to get checkups easily and quickly.
      </div>
      <h3>Real world applications</h3>
      <div className="mb-4">
        Some of our app’s real-world applications are:
        <ul>
          <li>To provide people fast and easy checkups on the go.</li>
          <li>
            To bridge the gap between a resource constrained person and medical
            assistance.
          </li>
          <li>To help people seek the proper treatment at correct time.</li>
          <li>
            To increase the role of technology in medical field which in turn
            reduces the need to rely upon a medical professional every time.
          </li>
        </ul>
      </div>
      <div>
        <h3>Our Team</h3>
        <ul>
          <li>Nischay Nagar</li>
          <li>Rahul Roy</li>
          <li>Vinit Wagh</li>
          <li>Navneet Bhole</li>
          <li>Pravalikka kodi</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
