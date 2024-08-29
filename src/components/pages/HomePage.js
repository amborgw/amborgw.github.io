import react from "react";

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
      <div style={{ position: 'absolute', top: '5rem', left: '12rem' }}>
        <Box sx={{
          width:  'calc(420rem)',
          display: 'grid',
          gridTemplateColumns: '22rem 44rem',
          gridTemplateRows: '1',
          gap: '10rem',
          alignItems: 'center'
        }}>
          <TitlePage/>
          <FeaturedItems/>
        </Box>
      </div>
    </ThemeProvider>
  )
}