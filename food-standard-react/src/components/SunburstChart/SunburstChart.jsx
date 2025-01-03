import React, {useState} from 'react';
import {Grid} from '@mui/material';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import sunburst from 'highcharts/modules/sunburst.js';
import useStyle from './useStyle';
import {MENU_MIX_ARRAY, CARBON_IMPACT_ARRAY} from './SunburstConstant';
import {colors} from 'theme/colors';
import {variables} from 'theme/variables';
import {useTranslation} from 'react-i18next';
  
Highcharts.setOptions({
  colors: [colors.red, colors.greyBg]
});
sunburst(Highcharts);
const SunburstChart = (props) => {
  const {t} = useTranslation(['climatePage', 'wellnessPage']);
  var chartTitle = t('menuMixTitle' , {ns: 'wellnessPage'});
  var fileName = t('menuMixDownload' , {ns: 'wellnessPage'});
  var formatLevel1 = '<span class="sunbrust-data-label">{point.value}%</span>';
  var formatLevel2 = '<span class="sunbrust-data-label menu-mix-chart"><span class="menu-mix-val">{point.toolValue}</span><br>{point.name}</span>';
  var pointFormatLevel2 = '<span class="sunbrust-data-label-tooltip"><b><span class="menu-mix-val">{point.toolValue}</span><br>{point.name}</b></span>';
  var wbiArr = (props.data?props.data:MENU_MIX_ARRAY);
  
  if((props.chartId) === t('carbonImpactChartId' , {ns: 'climatePage'})) {
    chartTitle = t('carbonEmissionTitle' , {ns: 'climatePage'});
    formatLevel1 = '<span class="sunbrust-data-label">{point.value:.1f}%</span>';
    formatLevel2 = '<span class="sunbrust-data-label">{point.name}<br>{point.value}%</span>';
    pointFormatLevel2 = '<span class="sunbrust-data-label-tooltip"><b>{point.name}</b></br>{point.co2:.1f} TONS CO2E </br>{point.value:.1f}%</span>'; 
    wbiArr = CARBON_IMPACT_ARRAY;
  }
  const style = useStyle();
  const SunburstChartOptions = {
    chart: {
      style: {
        fontFamily: `${variables.$agendaSemiBold}`,
        fontWeight: 'normal',
        fontSize: '12px'
      },
      events: {
        load: function(event) {
          event.target.reflow();
        }
      }
    },
    plotOptions: {
      sunburst: {
        borderColor: colors.black
      }
    },
    credits: {
      enabled: false
    },
    exporting: { 
      enabled: false,
      sourceWidth: 1000,
      title: {
        text: chartTitle
      },
      subtitle: {
        text: chartTitle
      },
      filename: '',
      chartOptions: {
        plotOptions: {
          series: {
            dataLabels: {
              enabled: true,
              format: '{y}%'
            }
          }
        }
      }
    },
    title: {
      text: chartTitle
    },
    subtitle: {
      text: '',
      verticalAlign: 'bottom',
      y: 0,
      style: {
        color: colors.black
      }
    },
    series: [{
      type: 'sunburst',
      data: wbiArr,
      allowDrillToNode: true,
      cursor: 'pointer',
      dataLabels: {
        format: '<span class="sunbrust-data-label">{point.value}%</span>',
        color: colors.black,
        borderWidth: 0,
        style: {
        textOutline: 0
        },
        rotation: 0,
        filter: {
          property: 'innerArcLength',
          operator: '>',
          value: 16
        },
        rotationMode: 'off'
      },
      levels: [{
        level: 1,
        levelIsConstant: false,
        colorByPoint: true,
        dataLabels: {
          rotation: 0,
          format: formatLevel1,
          filter: {
            property: 'outerArcLength',
            operator: '>',
            value: 64
          }
        }
      }, 
      {
        level: 2,
        colorByPoint: true,
        dataLabels: {
          format: formatLevel2
        }
      }]
    }],
    tooltip: {
      headerFormat: '',
      pointFormat: pointFormatLevel2
    }
  };

  return (
    <Grid item>
      <div>
        <HighchartsReact sx={style.fontFamily} highcharts={Highcharts} options={SunburstChartOptions}/>
      </div>
    </Grid>
  );
};
export default SunburstChart;
