import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import Image from 'next/image';
import { Brightness1, Description } from '@mui/icons-material';
import '../globals.css'
const CustomCard = ({ image }) => {
    return (
        <Card sx={{backgroundColor:'#faf7f3',border:"1px solid black", width: { xs: '100%', sm: '100%', md: '20%' }, margin: '10px' ,direction:'rtl'}} className="page2">
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'auto' }}>
                    <Image src={image} alt='a'  style={{ objectFit: 'cover' ,width:'100%',height:'100%',}} className='brit' />
                </Box>
               
                
            </CardContent>
        </Card>
    );
};

export default CustomCard;