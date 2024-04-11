import React from "react";
import { UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <div>
        <UserButton />
      </div>
      <span className="text-blue-700">This is an Authenticated Page</span>
    </div>
  );
};

export default Home;
