"use client";

// components/OutputWallpaper.js
import useBackgroundStore from "@/store/useBackgroundStore";
import { useDeviceStoreWithRouter } from "@/store/useDeviceStore";
import { useTextQuoteStoreWithRouter } from "@/store/useTextQuoteStore";
import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import CustomDraggable from "./CustomDraggable";

const OutputWallpaper = () => {
  const { backgroundImage, backgroundOverlay, overlayColor } =
    useBackgroundStore();
  const { device } = useDeviceStoreWithRouter();
  const [deviceAspect, setDeviceAspect] = useState("16/9");

  const { textQuote, updateTextQuote } = useTextQuoteStoreWithRouter();

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
      className={`h-[80%] relative transition-all`}
      style={{ aspectRatio: deviceAspect }}
    >
      {/* text */}
      <CustomDraggable bounds="parent" childClassName="z-20 w-fit">
        <div>{textQuote}</div>
      </CustomDraggable>

      {/* background overlay */}
      <div
        className="absolute top-0 left-0 -z-10 pointer-events-none h-full w-full"
        style={{
          backgroundColor: overlayColor,
          opacity: `${backgroundOverlay}%`,
        }}
      ></div>

      {/* background image */}
      <div
        className={`absolute inset-0 -z-20 ${
          backgroundImage ? undefined : "border"
        }`}
        style={{
          backgroundImage: backgroundImage
            ? `url(${backgroundImage})`
            : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};

export default OutputWallpaper;
