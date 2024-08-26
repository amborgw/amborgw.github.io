import React from "react";

import Construction from "./Construction";
import { Box, IconButton, ThemeProvider, Typography, createTheme } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconLink from "./IconLink";

const theme = createTheme({
  typography: {
    fontFamily: 'Anton',
  },
});


export default function HomePage() {
  return (
    // <Construction/>
    <ThemeProvider theme={theme}>

      <Box sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end'
      }}>
        <div style={{  marginRight: '20%' }}>
          <Typography style={{ fontSize: '3em', color: '#3c5f8f' }}>Amber</Typography>
          <div className="icon-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
              <div>
                <IconLink link="https://github.com/amborgw">
                  <GitHubIcon sx={{ fontSize: 33, color: '#3c5f8f', ":hover": {
                    color: '#757575'
                  } }}/>
                </IconLink>
              </div>
              <div>
                <IconLink link="https://www.linkedin.com/in/amber-wong-67744920b/">
                  <LinkedInIcon sx={{ fontSize: 35, color: '#3c5f8f', ":hover": {
                    color: '#757575'
                  } }}/>
                </IconLink>
              </div>
          </div>
        </div>
      </Box>
    </ThemeProvider>
  )
}