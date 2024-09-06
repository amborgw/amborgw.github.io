import react from "react";

import Construction from "../Construction";
import { Box, IconButton, ThemeProvider, Typography, createTheme } from "@mui/material";
import FeaturedItems from "../FeaturedItems";
import TitlePage from "../TitlePage";
import ProfilePage from "./ProfilePage";
import ProjectsPage from "./ProjectsPage";

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
    <ThemeProvider theme={theme}>
      <FeaturedItems/>
      <TitlePage/>  
      <ProfilePage/>
      <ProjectsPage/>
    </ThemeProvider>
  )
}