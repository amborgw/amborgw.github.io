import React from "react";

import Construction from "./Construction";
import { Box, IconButton } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function HomePage() {
  return (
    // <Construction/>
    <Box sx={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-end'
    }}>
      <div style={{  marginRight: '20%' }}>
        <span style={{ fontFamily: 'Anton', fontSize: '3em', color: '#3c5f8f' }}>Amber</span>
        <div className="icon-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div>
              <a href="https://github.com/amborgw" target="_blank" aria-label="amborgw github link">
                <GitHubIcon sx={{ fontSize: 33, color: '#3c5f8f', ":hover": {
                  color: '#757575'
                } }}/>
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/amber-wong-67744920b/" target="_blank" aria-label="amborgw github link">
                <LinkedInIcon sx={{ fontSize: 35, color: '#3c5f8f', ":hover": {
                  color: '#757575'
                } }}/>
              </a>
            </div>
        </div>
      </div>
    </Box>
  )
}