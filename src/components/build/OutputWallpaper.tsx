"use client";

// components/OutputWallpaper.js
import useBackgroundStore from "@/store/useBackgroundStore";
import { useDeviceStoreWithRouter } from "@/store/useDeviceStore";
import React, { useEffect, useState } from "react";

const OutputWallpaper = () => {
  const { backgroundImage, backgroundOverlay, overlayColor } =
    useBackgroundStore();
  const { device } = useDeviceStoreWithRouter();
  const [deviceAspect, setDeviceAspect] = useState("16/9");

  useEffect(() => {
    switch (device) {
      case "laptop":
        setDeviceAspect("16/9");
        break;
      case "tablet":
        setDeviceAspect("4/3");
        break;
      case "phone":
        setDeviceAspect("9/16");
        break;
      default:
        setDeviceAspect("16/9");
    }
  }, [device]);

  return (
    <div
      className={` h-[80%] relative`}
      style={{
        aspectRatio: deviceAspect,
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <span
        className={`absolute h-full w-full`}
        style={{
          backgroundColor: overlayColor,
          opacity: `${backgroundOverlay}%`,
        }}
      ></span>
    </div>
  );
};

export default OutputWallpaper;
