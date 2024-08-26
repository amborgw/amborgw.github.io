import { Box, Typography } from "@mui/material";
import React from "react";

export default function FeaturedItems() {
    return (
        <Box>
            <Box sx={{ 
                background: 'rgba(255, 255, 255, 0.4)',
                width: '300px',
                height: '200px',
                borderRadius: '10px',
                padding: '20px',
            }}>
                <Typography sx={{ fontSize: '1.2em', color: '#ffffff', opacity: '100%'}}>Featured</Typography>
            </Box>
            <Box sx={{ 
                background: 'rgba(255, 255, 255, 0.4)',
                width: '300px',
                height: '200px',
                borderRadius: '10px',
                padding: '20px',
                marginTop: 10
            }}>
                <Typography sx={{ fontSize: '1.2em', color: '#ffffff', opacity: '100%'}}>Recent Obsession</Typography>
            </Box>
        </Box>
    )
}