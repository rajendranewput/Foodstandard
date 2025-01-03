import React, {useState} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CancelIcon from '@mui/icons-material/Cancel';
import {FiscalDropdown} from '../../components';
import {useLocation, Link, useNavigate} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import useStyle from './useStyle';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import {ROUTE_PATHS} from '../../constants/index';
import GridModal from './GridModal';

function Menus({ window: windowProp, pdfFun }) {
  const style = useStyle();
  const { t } = useTranslation(['menusName', 'logoDefault', 'bentoMenus']);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const location = useLocation();
  const [navigationStack, setNavigationStack] = useState([]);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  function Line({ color }) {
    return <Box sx={{ backgroundColor: color, ...style.fillLines }} />;
  }
  const handleItemClick = (path) => {
    setNavigationStack((prevStack) => [...prevStack, location.pathname]);
    navigate(path);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const textContent = t('logo', { ns: 'logoDefault' });
  const navItems = [
    {
      label: t('dashboard', { ns: 'menusName' }),
      path: ROUTE_PATHS.dashboard,
      greenLines: 0,
      redLines: 0,
    },
    {
      label: t('purchasing', { ns: 'menusName' }),
      path: ROUTE_PATHS.purchasing,
      greenLines: 8,
      redLines: 6,
    },
    {
      label: t('climate', { ns: 'menusName' }),
      path: ROUTE_PATHS.climate,
      greenLines: 10,
      redLines: 8,
    },
    {
      label: t('plant', { ns: 'menusName' }),
      path: ROUTE_PATHS.plant,
      greenLines: 10,
      redLines: 8,
    },
    {
      label: t('wellness', { ns: 'menusName' }),
      path: ROUTE_PATHS.wellness,
      greenLines: 10,
      redLines: 0,
    },
  ];
  const listItem = [
    { name: t('help', { ns: 'bentoMenus' })},
    { name: t('recalTicks', { ns: 'bentoMenus' }) },
    { name: t('globalSettings', { ns: 'bentoMenus' }) },
    { name: t('climateLineItems', { ns: 'bentoMenus' }) },
    { name: t('plantLineItems', { ns: 'bentoMenus' }) },
  ];
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={style.dToggle}>
      <Typography variant='h6' sx={{ my: 2, ...style.textHead }}>
        {textContent}
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={item.label} disablePadding >
            <ListItemButton
              sx={location.pathname === item.path ? style.navBox : null}
              onClick={() => handleItemClick(item.path)}
            >
              <ListItemText primary={item.label} sx={style.ltem}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = windowProp !== undefined ? windowProp().document.body : undefined;
  return (
    <Box sx={style.toolBox}>
      <CssBaseline />
      <AppBar component='nav' sx={style.appBar}>
        <Toolbar sx={style.toolbar}>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{
             
              display: { sm: 'none', xs: 'flex' },
              ...style.pDrawer,
            }}
          >
            <MenuIcon sx={style.menuIcon} />
          </IconButton>
          <Box sx={{ display: { sm: 'flex' }, ...style.mainBox }}>
            <Box sx={{ ...style.appetit, display: { xs: 'none', sm: 'flex' } }}>
              {' '}
              <ArrowCircleLeftIcon
                sx={style.arrowCircle}
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.location.replace("/Hierarchy");
                  }
                }}
              />
              <Box variant='body1' sx={style.textContent}>
              <Typography sx={{ ...style.appetit}}>
              {textContent.slice(0,18)}
                </Typography>
                <Typography style={style.fSize}>
                  {textContent.slice(18)}
                </Typography>
              </Box>     
            </Box>
            <Box sx={style.dropDown}>
              <FiscalDropdown />
            </Box>
            <Button onClick={pdfFun} sx={style.pdfBtn}><PrintOutlinedIcon></PrintOutlinedIcon></Button>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex', lg: 'flex' },
              ...style.navItems,
            }}
          >
            {navItems.map((menu) => (
              <Box
                key={menu.label}
                sx={{
                  ...(location.pathname === menu.path ? style.navBox : null),
                }}
                onClick={() => handleItemClick(menu.path)}
              >
                <Button sx={style.navBtn} component={Link} to={menu.path}>
                  {menu.label}
                </Button>
                <Box sx={style.lineItems}>
                  {[...Array(menu.greenLines)].map((_, index) => (
                    <Line key={`green-${index}`} color='green' />
                  ))}
                  {[...Array(menu.redLines)].map((_, index) => (
                    <Line key={`red-${index}`} color='red' />
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
          <Box sx={style.iconHeight}>
            <Typography
              className='icon-grid'
              onClick={handleOpenModal}
              sx={style.iconGrid}
            ></Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            ...style.dWidth
           
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    <GridModal openModal={openModal} handleCloseModal={handleCloseModal}/>
    </Box>
  );
}

Menus.propTypes = {
  window: PropTypes.func, // window should be a function if passed
};

export default Menus;