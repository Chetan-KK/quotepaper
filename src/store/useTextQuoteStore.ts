// stores/useTextQuoteStore.ts
import { create } from "zustand";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

interface TextQuoteState {
  textQuote: string;
  setTextQuote: (quote: string) => void;
}

const useTextQuoteStore = create<TextQuoteState>((set) => ({
  textQuote: "Stay Focused",
  setTextQuote: (quote) => set({ textQuote: quote }),
}));

export const useTextQuoteStoreWithRouter = () => {
  const { textQuote, setTextQuote } = useTextQuoteStore();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const quoteParam = searchParams.get("quote");
    if (quoteParam) {
      setTextQuote(quoteParam);
    }
  }, [searchParams, setTextQuote]);

  const updateTextQuote = (quote: string) => {
    setTextQuote(quote);
    const currentPath = window.location.pathname;
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("quote", quote);
    router.replace(`${currentPath}?${searchParams.toString()}`);
  };

  return {
    textQuote,
    updateTextQuote,
  };
};

export default useTextQuoteStore;
