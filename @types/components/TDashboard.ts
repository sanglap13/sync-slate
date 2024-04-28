import React from "react";

export interface DashboardLayoutProps {
  children: React.ReactNode;
}

export interface DashboardPageProps {
  searchParams: {
    search?: string;
    favorites?: string;
  };
}
