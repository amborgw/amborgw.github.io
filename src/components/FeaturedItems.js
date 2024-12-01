import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import StarRoundedIcon from '@mui/icons-material/StarRounded';


export default function FeaturedItems() {
    return (
        <Stack id="home" spacing={4} justifyContent="center" alignItems="center" height="100vh" width="100vw">
            <StarRoundedIcon sx={{ position: 'relative', right: '0.5rem', fontSize: "4rem", color: '#303A6F', minWidth: '3rem'}}/>
            <Box sx={{ 
                background: 'rgba(255, 255, 255, 0.4)',
                maxWidth: '55em',
                borderRadius: '1em',
                padding: '2em',
            }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
                    <img style={{ width: "auto", height: "30em", objectFit: 'cover', borderRadius: '0.5em'}} src="https://i.pinimg.com/564x/74/87/97/7487970175625953ffe6a471bc3485bd.jpg"></img>
                    <Stack>
                    <Typography variant="h1">
                        Hi, I'm Amber Wong
                    </Typography>
                    <Box sx={{marginTop: '3rem'}}>
                        <Typography variant="subtitle2">I am a 3rd Year student at UNSW studying Computer Science and Neuroscience.<br /><br />
                            I love <i style={{ fontWeight: 'bold' }}>creating</i> and <i style={{ fontWeight: 'bold' }}>curating</i> the world around me, so you can find me making something or thinking of making something.<br /><br/>
                            Please take a look around my <i style={{ fontWeight: 'bold' }}>decorated corner of the internet</i>
                        </Typography>
                    </Box>
                    <Box sx={{ marginTop: '3rem'}}>
                        <Typography variant="subtitle2">Listening to <i style={{ fontWeight: 'bold', }}>Nocturne (Interlude) - Laufey</i><br />
                        Reading <i style={{ fontWeight: 'bold', }}>The Body Keeps The Score - Bessel van der Kolk</i><br />
                        Working on <i style={{ fontWeight: 'bold', }}>this website</i><br />
                        Obsessed with these <i style={{ fontWeight: 'bold', }}>3 memories of the month</i><br />
                        </Typography>
                    </Box>
                    </Stack>                    
                </Stack>
            </Box>
        </Stack>
    )
}