"use client";

// EditPanel.js
import React, { ChangeEvent, useRef } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import useBackgroundStore, {
  useBackgroundStoreWithRouter,
} from "@/store/useBackgroundStore";
import useTextQuoteStore, {
  useTextQuoteStoreWithRouter,
} from "@/store/useTextQuoteStore";
import { Slider } from "../ui/slider";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { Textarea } from "../ui/textarea";

const EditPanel: React.FC = () => {
  const {
    handleFileChange,
    updateOverlayOpacity,
    updateOverlayColor,
    backgroundOverlay,
    removeBackgroundImage,
    backgroundImage,
  } = useBackgroundStoreWithRouter();

  const { textQuote, updateTextQuote } = useTextQuoteStoreWithRouter();

  const handleOverlayChange = (value: number[]) => {
    updateOverlayOpacity(value[0]);
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateOverlayColor(event.target.value);
  };

  const handleQuoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateTextQuote(event.target.value);
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageRemove = () => {
    removeBackgroundImage();
    updateOverlayOpacity(100);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Clear the file input value
    }
  };

  function handleImageInput(event: ChangeEvent<HTMLInputElement>) {
    handleFileChange(event);
    updateOverlayOpacity(50);
  }

  return (
    <div className="">
      <div className="grid gap-5 my-7 mx-5">
        <h1 className="text-2xl font-bold">Background</h1>
        <div className="grid items-center gap-3">
          <Label htmlFor="picture">Background Image</Label>
          <div className="flex gap-1">
            <Input
              id="picture"
              type="file"
              ref={fileInputRef}
              onChange={handleImageInput}
            />
            <Button
              size={"icon"}
              onClick={handleImageRemove}
              disabled={!backgroundImage}
            >
              <X height={15} width={15} />
            </Button>
          </div>
        </div>

        <div
          className="grid items-center gap-3"
          style={{ opacity: backgroundImage ? "" : ".5" }}
        >
          <Label htmlFor="overlay">Background Overlay</Label>
          <Slider
            disabled={!backgroundImage}
            max={100}
            value={[backgroundOverlay]}
            step={1}
            onValueChange={handleOverlayChange}
          />
        </div>

        <div className="grid items-center gap-3">
          <Label htmlFor="overlayColor">Background Color</Label>
          <Input id="overlayColor" type="color" onChange={handleColorChange} />
        </div>
      </div>
      <Separator />
      <div className="grid gap-5 my-7 mx-5">
        <div className="grid items-center gap-3">
          <h1 className="text-2xl font-bold">Quote</h1>
          <Label htmlFor="quote">Text</Label>
          <Textarea
            id="quote"
            value={textQuote}
            onChange={handleQuoteChange}
            placeholder="Stay Focused"
          />
        </div>
      </div>
    </div>
  );
};

export default EditPanel;
