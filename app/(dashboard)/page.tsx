"use client";

import React from "react";
import EmptyOrg from "./_components/emptyOrg";
import { useOrganization } from "@clerk/nextjs";
import { DashboardPageProps } from "@/@types/components/TDashboard";
import SlateList from "./_components/slateList";

const DashboardPage: React.FC<DashboardPageProps> = ({ searchParams }) => {
  const { organization } = useOrganization();
  return (
    <div className=" flex-1 h-[calc(100%-80px)] p-6">
      {/* {JSON.stringify(searchParams)} */}
      {!organization ? (
        <EmptyOrg />
      ) : (
        <SlateList query={searchParams} orgId={organization.id} />
      )}
    </div>
  );
};

export default DashboardPage;
