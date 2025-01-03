import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box, FormControl} from '@mui/material';
import useStyle from "./useStyle";

export default function ComboBox({ onChange, options, sx, label }) {
  const style = useStyle();
  const defaultOption = options.length > 0 ? options[0] : null;

  return (
    <Box>
      <FormControl>
        <Autocomplete
          disablePortal
          options={options}
          isOptionEqualToValue={(option, value) =>
            option.valueOf === value.valueOf
          }
          clearIcon={null}
          onChange={onChange}
          // value={defaultOption}
          sx={{
            ...style.outlined,
            ...sx,
          }}
          renderInput={(params) => {
            // Create a new sx object for each instance
            const dynamicSx = {
              ...style.tField,
              ...(["FY", "P"].includes(label) && {
                ...style.tField2,
              }),
            };
            
            return (
              <TextField
                {...params}
                label={label}
                sx={dynamicSx} // Use unique sx for each instance
                InputProps={{
                  ...params.InputProps,
                }}
              />
            );
          }}
        />
      </FormControl>
    </Box>
  );
}
