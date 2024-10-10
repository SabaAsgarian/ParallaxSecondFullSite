import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import Image from 'next/image';
import { Description } from '@mui/icons-material';
import '../globals.css'
const Jar = ({ image, title }) => {
    return (
        <Card sx={{backgroundColor:'transparent' ,width: { xs: '100%', sm: '100%', md: '20%' }, margin: '5px',border:'0px' ,boxShadow:'none',height:'auto'}} className=" page2 updown">
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'auto' }}>
                    <Image src={image} alt={title}  style={{height:'70%',width:'40%',transitionDuration: '1s', objectFit: 'cover',cursor:'pointer' }} className='img-hover'/>
                </Box>
                <Typography variant="h3" sx={{ textAlign: 'center', marginTop: '10px' ,fontFamily:'gm',fontSize:'25px',fontWeight:'bolder',cursor:'pointer'}} className='p-hover font-extrabold '>
                    {title}
                </Typography>
                
            </CardContent>
        </Card>
    );
};

export default Jar;
