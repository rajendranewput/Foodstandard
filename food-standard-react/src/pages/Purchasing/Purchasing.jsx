import React, {useEffect, useState} from 'react';
import {PieChart, BlackBox, BorderBox, GreyParagraph, LineChartSection} from '../../components';
import {Container, Grid, Typography} from '@mui/material';
import {useTranslation} from 'react-i18next';
import useStyle from './useStyle';
import useCommonStyle from '../useStyle';
import useRootStyle from '../useStyle';
import axios from 'axios';
import axiosInstance, {microServices} from '../../network/apis';
import EmailIcon from '@mui/icons-material/Email';
import html2canvas from 'html2canvas';
import {
  fetchCor,
} from 'store/purchasing/purchasing.thunk';


const Purchasing = () => {
  const {t} = useTranslation(['purchasingPage']);
  const style = useStyle();
  const commonStyle = useCommonStyle();
  const rootStyle = useRootStyle();
  const [isHovered, setIsHovered] = useState(false);
  const [corArray, setCorArray] = useState([]);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Function to handle taking a screenshot and sending it via API
  const handleEmailClick = async () => {
    const gridElement = document.getElementById('cor-grid');
    try {
      const canvas = await html2canvas(gridElement);
      const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));
      const formData = new FormData();
      formData.append('file', blob, 'cor.png');
      await axiosInstance('post', '/image-share', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Screenshot sent successfully!');
    } catch (error) {
      console.error('Error capturing screenshot:', error);
    }
  };

  const btnArr =
    [
      {graphBtn: t('circle'), graphBtnChild: [t('totalCircle'),t('gBeef'), t('turkey'), t('chicken'), t('pork'), t('eggs'), t('milkYog'), t('fishSea')]},
      {graphBtn: t('farm'), graphBtnChild: [t('period'), t('yearDate')]},
      {graphBtn: t('cooked'), graphBtnChild: []},
      {graphBtn: t('leakage'), graphBtnChild: []},
      {graphBtn: t('dataVisibility'), graphBtnChild: []}
    ];
  const corHoverArray = [{heading: t('beefHeading', {ns: 'purchasingPage'}), desc: t('beefDesc', {ns: 'purchasingPage'})}, 
    {heading: t('chickenHeading', {ns: 'purchasingPage'}), desc: t('chickenDesc', {ns: 'purchasingPage'})},
    {heading: t('turkeyHeading', {ns: 'purchasingPage'}), desc: t('turkeyDesc', {ns: 'purchasingPage'})},
    {heading: t('porkHeading', {ns: 'purchasingPage'}), desc: t('porkDesc', {ns: 'purchasingPage'})},
    {heading: t('eggHeading', {ns: 'purchasingPage'}), desc: t('eggDesc', {ns: 'purchasingPage'})},
    {heading: t('milkHeading', {ns: 'purchasingPage'}), desc: t('milkDesc', {ns: 'purchasingPage'})},
    {heading: t('fishHeading', {ns: 'purchasingPage'}), desc: t('fishDesc', {ns: 'purchasingPage'})}
  ];
  
  const corData = async() => {
    let arr = await fetchCor();
    if(arr) {
      const updatedCorArray = [
        { heading: t('totalCircle', { ns: 'purchasingPage' }), val: arr.total_cor.percentage, color: arr.total_cor.color_threshold, icon:''},
        { heading: t('beefHeading', { ns: 'purchasingPage' }), val: arr.beef.percentage, color: arr.beef.color_threshold, icon:'icon-cow'},
        { heading: t('chickenHeading', { ns: 'purchasingPage' }), val: arr.chiken.percentage, color: arr.chiken.color_threshold, icon:'icon-hen' },
        { heading: t('turkeyHeading', { ns: 'purchasingPage' }), val: arr.turkey.percentage, color: arr.turkey.color_threshold, icon:'icon-bird' },
        { heading: t('porkHeading', { ns: 'purchasingPage' }), val: arr.pork.percentage, color: arr.pork.color_threshold, icon:'icon-pig' },
        { heading: t('eggHeading', { ns: 'purchasingPage' }), val: arr.eggs.percentage, color: arr.eggs.color_threshold, icon:'icon-egg' },
        { heading: t('milkHeading', { ns: 'purchasingPage' }), val: arr.dairy.percentage, color: arr.dairy.color_threshold, icon:'icon-milk' },
        { heading: t('fishHeading', { ns: 'purchasingPage' }), val: arr.fish.percentage, color: arr.fish.color_threshold, icon:'icon-fish' }
      ];
      setCorArray(updatedCorArray);
    }
  };

  useEffect(() => {
    corData();
  },[]);

  return (
    <> 
      <GreyParagraph text={t('paragraph', {ns: 'purchasingPage'})} />
      <Container sx={commonStyle.mainConatiner}>
        <Grid container sx={commonStyle.container}>
          <Grid container id="cor-grid" sx={(isHovered) ? ({...style.border, ...style.hoverBorder}) : (style.border)} onMouseLeave={handleMouseLeave} >
            <Grid item sx={style.containerBlack} onMouseEnter={handleHover}>
              <BlackBox title={t('corStandardHeading', {ns: 'purchasingPage'})} hover={isHovered} hoverText={t('corStandardHover', {ns: 'purchasingPage'})}/>
            </Grid>
            {isHovered ? (
              <Grid item sx={style.cor}>
                <Grid item sx={{...style.box, ...style.borderLeft}} style={{paddingBottom: 0}}>
                  <Grid item sx={{...style.charts, ...style.chartsHover}}>
                  {corHoverArray.map((content, index) => (
                    <Grid key={index} item xs={6} sx={style.mobileChart}>
                      <Typography sx={style.hoverHeading} variant='h6'>{content.heading}</Typography>
                      <Typography sx={style.corHoverDesc}>{content.desc} </Typography>
                    </Grid>
                  ))}
                  </Grid>
                </Grid>
              </Grid>
            ) : (
              <Grid item sx={style.cor}>
                <Grid item sx={style.box}>
                  <Typography variant="h6" sx={style.heading}>{t('corHeading', {ns: 'purchasingPage'})}</Typography>
                  <Grid item sx={style.charts}>
                    {corArray.map((content, index) => (
                      <Grid key={index} item xs={6} sx={style.mobileChart}>
                        <PieChart heading={content.heading} value={content.val} icon={content.icon} color={content.color}/>
                      </Grid>
                    ))}
                  </Grid>
                  <EmailIcon sx={style.emailIcon} onClick={handleEmailClick}/>
                </Grid>
              </Grid>
            )}
          </Grid>
          <LineChartSection btnArray={btnArr} />
        </Grid>
      </Container>
    </>
  );
};

export default Purchasing;
