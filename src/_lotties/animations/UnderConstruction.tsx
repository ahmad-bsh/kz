"use client"
import React from "react";
import Lottie from "react-lottie";
import underConstruction from "../jsons/under-construction.json";

function UnderConstruction() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: underConstruction,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions}  />;
}

export default UnderConstruction;
