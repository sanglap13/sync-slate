import Image from "next/image";
import React from "react";

const EmptyFavourites = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src="/images/EmptyFavourites.png"
        alt="Empty"
        width={140}
        height={140}
      />
      <h2 className="text-2xl font-semibold mt-6">No Favourite Slates!</h2>
      <p className="text-muted-foreground mt-2 textg-sm">
        Try to favourite some slates
      </p>
    </div>
  );
};

export default EmptyFavourites;