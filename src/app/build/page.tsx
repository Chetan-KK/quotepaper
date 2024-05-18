import EditPanel from "@/components/build/EditPanel";
import MainWallpaperSection from "@/components/build/MainWallpaperSection";
import Header from "@/components/Header";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import MaxWidthWrapper from "@/components/utils/MaxWidthWrapper";
import React from "react";

const page = () => {
  return (
    <div className="h-screen items-center">
      {/* <Header /> */}
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel minSize={20}>
          <MainWallpaperSection />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={25} maxSize={40} minSize={20}>
          <EditPanel />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default page;
