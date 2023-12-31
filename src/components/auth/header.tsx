import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export const Header = ({ label }: { label: string }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-y-4'">
      <h1 className={cn("text-3xl font-semibold", font.className)}>
        🔒 Authenication
      </h1>

      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
