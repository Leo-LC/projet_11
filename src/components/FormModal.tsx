import React from "react";
import { Modal, Box } from "@mui/material";

interface FormModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  handleCloseModal: () => void;
}

const FormModal: React.FC<FormModalProps> = ({
  children,
  isOpen,
  handleCloseModal,
}) => {
  return (
    <Modal
      open={isOpen}
      onClose={handleCloseModal}
      className='fixed inset-0 flex items-center justify-center bg-white bg-opacity-0'
    >
      <Box className='bg-white p-6 rounded'>{children}</Box>
    </Modal>
  );
};

export default FormModal;
