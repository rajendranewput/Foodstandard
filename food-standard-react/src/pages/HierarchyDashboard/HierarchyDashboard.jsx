import {Box, Button, Container, Grid, Radio, Typography} from '@mui/material';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import Switch from '@mui/material/Switch';
import headerLogo from 'assets/images/food-dashboard-logo.png';
import useStyle from './useStyle';
import useCommonStyle from '../useStyle';
import {FormGroup, FormControlLabel} from '@mui/material';
import {Accordion,
  AccordionDetails,
  AccordionSummary,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AutoComplete from './AutoComponent';
import CommonDropdown from './CommonDropdown';
import GridModal from 'components/Menus/GridModal';
import {TABLE_HEADER,
  TABLE_BODY,
  FY_OPTIONS,
  CAKE_OPTIONS, ENDFY_OPTIONS, PERIOD_OPTIONS, ENDPERIOD_OPTIONS} from 'constants/index';
import HierarchyAdminView from "./HierarchyAdminView";
import Sap from "./Sap";
import { saveAs } from 'file-saver';
import axios from 'axios';
import axiosInstance, {microServices} from '../../network/apis';

function FoodDashboard() {
  const style = useStyle();
  const commonStyle = useCommonStyle();
  const { t } = useTranslation(['foodDashboard']);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [show, setShow] =  useState(null);
  const [pdShow, setPdShow] =  useState(null);
  const [contentVisible, setContentVisible] = useState(true);

  const handleSwitchChange = async () => { 
    setContentVisible(!contentVisible);
    if (contentVisible) {
      try {
        const response = await axiosInstance('post', '/sap-hierarchy', {});
        let sapData = localStorage.getItem('sapData');
        if(!sapData && response) {
          localStorage.setItem('sapData', JSON.stringify(response.data));
        }
      } catch (error) {
        console.error(error);
      }
    }
};
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [errorDropdown, setErrorDropdown] = useState(null); // Track which dropdown should show the error message

  const handleDropdownChange = (dropdown, value) => {
      if (dropdown === 'startDate') {
          setStartDate(value); 
          setErrorDropdown('startDate');
      } else {
          setShow(value);
          setErrorDropdown('endDate');
      }
  };
  const handlePeriodDropdownChange = (dropdown, value) => {
    if (dropdown === 'startDate') {
      setPdShow(value);
        setErrorDropdown('startDate');
    } else {
      setEndDate(value);
      setErrorDropdown('endDate');
    }
};

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleRadioChange = (id) => {
    setSelectedOption(id);
    if (
      id === 'Missing Customer Count' ||
      id === 'TONS CO2E' ||
      id === 'Beef Per Meal' ||
      id === 'Animal Proteins Per Meal' ||
      id === 'Animal and Plant Purchases by Weight'
    ) {
      setSelectedCategory(null);
      setEndDate(null);
      setStartDate(null);
    }
  };

  const handleFyChange = (event, value) => {
    setSelectedCategory(value.label);
  };

  const handleRunReport = async () => {
    try {
      if (selectedOption === 'Google Analytics CSV') {
        const startDateParts = startDate.date.split('/');
        const endDateParts = endDate.date.split('/');
        const requestData = {
          // start_date: startDate ? startDateParts[2] + '-' + startDateParts[0] + '-' + startDateParts[1] : null,
          // end_date: endDate ? endDateParts[2] + '-' + endDateParts[0] + '-' + endDateParts[1] : null,
        };

        try {
          const response = await axiosInstance('get', '/download-csv-report', requestData);
          const blob = new Blob([response], { type: "text/csv;charset=utf-8;" });
          saveAs(blob, "Google_Analytics.csv");
        } catch (error) {
          throw error;
        }
      }
    } catch (error) {
      console.error('Error downloading CSV report:', error);
    }
  };

  return (
    <Container sx={commonStyle.mainConatiner}>
      <Grid container sx={{...commonStyle.container, ...style.mainContain}}>
        <Grid container item lg={8} alignItems='center'>
          <Grid item>
            <img src={headerLogo} alt='headerLogo' />
          </Grid>
          <Grid item sx={style.gridSection}>
            {t('firstSection', { ns: 'foodDashboard' })}
            <br />
            {t('secondSection', { ns: 'foodDashboard' })}
          </Grid>
        </Grid>
        <Grid item sx={style.iconGrid} lg={4}>
          <Box sx={style.iconHeight}>
            <Typography
              className='icon-grid'
              sx={style.iconGrid}
              onClick={handleOpenModal}
            ></Typography>
          </Box>
          <GridModal
            openModal={openModal}
            handleCloseModal={handleCloseModal}
          />
        </Grid>
        <Grid container>
          <HierarchyAdminView />
        </Grid>
        <Grid container sx={style.fContainer}>
          <Grid item>
            <Box sx={style.foodSap}>{t('sap', { ns: 'foodDashboard' })}</Box>
          </Grid>
          <Grid item>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch sx={{ ...style.switch, m: 2 }} 
                  checked={contentVisible}
              onChange={handleSwitchChange}
                  />
                }
              />
            </FormGroup>
          </Grid>
          <Grid item>
            <Box sx={style.foodSap}>{t('fs', { ns: 'foodDashboard' })}</Box>
          </Grid>
          <Grid container item lg={12}>
            <Accordion sx={style.accordion}>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon sx={style.mExpand} />}
                sx={{ ...style.aSummary }}
              >
                <Typography sx={style.fWeight}>
                  {t('report', { ns: 'foodDashboard' })}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={2}>
                  <Grid item lg={6}>
                    <TableContainer sx={style.tContainer}>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell sx={style.tCell}></TableCell>
                            {TABLE_HEADER.map((header) => (
                              <TableCell key={header.name}>
                                {header.name}
                              </TableCell>
                            ))}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {TABLE_BODY.map((row) => (
                            <TableRow key={row.id}>
                              <TableCell style={style.tCell}>
                                <Radio
                                  checked={selectedOption === row.CName}
                                  onChange={() => handleRadioChange(row.CName)}
                                  sx={style.rdio}
                                />
                              </TableCell>
                              <TableCell>{row.CName}</TableCell>
                              <TableCell>{row.Description}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                  <Grid item lg={4} sx={style.gridSelection}>
                    {(selectedOption === 'Missing Customer Count' ||
                      selectedOption === 'Reported Purchasing Data' ||
                      selectedOption === 'Beef Per Meal' ||
                      selectedOption === 'TONS CO2E' ||
                      selectedOption === 'Animal Proteins Per Meal' ||
                      selectedOption ===
                        'Animal and Plant Purchases by Weight' ||
                      selectedOption ===
                      'Google Analytics CSV' ) && (
                      <Grid container item lg={12} spacing={1} height='170px'>
                        <Grid item lg={6}>
                          <Box sx={style.mainBox}>
                            <Typography sx={{...style.selectDate, ...style.fSize}}>
                              {t('selection', { ns: 'foodDashboard' })}
                            </Typography>
                            <Typography sx={{...style.selectDate, ...style.fyTop}} textAlign="center">
                              {t('startDate', { ns: 'foodDashboard' })}
                            </Typography>
                          </Box>
                          <Box sx={{ ...style.mainContainer, ...style.fyPeriodBox }}>
                            <CommonDropdown
                                fyOptions={FY_OPTIONS}
                                handleDropdownChange={handleDropdownChange}     
                                dropdown="startDate"
                                label={t('fy', { ns: 'dashboardReport' })}
                            ></CommonDropdown>
                            <CommonDropdown
                              handleDropdownChange={handleDropdownChange}
                              fyOptions={PERIOD_OPTIONS}
                              dropdown="endDate" 
                              label={t('period', { ns: 'dashboardReport' })}
                            ></CommonDropdown>
                          </Box>
                          {((errorDropdown === 'startDate') && startDate && startDate.date) ? <Typography id="selected-start-date" sx={style.startDate}>{startDate.date}</Typography> : (show && show.date && <Typography sx={style.startDate}>{show.date}</Typography>)}
                        
                          {((errorDropdown === 'startDate' && startDate && endDate && startDate.label > endDate.label) || (errorDropdown === 'endDate' && show && pdShow && show.label > pdShow.label)) && <Typography sx={style.error}> {t('startMessage', { ns: 'foodDashboard' })}</Typography>}
                              
                        </Grid>
                        <Grid item lg={6}>
                          <Box sx={{ ...style.mainBox, ...style.endTop,}}>
                            <Typography sx={{...style.selectDate, ...style.fSize}}>
                            </Typography>
                            <Typography sx={{...style.selectDate, ...style.fyTop}} textAlign='center'>
                              {t('endDate', { ns: 'foodDashboard' })}
                            </Typography>
                          </Box>
                          <Box className="fiscal-box" sx={{ ...style.mainContainer, ...style.fyPeriodBox}}>
                            <CommonDropdown
                                fyOptions={ENDFY_OPTIONS}
                              handleDropdownChange={handlePeriodDropdownChange}
                              dropdown="endDate"
                              label={t('fy', { ns: 'dashboardReport' })}
                            ></CommonDropdown>
                            <CommonDropdown
                              handleDropdownChange={handlePeriodDropdownChange}
                              fyOptions={ENDPERIOD_OPTIONS}
                              dropdown="startDate" 
                              label={t('period', { ns: 'dashboardReport' })}
                            ></CommonDropdown>
                          </Box>
                          {((errorDropdown === 'endDate') && endDate && endDate.date) ? <Typography id="selected-end-date" sx={style.startDate}>{endDate.date}</Typography> : (pdShow && pdShow.date && <Typography id="selected-end-date" sx={style.startDate}>{pdShow.date}</Typography>)}
                            { ((errorDropdown === 'endDate' && startDate && endDate && startDate.label > endDate.label) ||
                        (errorDropdown === 'startDate' && show && pdShow && show.label > pdShow.label)) ? <Typography sx={style.error}>{t('endMessage', { ns: 'foodDashboard' })}</Typography>: ( (startDate && !endDate) ? <Typography sx={style.error}>{t('emptyMessage', { ns: 'foodDashboard' })}</Typography>:'')}          
                        </Grid>
                      </Grid>
                    )}
                    {selectedOption === 'Reported Purchasing Data' && (
                      <Grid container item lg={12} spacing={3}>
                        <Grid item lg={5.5}>
                          <Box>
                            <Box sx={style.mainBox}>
                              <Typography sx={{...style.selectDate, ...style.fSize}}>
                                {t('category', { ns: 'foodDashboard' })}
                              </Typography>
                              <Typography
                                sx={style.selectDate}
                                textAlign='center'
                              >
                                {t('mfrItemParentCategory', { ns: 'foodDashboard' })}
                              </Typography>
                            </Box>
                            <Box sx={style.mTop}>
                              <AutoComplete
                                onChange={(e, label) => handleFyChange(e, label)}
                                options={CAKE_OPTIONS}
                                sx={style.pCategory}
                              />
                                {(((errorDropdown === 'endDate' || errorDropdown === 'startDate') && startDate && endDate && (startDate.label <= endDate.label) && !!!selectedCategory))&& <Typography sx={style.error}>{t('categoryError', { ns: 'foodDashboard' })}</Typography>}
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item lg={5}>
                          <Box sx={style.mTop}>
                            <Box sx={style.mainBox}>
                              <Typography sx={style.selectDate}>
                                {t('mfrItemParentCategory', { ns: 'foodDashboard' })}
                              </Typography>
                            </Box>
                            <Box sx={style.mTop}>
                              <AutoComplete
                                options={CAKE_OPTIONS}
                                sx={style.pCategory}
                              />
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>
                    )}
                  </Grid>
                  <Grid item lg={2} sx={style.iconTop}>
                    {(selectedOption === 'Waste Programs Profile - Detail' ||
                      selectedOption === 'Waste Programs Profile - Summary' ||
                      (selectedOption === 'Missing Customer Count' || selectedOption ===
                      'Google Analytics CSV'  && startDate && endDate && startDate.label <= endDate.label) ||
                      (startDate && endDate && selectedCategory && startDate.label <= endDate.label)) && (
                      <>
                        <Button
                          id="run-report"
                          variant='contained'
                          sx={{ ...style.rReport, ...style.cReport }}
                          onClick={handleRunReport}
                        >
                          {t('runReport', { ns: 'foodDashboard' })}
                        </Button>
                        <Button
                          variant='contained'
                          sx={{ ...style.cancel, ...style.cReport }}
                        >
                          {t('cancel', { ns: 'foodDashboard' })}
                        </Button>
                      </>
                    )}
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
          {/* sector page */}
          <Grid container item lg={12}>
            <Accordion sx={style.accordion}>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon sx={style.mExpand} />}
                sx={{ ...style.aSummary }}
              >
                <Typography sx={style.fWeight}>
                  {" "}
                  {t('RollUp', { ns: 'foodDashboard' })}
                </Typography>
              </AccordionSummary>
              {contentVisible && (
              <AccordionDetails>
                <Grid
                  container
                  spacing={1}
                  sx={{ padding: "20px 5px" }}
                >
                  <Grid item>
                    <AutoComplete
                      options={CAKE_OPTIONS}
                      sx={style.sectorCategory}
                      label={t('sector', { ns: 'foodDashboard' })}
                    />
                  </Grid>
                  <Grid item>
                    <AutoComplete
                      onChange={handleFyChange}
                      options={CAKE_OPTIONS}
                      sx={style.sectorCategory}
                      label={t('region', { ns: 'foodDashboard' })}
                    />
                  </Grid>
                  <Grid item>
                    <AutoComplete
                      onChange={handleFyChange}
                      options={CAKE_OPTIONS}
                      sx={style.sectorCategory}
                      tField={style.cat}
                      label={t('district', { ns: 'foodDashboard' })}
                    />
                  </Grid>
                  <Grid item>
                    <AutoComplete
                      onChange={handleFyChange}
                      options={CAKE_OPTIONS}
                      sx={style.sectorCategory}
                      tField={style.cat}
                      label={t('account', { ns: 'foodDashboard' })}
                    />
                  </Grid>
                  <Grid item>
                    <AutoComplete
                      onChange={handleFyChange}
                      options={CAKE_OPTIONS}
                      sx={style.sectorCategory}
                      tField={style.cat}
                      label={t('campus', { ns: 'foodDashboard' })}
                    />
                  </Grid>
                  <Grid item>
                    <AutoComplete
                      onChange={handleFyChange}
                      options={CAKE_OPTIONS}
                      sx={style.sectorCategory}
                      tField={style.cat}
                      label={t('cafe', { ns: 'foodDashboard' })}
                    />
                  </Grid>
                  <Grid item>
                    <Button
                      variant='contained'
                      sx={{ ...style.goBtn, ...style.commonBtn }}
                    >
                      {t('go', { ns: 'foodDashboard' })}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant='contained'
                      sx={{ ...style.commonBtn, ...style.filterBtn }}
                    >
                      {t('fields', { ns: 'foodDashboard' })}
                    </Button>
                  </Grid>
                </Grid>
              </AccordionDetails>
              )}
            </Accordion>
          </Grid>
          {/* sap roll up */}
          <Sap />
          {/* Compliance page */}
          <Grid container item lg={12}>
            <Accordion sx={style.accordion}>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon sx={style.mExpand} />}
                sx={{ ...style.aSummary }}
              >
                <Typography sx={style.fWeight}>
                  {" "}
                  {t('complianceRoll', { ns: 'foodDashboard' })}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid
                  container
                  spacing={1}
                  sx={{ padding: "20px 5px" }}
                >
                  <Grid item>
                    <Radio
                      checked= ""
                      onChange={() => handleRadioChange()}
                      sx={style.rdio}
                    />
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
          
        </Grid>
      </Grid>
    </Container>
  );
}

export default FoodDashboard;
