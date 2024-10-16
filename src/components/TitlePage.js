/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import IconLink from "./IconLink";
import { Typography } from "@mui/material";
// import star from "../images/star.png"


export default function TitlePage(props) {
  const [boldMe, setMe] = useState(false)
  const [boldProjects, setProjects] = useState(false)
  const [boldContact, setContact] = useState(false)

  const toggleMe = () => {
    setMe(!boldMe);
    !boldMe ? (setProjects(false), setContact(false)) : null;
  }
  const toggleProjects = () => {
    setProjects(!boldProjects);
    !boldProjects ? (setMe(false), setContact(false)) : null;
  }
  const toggleContact = () => {
    setContact(!boldContact);
    !boldContact ? (setProjects(false), setMe(false)) : null;
  }

  const toggleHome = () => {
    setProjects(false)
    setMe(false)
    setContact(false)
  }

  return (
    <div id="navbar" style={{ position: 'fixed', top: '20rem', left: '7rem', width: '20rem', zIndex: 999}}>
      <a href="#home" style={{ textDecoration: 'none'}}><Typography onClick={toggleHome} sx={{ alignItems: 'left', fontSize: '3em', color: '#303A6F', "&:hover": {
        cursor: 'pointer' 
      } }}> <StarRoundedIcon sx={{ fontSize: '3rem'}}/> Amber</Typography></a>
      <a href="#about-me" style={{ textDecorationLine: 'none' }} ><Typography variant="subtitle1" sx={{ marginLeft: '3.7rem', fontWeight: boldMe ? 'bold': '400' }} onClick={toggleMe}>about me</Typography></a>
      <a href="#projects" style={{ textDecorationLine: 'none' }}><Typography variant="subtitle1" sx={{ marginLeft: '3.7rem', fontWeight: boldProjects ? 'bold': '400' }} onClick={toggleProjects}>projects</Typography></a>
      <a href="#contact" style={{ textDecorationLine: 'none' }}><Typography variant="subtitle1" sx={{ marginLeft: '3.7rem', fontWeight: boldContact ? 'bold': '400' }} onClick={toggleContact}>contact</Typography></a>
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