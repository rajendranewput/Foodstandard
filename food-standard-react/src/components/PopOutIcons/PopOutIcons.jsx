import React, {useState} from "react";
import {Box} from "@mui/material";
import {Info} from "@mui/icons-material";
import {useTranslation} from "react-i18next";
import CommonModal from "components/Modal/Modal";
import Table from "components/Table/Table";
import useStyle from "./useStyle";
import useRootStyle from "../../useStyle";
const PopOutIcons = ({index}) => {
  const [open, setOpen] = useState(-1);
  const {t} = useTranslation(["commonHeadings"]);
  const style = useStyle();
  const rootStyle = useRootStyle();

  const handleOpen = (index) => {
    setOpen(index);
  };

  const handleClose = () => {
    setOpen(-1); 
  };

  const tableContent = <Table></Table>;
  return (
    <Box sx={style.iconBox}>
      <Box sx={rootStyle.mobileHide}>
        <Box component="span" sx={style.icons} onClick={() => handleOpen(index)}>
          {t("rPopout")}
        </Box>
        <Box component="span" sx={style.icons}>
          {t("dmPopout")}
        </Box>
        <Box component="span" sx={style.icons}>
          {t("aPopout")}
        </Box>
      </Box>
      <Box sx={rootStyle.mobileShow}>
        <Info sx={style.infoIcon} />
      </Box>

      <CommonModal
        open={open === index}
        handleClose={handleClose}
        tableContent={tableContent}
      ></CommonModal>
    </Box>
  );
};

export default PopOutIcons;
