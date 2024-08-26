import React from "react";

import Construction from "../Construction";
import { Box, IconButton, ThemeProvider, Typography, createTheme } from "@mui/material";
import FeaturedItems from "../FeaturedItems";
import TitlePage from "../TitlePage";

const theme = createTheme({
  typography: {
    fontFamily: 'Anton',
    color: '#3c5f8f'
  },
});


export default function HomePage() {
  return (
    // <Construction/>
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
          <TitlePage/>
          <FeaturedItems/>
        </Box>
      </div>
    </ThemeProvider>
  )
}