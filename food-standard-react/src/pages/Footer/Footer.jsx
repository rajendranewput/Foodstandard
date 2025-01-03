import React, {useState, useEffect} from 'react';
import {Banner} from '../../components';
import {Box, Grid, useMediaQuery} from '@mui/material';
import useStyle from './useStyle';
import {useTranslation} from 'react-i18next';

const Footer = () => {
  const style = useStyle();
  const {t} = useTranslation(['bannerText']);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sx={style.footer}>
      {t('copyRight')}
      </Grid>
    </Grid>
  );
};

export default Footer;



