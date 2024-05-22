import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';


const Footer = () => {
    return (
        <Box mt="80px" bgcolor="#fff3f4">
            <Stack gap={{ xs: '20px', md: '20px' }}
                alignItems="center"
                px={{ xs: '20px', md: '40px' }}
                pt="24px" >
                <img src={Logo} alt="logo" width="200px" height="40px" />
                <Typography variant="h5" style={{ textAlign: 'center' }}>Made by Sumit</Typography>
                <Typography variant="body1" style={{ textAlign: 'center' }}>
                    <span>© {new Date().getFullYear()} Copyright by</span>
                    <span> </span>
                    <span style={{ fontWeight: 'bold', color: '#ff2625', fontFamily: 'sans-serif' }}>GYM Freak</span>
                </Typography>
            </Stack>
        </Box >
    )
}



export default Footer;