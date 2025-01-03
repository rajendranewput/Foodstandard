import React, {useState, useEffect} from 'react';
import {Container, Grid, Typography, List, ListItem, ListItemText, Box} from '@mui/material';
import {GreyParagraph, Banner, BlackBox, BorderBox, DoubleColumnChart, LineChartSection, BreakdownAnimalPieChart} from '../../components';
import {useTranslation} from 'react-i18next';
import useStyle from './useStyle';
import useCommonStyle from '../useStyle';
import useRootStyle from '../../useStyle';
import {
  fetchEmphasize
} from 'store/plant/plant.thunk';

const PlantForward = () => {
  const {t} = useTranslation(['plantPage', 'wellnessChartBtn']);
  const style = useStyle();
  const commonStyle = useCommonStyle();
  const rootStyle = useRootStyle();
  const [isHovered, setIsHovered] = useState(null);
  const handleMouseOver = (id) => setIsHovered(id);
  const handleMouseOut = () => setIsHovered(null);
  const [values, setValues] = useState({
    emphasizeArray: [],
  });
  const btnArr =
    [
      {graphBtn: t('beefMeal', {ns: 'wellnessChartBtn'}), graphBtnChild: []},
      {graphBtn: t('animalMeal', {ns: 'wellnessChartBtn'}), graphBtnChild: []},
      {graphBtn: t('animalPalnt'), graphBtnChild: [t('weight'), t('spend')]},
      {graphBtn: t('animalProtein'), graphBtnChild: []},
      {graphBtn: t('produceSpend'), graphBtnChild: []}
    ];
  const nonHoverStyles = {
    ...style.emphasize,
    ...rootStyle.mobileHide
  }
  const hoverStyles = {
    ...nonHoverStyles,
    ...style.emphasizeHover
  }
  const nonHoverHealthyStyle = {
    ...style.border,
    ...style.borderHoverBox,
    ...style.marginTop
  }
  const hoverHealthyStyle = {
    ...nonHoverHealthyStyle,
    ...style.hoverBorder,
    ...style.marginTop
  }
  const emphasizeData = async() => {
    let data = await fetchEmphasize();
    if(data) {
      var barChartData = data.bar_chart_data[0];
      
      const redColor = "#FA6F67";
      const greenColor = "#63BF87";

      // Extract data from barChartData
      const beefLamb = barChartData?.beef_lamb_pork || null;
      const poultry = barChartData?.poultry || null;
      const dairy = barChartData?.dairy || null;
      const eggs = barChartData?.eggs || null;
      const seaFood = barChartData?.fish_seafood || null;
      const protein = barChartData?.plant_protien || null;
    
      // Format the data for the chart
      const chartData = [
        {
          y: beefLamb !== null ? parseInt(beefLamb) : null,
          color: redColor,
        },
        {
          y: poultry !== null ? parseInt(poultry) : null,
          color: redColor,
        },
        {
          y: dairy !== null ? parseInt(dairy) : null,
          color: redColor,
        },
        {
          y: eggs !== null ? parseInt(eggs) : null,
          color: redColor,
        },
        {
          y: seaFood !== null ? parseInt(seaFood) : null,
          color: redColor,
        },
        {
          y: protein !== null ? parseInt(protein) : null,
          color: greenColor,
        },
      ];
                   
      setValue('emphasizeArray', chartData);
    }
  };
  const setValue = (key, value) => {
    setValues(prevValues => ({ ...prevValues, [key]: value }));
  };
  const { emphasizeArray} = values;

  const sections = [
    {id: 1, name: t('animalFood', {ns: 'plantPage'}), allowBorder: true, hoverText: t('animalFoodHover', {ns: 'plantPage'}), baseStyles: nonHoverStyles, hoveredStyles: hoverStyles,
      blocks: [
        {
          name: t('beefMeal'), val: '2.5', subtitle: t('beefMealUnit'), hoverText: t('beefMealHover', {ns: 'plantPage'}), customBorder: {'borderLeft': ''}
        },
        {
          name: t('animalMeal'), val: '3.5', subtitle: t('animalMealUnit'), hoverText: t('animalMealHover', {ns: 'plantPage'})
        },
      ]},
    {id: 2, name: t('plantsFoundation', {ns: 'plantPage'}), allowBorder: true, hoverText: t('plantsFoundationHover', {ns: 'plantPage'}), baseStyles: nonHoverHealthyStyle, hoveredStyles: hoverHealthyStyle,
      blocks: [
      {
        name: t('mealVegetarian', {ns: 'plantPage'}), val: '2.5', subtitle: '', footerVal: '2.1', footerSubTitle: t('mealVegetarianUnit', {ns: 'plantPage'}), hoverText: t('mealVegetarianHover', {ns: 'plantPage'}), customBorder: {'borderLeft': ''}
      },
      {
        name: t('mealVegan', {ns: 'plantPage'}), val: '2.5', subtitle: '', footerVal: '2.2', footerSubTitle: t('mealVeganUnit', {ns: 'plantPage'}), hoverText: t('mealVeganHover', {ns: 'plantPage'})
      }
    ]}
  ];

  useEffect(() => {
    emphasizeData();
  },[]);

  return (
    <> 
      <GreyParagraph text={t('paragraph', {ns: 'plantPage'})} />
      <Container sx={commonStyle.mainConatiner}>
        <Grid container sx={commonStyle.container}>
          <Grid container onMouseLeave={handleMouseOut}>
            <Grid container sx={style.flexDirection}>
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
                      sx={style.containerBlack}
                    >
                      <BlackBox
                        title={data.name}
                        hover={isHovered === sectionIndex} 
                        hoverText={data.hoverText}
                      />
                    </Grid>
                    <Grid item sx={{...rootStyle.flex, ...style.cor}}>
                      {(data.blocks).map((dt, i) =>
                        <Grid item
                          key={`${sectionIndex}-${i}`} 
                          onMouseEnter={() => handleMouseOver(`${sectionIndex}-${i}`)} 
                          onMouseLeave={handleMouseOut} 
                          sx= {style.halfWidth}
                        >
                          <BorderBox
                            heading={dt.name}
                            val={dt.val}
                            subtitle={dt.subtitle}
                            hover={isHovered === `${sectionIndex}-${i}`}
                            hoverText={dt.hoverText}
                            customBorder={dt.customBorder}
                            footerVal={dt.footerVal}
                            footerSubTitle={dt.footerSubTitle}
                          />
                        </Grid>
                      )}
                    </Grid>
                  </Grid>
                )}
              </>
            </Grid>
            <Grid container sx={(isHovered === 0 || isHovered === 1) ? ({...style.border, ...style.hoverBorder, ...style.chartBox}) : ({...style.border, ...style.chartBox})} >
              <Grid container sx={(isHovered === 0) ? (style.whiteStrip) : ({...style.whiteStrip, ...style.break})}></Grid>
              <Grid id="breakdown-animal-pie-chart" item sx={style.sunBurstChart}>
                <BreakdownAnimalPieChart />
              </Grid>
            </Grid>
          </Grid> 
          {/* same section created bcz it will change according to client design */}
          <Grid container sx={(isHovered === 2) ? ({...hoverStyles, ...style.emphasizeSec}) : ({...nonHoverStyles, ...style.emphasizeSec})}>
            <Grid item sx={{...style.containerBlack, ...style.emphasizeContainer}} onMouseEnter={() => handleMouseOver(2)} onMouseLeave={handleMouseOut}>
              <BlackBox title={t('emphasizeHeading', {ns: 'plantPage'})} hover={isHovered === 2} hoverText={t('emphasizeHover', {ns: 'plantPage'})}/>
            </Grid>
            <Grid container sx={{...style.proteinBox, ...style.emphasizeChart}}>
              <DoubleColumnChart sx={style.gredientBar} data={emphasizeArray}/>
              <Grid item sx={style.gredientBar}>
                <Box component="div" sx={{...style.serveLess, ...style.serve}}>
                  {t('serverLess', {ns: 'commonHeadings'})}
                </Box>
                <Box component="div" sx={{...style.serveMore, ...style.serve}}>
                  {t('serverMore', {ns: 'commonHeadings'})}
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <LineChartSection btnArray={btnArr} />
        </Grid>
      </Container>
    </>
  )
}

export default PlantForward;
