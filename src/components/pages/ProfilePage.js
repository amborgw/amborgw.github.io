import React from "react";
import Construction from "../Construction";
import HomeButton from "../HomeButton";
import TitlePage from "../TitlePage";
import { Box, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: 'Anton',
    color: '#3c5f8f'
  },
});

export default function ProfilePage() {
 return (
  <ThemeProvider theme={theme}>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh' }}>
    <Box sx={{
      width: '100vw',
      // height: '100vh',
      display: 'grid',
      gridTemplateColumns: '22rem 2fr',
      gridTemplateRows: '1',
      gap: '20px',
      alignItems: 'center'
    }}>
      <TitlePage focus='profile' />
    </Box>
  </div>
</ThemeProvider>
 )
}