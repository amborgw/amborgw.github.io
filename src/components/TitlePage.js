import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import IconLink from "./IconLink";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import star from "../images/star.png"


export default function TitlePage(props) {
  const navigate = useNavigate()
  
  const h3 = { fontSize: '1.2em',
    color: '#303A6F',
    "&:hover": {
      fontWeight: 800,
      cursor: 'pointer'
    },
    fontFamily: 'Poppins',
    marginLeft: '3rem'
  }

  return (
    <div style={{  marginLeft: '35%' }}>
      <Typography onClick={() => navigate('/')} sx={{ alignItems: 'left', fontSize: '3em', color: '#303A6F', "&:hover": {
        cursor: 'pointer'
      } }}> <StarRoundedIcon sx={{ fontSize: '3rem'}}/> Amber</Typography>
      <a href="#profile" style={{ textDecoration: 'none'}}><Typography variant="subtitle1" sx={{ marginLeft: '3.7rem'}}>about me</Typography></a>
      {/* <Typography variant="subtitle1" sx={{ marginLeft: '3.7rem'}}>about me</Typography> */}
      <Typography onClick={() => navigate('/projects')} variant="subtitle1" sx={{ marginLeft: '3.7rem'}}>projects</Typography>
      <Typography onClick={() => navigate('/contact')} variant="subtitle1" sx={{ marginLeft: '3.7rem'}}>contact</Typography>
      <div className="icon-grid" style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(3, 2.5rem)', marginTop: '1rem', marginLeft: '3.7rem' }}>
          <div>
            <IconLink link="https://github.com/amborgw">
              <GitHubIcon sx={{ paddingTop: '0.05rem', fontSize: '2rem', color: '#303A6F', ":hover": {
                fontSize: '2.5rem',
                position: 'absolute',
                top: -5,
                left: -5
              } }}/>
            </IconLink>
          </div>
          <div>
            <IconLink link="https://www.linkedin.com/in/amber-wong-67744920b/">
              <LinkedInIcon sx={{ fontSize: '2.2rem', color: '#303A6F', ":hover": {
                fontSize: '2.7rem',
                position: 'absolute',
                top: -7,
                marginBottom: 1
              } }}/>
            </IconLink>
          </div>
      </div>
    </div>  
  )
}