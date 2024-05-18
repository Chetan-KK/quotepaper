"use client";

// EditPanel.js
import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import useBackgroundStore from "@/store/useBackgroundStore";
import { Slider } from "../ui/slider";

const EditPanel: React.FC = () => {
  const { handleFileChange, setOverlayOpacity, setOverlayColor } =
    useBackgroundStore();

  const handleOverlayChange = (value: number[]) => {
    setOverlayOpacity(value[0]);
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOverlayColor(event.target.value);
  };

  return (
    <div className="m-5 grid gap-5">
      <div className="grid items-center gap-3">
        <Label htmlFor="picture">Background Image</Label>
        <Input id="picture" type="file" onChange={handleFileChange} />
      </div>

      <div className="grid items-center gap-3">
        <Label htmlFor="overlay">Background Overlay</Label>
        <Slider
          defaultValue={[33]} // Initial value
          max={100}
          step={1}
          onValueChange={handleOverlayChange}
        />
      </div>

      <div className="grid items-center gap-3">
        <Label htmlFor="overlayColor">Background Overlay Color</Label>
        <Input id="overlayColor" type="color" onChange={handleColorChange} />
      </div>
    </div>
  );
};

export default EditPanel;
