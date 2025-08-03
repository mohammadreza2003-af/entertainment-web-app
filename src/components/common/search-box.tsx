"use client";

import { CircleX, Search } from "lucide-react";
import { Input } from "../ui/input";
import { useSearchStore } from "@/store";

export default function SearchBox() {
  const { search, setSearch } = useSearchStore();

  console.log(search, "search");

  return (
    <div className="relative w-full flex gap-2 items-center">
      <div className="w-6 h-6">
        {false ? (
          <CircleX className="w-6 h-6 cursor-pointer" />
        ) : (
          <Search className="w-6 h-6" />
        )}
      </div>

      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search for movies or TV series"
        className="!py-6 !text-2xl !bg-transparent border-0 focus-visible:ring-0 focus:border-b-[1px] rounded-none "
      />
    </div>
  );
}
