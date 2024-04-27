import React from "react";

export interface IConfirmModalProps {
  children: React.ReactNode;
  onConfirm: () => void;
  disabled?: boolean;
  header: string;
  description?: string;
}
