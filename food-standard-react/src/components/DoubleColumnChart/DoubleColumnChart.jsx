import React, {useState} from 'react';
import {Grid} from '@mui/material';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import useStyle from './useStyle';
import {DATA_ARRAY, CATEGORY_ARRAY, HEIGHEST_ARRAY, HEIGHEST_CATEGORIES, HEIGHEST_PURCHASES_DATA, HEIGHEST_SERIES_DATA} from './DoubleColumnConstant';
import {colors} from 'theme/colors';
import {variables} from 'theme/variables';
import {useTranslation} from 'react-i18next';

Highcharts.setOptions({
  lang: {
    thousandsSep: ','
  }
})

const DoubleColumnChart = (props) => {
  const style = useStyle();
  const {t} = useTranslation(['units', 'plantPage', 'climatePage']);
  var dataArr = (props.data) ? (props.data) : ([]);
  
  var series = [{ data: dataArr }];
  var titleText = t('plantProtein', {ns: 'plantPage'});
  var fileName = t('proteinDownload', {ns: 'plantPage'});
  var categories = CATEGORY_ARRAY;
  var legend = { enabled: false };
  var displayUnit = '';
  var marginRight = 0;
  var borderWidth = 0;
  var borderRadius = 0;
  var height = 300;
  var maxPointWidth = 50;
  var borderColor = 'none';
  var pointFormat = '<div><span class="series-hide">{series.name} : </span>{point.y}</div>';
  
  if(props.chartId === t('heighestChartId', {ns: 'climatePage'})) {
    titleText = t('highestCarbon', {ns: 'climatePage'});
    fileName = t('highestCarbonDownload', {ns: 'climatePage'});
    dataArr = HEIGHEST_ARRAY;
    categories = HEIGHEST_CATEGORIES;
    legend = {
      squareSymbol: true,
      itemMarginBottom:20,
      symbolHeight:20,
      symbolWidth:20,
      symbolRadius:0,
      strokeWidth: 2,
      strokeColor: '#000',
      height: 'auto'
    };
    var purchasesData = HEIGHEST_PURCHASES_DATA;
    series = HEIGHEST_SERIES_DATA;
    displayUnit = '%';
    marginRight = 200;
    height = '450px';
    borderWidth = 0.5;
    borderColor = '#000';
    borderRadius = 2;
    maxPointWidth = 50;
    pointFormat = '<div><span class="series-hide">{series.name} : </span>{point.y:.1f}</div>';
  } 
  const DoubleColumnChartOptions = {
    chart: {
      type: 'column',
      height: height,
      marginRight: 0,
      style: {
        fontFamily: `${variables.$agendaSemiBold}`,
        fill: "#000",
        color: '#000',
        fontSize: '12px'
      },
    },
    title: {
      text: titleText
    },
    credits: {
      enabled: false
    },
    exporting: { 
      enabled: false,
      sourceWidth: 1000,
      filename: fileName,
      chartOptions: {
        plotOptions: {
          series: {
            dataLabels: {
              allowOverlap: false,
              enabled: true,
              y: -5,
              format: '{y}' + displayUnit
            }
          }
        }
      }
    },
    xAxis: {
      categories: categories,
      crosshair: true
    },
    yAxis: {
      title: {
        text: ''
      },
      labels: {
        formatter: function () {
          return this.value + displayUnit;
        }     
      }
    },
    tooltip: {
      style: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center'
      },
      headerFormat: '<span>{point.key}</span>',
      pointFormat: pointFormat,
      footerFormat: '',
      shared: true,
      useHTML: true
    },
    legend: legend,
    plotOptions: {
      column: {
        pointPadding: 0,
        maxPointWidth: maxPointWidth,
        borderWidth: borderWidth,
        borderColor: borderColor,
        borderRadius: borderRadius
      }
    },
    series: series
  };

  return (
    <Grid item>
      <div>
        <HighchartsReact highcharts={Highcharts} options={DoubleColumnChartOptions}/>
      </div>
    </Grid>
  );
};
export default DoubleColumnChart;
