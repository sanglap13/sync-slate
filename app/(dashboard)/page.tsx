"use client";

import React from "react";
import EmptyOrg from "./_components/emptyOrg";
import { useOrganization } from "@clerk/nextjs";

const DashboardPage = () => {
  const { organization } = useOrganization();
  return (
    <div className=" flex-1 h-[calc(100%-80px)] p-6">
      {!organization ? <EmptyOrg /> : <p>Slate List</p>}
    </div>
  );
};

export default DashboardPage;
