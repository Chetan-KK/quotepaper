"use client";

// components/OutputWallpaper.js
import useBackgroundStore from "@/store/useBackgroundStore";
import { useDeviceStoreWithRouter } from "@/store/useDeviceStore";
import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";

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
      className={`${
        backgroundImage ? undefined : "border"
      } h-[80%] relative transition-all`}
      style={{
        aspectRatio: deviceAspect,
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Draggable>
        <div className="z-40 w-fit">ldksfj</div>
      </Draggable>
      <div
        className={`absolute top-0 left-0 z-10 pointer-events-none h-full w-full`}
        style={{
          backgroundColor: overlayColor,
          opacity: `${backgroundOverlay}%`,
        }}
      ></div>
    </div>
  );
};

export default OutputWallpaper;
