import React, { useEffect } from 'react';
import useStyle from "./useStyle";
import {Box, Grid, Typography} from '@mui/material';
import FyMenu from './AutoComponent';
import { useTranslation } from 'react-i18next';

function CommonDropdown({ fyOptions, handleDropdownChange, dropdown, label}) {
  const style = useStyle();
  const { t } = useTranslation(['dashboardReport']);
  const handleFyChange = (event, value) => {
    handleDropdownChange(dropdown, value);
  };
  return (
    <Box> 
      <FyMenu onChange={(e, label) => handleFyChange(e, label)} options={fyOptions} sx={style.fyComplete} label={label}/>
    </Box>
  );
}

export default CommonDropdown;
