import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button, buttonVariants } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/utils/MaxWidthWrapper";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <Header />
      <MaxWidthWrapper>
        <div className="flex justify-center my-10 gap-3">
          <Link href={"/explore"} className={buttonVariants()}>
            Explore Wallpapers
          </Link>
          <Link
            href={"/build"}
            className={buttonVariants({ variant: "outline" })}
          >
            Build wallpaper
          </Link>
        </div>
      </MaxWidthWrapper>
      <Footer />
    </main>
  );
}
