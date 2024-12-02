import React from "react";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import profile from "../images/pfp.jpg";

export default function FeaturedItems() {
  const isMs = useMediaQuery("(min-width:900px)");

  return (
    // <Stack id="home" spacing={4} justifyContent="center" alignItems="center">
    <>
      <Box
        sx={{
          background: "rgba(244, 244, 244, 0.9)",
          maxWidth: "55rem",
          borderRadius: "1rem",
          margin: "2rem",
          padding: "2rem",
        }}
      >
        <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
          {isMs ? (
            <img
              style={{
                width: "auto",
                height: "30rem",
                objectFit: "cover",
                borderRadius: "0.5em",
              }}
              src={profile}
              alt="profile"
            ></img>
          ) : (
            <img
              style={{
                width: "100%",
                maxHeight: "20rem",
                height: "auto",
                objectFit: "cover",
                borderRadius: "0.5em",
              }}
              src={profile}
              alt="profile"
            ></img>
          )}

          <Stack>
            <Typography variant="h1">Hi, I'm Amber Wong</Typography>
            <Box sx={{ marginTop: "3rem" }}>
              <Typography variant="subtitle2">
                I am a 3rd Year student at UNSW studying Computer Science and
                Neuroscience.
                <br />
                <br />I love <i style={{ fontWeight: "bold" }}>creating</i> and{" "}
                <i style={{ fontWeight: "bold" }}>curating</i> the world around
                me, so you can find me making something or thinking of making
                something.
                <br />
                <br />
                Please take a look around my{" "}
                <i style={{ fontWeight: "bold" }}>
                  decorated corner of the internet
                </i>
              </Typography>
            </Box>
            <Box sx={{ marginTop: "3rem" }}>
              <Typography variant="subtitle2">
                Listening to{" "}
                <i style={{ fontWeight: "bold" }}>
                  Carnivore - Bear Attack!
                </i>
                <br />
                Reading{" "}
                <i style={{ fontWeight: "bold" }}>
                  The Bell Jar - Sylvia Plath
                </i>
                <br />
                Working on <i style={{ fontWeight: "bold" }}>this website</i>
                <br />
                {/* Obsessed with these{" "}
                <i style={{ fontWeight: "bold" }}>3 memories of the month</i>
                <br /> */}
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </>
    // </Stack>
  );
}
