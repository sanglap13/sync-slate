"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDebounceCallback } from "usehooks-ts";

const SearchInput: React.FC = () => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const debouncedValue = useDebounceCallback(value, 500);
  return (
    <div className="w-full relative">
      <Search className="absolute top-1/2 lef-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        className="w-full max-w-[516px] pl-9"
        placeholder="Search Slates"
      />
    </div>
  );
};

export default SearchInput;
