import React, {useState, useEffect} from 'react';
import {Banner} from '../../components';
import {Box, Grid, useMediaQuery} from '@mui/material';
import {useLocation} from 'react-router-dom';
import useStyle from './useStyle';
import {useTranslation} from 'react-i18next';
import {ROUTE_PATHS} from '../../constants/index';

const Header = () => {
  const location = useLocation();
  const {t} = useTranslation(['bannerText']);
  const isSmallScreen = useMediaQuery('(max-width:767px)');
  const style = useStyle();
  const pageName = location.pathname;
  const windowScrollCount = (isSmallScreen) ? (20) : (15);
  let bannerText;

  switch (pageName) {
    case (ROUTE_PATHS.dashboard):
      bannerText = t('dream');
      break;
    case (ROUTE_PATHS.purchasing):
      bannerText = t('flvrFirst');
      break;
    case (ROUTE_PATHS.climate):
      bannerText = t('lowCarbon');
      break;
    case (ROUTE_PATHS.plant):
      bannerText = t('plantForward');
      break;
    case (ROUTE_PATHS.wellness):
      bannerText = t('well');
      break;
    default:
      bannerText = t('dream'); 
  }
  
  const [fixedContent, setFixedContent] = useState(bannerText);
  useEffect(() => {
    const handleScroll = () => {
      const bannerMain = document.querySelector('.main-banner');
      const bannerChangeText = document.querySelector('.change-text');
      
      const rectBottomBanner = (bannerMain) ? (bannerMain.getBoundingClientRect()) : (0);
      const rectTopBanner = (bannerChangeText) ? (bannerChangeText.getBoundingClientRect()) : (0);
      const shouldChangeContent = ((rectTopBanner.top + window.scrollY) - (rectBottomBanner.top + window.scrollY)) < windowScrollCount;
     
      setFixedContent(shouldChangeContent ? bannerChangeText.innerHTML : bannerText);
    };

    window.addEventListener('scroll', handleScroll);
    setFixedContent(bannerText);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pageName]);

  return (
    <Grid container spacing={2} sx={style.dheader}>
      <Grid item xs={12}>
      <Box sx={style.banner}>
          <Banner text={fixedContent} customStyle={{'position': 'fixed'}} className='main-banner'/>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Header;



