"use client";
import React, { useEffect, useState } from "react";
import BuildHeader from "./BuildHeader";
import { useDeviceStoreWithRouter } from "@/store/useDeviceStore";
import OutputWallpaper from "./OutputWallpaper";

const MainWallpaperSection = () => {
  return (
    <div className="grid grid-rows-[auto,1fr] h-full p-4">
      <BuildHeader />
      <div className=" h-full flex items-center justify-center">
        <OutputWallpaper />
      </div>
    </div>
  );
};

export default MainWallpaperSection;
