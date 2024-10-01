import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import Image from 'next/image';
import { Description } from '@mui/icons-material';
import '../globals.css'
const Jar = ({ image, title }) => {
    return (
        <Card sx={{backgroundColor:'transparent' ,width: { xs: '100%', sm: '100%', md: '20%' }, margin: '5px',border:'0px' ,boxShadow:'none'}} className="my-10 page2 updown">
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'auto' }}>
                    <Image src={image} alt={title} width={150} height={150} style={{ objectFit: 'cover', }} />
                </Box>
                <Typography variant="h3" sx={{ textAlign: 'center', marginTop: '10px' ,fontFamily:'cr',fontSize:'25px',fontWeight:'bolder'}} className='font-is font-extrabold '>
                    {title}
                </Typography>
                
            </CardContent>
        </Card>
    );
};

export default Jar;