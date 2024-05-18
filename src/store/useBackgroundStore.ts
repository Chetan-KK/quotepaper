// stores/useBackgroundStore.ts
import create from "zustand";

interface BackgroundState {
  backgroundImage: string | null;
  backgroundOverlay: number;
  overlayColor: string;
  setBackgroundImage: (imageUrl: string | null) => void;
  setOverlayColor: (color: string) => void;
  setOverlayOpacity: (opacity: number) => void;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const useBackgroundStore = create<BackgroundState>((set) => ({
  backgroundImage: null,
  backgroundOverlay: 0,
  overlayColor: "#000000", // Default overlay color is black
  setBackgroundImage: (imageUrl) => set({ backgroundImage: imageUrl }),
  setOverlayColor: (color) => set({ overlayColor: color }),
  setOverlayOpacity: (opacity) => set({ backgroundOverlay: opacity }),
  handleFileChange: (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      set({ backgroundImage: imageUrl });
    }
  },
}));

export default useBackgroundStore;
