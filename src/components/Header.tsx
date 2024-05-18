import { cn } from "@/lib/utils";
import { ModeToggle } from "./ui/mode-toggle";
import MaxWidthWrapper from "./utils/MaxWidthWrapper";

const Header = ({ className }: { className?: string }) => {
  return (
    <div className={cn("px-10 py-3 border-b", className)}>
      <MaxWidthWrapper className="flex justify-between items-center">
        <div className="text-2xl font-bold">QuotePaper</div>
        <div className="flex gap-2 items-center">
          contact
          <ModeToggle />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Header;
