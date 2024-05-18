// stores/useBackgroundStore.ts
import { create } from "zustand";
import { useEffect, ChangeEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface BackgroundState {
  backgroundImage: string | null;
  backgroundOverlay: number;
  overlayColor: string;
  setBackgroundImage: (imageUrl: string | null) => void;
  setOverlayOpacity: (opacity: number) => void;
  setOverlayColor: (color: string) => void;
  handleFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const useBackgroundStore = create<BackgroundState>((set) => ({
  backgroundImage: null,
  backgroundOverlay: 100,
  overlayColor: "#000000",
  setBackgroundImage: (imageUrl: string | null) =>
    set({ backgroundImage: imageUrl }),
  setOverlayOpacity: (opacity: number) => set({ backgroundOverlay: opacity }),
  setOverlayColor: (color: string) => set({ overlayColor: color }),
  handleFileChange: (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      set({ backgroundImage: imageUrl });
    }
  },
}));

export const useBackgroundStoreWithRouter = () => {
  const {
    backgroundImage,
    backgroundOverlay,
    overlayColor,
    setBackgroundImage,
    setOverlayOpacity,
    setOverlayColor,
    handleFileChange,
  } = useBackgroundStore();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const imageParam = searchParams.get("backgroundImage");
    const overlayParam = searchParams.get("backgroundOverlay");
    const colorParam = searchParams.get("overlayColor");

    if (imageParam) {
      setBackgroundImage(imageParam);
    }
    if (overlayParam) {
      setOverlayOpacity(parseFloat(overlayParam));
    }
    if (colorParam) {
      setOverlayColor(colorParam);
    }
  }, [searchParams, setBackgroundImage, setOverlayOpacity, setOverlayColor]);

  const updateBackgroundImage = (imageUrl: string | null) => {
    setBackgroundImage(imageUrl);
    const currentPath = window.location.pathname;
    const searchParams = new URLSearchParams(window.location.search);
    if (imageUrl) {
      searchParams.set("backgroundImage", imageUrl);
    } else {
      searchParams.delete("backgroundImage");
    }
    router.replace(`${currentPath}?${searchParams.toString()}`);
  };

  const updateOverlayColor = (color: string) => {
    setOverlayColor(color);
    const currentPath = window.location.pathname;
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("overlayColor", color);
    router.replace(`${currentPath}?${searchParams.toString()}`);
  };

  const updateOverlayOpacity = (opacity: number) => {
    setOverlayOpacity(opacity);
    const currentPath = window.location.pathname;
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("backgroundOverlay", opacity.toString());
    router.replace(`${currentPath}?${searchParams.toString()}`);
  };

  const removeBackgroundImage = () => {
    setBackgroundImage(null);
    const currentPath = window.location.pathname;
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.delete("backgroundImage");
    router.replace(`${currentPath}?${searchParams.toString()}`);
  };

  return {
    backgroundImage,
    backgroundOverlay,
    overlayColor,
    updateBackgroundImage,
    updateOverlayColor,
    updateOverlayOpacity,
    handleFileChange,
    removeBackgroundImage,
  };
};

export default useBackgroundStore;
