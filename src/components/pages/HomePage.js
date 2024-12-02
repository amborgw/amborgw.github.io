import React from "react";

// import Construction from "../Construction";
import { ThemeProvider, createTheme, useMediaQuery } from "@mui/material";
import FeaturedItems from "../FeaturedItems";
import TitlePage from "../TitlePage";
// import ProfilePage from "./ProfilePage";
import ProjectsPage from "./ProjectsPage";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

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

export default function HomePage() {
  const isMs = useMediaQuery("(min-width:900px)");
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: '100vh',
          gap: isMs ? "2rem" : "0rem",
        }}
      >
        {isMs ? (
          <TitlePage />
        ) : (
          <StarRoundedIcon
            sx={{
              position: "relative",
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
        <FeaturedItems id="#home" />
      </div>
      {/* <ProjectsPage id="#projects"/> */}
      {/* <ProfilePage/> */}
    </ThemeProvider>
  );
}
