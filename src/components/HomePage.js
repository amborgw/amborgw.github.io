import React from "react";

import traffic from "../images/trafficcone.png"

export default function HomePage() {
    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <img src={traffic} style={{ width: '600px', marginTop: '-100px' }}/>
            <span style={{ fontFamily: 'Anton', fontSize: '4em', color: '#ff990a', marginTop: '-50px' }}>
                Under Construction</span>
        </div>
    )
}