import Image from "next/image";
import React from "react";

const EmptySearch = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src="/images/emptySearch.png"
        alt="Empty"
        width={140}
        height={140}
      />
      <h2 className="text-2xl font-semibold mt-6">No Results found!</h2>
      <p className="text-muted-foreground mt-2 textg-sm">
        Try searching for something else
      </p>
    </div>
  );
};

export default EmptySearch;
