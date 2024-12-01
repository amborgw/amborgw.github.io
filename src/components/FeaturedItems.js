import { Box, Typography } from "@mui/material";
import React from "react";

export default function FeaturedItems() {
    return (
        <Box id="home" style={{ display: 'flex', alignItems: 'center', height: '100vh', justifyContent: 'center' }}>
            <Box sx={{ 
                marginLeft: '5em', 
                background: 'rgba(255, 255, 255, 0.4)',
                maxWidth: '40em',
                borderRadius: '1em',
                padding: '2em',
            }}>
                <Typography sx={{ fontSize: '2em', color: '#303A6F', opacity: '100%'}}>Currently...</Typography>
                <Typography variant="subtitle2">listening to <i style={{ fontWeight: 'bold', }}>Nocturne (Interlude) - Laufey</i></Typography>
                <Typography variant="subtitle2">reading <i style={{ fontWeight: 'bold', }}>The Body Keeps The Score - Bessel van der Kolk</i></Typography>
                <Typography variant="subtitle2">working on <i style={{ fontWeight: 'bold', }}>this website</i></Typography>
                <Typography variant="subtitle2">obsessed with these <i style={{ fontWeight: 'bold', }}>3 memories of the month</i></Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '1em'}}>
                    <img style={{ width: '10em', height: '10em', objectFit: 'cover', borderRadius: '0.5em'}} src="https://i.pinimg.com/564x/ea/b1/54/eab1541cf179b0e2b4da817f46399dad.jpg"></img>
                    <img style={{ width: '10em', height: '10em', objectFit: 'cover', borderRadius: '0.5em'}} src="https://i.pinimg.com/originals/b5/22/57/b52257704934e0d1ea5684be78241d19.gif"></img>
                    <img style={{ width: '10em', height: '10em', objectFit: 'cover', borderRadius: '0.5em'}} src="https://i.pinimg.com/564x/74/87/97/7487970175625953ffe6a471bc3485bd.jpg"></img>
                </Box>
            </Box>
        </Box>
    )
}