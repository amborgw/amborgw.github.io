import react from "react";

import Construction from "../Construction";
import { Box, IconButton, ThemeProvider, Typography, createTheme, Grid, useMediaQuery } from "@mui/material";
import FeaturedItems from "../FeaturedItems";
import TitlePage from "../TitlePage";
import ProfilePage from "./ProfilePage";
import ProjectsPage from "./ProjectsPage";

const theme = createTheme({
  typography: {
    fontFamily: 'Anton',
    color: '#3c5f8f',
    subtitle1: { fontSize: '1.1em',
      color: '#303A6F',
      "&:hover": {
        fontWeight: 'bold',
        cursor: 'pointer'
      },
      fontFamily: 'Poppins',
    },
    subtitle2: { fontSize: '1.1em',
      color: '#303A6F',
      fontFamily: 'Poppins',
      fontWeight: 400
    },
    h1: {
      color: '#303A6F',
      fontFamily: 'Anton',
      fontSize: '2rem'
    }
  },
});



export default function HomePage() {
  const isMs = useMediaQuery('(min-width:1000px)');
  return (
    <ThemeProvider theme={theme}>
      {/* {isMs && <TitlePage/> } */}
      <FeaturedItems/>
      {/* <ProfilePage/>
      <ProjectsPage/> */}
    </ThemeProvider>
  )
}