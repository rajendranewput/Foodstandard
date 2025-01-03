import React from "react";
import {
  Box,
  IconButton,
  Modal,
  TableContainer,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import useStyle from "./useStyle";

const CommonModal = ({
  open,
  handleClose,
  tableContent,
}) => {
  const style = useStyle();
  return (
    <Modal
      open={open}
      onClose={handleClose}
    >
      <Box sx={style.modalBox}>
        <Box sx={style.modalHeader}>
          <IconButton onClick={handleClose} sx={style.closeButton}>
            <Close />
          </IconButton>
        </Box>
        <Box sx={style.mainWrapper} >
          <TableContainer>{tableContent}</TableContainer>
        </Box>
      </Box>
    </Modal>
  );
};

export default CommonModal;
