import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconLink from "./IconLink";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function TitlePage(props) {
  const navigate = useNavigate()

  return (
    <div style={{  marginLeft: '35%' }}>
      <Typography onClick={() => navigate('/')} sx={{ fontSize: '3em', color: '#3c5f8f', "&:hover": {
        cursor: 'pointer'
      } }}>Amber</Typography>
      <Typography onClick={() => navigate('/about-me')} sx={{ fontSize: '1.2em', color: '#3c5f8f', "&:hover": {
        textDecoration: 'underline solid',
        cursor: 'pointer'
      }}}>about me</Typography>
      <Typography onClick={() => navigate('/projects')} sx={{ fontSize: '1.2em', color: '#3c5f8f', "&:hover": {
        textDecoration: 'underline solid',
        cursor: 'pointer'
      }}}>projects</Typography>
      <Typography onClick={() => navigate('/contact')} sx={{ fontSize: '1.2em', color: '#3c5f8f', "&:hover": {
        textDecoration: 'underline solid',
        cursor: 'pointer'
      }}}>contact</Typography>
      <div className="icon-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 40px)', marginTop: 20 }}>
          <div>
            <IconLink link="https://github.com/amborgw">
              <GitHubIcon sx={{ paddingTop: '1px', fontSize: 32, color: '#3c5f8f', ":hover": {
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
  )
}