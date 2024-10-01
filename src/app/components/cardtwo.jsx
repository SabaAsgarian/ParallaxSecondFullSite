import * as React from 'react';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Image from 'next/image'; // Ensure you're using the Next.js Image component
import '../globals.css'
import image from './img/right.jpg'
import butt from './img/CTA_Rund_weiss_EN-all-about-darbo.svg'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
export default function CardBig({  }) {
  return (
    <Card sx={{backgroundColor:'#faf7f3', display: 'flex', boxShadow: 'none', flexDirection: { xs: 'column', sm: 'column', md: 'column' } }} >
    <Box sx={{ marginLeft:'4%',display: 'flex', justifyContent: 'start', alignItems: 'center', width: { xs: '100%', sm: '100%', md: '100%' } ,position:"relative"}}>
      <Image src={image} alt='a' style={{ width:'80%', height:'80%', borderRadius: '0px' }} /> {/* Adjust width/height as needed */}
      <Image src={butt} alt='a' style={{ width:'30%', height:'40%', borderRadius: '50%',position:'absolute' ,bottom:'1%',border:'1px solid white',cursor:"pointer"}} className='spin'/> 
      <ArrowRightAltIcon sx={{color:'white',position:'absolute' ,bottom:'15%',left:'10%',fontSize:'70px'}}/>
    </Box>
    <Box sx={{ width: { xs: '100%', sm: '100%', md: '100%' }, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '16px' }}>
      <CardContent>
        <Typography component="div" variant="h2" sx={{fontFamily:'le'}} className=''>
        Welcome to Darbo!
        </Typography>
        <Typography  component="div" variant="body1" sx={{fontFamily:'cr', color: 'text.secondary',width:'50%'}} className='text-[12px] lg:text-[20px] my-[10px]'>
        Customers have been enjoying the fruits of the labors of The Darbo family since 1879. Find out more about their story here.
        </Typography>
       
      </CardContent>
    </Box>
  </Card>
  );
}