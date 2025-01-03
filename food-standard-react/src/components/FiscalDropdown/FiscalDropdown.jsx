import React, {useEffect, useState} from "react";
import {Typography, IconButton, Menu, MenuItem, Box} from "@mui/material";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import useStyle from "./useStyle";
import axiosInstance from '../../network/apis';

const FiscalDropdown = () => {
  const {
    fyMenu,
    iconBtn,
    dropText,
    mainContainer,
    selected,
    fyLeft,
    iBtn,
    fyRight,
    cirleIcon,
    pLeft,
    leftArrow
  } = useStyle();

  // Set the initial state with values from localStorage or default values
  const [fy, setFy] = useState(localStorage.getItem('selectedFy') || 24); 
  const [period, setPeriod] = useState(localStorage.getItem('selectedPeriod') || 1);
  const [showDropdownFy, setShowDropdownFy] = useState(null);
  const [showDropdownPeriod, setShowDropdownPeriod] = useState(null);
  const [showSecondArrow, setShowSecondArrow] = useState(false);
  const [showBorder, setShowBorder] = useState(false);
  const [fiscalYear, setFiscalYear] = useState([]);
  const [fiscalPeriod, setFiscalPeriod] = useState([]);
  const [endDate, setEndDate] = useState('10/28/2023');
  const [startDate, setStartDate] = useState('9/29/2023');

  const handleClick = (e) => {
    e.stopPropagation();
    setShowBorder(!showBorder);
    setShowSecondArrow(!showSecondArrow);
  };

  const handleInitialClick = (e) => {
    e.stopPropagation();
    setShowSecondArrow(true);
    setShowBorder(true);
  };

  const handleFyClick = (e) => {
    e.stopPropagation();
    setShowDropdownFy(e.currentTarget);
  };

  const handlePeriodClick = (e) => {
    if (showSecondArrow) {
      setShowDropdownPeriod(e.currentTarget);
    }
  };
  
  const handleFyClose = async (value) => {
    setShowDropdownFy(null);
  
    if (fy !== value) {
      setFy(value);
      localStorage.setItem('selectedFy', value);
      
      // Fetch fiscal periods for the newly selected fiscal year
      await fetchFiscalPeriods(value); 
      
      // Automatically set the period to 1 after fiscal year change
      const defaultPeriod = 1;
      setPeriod(defaultPeriod);
      localStorage.setItem('selectedPeriod', defaultPeriod);
      
      // Update start and end date based on the first period of the new fiscal year
      const selectedPeriodData = fiscalPeriod.find(p => p.fiscal_period == defaultPeriod);
      
      if (selectedPeriodData) {
        const updatedEndDate = `${selectedPeriodData.end_date}`;
        const updatedStartDate = `${selectedPeriodData.start_date}`;
        setEndDate(updatedEndDate);
        setStartDate(updatedStartDate);
        localStorage.removeItem('endDate'); 
        localStorage.removeItem('startDate');
        // Update localStorage with the new dates
        localStorage.setItem('endDate', updatedEndDate); // Store endDate in localStorage
        localStorage.setItem('startDate', updatedStartDate); // Store startDate in localStorage
      }
  
      // Optionally, reload the page or update the UI based on new values
      window.location.reload();
    }
  };
  // Store selected fiscal period in localStorage and refresh page if changed
  const handlePeriodClose = (value) => {
    if (period != value) {
      setPeriod(value);
      setShowDropdownPeriod(null);
      localStorage.setItem('selectedPeriod', value);
      window.location.reload();
    }

    const selectedPeriodData = fiscalPeriod.find(p => p.fiscal_period == value);
  
    if (selectedPeriodData) {
      const updatedEndDate = `${selectedPeriodData.end_date}`;
      const updatedStartDate = `${selectedPeriodData.start_date}`;
      setEndDate(updatedEndDate);
      setStartDate(updatedStartDate);
      localStorage.removeItem('endDate'); 
      localStorage.removeItem('startDate');
      localStorage.setItem('endDate', updatedEndDate); // Store endDate in localStorage
      localStorage.setItem('startDate', updatedStartDate); // Store startDate in localStorage
    }
  };

  // Fetch fiscal years from API
  const fetchFiscalYears = async () => {
    try {
      const response = await axiosInstance('get', '/get-fiscal-year');
      const data = response.data;
      if(data) {
        const sortedData = data.sort((a, b) => b.fiscal_year - a.fiscal_year);
        setFiscalYear(sortedData);

        // Set default fiscal year if none is selected
        if (!localStorage.getItem('selectedFy')) {
          const defaultFy = sortedData[0].fiscal_year.slice(2); 
          setFy(defaultFy);
          localStorage.setItem('selectedFy', defaultFy);
          fetchFiscalPeriods(defaultFy); 
        }
      }
    } catch (error) {
      throw error;
    }
  };

  // Fetch fiscal periods from API
  const fetchFiscalPeriods = async (selectedFy) => {
    try {
      const response = await axiosInstance('post', '/get-fiscal-period', {
        year: '20' + selectedFy,
        latest: 1
      });
      const data = response.data;
      if(data) {
        setFiscalPeriod(data);
  
        // Set default fiscal period if none is selected
        const storedPeriod = localStorage.getItem('selectedPeriod');
        const defaultPeriod = storedPeriod || data[0].fiscal_period;
        setPeriod(defaultPeriod);
        localStorage.setItem('selectedPeriod', defaultPeriod);
    
        // Find the selected period's start and end date, then set and store endDate
        const selectedPeriodData = data.find(p => p.fiscal_period == defaultPeriod);
        if (selectedPeriodData) {
          const updatedEndDate = `${selectedPeriodData.end_date}`;
          const updatedStartDate = `${selectedPeriodData.start_date}`;
          setEndDate(updatedEndDate);
          localStorage.removeItem('endDate'); 
          localStorage.removeItem('startDate');
          localStorage.setItem('endDate', updatedEndDate); // Store endDate in localStorage
          localStorage.setItem('startDate', updatedStartDate); // Store endDate in localStorage
        }
      }
    } catch (error) {
      throw error;
    }
  };

  // On initial load, fetch the fiscal years and periods
  useEffect(() => {
    fetchFiscalYears();
    fetchFiscalPeriods(fy); 
  }, [fy]);

  useEffect(() => {
    // Ensure period is set from localStorage on mount
    const storedPeriod = localStorage.getItem('selectedPeriod');
    if (storedPeriod) {
      setPeriod(parseInt(storedPeriod, 10)); // Set period from localStorage
    }
  
    // Load endDate from localStorage on mount
    const storedEndDate = localStorage.getItem('endDate');
    if (storedEndDate) {
      setEndDate(storedEndDate); // Set endDate from localStorage
    }

    const storedStartDate = localStorage.getItem('startDate');
    if (storedStartDate) {
      setStartDate(storedStartDate); // Set endDate from localStorage
    }
  }, []);

  return (
    <>
      <Box
        sx={{ ...mainContainer, ...(showBorder ? selected : "none") }}
        onClick={(e) => handleInitialClick(e)}
      >
        <Typography onClick={(e) => handleClick(e)} sx={dropText}>
          FY:
        </Typography>
        {showSecondArrow ? (
          <Typography
            onClick={(e) => handleFyClick(e)}
            sx={{ ...dropText, ...cirleIcon }}
          >
            {fy}{" "}
          </Typography>
        ) : (
          <Typography sx={{ ...dropText, ...fyRight }}>{fy} </Typography>
        )}
        {showSecondArrow && (
          <>
            <IconButton
              onClick={(e) => handleFyClick(e)}
              sx={{ ...iconBtn, ...iBtn }}
            >
              <ExpandCircleDownIcon />
            </IconButton>{" "}
          </>
        )}

        {showDropdownFy && (
          <Menu
            anchorEl={showDropdownFy}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(showDropdownFy)}
            onClose={() => handleFyClose(fy)}
            sx={fyMenu}
          >
            <Box sx={{ ...dropText, ...fyLeft }}>
              {fy}
              <IconButton
                onClick={() => setShowDropdownFy(!showDropdownFy)}
                sx={iconBtn}
              >
                <ExpandCircleDownIcon />
              </IconButton>
            </Box>
            {fiscalYear.length > 0 ? (
              fiscalYear.map((value) => (
                <MenuItem
                  key={value.fiscal_year}
                  onClick={() => handleFyClose(value.fiscal_year.slice(2))}
                  sx={{
                    backgroundColor: fy === value.fiscal_year.slice(2) ? 'lightgray' : 'transparent',
                    '&:hover': {
                      backgroundColor: '#ededed',
                    },
                  }}
                >
                  {value.fiscal_year.slice(2)}
                </MenuItem>
              ))
            ) : (
              <MenuItem disabled>{fy}</MenuItem>
            )}
          </Menu>
        )}

        <Typography onClick={(e) => handleClick(e)} sx={dropText}>
          PERIOD:
        </Typography>
        {showSecondArrow ? (
          <Typography
            onClick={handlePeriodClick}
            sx={{ ...dropText, ...pLeft }}
          >
            {period}{" "}
          </Typography>
        ) : (
          <Typography sx={dropText}>{period} </Typography>
        )}
        <>
          <IconButton onClick={handlePeriodClick} sx={iconBtn}>
            <ExpandCircleDownIcon />
          </IconButton>{" "}
        </>
        {showDropdownPeriod && (
          <Menu
            anchorEl={showDropdownPeriod}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(showDropdownPeriod)}
            onClose={() => handlePeriodClose(period)}
            sx={fyMenu}
          >
            <Box sx={{ ...dropText, ...fyLeft }}>
              {period}
              <IconButton
                onClick={() => setShowDropdownPeriod(!showDropdownPeriod)}
                sx={iconBtn}
              >
                <ExpandCircleDownIcon />
              </IconButton>
            </Box>
            {Array.isArray(fiscalPeriod) && fiscalPeriod.length > 0 ? (
              fiscalPeriod.map((value) => (
                //setEndDate((period === value.fiscalPeriod ? value.start_date  + '-' + value.end_date : '9/29/2023-10/28/2023')),
                <MenuItem
                  key={value.fiscal_period}
                  onClick={() => handlePeriodClose(value.fiscal_period)}
                  sx={{
                    backgroundColor: period === value.fiscal_period ? 'lightgray' : 'transparent',
                    '&:hover': {
                      backgroundColor: '#ededed',
                    },
                  }}
                >
                  {value.fiscal_period}
                </MenuItem>
              ))
            ) : (
              <MenuItem disabled>{period}</MenuItem>
            )}
          </Menu>
        )}
       
      </Box>
      {showBorder ? '' : <Typography sx={leftArrow}>{startDate}-{endDate}</Typography>}
    </>
  );
};

export default FiscalDropdown;