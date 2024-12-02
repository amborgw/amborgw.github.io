import React from "react";

import traffic from "../images/trafficcone.png";

export default function Construction() {
  return (
    <div
      style={{
        height: "100vh",
        // width: "100vw",
        backgroundColor: "#3c5f8f",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* TODO: fix for mobile */}
      <img
        src={traffic}
        style={{ maxHeight: "30rem", width: "auto", objectFit: "cover" }}
        draggable={false}
        alt="Traffic Cone"
      />
      <span
        style={{
          fontFamily: "Anton",
          fontSize: "2em",
          color: "#ff990a",
          marginTop: "-50px",
        }}
      >
        Under Construction
      </span>
    </div>
  );
}
