import { Box, Typography } from "@mui/material";
import React from "react";

export default function FeaturedItems() {
    return (
        <Box sx={{ justifyContent: 'center' }}>
            <Box sx={{ 
                background: 'rgba(255, 255, 255, 0.4)',
                maxWidth: '40rem',
                height: '15rem',
                borderRadius: '1rem',
                padding: '1.3rem',
            }}>
                <Typography sx={{ fontSize: '2em', color: '#303A6F', opacity: '100%', marginBottom: '1.2rem'}}>Currently...</Typography>
                <Typography variant="subtitle2">listening to <i style={{ fontWeight: 800, }}>Nocturne (Interlude) - Laufey</i></Typography>
                <Typography variant="subtitle2">reading <i style={{ fontWeight: 800, }}>The Body Keeps The Score - Bessel van der Kolk</i></Typography>
                <Typography variant="subtitle2">working on <i style={{ fontWeight: 800, }}>this website</i></Typography>
                <Typography variant="subtitle2">obsessed with these <i style={{ fontWeight: 800, }}>3 memories of the month</i></Typography>
            </Box>
        </Box>
    )
}