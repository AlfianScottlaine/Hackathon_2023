import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Paper from '@mui/material/Paper';

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ pb: 7 }}>
      <CssBaseline />
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Home"
            icon={<HomeOutlinedIcon />}
            sx={{
              color: '#ff9900',
            }}
          />
          <BottomNavigationAction
            label="Gas Station"
            icon={<LocalGasStationIcon />}
            sx={{
              color: '#ff9900',
            }}
          />
          <BottomNavigationAction
            label="Histories"
            icon={<ReceiptLongIcon />}
            sx={{
              color: '#ff9900',
            }}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
