// stores/useDeviceStore.ts
import { create } from "zustand";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

type DeviceType = "laptop" | "tablet" | "phone";

interface DeviceState {
  device: DeviceType;
  setDevice: (device: DeviceType) => void;
}

const useDeviceStore = create<DeviceState>((set) => ({
  device: "laptop",
  setDevice: (device) => set({ device }),
}));

export const useDeviceStoreWithRouter = () => {
  const { device, setDevice } = useDeviceStore();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const deviceParam = searchParams.get("device") as DeviceType;
    if (deviceParam && ["laptop", "tablet", "phone"].includes(deviceParam)) {
      setDevice(deviceParam);
    }
  }, [searchParams, setDevice]);

  const updateDevice = (newDevice: DeviceType) => {
    setDevice(newDevice);
    const currentPath = window.location.pathname;
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("device", newDevice);
    router.replace(`${currentPath}?${searchParams.toString()}`);
  };

  return {
    device,
    updateDevice,
  };
};

export default useDeviceStore;
