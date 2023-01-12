import React from 'react';
import Head from 'next/head';
import { Button, Link, Typography, Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function SignIn() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Head>
        <title>CaRent</title>
        <meta name="description" content="Rent A Car" />
        <link rel="icon" href="/CaRentLogo.png" />
      </Head>

      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyItems: 'center',
          alignItems: 'center',
          marginTop: '6vh',
          gap: '5vh',
          width: '100%',
          height: '100%',
          backgroundColor: 'common.white',
        }}
      >
        <Typography align="center" variant="h4" sx={{ display: 'flex', alignItems: 'center', color: 'common.black' }}>
          Log In
        </Typography>

        <Box
          align="center"
          component="form"
          noValidate
          sx={{
            display: 'grid',
            gridTemplateColumns: { sm: '1fr 1fr' },
            gap: 2,
          }}
        >
          <TextField
            required
            fullWidth
            label="Email"
            id="Email"
            sx={{ m: 1, width: '30ch' }}
            InputProps={{
              style: { borderRadius: '50rem', textDecoration: 'none' },
            }}
          />
          <TextField
            required
            fullWidth
            label="Password"
            id="Password"
            type={showPassword ? 'text' : 'password'}
            endadornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            sx={{ m: 1, width: '30ch' }}
            InputProps={{ style: { borderRadius: '50rem', boxShadow: 3 } }}
          />
        </Box>

        <Link style={{ textDecoration: 'none' }}>
          <Typography
            variant="h6"
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: 'common.black',
              fontSize: '0.7rem',
              fontWeight: 'bold',
            }}
          >
            Forgot Password ?
          </Typography>
        </Link>

        <Button
          variant="contained"
          sx={{
            width: '20ch',
            height: '7vh',
            backgroundImage: 'linear-gradient(to bottom, rgb(255, 153, 0, 100), rgb(255,194, 102, 50))',
            color: 'common.black',
            borderRadius: '5rem',
          }}
        >
          <Typography
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: 'common.black',
              fontWeight: 'bold',
            }}
          >
            Log In
          </Typography>
        </Button>

        <div
          align="center"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2vh',
            marginTop: '5vh',
            width: '100%',
            height: '100%',
          }}
        >
          <Link
            href="https://accounts.google.com/v3/signin/identifier?dsh=S-1022849628%3A1673343568829544&authuser=0&continue=https%3A%2F%2Fwww.google.com%2F%3Fclient%3Davast-a-1&ec=GAlAmgQ&hl=en&flowName=GlifWebSignIn&flowEntry=AddSession"
            style={{ textDecoration: 'none' }}
            variant="contained"
            sx={{
              width: '30ch',
              height: '5vh',
              backgroundColor: 'common.white',
              color: 'common.black',
              borderColor: ' 2px 2px 2px common.black',
              borderRadius: '5rem',
            }}
          >
            <Typography fontWeight="Bold">Google</Typography>
          </Link>

          <Link
            href="https://www.facebook.com/login"
            style={{ textDecoration: 'none' }}
            variant="contained"
            sx={{
              width: '30ch',
              height: '5vh',
              backgroundColor: 'common.white',
              color: 'common.black',
              borderRadius: '5rem',
            }}
          >
            <Typography fontWeight="Bold">Facebook</Typography>
          </Link>
        </div>

        <Link href="/signup" style={{ textDecoration: 'none' }}>
          <Typography
            variant="h6"
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: 'common.black',
              fontSize: '0.7rem',
              fontWeight: 'bold',
            }}
          >
            Don't have an account? Register now !
          </Typography>
        </Link>
      </main>
    </div>
  );
}
