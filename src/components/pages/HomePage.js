import react from "react";

import Construction from "../Construction";
import { Box, IconButton, ThemeProvider, Typography, createTheme, Grid } from "@mui/material";
import FeaturedItems from "../FeaturedItems";
import TitlePage from "../TitlePage";
import ProfilePage from "./ProfilePage";
import ProjectsPage from "./ProjectsPage";

const theme = createTheme({
  typography: {
    fontFamily: 'Anton',
    color: '#3c5f8f',
    subtitle1: { fontSize: '1.3em',
      color: '#303A6F',
      "&:hover": {
        fontWeight: 'bold',
        cursor: 'pointer'
      },
      fontFamily: 'Poppins',
    },
    subtitle2: { fontSize: '1.2em',
      color: '#303A6F',
      fontFamily: 'Poppins',
      fontWeight: 400
    }
  },
});


export default function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item xs={4}>
          <TitlePage/>  
        </Grid>
        <Grid item xs={8}>
          <FeaturedItems/>
          <ProfilePage/>
          <ProjectsPage/>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}