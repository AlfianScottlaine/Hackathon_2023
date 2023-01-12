import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function MyApp({}) {
  return (
    <div>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 2,
          maxWidth: 400,
          maxHeight: 400,
          background: 'linear-gradient(to bottom, rgb(255, 153, 0, 100), rgb(255,194, 102, 50))',
        }}
      >
        <Typography variant="h5" sx={{ display: 'flex', fontWeight: 'bold' }}>
          Vehicle Pickup
        </Typography>

        <div style={{display: 'inline'}}>
          <LocationOnIcon sx={{display:'inline'}} />
          <TextField
            required
            fullWidth
            label="Gare de Paris, France"
            id="Search"
            sx={{ m: 1, width: '30ch' }}
            InputProps={{
              style: { borderRadius: '50rem', textDecoration: 'none', backgroundColor: 'white' },
            }}
          />
        </div>
      </Card>
    </div>
  );
}
