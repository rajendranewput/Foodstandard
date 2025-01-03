import React, {useState, useEffect} from 'react';
import {Grid} from '@mui/material';
import {BlackBox, BorderBox} from '../../components';
import {useTranslation} from 'react-i18next';
import PropTypes from 'prop-types';
import useStyle from './useStyle';
import useCommonStyle from '../useStyle';
import useRootStyle from '../../useStyle';
import {formatToOneDecimal} from '../../helpers/util.helpers';
import {
  fetchBeef, fetchTrimm, fetchDeforestation
} from 'store/climate/climate.thunk';

const ClimateSections = () => {
  
  const style = useStyle();
  const commonStyle = useCommonStyle();
  const rootStyle = useRootStyle();
  const {t} = useTranslation(['climatePage', 'foodDashboard']);
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = (id) => setIsHovered(id);
  const handleMouseOut = () => setIsHovered(null);

  const [values, setValues] = useState({
    beefValue: t('noReportedData', { ns: 'foodDashboard' }),
    trimmValue: t('noReportedData', { ns: 'foodDashboard' }),
    meatValue: t('noReportedData', { ns: 'foodDashboard' }),
    meatColor: t('noReportedData', { ns: 'foodDashboard' }),
    paperValue: 0,
    paperColor: '',
    coffeeValue: 0,
    coffeeColor: ''
  });
  
  const setValue = (key, value) => {
    setValues(prevValues => ({ ...prevValues, [key]: value }));
  };
  const { beefValue, trimmValue, meatValue, meatColor, paperValue, paperColor, coffeeValue, coffeeColor } = values;

  const baseStyles = {
    ...style.borderBox
  };
  const hoveredStyles = {
    ...baseStyles,
    ...style.hoverBorder
  };

  const reduceStyles = {
    ...baseStyles,
    ...style.sorceBorder,
  };
  const hoveredReduceStyles = {
    ...reduceStyles,
    ...style.hoverBorder
  };

  const trimStyles = {
    ...baseStyles,
    ...style.trimBorder,
  };
  const hoveredTrimStyles = {
    ...trimStyles,
    ...style.hoverBorder
  };

  const beefData = async() => {
    let data = await fetchBeef();
    if(data) {
      setValue('beefValue', data);
    }
  };

  const trimmData = async (data) => {
    let trimData = await fetchTrimm();
    if(trimData) {
      setValue('trimmValue', formatToOneDecimal(trimData));
    }
  };

  const decreasingDeforestationData = async (data) => {
    let deforestationData = await fetchDeforestation();
    if(deforestationData) {
      let importedMeat = deforestationData.restricted_imported_meat.spend;
      let paper = deforestationData.paper_purchases.spend;
      let coffee = deforestationData.coffee_spend.spend;
      if(deforestationData) {
        if(importedMeat) {
          setValue('meatValue', formatToOneDecimal(importedMeat));
          setValue('meatColor', deforestationData.restricted_imported_meat.color_threshold);
        }
        if(paper) {
          setValue('paperValue', formatToOneDecimal(paper));
          setValue('paperColor', deforestationData.paper_purchases.color_threshold);
        }
        if(coffee) {
          setValue('coffeeValue', formatToOneDecimal(coffee));
          setValue('coffeeColor', deforestationData.coffee_spend.color_threshold);
        }
      }
    }
  };

  useEffect(() => {
    beefData();
    trimmData();
    decreasingDeforestationData();
  },[]);

  const sections = [
    {id: 1, name: t('priotizeHeading', {ns: 'climatePage'}), allowBorder: true, hoverText: t('priotizeHover', {ns: 'climatePage'}), baseStyles: baseStyles, hoveredStyles: hoveredStyles, containerCss: style.containerBlack, itemCss: style.beef, innerItemCss: style.beefBoxes,
      blocks: [
        {
          name: t('beefHeading'), val: beefValue, chart: false, subtitle: t('beefUnit'), hoverText: t('beefHoverDesc', {ns: 'climatePage'}), icons: 'true', customBorder: {'borderLeft': ''}
        },
        {
          name: t('animalHeading'), val: '3.5', chart: false, subtitle: t('beefUnit'), hoverText: t('animalHoverDesc', {ns: 'climatePage'}), icons: 'true',
        },
        {
          name: t('cheeseHeading'), val: '5.5', chart: false, subtitle: t('cheeseRevenue'), hoverText: t('cheeseHover', {ns: 'climatePage'}), icons: 'true',
        },
        {
          name: t('mealHeading'), val: '10.5', chart: false, subtitle: t('MealSpecial'), hoverText: t('vegeterianDesc', {ns: 'climatePage'}), icons: 'true', footerVal: '2.1', footerSubTitle: t('MealSpecial', {ns: 'climatePage'}) 
        },
        {
          name: t('mealWithoutHeading'), val: '12.5', chart: false, subtitle: t('mealWithoutSpecial'),  hoverText: t('veganHoverDesc', {ns: 'climatePage'}), icons: 'true', footerVal: '2.1', footerSubTitle: t('MealSpecial', {ns: 'climatePage'})
        },
      ]},
    {id: 2, name: t('reducingHeading', {ns: 'climatePage'}), allowBorder: true, hoverText: t('reducingHover', {ns: 'climatePage'}), baseStyles: reduceStyles, hoveredStyles: hoveredReduceStyles, containerCss: {...style.containerBlack, ...style.sourceBlack}, itemCss: style.sourceContainer, innerItemCss: style.sorceBoxes,
      blocks: [
      {
        name: t('sourceReduction'), val: '2.5', chart: false, subtitle: t('sourceUnit'), hoverText: t('sourceReductionHover', {ns: 'climatePage'}), icons: 'true', customBorder: {'borderLeft': ''}
      },
      {
        name: t('foodHeading'), val: '2.5', chart: false, subtitle: t('sourceUnit'), hoverText: t('foodHover', {ns: 'climatePage'}), icons: 'true'
      },
      {
        name: t('diversionHeading'), val: '2.5', chart: false, subtitle: t('sourceUnit'), hoverText: t('diversionHover', {ns: 'climatePage'}), icons: 'true'
      }
    ]},
    {id: 3, name: t('decreasingHeading', {ns: 'climatePage'}), allowBorder: true, hoverText: t('decreasingHover', {ns: 'climatePage'}), baseStyles: reduceStyles, hoveredStyles: hoveredReduceStyles, containerCss: {...style.containerBlack, ...style.sourceBlack}, itemCss: style.sourceContainer, innerItemCss: style.sorceBoxes,
      blocks: [
      {
        name: t('spendHeading'), val: meatValue, color: meatColor, hoverText: t('spendHover', {ns: 'climatePage'}), chart: false, icons: 'true', customBorder: {'borderLeft': ''}
      },
      {
        name: t('paperHeading'), val: paperValue, color: paperColor, chartHeading: true, chart: true, hoverText: t('paperHover', {ns: 'climatePage'}), icons: 'true'
      },
      {
        name: t('coffeeHeading'), val: coffeeValue, color: coffeeColor, chartHeading: true, chart: true, hoverText: t('coffeeHover', {ns: 'climatePage'}), icons: 'true'
      }
    ]},
    {id: 3, name: t('trimHeading', {ns: 'climatePage'}), allowBorder: true, hoverText: t('trimHover', {ns: 'climatePage'}), baseStyles: trimStyles, hoveredStyles: hoveredTrimStyles, containerCss: {...style.containerBlack, ...style.trimBlack}, itemCss: style.trimCon, innerItemCss: '',
      blocks: [
      {
        name: t('itemHeading'), val: trimmValue, hoverText: t('itemHover', {ns: 'climatePage'}), chart: false, icons: 'true', customBorder: {'borderLeft': ''}
      }
    ]}
  ];
  
  return (
    <>
      {sections.map((data, sectionIndex) =>
        <Grid container
          key={sectionIndex}
          sx={isHovered === sectionIndex ? data.hoveredStyles : data.baseStyles}
        >
          <Grid item
            key={sectionIndex} 
            onMouseEnter={() => handleMouseOver(sectionIndex)} 
            onMouseLeave={handleMouseOut} 
            sx={data.containerCss}
          >
            <BlackBox
              title={data.name}
              hover={isHovered === sectionIndex} 
              hoverText={data.hoverText}
            />
          </Grid>
          <Grid item sx={{...rootStyle.flex, ...data.itemCss}}>
            {(data.blocks).map((dt, i) =>
              <Grid item
                key={`${sectionIndex}-${i}`} 
                onMouseEnter={() => handleMouseOver(`${sectionIndex}-${i}`)} 
                onMouseLeave={handleMouseOut} 
                sx={data.innerItemCss}
              >
                <BorderBox
                  heading={dt.name}
                  val={dt.val}
                  subtitle={dt.subtitle}
                  hover={isHovered === `${sectionIndex}-${i}`}
                  hoverText={dt.hoverText}
                  icons={dt.icons}
                  customBorder={dt.customBorder}
                  footerVal={dt.footerVal}
                  footerSubTitle={dt.footerSubTitle}
                  chartHeading= {dt.chartHeading}
                  chart= {dt.chart}
                  color= {dt.color}
                />
              </Grid>
            )}
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default ClimateSections;