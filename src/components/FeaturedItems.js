import { Box, Typography } from "@mui/material";
import React from "react";

export default function FeaturedItems() {
    return (
        <Box sx={{ justifyContent: 'center' }}>
            <Box sx={{ 
                background: 'rgba(255, 255, 255, 0.4)',
                maxWidth: '30rem',
                height: '15rem',
                borderRadius: '1rem',
                padding: '1.3rem',
            }}>
                <Typography sx={{ fontSize: '1.4em', color: '#ffffff', opacity: '100%'}}>Featured</Typography>
            </Box>
            <Box sx={{ 
                background: 'rgba(255, 255, 255, 0.4)',
                maxWidth: '30rem',
                height: '15rem',
                borderRadius: '1rem',
                padding: '1.3rem',
                marginTop: '3rem'
            }}>
                <Typography sx={{ fontSize: '1.4em', color: '#ffffff', opacity: '100%'}}>Recent Obsession</Typography>
            </Box>
        </Box>
    )
}