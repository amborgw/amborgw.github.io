/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import IconLink from "./IconLink";
import { Stack, Typography } from "@mui/material";// import star from "../images/star.png"


export default function TitlePage(props) {
  const [boldMe, setMe] = useState(false)
  const [boldProjects, setProjects] = useState(false)
  const [boldContact, setContact] = useState(false)
  const [y, setTop] = useState("0.7rem")
  const [size, setSize] = useState("3rem")

  const toggleMe = () => {
    setMe(!boldMe);
    !boldMe ? (setProjects(false), setContact(false)) : null;
    setTop("5rem")
    setSize("1.5rem");
  }
  const toggleProjects = () => {
    setProjects(!boldProjects);
    !boldProjects ? (setMe(false), setContact(false)) : null;
    setTop("7.3rem")
    setSize("1.5rem");
  }
  const toggleContact = () => {
    setContact(!boldContact);
    !boldContact ? (setProjects(false), setMe(false)) : null;
    setTop("9.5rem")
    setSize("1.5rem");
  }
  
  const toggleHome = () => {
    setProjects(false)
    setMe(false)
    setContact(false)
    setTop("0.7rem")
    setSize("3rem")
  }

  return (
    <div id="navbar" style={{ position: 'fixed', top: '20em', left: '4em', zIndex: 999 }}>
      <Stack direction="row" >
        <StarRoundedIcon sx={{ position: 'relative', top: y, right: '0.5rem', fontSize: size, color: '#303A6F', minWidth: '3rem'}}/>
        <div>
          <a href="#home" style={{ textDecoration: 'none'}}><Typography onClick={toggleHome} sx={{ alignItems: 'left', fontSize: '3rem', color: '#303A6F', "&:hover": {
          cursor: 'pointer' 
        } }}>Amber</Typography></a>
        <a href="#about-me" style={{ textDecorationLine: 'none' }} ><Typography variant="subtitle1" sx={{ fontWeight: boldMe ? 'bold': '400' }} onClick={toggleMe}>about me</Typography></a>
        <a href="#projects" style={{ textDecorationLine: 'none' }}><Typography variant="subtitle1" sx={{ fontWeight: boldProjects ? 'bold': '400' }} onClick={toggleProjects}>projects</Typography></a>
        <a href="#contact" style={{ textDecorationLine: 'none' }}><Typography variant="subtitle1" sx={{ fontWeight: boldContact ? 'bold': '400' }} onClick={toggleContact}>contact</Typography></a>
        <div className="icon-grid" style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(3, 2.5rem)', marginTop: '1rem' }}>
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
      </Stack>
    </div>  
  )
}