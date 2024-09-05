import react from "react";

import Construction from "../Construction";
import { Box, IconButton, ThemeProvider, Typography, createTheme } from "@mui/material";
import FeaturedItems from "../FeaturedItems";
import TitlePage from "../TitlePage";
import ProfilePage from "./ProfilePage";

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
    },
    subtitle2: { fontSize: '1.2em',
      color: '#303A6F',
      fontFamily: 'Poppins',
      fontWeight: 50
    }
  },
});


export default function HomePage() {
  return (
    // <Construction/>
    <ThemeProvider theme={theme}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <Box sx={{
          // width:  'calc(420rem)',
          display: 'grid',
          gridTemplateColumns: '22rem 44rem',
          gridTemplateRows: '1',
          gap: '10rem',
          alignItems: 'center',
        }}>
          <TitlePage/>
          <FeaturedItems/>
        </Box>
      </div>
          <ProfilePage/>
    </ThemeProvider>
  )
}