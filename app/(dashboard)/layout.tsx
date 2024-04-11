import React from "react";
import { DashboardLayoutProps } from "@/@types/components/TDashboard";
import Sidebar from "./_components/sidebar";
import OrganizationalSidebar from "./_components/organizationSidebar";
import Navbar from "./_components/navbar";

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
}): JSX.Element => {
  return (
    <div className="h-full">
      <Sidebar />
      <div className="pl-[60px] h-full">
        <div className="flex gap-x-3 h-full">
          <OrganizationalSidebar />
          <div className="h-full flex-1">
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
