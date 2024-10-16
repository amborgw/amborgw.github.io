import React from "react";
import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";
import honey from "../../images/honey.jpg"

const theme = createTheme({
  typography: {
    fontFamily: 'Anton',
    color: '#303A6F',
    subtitle1: { fontSize: '1.2em',
      color: '#303A6F',
      "&:hover": {
        fontWeight: 'bold',
        cursor: 'pointer'
      },
      fontFamily: 'Poppins',
      marginLeft: '3rem'
    },
    subtitle2: { fontSize: '1.2em',
      color: '#303A6F',
      fontFamily: 'Poppins',
    },
    h1: {
      color: '#303A6F',
      fontFamily: 'Anton',
      fontSize: '3.4rem'
    }
  },
});

export default function ProfilePage() {
 return (
  <ThemeProvider theme={theme}>
  <div id="about-me" style={{ backgroundSize: 'cover', backgroundAttachment: 'fixed',  position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh' }}>
      <Box>
        <Typography variant="h1">
          Hi, I'm Amber Wong
        </Typography>
        <Box sx={{ width: '27rem', marginTop: '3rem'}}>
          <Typography variant="subtitle2">I am a 3rd Year student at UNSW studying Computer Science and Neuroscience.<br /><br />
            I love <i style={{ fontWeight: 'bold' }}>creating</i> and <i style={{ fontWeight: 'bold' }}>curating</i> the world around me, as nothing is more rewarding than making something from scratch.<br /><br/>
            Please take a look around my <i style={{ fontWeight: 'bold' }}>decorated corner of the internet</i>
          </Typography>
        </Box>
      </Box>
    {/* <Construction/> */}
  </div>
</ThemeProvider>
 )
}