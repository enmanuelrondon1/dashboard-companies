"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export const Logo = () => {
  const router = useRouter();
  return (
    <div
      className="min-h-20 h-20 flex items-center px-6 border-b cursor-pointer gap-2 "
      onClick={() => router.push("/")}
    >
      <Image src="/logo.svg" width={30} height={30} alt="logo" priority />
      <h1 className="font-bold text-xl">Ing-Enmanuel-Manager</h1>
    </div>
  );
};