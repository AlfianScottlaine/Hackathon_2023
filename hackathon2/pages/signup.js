import React from "react";
import Head from "next/head";
import { Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function InputAdornments() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [name, setName] = React.useState("");
  function handleName(event) {
    setName(event.target.value);
  }

  const [lastName, setLastName] = React.useState("");
  function handleLastName(event) {
    setLastName(event.target.value);
  }

  const [companyName, setCompanyName] = React.useState("");
  function handleCompanyName(event) {
    setLastName(event.target.value);
  }

  const [addresse, setAddresse] = React.useState("");
  function handleAddresse(event) {
    setAddresse(event.target.value);
  }

  const [city, setCity] = React.useState("");
  function handleCity(event) {
    setCity(event.target.value);
  }

  const [zipCode, setZipCode] = React.useState("");
  function handleZipCode(event) {
    setZipCode(event.target.value);
  }

  const [phoneNumber, setPhoneNumber] = React.useState("");
  function handlePhoneNumber(event) {
    setPhoneNumber(event.target.value);
  }

  const [email, setEmail] = React.useState("");
  function handleEmail(event) {
    setEmail(event.target.value);
  }

  const [confirmPassword, setConfirmPassword] = React.useState("");
  function handleConfirmPassword(event) {
    setConfirmPassword(event.target.value);
  }
  return (
    <div>
      <Head>
        <title>CaRent</title>
        <meta name="description" content="Rent A Car" />
        <link rel="icon" href="/CaRentLogo.png" />
      </Head>

      <main
        style={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          alignItems: "center",
          marginTop: "5vh",
          marginBottom: "10vh",
          gap: "5vh",
          width: "100%",
          height: "100%",
          backgroundColor: "common.white",
        }}
      >
        <Typography
          align="center"
          variant="h3"
          sx={{ display: "flex", alignItems: "center", color: "common.black" }}
        >
          Sign Up
        </Typography>

        <Typography
          align="center"
          variant="body1"
          sx={{ display: "flex", alignItems: "center", color: "common.black", fontWeight: "bold" }}
        >
          Register now to create your account !
        </Typography>

        <form
          onSubmit={(event) => event.preventDefault()}
          align="center"
          sx={{
            display: "grid",
            gridTemplateColumns: { sm: "1fr 1fr" },
            gap: 1,
          }}
        >
          <TextField
            required
            fullWidth
            onChange={(event) => handleName(event)}
            label="First Name"
            id="custom-css-outlined-input 1"
            sx={{ m: 1, width: "30ch" }}
            InputProps={{ style: { borderRadius: "50rem" } }}
          />
          <TextField
            required
            fullWidth
            onChange={(event) => handleLastName(event)}
            label="Last Name"
            id="custom-css-outlined-input 2"
            sx={{ m: 1, width: "30ch" }}
            InputProps={{ style: { borderRadius: "50rem" } }}
          />
          <TextField
            fullWidth
            onChange={(event) => handleCompanyName(event)}
            label="Company Name"
            id="custom-css-outlined-input 4"
            sx={{ m: 1, width: "30ch" }}
            InputProps={{ style: { borderRadius: "50rem" } }}
          />
          <TextField
            required
            fullWidth
            onChange={(event) => handleAddresse(event)}
            label="Address"
            id="custom-css-outlined-input 3"
            sx={{ m: 1, width: "30ch" }}
            InputProps={{ style: { borderRadius: "50rem" } }}
          />
          <TextField
            required
            fullWidth
            onChange={(event) => handleCity(event)}
            label="City"
            id="custom-css-outlined-input 5"
            sx={{ m: 1, width: "30ch" }}
            InputProps={{ style: { borderRadius: "50rem" } }}
          />
          <TextField
            required
            fullWidth
            onChange={(event) => handleZipCode(event)}
            label="ZIP Code"
            id="custom-css-outlined-input 6"
            sx={{ m: 1, width: "30ch" }}
            InputProps={{ style: { borderRadius: "50rem" } }}
          />
          <TextField
            fullWidth
            onChange={(event) => handlePhoneNumber(event)}
            label="Phone Number"
            id="custom-css-outlined-input 7"
            sx={{ m: 1, width: "30ch" }}
            InputProps={{ style: { borderRadius: "50rem" } }}
          />
          <TextField
            required
            fullWidth
            onChange={(event) => handleEmail(event)}
            label="Email"
            id="custom-css-outlined-input 8"
            sx={{ m: 1, width: "30ch" }}
            InputProps={{ style: { borderRadius: "50rem" } }}
          />
          <TextField
            required
            fullWidth
            onChange={(event) => handleConfirmPassword(event)}
            type="password"
            id="custom-css-outlined-input 9"
            label="Password"
            sx={{ m: 1, width: "30ch", textDecoration: "none" }}
            InputProps={{ style: { borderRadius: "50rem" } }}
          />

          <Button
            variant="contained"
            sx={{
              width: "20ch",
              height: "7vh",
              alignItems: "center",
              background:
                "linear-gradient(to bottom, rgb(255, 153, 0, 100), rgb(255,194, 102, 50))",
              color: "common.black",
              marginTop: "5vh",
              marginBottom: "5vh",
              borderRadius: "5rem",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                color: "common.black",
                fontWeight: "bold",
              }}
              onSubmit={(event) => event.preventDefault()}
            >
              Register
            </Typography>
          </Button>
        </form>
      </main>
    </div>
  );
}
