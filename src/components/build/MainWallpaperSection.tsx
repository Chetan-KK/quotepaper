"use client";
import React, { useEffect, useState } from "react";
import BuildHeader from "./BuildHeader";
import { useDeviceStoreWithRouter } from "@/store/useDeviceStore";

const MainWallpaperSection = () => {
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
    <div className="grid grid-rows-[auto,1fr] h-full p-4">
      <BuildHeader />
      <div className=" h-full flex items-center justify-center">
        <div
          className={`border h-[80%]`}
          style={{ aspectRatio: deviceAspect }}
        ></div>
      </div>
    </div>
  );
};

export default MainWallpaperSection;
