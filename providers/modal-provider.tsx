"use client";

import RenameModal from "@/components/modals/rename-modal";
import React, { useState, useEffect } from "react";

// This has been done only to avoid hydration errors which occurs
const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <></>;

  return (
    <>
      <RenameModal />
    </>
  );
};

export default ModalProvider;
