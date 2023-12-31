"use client";

import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) => {
  const router = useRouter();

  const onsubmit = () => {
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return <div></div>;
  }
  return (
    <span className="cursor-pointer" onClick={onsubmit}>
      {children}
    </span>
  );
};
