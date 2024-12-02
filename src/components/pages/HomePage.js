import React from "react";

// import Construction from "../Construction";
import {ThemeProvider, createTheme } from "@mui/material";
import FeaturedItems from "../FeaturedItems";
// import TitlePage from "../TitlePage";
// import ProfilePage from "./ProfilePage";
// import ProjectsPage from "./ProjectsPage";
import StarRoundedIcon from '@mui/icons-material/StarRounded';


const theme = createTheme({
  typography: {
    fontFamily: 'Anton',
    color: '#3c5f8f',
    subtitle1: { fontSize: '1.1rem',
      color: '#303A6F',
      "&:hover": {
        fontWeight: 'bold',
        cursor: 'pointer'
      },
      fontFamily: 'Poppins',
    },
    subtitle2: { fontSize: '1.1rem',
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
  return (
    <ThemeProvider theme={theme}>
      {/* {isMs && <TitlePage/> } */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '2rem'}}>
        <StarRoundedIcon sx={{ position: 'relative', right: '0.5rem', fontSize: "3rem", color: '#303A6F' }}/>
        <FeaturedItems/>
      </div>
      {/* <ProfilePage/>
      <ProjectsPage/> */}
    </ThemeProvider>
  )
}