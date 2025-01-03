import React from 'react';
import {Grid, Typography, Paper, useMediaQuery} from '@mui/material';
import {PieChart, PopOutIcons} from '../../components';
import PropTypes from 'prop-types';
import useStyle from './useStyle';
import useCommonStyle from '../useStyle';
import useRootStyle from '../../useStyle';
import {useTranslation} from 'react-i18next';

const BorderBox = ({heading, val, subtitle, chartHeading, customBorder, chart, footerVal, footerSubTitle, wholeFood, hover, hoverText, icons, color}) => {
  const style = useStyle();
  const rootStyle = useRootStyle();
  const commonStyle = useCommonStyle();
  const {t} = useTranslation(['foodDashboard', 'wellnessPage']);
  var borderT = (customBorder ? (style.borderTop) : (''));
  const boxStyle = {
    ...commonStyle.commonBox,
    ...style.box,
    ...customBorder,
    ...borderT
  }
  const descStyles = {
    ...commonStyle.commonBox,
    ...style.hoverBox
  }
  
  return (
    <Grid sx={style.main}> 
      { 
        footerVal ? (
          <Grid sx={{...boxStyle, ...style.boxPadding}} >
            <Typography sx={style.heading}>{heading}</Typography>
            {hover ? (
              <Grid item sx={style.descText}>
                <Typography sx={descStyles}>{hoverText}</Typography>
              </Grid>
            ) : (
              <Grid item sx={rootStyle.fullWidth}>
                {heading === t('wholeGrainHeading', {ns: 'wellnessPage'}) ? (
                  <Grid sx={style.descText}>
                    <Grid sx={style.wholeFood}>
                      <Typography sx={style.wholeFoodVal}>{val}</Typography>
                      <Typography sx={style.subHeading}>{t('wholeGrainSbtitleWith', {ns: 'wellnessPage'})}</Typography>
                    </Grid>
                    <Grid sx={style.wholeFood}>
                      <Typography sx={style.wholeFoodVal}>{wholeFood}</Typography>
                      <Typography sx={style.subHeading}>{t('wholeGrainSbtitleWithout', {ns: 'wellnessPage'})}</Typography>
                    </Grid>
                  </Grid>
                ) : (
                  <>
                  <Typography sx={style.value}>{val}</Typography>
                  <Typography sx={style.subHeading}>{subtitle}</Typography>
                  </>
                )}
                <Grid item sx={style.footerBorder} >
                  <Typography sx={style.footerValue}>{footerVal}</Typography>
                  <Typography sx={{...style.subHeading, ...style.boxPadding}}>{footerSubTitle}</Typography>
                </Grid>
              </Grid>
            )}
          </Grid>
        ) : (
          <Grid sx={boxStyle}  >
            <Typography sx={style.heading}>{heading}</Typography>
            {hover ? (
              <Grid item sx={style.descText}>
                <Typography sx={descStyles}>{hoverText}</Typography>
              </Grid>
            ) : (
              <Grid item sx={style.valPadding}>
                {chart && chartHeading ? (
                  <PieChart heading={heading} value={val} color={color}/>
                ) : (
                  <>
                    {val && val !== t('noReportedData', { ns: 'foodDashboard' }) ? (
                      <>
                        <Typography sx={{...style.value, color: color}}>{val}</Typography>
                        <Typography sx={style.subHeading}>{subtitle}</Typography>
                      </>
                    ) : (
                      <Typography sx={rootStyle.noReportedText}>{t('noReportedData', { ns: 'foodDashboard' })}</Typography>
                    )}
                  </>
                )}
              </Grid>
            )}
            
          </Grid>
        )
      }
        {icons ? <PopOutIcons /> : '' }
    </Grid>
  );
};

export default BorderBox;

BorderBox.defaultProps = {
  hover: '',
  hoverText: '',
  heading: '',
  val: '',
  subtitle: '',
  border: '',
  marginLeft: '',
  chart: '',
  footerVal: '',
  footerSubTitle: '',
  wholeFood: ''
};

BorderBox.propTypes = {
  hoverText: PropTypes.string,
  title: PropTypes.string,
  heading: PropTypes.string,
  val: PropTypes.string,
  subtitle: PropTypes.string,
  border: PropTypes.string,
  marginLeft: PropTypes.string,
  chart: PropTypes.string,
  wholeFood: PropTypes.string
};