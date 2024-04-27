import { create } from "zustand";
import { IRenameModal, TDefaultValuesRenameModalProps } from "@/@types/store/IUseRenameModal";

const defaultValues: TDefaultValuesRenameModalProps = { id: "", title: "" };

export const useRenameModal = create<IRenameModal>((set) => ({
  isOpen: false,

  onOpen: (id, title) =>
    set({
      isOpen: true,
      initialValues: { id, title },
    }),
  onClose: () => {
    console.log("onClose function");
    set({
      isOpen: false,
      initialValues: defaultValues,
    });
  },
  initialValues: defaultValues,
}));
