import * as React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import AppWidget from '../components/AppWidget';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ComplexGrid() {
  return (
    <div>
      <Head>
        <title>CaRent</title>
        <meta name="description" content="Rent A Car" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/CaRentLogo.png" />
      </Head>

      <main>
        <Header />

        <div style={{ margin: '2rem' }}>
          <Paper
            sx={{
              p: 2,
              margin: 'auto',
              maxWidth: 600,
              maxHeight: 200,
              borderRadius: '1rem',
              flexGrow: 1,
              backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
            }}
          >
            <Grid container spacing={3}>
              <Grid item>
                <ButtonBase sx={{ width: 100, height: 150, padding: '0' }}>
                  <Img alt="Mercedes" src="/MercedesCar.png" />
                </ButtonBase>
              </Grid>

              <Grid item xs={3} sm container sx={{ padding: '0' }}>
                <Grid item xs container direction="column" spacing={3} >
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                      sx={{ width: '20ch', fontWeight: 'bold', padding: '0', margin: '0' }}
                    >
                      Mercedes-Benz G 300GD
                    </Typography>

                    <Typography variant="body2" gutterBottom>
                      Full Size - Manual - Diesel
                    </Typography>

                    <div style={{ display: 'flex', width: '10ch', gap: '0.3rem' }}>
                      <Img src="/Person.png" alt="Person" sx={{ width: '1.5rem', height: '1.5rem' }} />
                      <Typography variant="body2" color="text.primary">
                        5
                      </Typography>
                      <Img src="/Suitcase.png" alt="Person" sx={{ width: '1.5rem', height: '1.5rem' }} />
                      <Typography variant="body2" color="text.primary">
                        2
                      </Typography>
                      <Img src="/Suitcase.png" alt="Person" sx={{ width: '1rem', height: '1rem' }} />
                      <Typography variant="body2" color="text.primary">
                        2
                      </Typography>
                      <Img src="/Car.png" alt="Person" sx={{ width: '1.5rem', height: '1.5rem' }} />
                      <Typography variant="body2" color="text.primary">
                        5
                      </Typography>
                    </div>
                  </Grid>

                  <Grid item sx={{ display: 'flex', gap: '1rem' }}>
                    <div>
                      <Img src="/ScottyLogo.png" alt="Scotty" sx={{ width: '1.5rem', height: '1.5rem' }} />
                      <Typography variant="body2" color="text.primary" sx={{ fontSize: '0.5rem', fontWeight: 'bold' }}>
                        By Scotty & Co.
                      </Typography>
                    </div>
                    <Typography sx={{ cursor: 'pointer', fontWeight: 'bold', fontSize: '1.5rem' }} variant="body2">
                      330€
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>

        <div style={{ margin: '2rem' }}>
          <Paper
            sx={{
              p: 2,
              margin: 'auto',
              maxWidth: 600,
              maxHeight: 200,
              borderRadius: '1rem',
              flexGrow: 1,
              backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
            }}
          >
            <Grid container spacing={3}>
              <Grid item>
                <ButtonBase sx={{ width: 100, height: 150, padding: '0' }}>
                  <Img alt="Suzuki" src="/SuzukiCar.png" />
                </ButtonBase>
              </Grid>

              <Grid item xs={3} sm container sx={{ padding: '0' }}>
                <Grid item xs container direction="column" spacing={3} >
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                      sx={{ width: '20ch', fontWeight: 'bold', padding: '0', margin: '0' }}
                    >
                      Suzuki Splash
                    </Typography>

                    <Typography variant="body2" gutterBottom>
                      Mini - Manual - Petrol
                    </Typography>

                    <div style={{ display: 'flex', width: '10ch', gap: '0.3rem' }}>
                      <Img src="/Person.png" alt="Person" sx={{ width: '1.5rem', height: '1.5rem' }} />
                      <Typography variant="body2" color="text.primary">
                        4
                      </Typography>
                      <Img src="/Suitcase.png" alt="Person" sx={{ width: '1.5rem', height: '1.5rem' }} />
                      <Typography variant="body2" color="text.primary">
                        1
                      </Typography>
                      <Img src="/Suitcase.png" alt="Person" sx={{ width: '1rem', height: '1rem' }} />
                      <Typography variant="body2" color="text.primary">
                        2
                      </Typography>
                      <Img src="/Car.png" alt="Person" sx={{ width: '1.5rem', height: '1.5rem' }} />
                      <Typography variant="body2" color="text.primary">
                        5
                      </Typography>
                    </div>
                  </Grid>

                  <Grid item sx={{ display: 'flex', gap: '1rem' }}>
                    <div>
                      <Img src="/ScottyLogo.png" alt="Scotty" sx={{ width: '1.5rem', height: '1.5rem' }} />
                      <Typography variant="body2" color="text.primary" sx={{ fontSize: '0.5rem', fontWeight: 'bold' }}>
                        By Scotty & Co.
                      </Typography>
                    </div>
                    <Typography sx={{ cursor: 'pointer', fontWeight: 'bold', fontSize: '1.5rem' }} variant="body2">
                      220€
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>

        <div style={{ margin: '2rem' }}>
          <Paper
            sx={{
              p: 2,
              margin: 'auto',
              maxWidth: 600,
              maxHeight: 200,
              borderRadius: '1rem',
              flexGrow: 1,
              backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
            }}
          >
            <Grid container spacing={3}>
              <Grid item>
                <ButtonBase sx={{ width: 100, height: 150, padding: '0' }}>
                  <Img alt="Tesla" src="/TeslaCar.png" />
                </ButtonBase>
              </Grid>

              <Grid item xs={3} sm container sx={{ padding: '0' }}>
                <Grid item xs container direction="column" spacing={3} >
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                      sx={{ width: '20ch', fontWeight: 'bold', padding: '0', margin: '0' }}
                    >
                      Tesla Model S
                    </Typography>

                    <Typography variant="body2" gutterBottom>
                      Medium - Automatic - Electric
                    </Typography>

                    <div style={{ display: 'flex', width: '10ch', gap: '0.3rem' }}>
                      <Img src="/Person.png" alt="Person" sx={{ width: '1.5rem', height: '1.5rem' }} />
                      <Typography variant="body2" color="text.primary">
                        5
                      </Typography>
                      <Img src="/Suitcase.png" alt="Person" sx={{ width: '1.5rem', height: '1.5rem' }} />
                      <Typography variant="body2" color="text.primary">
                        1
                      </Typography>
                      <Img src="/Suitcase.png" alt="Person" sx={{ width: '1rem', height: '1rem' }} />
                      <Typography variant="body2" color="text.primary">
                        2
                      </Typography>
                      <Img src="/Car.png" alt="Person" sx={{ width: '1.5rem', height: '1.5rem' }} />
                      <Typography variant="body2" color="text.primary">
                        5
                      </Typography>
                    </div>
                  </Grid>

                  <Grid item sx={{ display: 'flex', gap: '1rem' }}>
                    <div>
                      <Img src="/ScottyLogo.png" alt="Scotty" sx={{ width: '1.5rem', height: '1.5rem' }} />
                      <Typography variant="body2" color="text.primary" sx={{ fontSize: '0.5rem', fontWeight: 'bold' }}>
                        By Scotty & Co.
                      </Typography>
                    </div>
                    <Typography sx={{ cursor: 'pointer', fontWeight: 'bold', fontSize: '1.5rem' }} variant="body2">
                      550€
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>

       
          <AppWidget />
      </main>
    </div>
  );
}
