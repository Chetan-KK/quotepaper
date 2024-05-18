import React from "react";
import { LaptopMinimal, Smartphone, Tablet } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { useDeviceStoreWithRouter } from "@/store/useDeviceStore";

const BuildHeader = () => {
  const { device, updateDevice } = useDeviceStoreWithRouter();

  return (
    <div className="flex gap-3 items-center justify-center mt-5">
      <ToggleGroup type="single">
        <ToggleGroupItem
          onClick={() => updateDevice("laptop")}
          variant="outline"
          value="bold"
          data-state={device === "laptop" ? "on" : "off"}
          aria-label="Toggle bold"
        >
          <LaptopMinimal className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem
          onClick={() => updateDevice("tablet")}
          variant="outline"
          value="italic"
          data-state={device === "tablet" ? "on" : "off"}
          aria-label="Toggle italic"
        >
          <Tablet className="h-4 w-4" />{" "}
        </ToggleGroupItem>
        <ToggleGroupItem
          onClick={() => updateDevice("phone")}
          variant="outline"
          data-state={device === "phone" ? "on" : "off"}
          value="underline"
          aria-label="Toggle underline"
        >
          <Smartphone className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default BuildHeader;
