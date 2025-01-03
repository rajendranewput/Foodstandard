import React, {useEffect, useState} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {Container, Button, ButtonGroup} from '@mui/material';
import useStyle from './useStyle';
import {useTranslation} from 'react-i18next';
import {colors} from 'theme/colors';

Highcharts.setOptions({
  colors: [colors.red, colors.greyBg]
}); 

const LineChart = (props) => {
    const {t} = useTranslation(['wellnessChartBtn']);
    const style = useStyle();
    const [buttonColor, setButtonColor] = useState(-1);
    const [showButton, setHideButton] = useState(-1);
    const [isChildButton, setChildButton] = useState(-1);
    useEffect(() => {
      // Update chart options when necessary
    }, []);
    
    const handleCategoryChange = (index, val, isChild) => {
      setButtonColor(index)
      setHideButton(val)
      setChildButton(isChild)
      // You can update the chart options or perform other actions based on the selected category
    };
    const options = {
      title: {
        text: ''
      },
      credits: {
        enabled: false
      },
      series: [
        {
          data: [1, 2, 3, 4, 5],
          name: 'Sample Series',
        },
      ],
    };
   
    return (
      <Container sx={style.container}>
       {props && props.btnArray ? (
          <>
            <ButtonGroup sx={style.btnList}>
              {props.btnArray.map((btn, index) => (
                <Button key={index} sx={(index === buttonColor || showButton === btn.graphBtn) && (!isChildButton || showButton === btn.graphBtn) ? { ...style.chartBtn, ...style.temp } : style.chartBtn} onClick={() => handleCategoryChange(index, btn.graphBtn)}>
                  {btn.graphBtn}
                </Button>
              ))}
            </ButtonGroup>

            {props.btnArray.map((btn, index) => (
              btn.graphBtnChild && (showButton === btn.graphBtn)  && (
                <ButtonGroup key={`childGroup-${index}`}>
                  {btn.graphBtnChild.map((childBtn, childIndex) => (
                    <Button key={childIndex} sx={(childIndex === buttonColor && childIndex === childIndex) ? { ...style.chartBtn, ...style.temp } : style.chartBtn} onClick={() => handleCategoryChange(childIndex, btn.graphBtn, 'true')}>
                      {childBtn}
                    </Button>
                  ))}
                </ButtonGroup>
              )
            ))}
          </>
        ) : (
          ''
        )}
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Container>
    );
};
export default LineChart;