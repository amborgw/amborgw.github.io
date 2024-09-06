import { Box, Typography } from "@mui/material";
import React from "react";

export default function FeaturedItems() {
    return (
        <Box id="home" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh'  }}>
            <Box sx={{ 
                background: 'rgba(255, 255, 255, 0.4)',
                maxWidth: '40rem',
                borderRadius: '1rem',
                padding: '2rem',
            }}>
                <Typography sx={{ fontSize: '2em', color: '#303A6F', opacity: '100%', marginBottom: '1.2rem'}}>Currently...</Typography>
                <Typography variant="subtitle2">listening to <i style={{ fontWeight: 800, }}>Nocturne (Interlude) - Laufey</i></Typography>
                <Typography variant="subtitle2">reading <i style={{ fontWeight: 800, }}>The Body Keeps The Score - Bessel van der Kolk</i></Typography>
                <Typography variant="subtitle2">working on <i style={{ fontWeight: 800, }}>this website</i></Typography>
                <Typography variant="subtitle2">obsessed with these <i style={{ fontWeight: 800, }}>3 memories of the month</i></Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '1rem'}}>
                    <img style={{ width: '10rem', height: '10rem', objectFit: 'cover', borderRadius: '0.5rem'}} src="https://i.pinimg.com/564x/ea/b1/54/eab1541cf179b0e2b4da817f46399dad.jpg"></img>
                    <img style={{ width: '10rem', height: '10rem', objectFit: 'cover', borderRadius: '0.5rem'}} src="https://i.pinimg.com/originals/b5/22/57/b52257704934e0d1ea5684be78241d19.gif"></img>
                    <img style={{ width: '10rem', height: '10rem', objectFit: 'cover', borderRadius: '0.5rem'}} src="https://i.pinimg.com/564x/74/87/97/7487970175625953ffe6a471bc3485bd.jpg"></img>
                </Box>
            </Box>
        </Box>
    )
}