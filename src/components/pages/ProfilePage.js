import React from "react";
import Construction from "../Construction";
import HomeButton from "../HomeButton";
import TitlePage from "../TitlePage";
import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: 'Anton',
    color: '#3c5f8f',
    subtitle1: { fontSize: '1.2em',
      color: '#303A6F',
      "&:hover": {
        fontWeight: 800,
        cursor: 'pointer'
      },
      fontFamily: 'Poppins',
      marginLeft: '3rem'
    }
  },
});

export default function ProfilePage() {
 return (
  <ThemeProvider theme={theme}>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh' }}>
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: '22rem 44rem',
      gridTemplateRows: '1',
      gap: '10rem',
      alignItems: 'center',
    }}>
      <TitlePage focus='profile' />
      <Box sx={{ height: '80vh'}}>
        <Typography variant="h1">
          Hi!
        </Typography>
        <Typography variant="subtitle1">yo aergaejg eargaeroiaha ea erghajero ag aergaejgjh aerhja haerjaejgja g je</Typography>
      </Box>
    </Box>
  </div>
</ThemeProvider>
 )
}