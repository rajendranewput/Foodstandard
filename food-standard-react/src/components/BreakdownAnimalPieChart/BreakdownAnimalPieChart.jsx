import React, {useEffect, useState} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {Container, Button, ButtonGroup} from '@mui/material';
import useStyle from './useStyle';
import {SERIES_DATA, ANIMAL_LBS, PLANT_LBS, BREAKDOWN_SERIES_DATA} from './BreakdownAnimalConstant';
import {useTranslation} from 'react-i18next';
import {colors} from 'theme/colors';
import {variables} from 'theme/variables';

Highcharts.setOptions({
  colors: [colors.red, colors.greyBg]
}); 

var chartMode = '';
const mouseOver = (customdata, series, {t}, outerWingsSize, outerWingsDistance, outerWingsInnerSize, dataUnit) => {
  var startAngle = (customdata.parent == "plant") ? 235 : 55;
  var endAngle = (customdata.parent == "plant") ? 305 : 125;
  var datalabelHideClass = customdata.parent == "animal" ? "hover-hide-animal" : "hover-hide-plant";
  var sr =   {
    name: '',
    data: customdata.drillDownData,
    size: outerWingsSize,
    innerSize: outerWingsInnerSize,
    startAngle: startAngle,
    endAngle: endAngle,
    borderColor: '#000000',
    dataLabels: {
      enabled: true,
      color: '#000000',
      distance: outerWingsDistance,
      useHTML: true,
      allowOverlap: true,
      overflow: 'visible',
      crop: false,
      style: { fontSize: '6px', textOutline: false},
      formatter: function () {
        document.getElementsByClassName(datalabelHideClass)[0].style.display = 'none';
        var divsToHide = document.getElementsByClassName('highcharts-data-label-connector');
        for(var i = 0; i < divsToHide.length; i++){
          divsToHide[i].style.display = "none";
        }
        var seriesToHide = document.getElementsByClassName('series2-datalabels-plant');
        for(var i = 0; i < seriesToHide.length; i++){
          seriesToHide[i].style.display = "none";
        }
        var series2ToHide = document.getElementsByClassName('series2-datalabels-animal');
        for(var i = 0; i < series2ToHide.length; i++){
          series2ToHide[i].style.display = "none";
        }
        var dataLabelUnit = dataUnit === t('spend', {ns: 'units'}) ? dataUnit + Highcharts.numberFormat(this.point.options.y, 0) : Highcharts.numberFormat(this.point.options.y, 0) + ' ' +  dataUnit;
        return  '<b>' + this.point.name + ':</b><br> ' +
        this.point.options.percentage + '% - ' + dataLabelUnit;
      }
    },
    animation:false,
    id: 'test'
  };  
  series.chart.addSeries(sr);
}
const BreakdownAnimalPieChart = (props) => {
  const style = useStyle();
  const {t} = useTranslation(['units', 'plantPage']);
  var seies1ModeData = SERIES_DATA.s1.weight;
  var seies2ModeData = SERIES_DATA.s2.weight;
  var dataUnit = t('lbs', {ns: 'units'});
  var chartTitle = t('breakdownHeading', {ns: 'plantPage'});
  var downloadImageName = t('weightDownload', {ns: 'plantPage'});
  var animalTotalWghtSpend = ANIMAL_LBS + ' ' +  dataUnit.toUpperCase();
  var plantTotalWghtSpend = PLANT_LBS + ' ' + dataUnit.toUpperCase();
  if(chartMode === t('spend', {ns: 'plantPage'})) {
    seies1ModeData = SERIES_DATA.s1.spend;
    seies2ModeData = SERIES_DATA.s2.spend;
    dataUnit = t('spend', {ns: 'units'});
    downloadImageName = t('spendDownload', {ns: 'plantPage'});
    animalTotalWghtSpend = dataUnit + ANIMAL_LBS;
    plantTotalWghtSpend = dataUnit + PLANT_LBS;
  }
  var outerWingsInnerSize = '62%';
  var outerWingsDistance = '-40';
  var chartImageSize = (window.innerWidth < 1700) ? ('600') : '780';
  var outerWingsSize = (window.innerWidth < 1700) ? ('175%') : '175%';
  var textHidePlant = (window.innerWidth < 1700) ? ('hover-hide-animal') : '';
  var textHideAnimal = (window.innerWidth < 1700) ? ('hover-hide-plant') : '';
  var secondOuterWings = (window.innerWidth < 1700) ? ('100%') : '100%';
  var greenTextX = (window.innerWidth < 1700) ? (45) : 55;
  var greenTextY = 150;
  var textDist = (window.innerWidth < 1700) ? (45) : 55;
  var redTextX = ((document.getElementById("breakdown-animal-pie-chart")) ? (document.getElementById("breakdown-animal-pie-chart").clientWidth - textDist) : (500));
  var redTextY = 150;
  if((window.innerWidth < 1300) && (window.innerWidth > 800)) {
    outerWingsSize = '130%';
    secondOuterWings = '75%';
  }
  if((window.innerWidth >= 1300) && (window.innerWidth < 1500)) {
    outerWingsSize = '155%';
    secondOuterWings = '90%';
  }
  if((window.innerWidth < 767)) {
    outerWingsDistance = '-30';
    outerWingsSize = '100%';
    outerWingsInnerSize = '75%';
    secondOuterWings = '70%';
    greenTextX = 70;
    greenTextY = 30;
    redTextX = ((document.getElementById("breakdown-animal-pie-chart")) ? (document.getElementById("breakdown-animal-pie-chart").clientWidth - greenTextX) : (30));
    redTextY = 30;
  }
  
  var chart = {
    chart: {
      type: 'pie',
      padding: 0,
      style: {
        fontFamily: `${variables.$agendaSemiBold}`,
        fill: "#000",
        color: '#000',
        fontSize: '12px',
      },
      events: {
        load() {
          const chart = this;
          if (chart.renderer && document.getElementById("breakdown-animal-pie-chart")) {
            chart.renderer.text('<div class="plant-based-product ' + textHidePlant + '"><div class="total-weight-spend">' + animalTotalWghtSpend + '</div><br>ANIMAL-BASED<br>PRODUCT</div>', redTextX, redTextY) .css({
              color: '#000',
              fontSize: '10px',
              'text-anchor': 'middle'
            }).add();
            chart.renderer.text('<div class="animal-based-product ' + textHideAnimal + '"><div class="total-weight-spend">'  + plantTotalWghtSpend + '</div><br>PLANT-BASED<br>PRODUCT</div>', greenTextX, greenTextY) .css({
              color: '#000',
              fontSize: '10px',
              'text-anchor': 'middle'
            }).add();
          }
        }
      }
    },
    title: {
      text: chartTitle
    },
    subtitle: {
      text: ''
    },
    credits: {
      enabled: false
    },
    exporting: { 
      enabled: false,
      allowHTML: true,
      sourceWidth: chartImageSize,
      filename: downloadImageName,
      chartOptions: {
        title: {
          text: chartTitle,
          align: 'center',
          style: {
            fontSize: '12px',
            color: '#000'
          }
        },
        plotOptions: {
          series: {
            dataLabels: {
              enabled: true,
              formatter: function () {
                var dataLabelUnit = dataUnit === t('spend', {ns: 'units'}) ? dataUnit + Highcharts.numberFormat(this.point.options.y, 0) : Highcharts.numberFormat(this.point.options.y, 0) + ' ' +  dataUnit;
                return  '<b>' + this.point.name + ':</b><br>' +
                this.point.options.percentage + '% - ' + dataLabelUnit;
              }
            }
          }
        }
      }
    },
    plotOptions: {
      pie: {
        shadow: false,
        center: ['50%', '50%'],
        states: {
          inactive: {
            opacity: 1
          },
          hover: {
            enabled: false
          }
        }
      },
      series: {
        point: {
          events: {
            mouseOver: function () {
              if(!this.customdata.hover) {
                return false;
              }
              if(this.customdata.drillDownData.length > 0) { 
                mouseOver(this.customdata, this.series, {t}, outerWingsSize, outerWingsDistance, outerWingsInnerSize, dataUnit);
              }
            },
            mouseOut: function () {
              if(!this.customdata.hover)
              return;
              if(this.customdata.drillDownData.length > 0) {
                if(this.series.chart.series[2]) {
                  this.series.chart.series[2].remove();
                  var datalabelHideClass = this.customdata.parent == "animal" ? " hover-hide-animal" : " hover-hide-plant";
                  document.getElementsByClassName(datalabelHideClass)[0].style.display = 'block';
                  var divsToHide = document.getElementsByClassName('highcharts-data-label-connector');
                  for(var i = 0; i < divsToHide.length; i++){
                    divsToHide[i].style.display = "block";
                  }
                  var seriesToHide = document.getElementsByClassName('series2-datalabels-plant');
                  for(var i = 0; i < seriesToHide.length; i++){
                    seriesToHide[i].style.display = "block";
                  }
                  var series2ToHide = document.getElementsByClassName('series2-datalabels-animal');
                  for(var i = 0; i < series2ToHide.length; i++){
                    series2ToHide[i].style.display = "block";
                  }
                }
              }
            }
          }
        }
      }
    },
    tooltip: {
      formatter: function () {
        var dataLabelUnit = dataUnit === t('spend', {ns: 'units'}) ? dataUnit + this.point.options.y : this.point.options.y + ' ' +  dataUnit;
        return  '<div class="breakdown-tooltip"><b>' + this.point.name + ':</b><br> ' +
        this.point.options.percentage + '% - ' + dataLabelUnit + '</div>';
      }
    },
    series: [
      {
        name: 'Total',
        data: seies1ModeData,
        size: '30%',
        borderColor: '#000000',
        dataLabels: {
          color: '#000000',
          distance: outerWingsDistance,
          enabled:true,
          style: { fontSize: '10px', textOutline: false },
          formatter: function () {
            return this.point.options.percentage + '%';
          }
        }
      },
      {
        name: '',
        data: seies2ModeData,
        size: secondOuterWings,
        innerSize: '30%',
        borderColor: '#000000',
        dataLabels: {
          enabled: true,
          color: '#000000',
          style: { fontSize: '8px', textOutline: false, textOverflow: 'clip' },
          formatter: function () {
            var dataLabelUnit = dataUnit === t('spend', {ns: 'units'}) ? dataUnit + Highcharts.numberFormat(this.point.options.y, 0) : Highcharts.numberFormat(this.point.options.y, 0) + ' ' +  dataUnit;
            var parentLabelClass = this.point.options.customdata.parent === "animal" ? "series2-datalabels-animal" : "series2-datalabels-plant";
            var dataLabelClass = this.point.options.percentage > 9 ? "series2-datalabels-inner" : parentLabelClass;
            return   this.point.options.y > 0 ? '<span class=' + dataLabelClass + '>' + this.point.name + ':<br> ' +
            this.point.options.percentage + '% - ' + dataLabelUnit + '</span>' : null;
          }
        },
        id: 'versions'
      }
    ]
  }
  
  return (
    <Container sx={style.container}>
      <HighchartsReact highcharts={Highcharts} options={chart} />
    </Container>
  );
};
export default BreakdownAnimalPieChart;