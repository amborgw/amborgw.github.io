import React from "react";
import Construction from "../Construction";
import {
  Box,
  Typography,
  createTheme,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

import TitlePage from "../TitlePage";
import FeaturedItems from "../FeaturedItems";
import { CardContainer } from "../index.styles";

const theme = createTheme({
  typography: {
    fontFamily: "Anton",
    color: "#3c5f8f",
    subtitle1: {
      fontSize: "1.1rem",
      color: "#303A6F",
      "&:hover": {
        fontWeight: "bold",
        cursor: "pointer",
      },
      fontFamily: "Poppins",
    },
    subtitle2: {
      fontSize: "1.1rem",
      color: "#303A6F",
      fontFamily: "Poppins",
      fontWeight: 400,
    },
    h1: {
      color: "#303A6F",
      fontFamily: "Anton",
      fontSize: "2rem",
    },
  },
});

export default function ProjectsPage() {
  const isMs = useMediaQuery("(min-width:900px)");
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
          gap: "2rem",
        }}
      >
        {isMs ? (
          <TitlePage />
        ) : (
          <StarRoundedIcon
            sx={{
              position: "relative",
              right: "0.5rem",
              fontSize: "3rem",
              color: "#303A6F",
              animation: "rotate 7s linear infinite",
              "@keyframes rotate": {
                from: { transform: "rotate(0deg)" },
                to: { transform: "rotate(360deg)" },
              },
            }}
          />
        )}
        <CardContainer></CardContainer>
      </div>
    </ThemeProvider>
  );
}
