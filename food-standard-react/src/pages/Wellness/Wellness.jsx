import React, {useState, useEffect} from 'react';
import {GreyParagraph, LineChart, LineChartSection, Banner, BlackBox, BorderBox, PieChart, SunburstChart, DoubleColumnChart} from '../../components';
import {Container, Grid, Typography, List, ListItem, ListItemText, Box} from '@mui/material';
import {useTranslation} from 'react-i18next';
import useStyle from './useStyle';
import useCommonStyle from '../useStyle';
import useRootStyle from '../../useStyle';
import html2canvas from 'html2canvas';
import DownloadIcon from '@mui/icons-material/Download';
import {
  fetchWellnessPlate, fetchWBI, fetchWholeFoodChart
} from 'store/wellness/wellness.thunk';

const Wellness = () => {
  const {t} = useTranslation(['wellnessPage', 'wellnessChartBtn', 'wellnessPlate', 'menuMixChart']);
  const style = useStyle();
  const commonStyle = useCommonStyle();
  const rootStyle = useRootStyle();
  const [isHovered, setIsHovered] = useState(null);
  const handleMouseOver = (id) => setIsHovered(id);
  const handleMouseOut = () => setIsHovered(null);
  const [isBoxHovered, setBoxIsHovered] = useState(null);
  const handleBoxMouseOver = (id) => setBoxIsHovered(id);
  const handleBoxMouseOut = () => setBoxIsHovered(null);
  const [values, setValues] = useState({
    wellnessPlateArray: [],
    wbiDataArray: [],
    wholeFoodChartArray: []
  });
  const btnArr =
    [
      {graphBtn: t('wellnessPlate' , {ns: 'wellnessChartBtn'}), graphBtnChild: []},
      {graphBtn: t('produce', {ns: 'wellnessChartBtn'}), graphBtnChild: []},
      {graphBtn: t('wholeGrains', {ns: 'wellnessChartBtn'}), graphBtnChild: []},
      {graphBtn: t('plantProtein', {ns: 'wellnessChartBtn'}), graphBtnChild: []},
      {graphBtn: t('animalProtein', {ns: 'wellnessChartBtn'}), graphBtnChild: []}
    ];

    const btnArrWbi =
    [
      {graphBtn: t('wbiScore' , {ns: 'wellnessChartBtn'}), graphBtnChild: []},
      {graphBtn: t('menuMix', {ns: 'wellnessChartBtn'}), graphBtnChild: [t('menuMix', {ns: 'wellnessChartBtn'}), t('healthy', {ns: 'wellnessChartBtn'}), t('inBetween', {ns: 'wellnessChartBtn'}), t('indulgent', {ns: 'wellnessChartBtn'})]},
      {graphBtn: t('avgPlate', {ns: 'wellnessChartBtn'}), graphBtnChild: []},
      {graphBtn: t('proteinPlate', {ns: 'wellnessChartBtn'}), graphBtnChild: []}
    ];

    const mobilePlate =
    [
      {icon: 'icon-apple', val: '3.5oz', name: 'Produce', goal: 'GOAL: = 6.5 oz'},
      {icon: 'icon-wheat', val: '3.5oz', name: 'Produce', goal: 'GOAL: = 6.5 oz'},
      {icon: 'icon-milk-glass', val: '3.5oz', name: 'Produce', goal: 'GOAL: = 6.5 oz'},
      {icon: 'icon-drumstick', val: '3.5oz', name: 'Produce', goal: 'GOAL: = 6.5 oz'},
      {icon: 'icon-beans', val: '3.5oz', name: 'Produce', goal: 'GOAL: = 6.5 oz'},
      {icon: 'icon-sugar', val: '3.5oz', name: 'Produce', goal: 'GOAL: = 6.5 oz'},
      {icon: 'icon-oil-bottle', val: '3.5oz', name: 'Produce', goal: 'GOAL: = 6.5 oz'},
      
    ];

    
    const exportImg = () => {
      const capture = document.querySelector(".wellness-plate");
      html2canvas(capture).then((canvas) => {
        const imgData = canvas.toDataURL("image/jpeg");
        const link = document.createElement('a');
        link.href = imgData;
        link.download = 'plate.jpeg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    };
    
    const nonHoverStyles = {
      ...style.border,
      ...style.borderHoverBox
    }
    const hoverStyles = {
      ...nonHoverStyles,
      ...style.hoverBorder
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

    const plateItems = [
      {
        key: "produce",
        label: "PRODUCE",
        amount: "271.9 oz",
        goal: "GOAL: >= 6.5 oz",
        iconClass: "icon-apple",
        sliceStyle: "one",
        centerStyle: "ProduceCenter",
        mobileStyle: "produceMobile",
      },
      {
        key: "wholeGrain",
        st: "wheatText",
        label: "WHOLE GRAINS",
        amount: "271.9 oz",
        goal: "GOAL: >= 6.5 oz",
        iconClass: "icon-wheat",
        sliceStyle: "second",
        centerStyle: "wholeCenter",
        mobileStyle: "wheatFont",
      },
      {
        key: "dairy",
        st: "wheatText",
        label: "DAIRY",
        amount: "271.9 oz",
        goal: "GOAL: >= 6.5 oz",
        iconClass: "icon-milk-glass",
        sliceStyle: "third",
        centerStyle: "wholeCenter",
        mobileStyle: "wheatFont",
      },
      {
        key: "plantProtien",
        st: "animalText",
        label: "PLANT PROTEIN",
        amount: "271.9 oz",
        goal: "GOAL: >= 6.5 oz",
        iconClass: "icon-beans",
        sliceStyle: "fourth",
        centerStyle: "plantCenter",
        mobileStyle: "animalFont",
      },
      {
        key: "animalProtien",
        st: "animalText",
        label: "ANIMAL PROTEIN",
        amount: "271.9 oz",
        goal: "GOAL: >= 6.5 oz",
        iconClass: "icon-drumstick",
        sliceStyle: "fifth",
        centerStyle: "animalCenter",
        mobileStyle: "animalFont",
      },
      {
        key: "sugar",
        st: "sugarText",
        label: "SUGAR",
        amount: "271.9 oz",
        goal: "GOAL: >= 6.5 oz",
        iconClass: "icon-sugar",
        sliceStyle: "fifth",
        centerStyle: "sugarCenter",
        mobileStyle: "sugarFont",
      },
      {
        key: "plantOil",
        st: "sugarText",
        label: "PLANT OIL",
        amount: "271.9 oz",
        goal: "GOAL: >= 6.5 oz",
        iconClass: "icon-oil-bottle",
        sliceStyle: "fifth",
        centerStyle: "sugarCenter",
        mobileStyle: "sugarFont",
      },
    ];

    const wellnessPlateData = async() => {
      let data = await fetchWellnessPlate();
      if(data) {
        setValue('wellnessPlateArray', data);
      }        
    };

    const wbiData = async() => {
      let data = await fetchWBI();
      if(data) {
        setValue('wbiDataArray', data);
      }        
    };

    const wholeFoodChart = async() => {
      let data = await fetchWholeFoodChart();
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
        setValue('wholeFoodChartArray', chartData);      
      }          
    };
    
    const setValue = (key, value) => {
      setValues(prevValues => ({ ...prevValues, [key]: value }));
    };
    const { wellnessPlateArray, wbiDataArray, wholeFoodChartArray} = values;
    
  const sections = [
    {id: 1, name: t('healthyMenu', {ns: 'wellnessPage'}), allowBorder: true, hoverText: t('healthyMenuHover', {ns: 'wellnessPage'}), baseStyles: nonHoverStyles, hoveredStyles: hoverStyles,
      blocks: [
        {
          name: t('wellBeingHeading'), val: wbiDataArray?.wbi?.value ? wbiDataArray.wbi.value : 'loading', subtitle: t('wellBeingSbtitle'), hoverText: t('wellBeingHover', {ns: 'wellnessPage'}), 
          footerVal: wbiDataArray?.wbi?.value_max != null && wbiDataArray?.wbi?.value_min != null
          ? (wbiDataArray.wbi.value_min - wbiDataArray.wbi.value_max)
          : 'loading', 
          footerSubTitle: t('wellBeingFooter', {ns: 'wellnessPage'}), customBorder: {'borderLeft': ''}
        },
        {
          name: t('caloriesHeading'), val: wbiDataArray?.calories?.value ? wbiDataArray.calories.value : 'loading', subtitle: t('caloriesSbtitle'), hoverText: t('caloriesHover', {ns: 'wellnessPage'}),
          footerVal: wbiDataArray?.calories?.value_max != null && wbiDataArray?.calories?.value_min != null
          ? (wbiDataArray.calories.value_min - wbiDataArray.calories.value_max)
          : 'loading', 
          footerSubTitle: t('caloriesFooter', {ns: 'wellnessPage'})
        },
      ]},
    {id: 2, name: t('healthyCooking', {ns: 'wellnessPage'}), allowBorder: true, hoverText: t('healthyCookingHover', {ns: 'wellnessPage'}), baseStyles: nonHoverHealthyStyle, hoveredStyles: hoverHealthyStyle,
      blocks: [
      {
        name: t('sodiumHeading', {ns: 'wellnessPage'}), val: wbiDataArray?.sodium?.value ? wbiDataArray.sodium.value : 'loading', subtitle: t('sodiumSubtitle'),
        footerVal: wbiDataArray?.sodium?.value_max != null && wbiDataArray?.sodium?.value_min != null
        ? (wbiDataArray.sodium.value_min - wbiDataArray.sodium.value_max)
        : 'loading',
        footerSubTitle: t('sodiumFooter', {ns: 'wellnessPage'}), hoverText: t('sodiumHover', {ns: 'wellnessPage'}), customBorder: {'borderLeft': ''}
      },
      {
        name: t('sugarHeading', {ns: 'wellnessPage'}), val: wbiDataArray?.sugar?.value ? wbiDataArray.sugar.value : 'loading', subtitle: t('sugarSbtitle'), 
        footerVal: wbiDataArray?.sugar?.value_max != null && wbiDataArray?.sugar?.value_min != null
        ? (wbiDataArray.sugar.value_min - wbiDataArray.sugar.value_max)
        : 'loading',
        footerSubTitle: t('sugarFooter', {ns: 'wellnessPage'}), hoverText: t('sugarHover', {ns: 'wellnessPage'})
      }
    ]}
  ];
  useEffect(() => {
    wellnessPlateData();
    wbiData();
    wholeFoodChart();
  },[]);
  var wbiMenuMix = wbiDataArray.wbi ? wbiDataArray.wbi.menu_mix : "";
  var wbiArr = [];
  if(wbiMenuMix) {
    wbiArr = [{
      id:  '1',
      name: t('healthy' , {ns: 'menuMixChart'}),
      toolValue: wbiMenuMix.green.inner_percentage,
      color: "#63BF87"
    }, {
      id: '2',
      name: t('between' , {ns: 'menuMixChart'}),
      toolValue: wbiMenuMix.yellow.inner_percentage,
      color: "#EFEF71"
    }, {
      id: '3',
      name: t('indulgent' , {ns: 'menuMixChart'}),
      toolValue: wbiMenuMix.red.inner_percentage,
      color: "#E35E56"
    }, {
      id: '1.1',
      parent: '1',
      name: t('healthy' , {ns: 'menuMixChart'}),
      value: wbiMenuMix.green.inner_percentage,
      toolValue: wbiMenuMix.green.outer_value,
      color: "#63BF87"
    }, {
      id: '2.1',
      parent: '2',
      name: t('between' , {ns: 'menuMixChart'}),
      value: wbiMenuMix.yellow.inner_percentage,
      toolValue: wbiMenuMix.yellow.outer_value,
      color: "#EFEF71"
    }, {
      id: '3.1',
      parent: '3',
      name: t('indulgent' , {ns: 'menuMixChart'}),
      value: wbiMenuMix.red.inner_percentage,
      toolValue: wbiMenuMix.red.outer_value,
      color: "#E35E56"
    }];
  }
  
  return (
    <> 
      <GreyParagraph text={t('paragraph', {ns: 'wellnessPage'})} />
      <Container sx={commonStyle.mainConatiner}>
        <Grid container sx={commonStyle.container}>
          <Grid sx={rootStyle.borderBox}>
            <Grid container sx={style.wrapBox}>
              <Grid sx={style.plateDescPadding} className='wellness-plate'>
                <Typography sx={{...rootStyle.plateHeading, ...rootStyle.mobileHide}} variant='h6'>{t('plateHeading', {ns: 'wellnessPage'})}</Typography>
                <Grid item sx={{...style.plateImage}} className="icon-plate"></Grid>
                <Grid item >
                  <Box sx={style.plate}>
                    <Box sx={style.innerPlate}>
                      {plateItems.map((item) => (
                        <Box key={item.key} sx={{ ...style.plateItem, ...style[item.key] }}>
                          <Box sx={{ ...style[item.sliceStyle], ...style.slice }}></Box>
                          <Box sx={{ ...style.chartCenter, ...style[item.centerStyle] }}>
                            <Box component="span" sx={style.plateText}>
                              <Box sx={{...style.plateContent,...(item.st ? style[item.st] : {})}}>
                                <Box component="span">{item.label}</Box>
                                <Box component="span" sx={(item.key !== 'produce' ? style[`${item.mobileStyle}`] : {})}>{item.amount}</Box>
                                <Box component="span">{item.goal}</Box>
                                <Box component="span" sx={(item.key !== 'produce' ? style[`${item.mobileStyle}`] : {})} className={item.iconClass}></Box>
                              </Box>
                            </Box>
                            <Box component="span" sx={{...style.mobilePltIcon,...style.mobilePlateText,...style[`${item.mobileStyle}`],}} className={item.iconClass}></Box>
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Box sx={rootStyle.mobileShow}>
                {mobilePlate.map((data, plate) => 
                  <Box key={plate} sx={style.tableRow}>
                    <Box className={data.icon}></Box>
                    <Box >{data.val}</Box>
                    <Box >{data.name}</Box>
                    <Box >{data.goal}</Box>
                  </Box> 
                )}
              </Box>
              <Grid item sx={{...style.plateDesc, ...style.plateDescPadding}}>
              <Typography sx={{...rootStyle.plateHeading, ...rootStyle.mobileShow}} variant='h6'>{t('plateHeading', {ns: 'wellnessPage'})}</Typography>
                <Grid item sx={{ ...style.plateDesc, ...style.listPadding }} >{t('plateDesc', {ns: 'wellnessPage'})}</Grid>
                <List sx={{listStyleType: 'disc'}}>{t('plateList', {ns: 'wellnessPage'})}
                  <ListItem sx={{display: 'list-item', ...style.list, ...style.plateDesc}}>
                    <ListItemText primary={t('plateList1', {ns: 'wellnessPage'})} />
                  </ListItem>
                  <ListItem sx={{display: 'list-item', ...style.list, ...style.plateDesc}}>
                    <ListItemText primary={t('plateList2', {ns: 'wellnessPage'})} />
                  </ListItem>
                  <ListItem sx={{display: 'list-item', ...style.list, ...style.plateDesc}}>
                    <ListItemText primary={t('plateList3', {ns: 'wellnessPage'})} />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
            <Typography sx={{...style.plateDesc, ...style.recommendText, ...rootStyle.mobileHide}}>{t('recommendDesc', {ns: 'wellnessPage'})}</Typography>
           <DownloadIcon sx={style.dIcon} onClick={exportImg}></DownloadIcon>
          </Grid>
          <Grid sx={{...rootStyle.borderBox, ...rootStyle.marginBtm, ...rootStyle.mobileHide}}>
            <Typography sx={{...rootStyle.plateHeading, ...rootStyle.commonHeading}} variant='h6'>{t('trend', {ns: 'commonHeadings'})}</Typography>
            <Grid item><LineChart btnArray={btnArr}/></Grid>
          </Grid>
        </Grid>
      </Container>
      {/* WBI Section */}
      <Grid sx={rootStyle.mobileHide} className="WBI-section-container">
        <Banner text={t("wellBeing", { ns: "bannerText" })} className="change-text" />
        <GreyParagraph text={t('wbiParagraph', {ns: 'wellnessPage'})} padding='true'/>
        <Container sx={{...commonStyle.mainConatiner, ...rootStyle.mobileHide}}>
          <Grid container sx={commonStyle.container}>
            <Grid container sx={style.heatlhyContainer} onMouseLeave={handleMouseOut}>
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
              <Grid container sx={(isHovered === 0) ? ({...style.border, ...style.hoverBorder, ...style.chartBox}) : ({...style.border, ...style.chartBox})} >
                <Grid container sx={style.whiteStrip}></Grid>
                <Grid item sx={style.sunBurstChart}>
                  <SunburstChart data={wbiArr}/>
                </Grid>
              </Grid>
            </Grid>
            {/* Whole food */}
            <Grid container>
              <Grid container sx={(isHovered === 3) ? ({...style.wholeFood, ...style.hoverBorder}) : ({...style.wholeFood})} onMouseOut={handleMouseOut}>
                <Grid item sx={{...style.containerBlack, ...style.wholeContainer}} onMouseEnter={() => handleMouseOver(3)}>
                  <BlackBox title={t('wholeFood', {ns: 'wellnessPage'})} hover={isHovered === 3} hoverText={t('wholeFoodHover', {ns: 'wellnessPage'})}/>
                </Grid>
                <Grid container>
                  <Grid container sx={style.avgBoxs}>
                    <Grid item sx={style.avgBox} onMouseEnter={() => handleBoxMouseOver('veg')} onMouseLeave={handleBoxMouseOut}>
                      <BorderBox sx={style.avgBoxs} heading={t('avgVege', {ns: 'wellnessPage'})} customBorder={{'borderLeft': ''}} val={wbiDataArray?.fruits_vegetables?.weight ? wbiDataArray.fruits_vegetables.weight : 'loading'} subtitle={t('avgVegeSubtitle', {ns: 'wellnessPage'})} hover={isBoxHovered === 'veg'} hoverText={t('avgVegeHover', {ns: 'wellnessPage'})}/>
                    </Grid>
                    <Grid item sx={style.avgBox} onMouseEnter={() => handleBoxMouseOver('pro')} onMouseLeave={handleBoxMouseOut}>
                      <BorderBox sx={style.avgBoxs} heading={t('avgProtin', {ns: 'wellnessPage'})} val={wbiDataArray?.plant_protein?.weight ? wbiDataArray.plant_protein.weight : 'loading'} subtitle={t('avgProtinSubtitle', {ns: 'wellnessPage'})} hover={isBoxHovered === 'pro'} hoverText={t('avgProtinHover', {ns: 'wellnessPage'})}/>
                    </Grid>
                    <Grid item sx={style.avgBox} onMouseEnter={() => handleBoxMouseOver('well')} onMouseLeave={handleBoxMouseOut}>
                      <BorderBox sx={style.avgBoxs} heading={t('wholeGrainHeading', {ns: 'wellnessPage'})} val={wbiDataArray?.whole_grain?.items_with ? wbiDataArray.whole_grain.items_with : 'loading'} subtitle={t('wellBeingSbtitle', {ns: 'wellnessPage'})} footerVal={wbiDataArray?.whole_grain?.whole_grain_percentage ? wbiDataArray.whole_grain.whole_grain_percentage + '%' : 'loading'} footerSubTitle={t('wholeGrainFooter', {ns: 'wellnessPage'})} wholeFood={wbiDataArray?.whole_grain?.items_without ? wbiDataArray.whole_grain.items_without : 'loading'} hover={isBoxHovered === 'well'} hoverText={t('wholeGrainHover', {ns: 'wellnessPage'})}/>
                    </Grid>
                  </Grid>
                  <Grid container sx={style.proteinBox}>
                    <DoubleColumnChart data={wholeFoodChartArray}/>
                    <Grid item sx={style.gredientBar}>
                      <Box component="div" sx={{...style.serveLess, ...style.serve}}>
                        {t('serverLess', {ns:'commonHeadings'})}
                      </Box>
                      <Box component="div" sx={{...style.serveMore, ...style.serve}}>
                        {t('serverMore', {ns:'commonHeadings'})}
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <LineChartSection btnArray={btnArr} />
          </Grid>
        </Container>
      </Grid>
    </>
  );
};
export default Wellness;
