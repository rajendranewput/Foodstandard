import React from 'react';
import {LineChart} from '../../components';
import {Grid, Typography} from '@mui/material';
import {useTranslation} from 'react-i18next';
import useCommonStyle from '../useStyle';
import useRootStyle from '../../useStyle';

const LineChartSection = (props) => {
  const {t} = useTranslation(['commonHeadings']);
  const rootStyle = useRootStyle();
  
  const commonStyles = {
    ...rootStyle.plateHeading,
    ...rootStyle.commonHeading
  };
  const lineStyles = {
    ...rootStyle.borderBox,
    ...rootStyle.marginBtm,
    ...rootStyle.fullWidth,
    ...rootStyle.mobileHide
  }

  return (
    <> 
      <Grid container>
        <Grid sx={lineStyles}>
          <Typography sx={commonStyles} variant='h6'>{t('trend', {ns: 'commonHeadings'})}</Typography>
          <Grid item ><LineChart btnArray={props.btnArray} /></Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default LineChartSection;
