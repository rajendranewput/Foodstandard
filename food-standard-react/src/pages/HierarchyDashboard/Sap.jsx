import React, { useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  Typography,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import useStyle from './useStyle';
import useCommonStyle from '../useStyle';
import { useTranslation } from 'react-i18next';

function Sap() {
  const style = useStyle();
  const commonStyle = useCommonStyle();
  const { t } = useTranslation(['foodDashboard']);
  let sapData = localStorage.getItem('sapData');
  sapData = JSON.parse(sapData);

  const [availableOptions, setAvailableOptions] = useState(sapData);
  const [selectedOptions, setSelectedOptions] = useState(
    Object.keys(sapData).reduce((acc, group) => ({ ...acc, [group]: [] }), {})
  );
  const [selectedItems, setSelectedItems] = useState([]);
  const [expandedGroups, setExpandedGroups] = useState({}); // To track expanded state for each group

  const handleCheckboxChange = (event, group, item) => {
    if (event.target.checked) {
      setSelectedItems((prev) => [...prev, item.team_name]);
    } else {
      setSelectedItems((prev) => prev.filter((name) => name !== item.team_name));
    }
  };

  const toggleGroup = (group) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [group]: !prev[group],
    }));
  };

  const moveItems = (toSelected) => {
    const newAvailableOptions = { ...availableOptions };
    const newSelectedOptions = { ...selectedOptions };

    Object.keys(availableOptions).forEach((group) => {
      if (toSelected) {
        // Move items from available to selected
        newSelectedOptions[group] = [
          ...newSelectedOptions[group],
          ...newAvailableOptions[group].filter((item) => selectedItems.includes(item.team_name)),
        ];
        newAvailableOptions[group] = newAvailableOptions[group].filter(
          (item) => !selectedItems.includes(item.team_name)
        );
      } else {
        // Move items from selected to available
        newAvailableOptions[group] = [
          ...newAvailableOptions[group],
          ...newSelectedOptions[group].filter((item) => selectedItems.includes(item.team_name)),
        ];
        newSelectedOptions[group] = newSelectedOptions[group].filter(
          (item) => !selectedItems.includes(item.team_name)
        );
      }
    });

    setAvailableOptions(newAvailableOptions);
    setSelectedOptions(newSelectedOptions);
    setSelectedItems([]); // Clear selection after moving
  };

  return (
    <Grid container item lg={12}>
      <Accordion sx={style.accordion}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon sx={style.mExpand} />}
          sx={{ ...style.aSummary }}
        >
          <Typography sx={style.fWeight}>
            {t('sapRoll', { ns: 'foodDashboard' })}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={5}>
              <Typography variant="h6">Available Options</Typography>
              <div style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px', maxHeight: '250px', overflow: 'scroll' }}>
                {Object.entries(availableOptions).map(([group, items]) => (
                  <div key={group}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer',
                      }}
                      onClick={() => toggleGroup(group)}
                    >
                      {expandedGroups[group] ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
                      <Typography variant="subtitle1" style={{ marginLeft: '8px' }}>
                        {group}
                      </Typography>
                    </div>
                    {expandedGroups[group] && (
                      <ul style={{ margin: 0, padding: '0 0 0 16px', listStyle: 'none' }}>
                        {items.map((item) => (
                          <li key={item.team_name}>
                            <label>
                              <input
                                type="checkbox"
                                value={item.team_name}
                                onChange={(e) => handleCheckboxChange(e, group, item)}
                              />
                              {item.description}
                            </label>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </Grid>

            <Grid item xs={2} container direction="column" alignItems="center">
              <Button onClick={() => moveItems(true)}>&#8594;</Button>
              <Button onClick={() => moveItems(false)}>&#8592;</Button>
            </Grid>

            <Grid item xs={5}>
              <Typography variant="h6">Selected Options</Typography>
              <div style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px', maxHeight: '250px', overflow: 'scroll' }}>
                {Object.entries(selectedOptions).map(([group, items]) => (
                  <div key={group}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer',
                      }}
                      onClick={() => toggleGroup(group)}
                    >
                      {expandedGroups[group] ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
                      <Typography variant="subtitle1" style={{ marginLeft: '8px' }}>
                        {group}
                      </Typography>
                    </div>
                    {expandedGroups[group] && (
                      <ul style={{ margin: 0, padding: '0 0 0 16px', listStyle: 'none' }}>
                        {items.map((item) => (
                          <li key={item.team_name}>
                            <label>
                              <input
                                type="checkbox"
                                value={item.team_name}
                                onChange={(e) => handleCheckboxChange(e, group, item)}
                              />
                              {item.description}
                            </label>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
}

export default Sap;
