"use client";

import { Card } from "@/components/ui/card";
import {
  PlayIcon,
  Dot,
  Bookmark,
  ClapperboardIcon,
  PopcornIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

type CardProps = {
  id: string;
  title: string;
  year: string;
  rated: string;
  typeMovie: "movies" | "series";
  posterImg: string;
  typeCard: "wide" | "normal";
};

export default function MovieCard({
  id,
  title,
  year,
  rated,
  typeMovie,
  posterImg,
  typeCard,
}: CardProps) {
  const navigate = useRouter();
  const deatailPath = `/${typeMovie === "movies" ? "movies" : "series"}/${id}`;
  return (
    <Card
      className={`group relative overflow-hidden rounded-xl shadow-md font-outfit ${
        typeCard === "wide"
          ? "sm:w-[300px] lg:w-[400px] w-[220px] h-[280px] sm:h-[500px]"
          : "w-full h-[220px] sm:h-[400px]"
      }`}
    >
      <div
        className="absolute inset-0 transition-transform duration-300 ease-in-out group-hover:scale-105 bg-center bg-cover"
        style={{ backgroundImage: `url(${posterImg})` }}
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 z-10" />
      <div className="absolute top-0 left-0 right-0 z-20 p-4 flex justify-end">
        <Button
          variant="ghost"
          size="icon"
          className="text-white bg-white/20 rounded-full hover:text-white"
        >
          <Bookmark className="w-5 h-5" />
        </Button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-20 p-4 text-white">
        <div className="text-sm flex gap-2 text-gray-200">
          <span>{year}</span>
          <Dot />
          {typeMovie === "movies" ? (
            <ClapperboardIcon width={16} height={16} />
          ) : (
            <PopcornIcon width={16} height={16} />
          )}
          <span className="capitalize">{typeMovie}</span>
          <Dot />
          <span>{rated}</span>
        </div>
        <h3 className="sm:text-lg font-semibold">{title}</h3>
      </div>
      <Button
        onClick={() => navigate.push(deatailPath)}
        size="icon"
        className="absolute cursor-pointer top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-300 text-white bg-white/20 hover:bg-white/40 p-3 rounded-full backdrop-blur"
      >
        <PlayIcon className="w-6 h-6" />
      </Button>
    </Card>
  );
}
