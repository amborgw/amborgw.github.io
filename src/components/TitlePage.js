import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconLink from "./IconLink";
import { Typography } from "@mui/material";


export default function TitlePage() {
  // const navigate = useNavigate()
  // const handleClick = () => {
  //   navigate('/profile')
  // }

  return (
    <div style={{  marginLeft: '35%' }}>
      <Typography sx={{ fontSize: '3em', color: '#3c5f8f', "&:hover": {
        cursor: 'pointer'
      } }}>Amber</Typography>
      <Typography sx={{ fontSize: '1.2em', color: '#3c5f8f', "&:hover": {
        textDecoration: 'underline solid',
        cursor: 'pointer'
      }}}>about me</Typography>
      <Typography sx={{ fontSize: '1.2em', color: '#3c5f8f', "&:hover": {
        textDecoration: 'underline solid',
        cursor: 'pointer'
      }}}>projects</Typography>
      <Typography sx={{ fontSize: '1.2em', color: '#3c5f8f', "&:hover": {
        textDecoration: 'underline solid',
        cursor: 'pointer'
      }}}>contact</Typography>
      <div className="icon-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 40px)', marginTop: 20 }}>
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
  )
}