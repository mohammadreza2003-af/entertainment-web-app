"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
export default function BackButton() {
  const navigate = useRouter();
  return (
    <Button
      variant="ghost"
      className="font-geist-mono font-semibold text-lg"
      onClick={() => navigate.back()}
    >
      <ArrowLeft width={24} height={24} />
      Back -
    </Button>
  );
}
