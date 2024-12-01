import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import StarRoundedIcon from '@mui/icons-material/StarRounded';


export default function FeaturedItems() {
    return (
        <Stack id="home" spacing={4} justifyContent="center" alignItems="center" height="100vh" width="100vw">
            <StarRoundedIcon sx={{ position: 'relative', right: '0.5rem', fontSize: "4rem", color: '#303A6F', minWidth: '3rem'}}/>
            {/* <Box sx={{ 
                background: 'rgba(255, 255, 255, 0.4)',
                // maxWidth: '40em',
                borderRadius: '1em',
                padding: '2em',
            }}>
                <Typography sx={{ fontSize: '2em', color: '#303A6F', opacity: '100%'}}>Currently...</Typography>
                <Typography variant="subtitle2">listening to <i style={{ fontWeight: 'bold', }}>Nocturne (Interlude) - Laufey</i></Typography>
                <Typography variant="subtitle2">reading <i style={{ fontWeight: 'bold', }}>The Body Keeps The Score - Bessel van der Kolk</i></Typography>
                <Typography variant="subtitle2">working on <i style={{ fontWeight: 'bold', }}>this website</i></Typography>
                <Typography variant="subtitle2">obsessed with these <i style={{ fontWeight: 'bold', }}>3 memories of the month</i></Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <img style={{ width: '10em', height: '10em', objectFit: 'cover', borderRadius: '0.5em'}} src="https://i.pinimg.com/564x/ea/b1/54/eab1541cf179b0e2b4da817f46399dad.jpg"></img>
                    <img style={{ width: '10em', height: '10em', objectFit: 'cover', borderRadius: '0.5em'}} src="https://i.pinimg.com/originals/b5/22/57/b52257704934e0d1ea5684be78241d19.gif"></img>
                    <img style={{ width: '10em', height: '10em', objectFit: 'cover', borderRadius: '0.5em'}} src="https://i.pinimg.com/564x/74/87/97/7487970175625953ffe6a471bc3485bd.jpg"></img>
                </Stack>
            </Box> */}
            <Box sx={{ 
                background: 'rgba(255, 255, 255, 0.4)',
                maxWidth: '70em',
                borderRadius: '1em',
                padding: '2em',
                // overflow: 'hidden',
            }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
                    <img style={{ width: "auto", height: "100%", objectFit: 'cover', borderRadius: '0.5em'}} src="https://i.pinimg.com/564x/74/87/97/7487970175625953ffe6a471bc3485bd.jpg"></img>
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
                        working on <i style={{ fontWeight: 'bold', }}>this website</i><br />
                        obsessed with these <i style={{ fontWeight: 'bold', }}>3 memories of the month</i><br />
                        </Typography>
                    </Box>
                    </Stack>                    
                </Stack>
            </Box>
        </Stack>
    )
}