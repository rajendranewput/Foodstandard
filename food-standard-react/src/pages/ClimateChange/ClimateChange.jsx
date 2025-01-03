import React, {useState} from 'react';
import {TrimmingTransportation, DecreaseDeforestation, ReducingFood, ClimateSections, PieChart, SunburstChart, DoubleColumnChart, BlackBox, BorderBox, GreyParagraph, Banner, LineChartSection} from '../../components';
import {Container, Box, Grid, Paper, Typography} from '@mui/material';
import {useTranslation} from 'react-i18next';
import useStyle from './useStyle';
import useCommonStyle from '../useStyle';
import useRootStyle from '../../useStyle';

const ClimateChange = () => {
  const {t} = useTranslation(['climatePage', 'bannerText', 'commonHeadings', 'wellnessChartBtn']);
  const style = useStyle();
  const commonStyle = useCommonStyle();
  const rootStyle = useRootStyle();
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = (id) => setIsHovered(id);
  const handleMouseOut = () => setIsHovered(null);
  const btnArr =
    [
      {graphBtn: t('beefMeal' , {ns: 'wellnessChartBtn'}), graphBtnChild: []},
      {graphBtn: t('animalMeal', {ns: 'wellnessChartBtn'}), graphBtnChild: []},
      {graphBtn: t('cheeseSpend', {ns: 'wellnessChartBtn'}), graphBtnChild: []},
      {graphBtn: t('impMeat', {ns: 'wellnessChartBtn'}), graphBtnChild: []},
      {graphBtn: t('coffee', {ns: 'wellnessChartBtn'}), graphBtnChild: []},
      {graphBtn: t('restImp', {ns: 'wellnessChartBtn'}), graphBtnChild: []},
      {graphBtn: t('co2Tons', {ns: 'wellnessChartBtn'}), graphBtnChild: []}
    ];
  const commonStyles = {
    ...rootStyle.plateHeading,
    ...rootStyle.commonHeading
  };
  const lineStyles = {
    ...rootStyle.borderBox,
    ...rootStyle.marginBtm,
    ...rootStyle.fullWidth,
    ...rootStyle.mobileHide
  };
  const carbonStyle = {
    ...commonStyles,
    ...rootStyle.marginBtm
  };

  return (
    <> 
      <GreyParagraph text={t('paragraph', {ns: 'climatePage'})} />
      <Container sx={commonStyle.mainConatiner}>
        <Grid container sx={commonStyle.container}>
          <ClimateSections />
        </Grid>
      </Container>
      {/* Carbon impact  */}
      <Banner text={t("carbonImpact", {ns: "bannerText"})} className="change-text" />
      <GreyParagraph text={t('carbonImpacetParagraph', {ns: 'climatePage'})} padding='true' />
      <Container sx={commonStyle.mainConatiner}>
        <Grid container sx={commonStyle.container}>
          <Grid container sx={rootStyle.borderBox}>
            <Grid item sx={style.carbonImpact}> 
              <SunburstChart chartId='carbon-impact-chart'/>
              <Typography sx={carbonStyle} >TOTAL = 107,816 TONS CO2E</Typography>
            </Grid>
            <Grid item sx={{...style.doubleComun, ...rootStyle.mobileHide}}> 
              <DoubleColumnChart chartId='highest-food-purchases'/>
            </Grid>
          </Grid>
          <LineChartSection btnArray={btnArr} />
        </Grid>
      </Container>
    </>
  );
};

export default ClimateChange;
