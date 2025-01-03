import React from 'react';
import {Box, Link, Grid} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Tooltip from '@mui/material/Tooltip';
import useStyle from "./useStyle";
import useRootStyle from "../../useStyle";

const dummyData = [
  {
    id: 1,
    name: 'LinkedIn',
    children: [
      {
        id: 11,
        name: 'LinkedIn South Bay',
        children: [
          { id: 111, name: ' Mezzo -700 E. Middlefield Rd Bldg 3 555' },
          { id: 112, name: ' Nosh - 700 E. Middlefield Rd Bldg 4 ' },
          { id: 113, name: ' LI Southbay Catering  41393' },
          { id: 114, name: ' LMC 1  87654' },
          { id: 114, name: ' 700-2 e-Bar  245367' },
          { id: 114, name: ' LinkedIn Quick Service 0984' },
        ]
      },
      {
        id: 12,
        name: 'LinkedIn New York City',
        children: [
          { id: 121, name: ' Five Points 4588' },
          { id: 122, name: 'Cafe 2' },
          { id: 123, name: 'Cafe 3' },
          { id: 124, name: 'Cafe 4' },
        ]
      },
      {
        id: 13,
        name: 'LinkedIn Chicago',
        children: [
          { id: 131, name: ' L Café 2nd Floor  57313' },
          { id: 132, name: 'Cafe 2' }
        ]
      },
      {
        id: 14,
        name: 'LinkedIn Omaha (Eurest)',
        children: [
          { id: 141, name: 'Cafe 1' }
        ]
      },
      {
        id: 15,
        name: 'LinkedIn Toronto',
        children: [
          { id: 151, name: 'Cafe 1' },
          { id: 152, name: 'Cafe 2' },
          { id: 153, name: 'Cafe 3' },
          { id: 154, name: 'Cafe 4' },
          { id: 156, name: 'Cafe 5' },
        ]
      }
    ]
  }
];


export default function HierarchyAdminView() {
  const style = useStyle();
  const rootStyle = useRootStyle();
  const cafeStyles = {
    ...style.link,
    ...style.linkBox,
    ...style.cafeBackground
  };
  const cafeStylesRed = {
    ...cafeStyles,
    ...style.missing,
  }
  return (
    <Grid container sx={style.noWrap}>
    <Grid item sx={rootStyle.fullHeight}>
    <List component="nav" aria-label="main mailbox folders" sx={style.verticalList}>
      <ListItem sx={{...style.textRotate, ...style.accBackground}}>
        <ListItemText primary="ACCOUNT" align="center" />
      </ListItem>
      <ListItem sx={{...style.textRotate, ...style.campusBackground}}>
        <ListItemText primary="CAMPUS" align="center"/>
      </ListItem>
      <ListItem sx={{...style.textRotate, ...style.cafeBackground}}>
        <ListItemText primary="CAFE" align="center" />
      </ListItem>
    </List>
    </Grid>
    <Grid item>
    <List aria-labelledby="nested-list-subheader" sx={style.ulList}>
    {dummyData.map((folder) => (
      <React.Fragment key={folder.id}>
        <ListItem>
          <Link onClick={(e) => {
            e.preventDefault();
            window.location.href = "/dashboard";
            }} href="#" sx={{...style.account,...style.link}}>{folder.name}
          </Link>
        </ListItem>
        <List sx={{...style.display, ...style.accountLine, ...style.ulList}}>
          {folder.children && folder.children.map((subfolder) => (
            <React.Fragment key={subfolder.id}>
                <ListItem key={`${folder.id}-${subfolder.id}`} sx={{...style.campus, ...style.cafeSection, ...style.campusLine}}>
                  <Link href="#" sx={{...style.link, ...style.linkBox, ...style.campusBackground}}>{subfolder.name}</Link>
                  <List sx={style.cafeUl}>
                    {subfolder.children && subfolder.children.map((sf) => (
                      <Tooltip title={sf.id === 111 ? 'Missing Customer Counts' : ''} sx={style.tooltip}>
                        <ListItem sx={{...style.cafe}} disablePadding >
                          <Link href="#" sx={sf.id === 111 ? cafeStylesRed : cafeStyles} >{sf.name}</Link>
                        </ListItem>
                      </Tooltip>
                    ))}
                    </List>
                </ListItem>
            </React.Fragment>
          ))}
        </List>
      </React.Fragment>
    ))}
    </List>
    </Grid>
  </Grid>
    
  )
};
