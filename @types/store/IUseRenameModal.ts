export type TDefaultValuesRenameModalProps = {
  id: string;
  title: string;
};

export interface IRenameModal {
  isOpen: boolean;
  initialValues: TDefaultValuesRenameModalProps;
  onOpen: (id: string, title: string) => void;
  onClose: () => void;
}
