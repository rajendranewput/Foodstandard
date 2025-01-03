import React, {useState} from 'react';
import {Grid} from '@mui/material';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import useStyle from './useStyle';
import {colors} from 'theme/colors';
import {useTranslation} from 'react-i18next';
import {variables} from 'theme/variables';

const PieChart = (props) => {
  
  const sx = useStyle();
  const {t} = useTranslation(['purchasingPage', 'foodDashboard']);
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(true);
  };
  const handleMouseOut = () => {
    setIsHovered(false);
  };
  
  var data = props.value ? [['A', parseInt(props.value)], ['B', 100 - parseInt(props.value)]] : [['A', 0], ['B', 100]];
  var color = props.color ? [props.color, colors.greyBg] : [colors.greyBg, colors.greyBg];

  const size = (props.heading === t('totalCircle', { ns: 'purchasingPage' })) ? ('120') : ('90');
  if(isHovered && (props.heading === t('totalCircle', { ns: 'purchasingPage' }))) {
    setIsHovered(false);
  }
  var customStyle = isHovered ? sx.unselected : sx.selected;

  const styleToString = (styleObj) => {
    return Object.entries(styleObj)
      .map(([key, value]) => `${key.replace(/([A-Z])/g, "-$1").toLowerCase()}:${value};`)
      .join(' ');
  };
  
  const subTitleStyles = (isHovered ? (styleToString(sx.noDataCorHover)) : (styleToString(sx.noDataCor)));
  const subTitleValue = (isHovered ? (styleToString(sx.corValueHover)) : ((props.heading === t('totalCircle', { ns: 'purchasingPage' })) ? (styleToString(sx.corTotalValue)) : (styleToString(sx.corValue))));
  const titleStyles = (isHovered ? (styleToString(sx.iconsHover)) : (styleToString(sx.icons)));
  const value = props.value ? `<span style="${subTitleValue}">${props.value}%</span>` : `<span style="${subTitleStyles}">${t('noReportedData', { ns: 'foodDashboard' })}</span>`;
  const subTitle = value;
  var title = (isHovered ? `<span style="${titleStyles}">${props.heading}</span>` : `<span style="${titleStyles}" class="${props.icon}"></span>`);

  if(props.heading === t('totalCircle', { ns: 'purchasingPage' })) {
    title = `<h1 style="${(styleToString(sx.totalTitle))}">${t('totalCircle' , {ns: 'purchasingPage'})}</h1>`;
    customStyle = sx.totalUnselected;
  }

  const donutChartOptions = {
    chart: {
      type: 'pie',
      margin: [0, 0, 0, 0],
      height: size,
      width: size,
      animation: false,
      events: {
        load: function () {
          this.renderer.globalAnimation = false;
        },
      },
    },
    tooltip: {
      enabled: false,
    },
    exporting: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        colors: color,
        slicedOffset: 0,
        borderWidth: 0,
        borderColor: null,
        size: '100%',
        dataLabels: {
          enabled: false,
        },
        allowPointSelect: true,
        cursor: 'pointer',
      },
      series: {
      },
    },
    title: {
      useHTML: true,
      text: title,
      align: 'center',
      verticalAlign: 'middle',
      widthAdjust: -10,
      style: {
        fontSize: '12px',
        fontFamily: variables.$agendaSemiBold,
        paddingLeft: '2px',
        color: '#000',
        fill: '#000',
        textAlign: 'center',
        width: '58px',
      },
    },
    subtitle: {
      useHTML: true,
      text: subTitle,
      style: customStyle,
      align: 'center',
      verticalAlign: 'bottom',
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        data: data,
        innerSize: '75%',
        showInLegend: false,
        dataLabels: {
          enabled: false,
        },
        states: {
          hover: {
            enabled: false,
          },
          inactive: {
            opacity: 1
          }

        },
      },
    ],
  };

  return (
    <Grid item>
      <div
        onMouseOver={handleHover}
        onMouseOut={handleMouseOut}
        style={sx.display}
        className={sx.chartIconsHover1}
      >
        <HighchartsReact highcharts={Highcharts} options={donutChartOptions}/>
      </div>
    </Grid>
  );
};
export default PieChart;
