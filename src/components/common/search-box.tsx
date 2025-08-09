"use client";

import { Search, X } from "lucide-react";
import { Input } from "../ui/input";
import { useSearchStore } from "@/store";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchBox() {
  const { search, setSearch } = useSearchStore();
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateQuery = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    router.push(`?${params.toString()}`);
  };

  const handleClearSearch = () => {
    setSearch("");
    updateQuery("");
  };

  const handleChange = (value: string) => {
    setSearch(value);
    updateQuery(value);
  };

  return (
    <div className="relative w-full flex gap-2 items-center">
      <div className="w-6 h-6">
        {search ? (
          <X className="w-6 h-6 cursor-pointer" onClick={handleClearSearch} />
        ) : (
          <Search className="w-6 h-6" />
        )}
      </div>

      <Input
        value={search}
        onChange={(e) => handleChange(e.target.value)}
        type="text"
        placeholder="Search for movies or TV series"
        className="!py-6 sm:!text-2xl !text-md !bg-transparent border-0 focus-visible:ring-0 focus:border-b-[1px] rounded-none"
      />
    </div>
  );
}
