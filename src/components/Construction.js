import React from "react";

import traffic from "../images/trafficcone.png"

export default function Construction() {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* TODO: fix for mobile */}
      <img src={traffic} style={{ minWidth: '100px', maxWidth: '600px', marginTop: '-100px' }} draggable={false} alt="Traffic Cone"/>
      <span style={{ fontFamily: 'Anton', fontSize: '3em', color: '#ff990a', marginTop: '-50px' }}>
        Under Construction</span>
    </div>
  )
}