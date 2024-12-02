/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import IconLink from "./IconLink";
import { Grid, Stack, Typography } from "@mui/material"; // import star from "../images/star.png"

export default function TitlePage(props) {
  const [boldMe, setMe] = useState(false);
  const [boldProjects, setProjects] = useState(false);
  const [boldContact, setContact] = useState(false);
  const [y, setTop] = useState("0.7rem");
  const [size, setSize] = useState("3rem");

  const toggleProjects = () => {
    setProjects(!boldProjects);
    !boldProjects ? (setMe(false), setContact(false)) : null;
    // setTop("7.3rem");
    // setSize("1.5rem");
  };
  const toggleContact = () => {
    setContact(!boldContact);
    !boldContact ? (setProjects(false), setMe(false)) : null;
    // setTop("9.5rem");
    // setSize("1.5rem");
  };

  const toggleHome = () => {
    setProjects(false);
    setMe(false);
    setContact(false);
    // setTop("0.7rem");
    // setSize("3rem");
  };

  return (
    <div
      id="navbar"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack direction="row" spacing={1} position="relative">
        <StarRoundedIcon
          sx={{
            position: "relative",
            top: y,
            right: "0.5rem",
            fontSize: size,
            color: "#303A6F",
            minWidth: "3rem",
          }}
        />
        <a href="#home" style={{ textDecoration: "none" }}>
          <Typography
            // onClick={toggleHome}
            sx={{
              fontSize: "3rem",
              color: "#303A6F",
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Amber
          </Typography>
        </a>
      </Stack>
      <div>
        <Stack
          direction="row"
          spacing={3}
          alignItems="center"
          justifyContent="center"
        >
          <a href="#projects" style={{ textDecorationLine: "none" }}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: boldProjects ? "bold" : "400", width: "5rem" }}
              onClick={toggleProjects}
            >
              projects
            </Typography>
          </a>
          <a href="#contact" style={{ textDecorationLine: "none" }}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: boldContact ? "bold" : "400", width: "5rem" }}
              onClick={toggleContact}
            >
              contact
            </Typography>
          </a>
          <IconLink link="https://github.com/amborgw" position="relative">
            <GitHubIcon
              sx={{
                fontSize: "1.5rem",
                color: "#303A6F",
                ":hover": {
                  transform: "scale(1.33)",
                },
              }}
            />
          </IconLink>
          <IconLink link="https://www.linkedin.com/in/amber-wong-67744920b/">
            <LinkedInIcon
              sx={{
                fontSize: "1.5rem",
                color: "#303A6F",
                ":hover": {
                  transform: "scale(1.33)",
                },
              }}
            />
          </IconLink>
        </Stack>
      </div>
    </div>
  );
}
