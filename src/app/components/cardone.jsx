import * as React from 'react';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Image from 'next/image'; // Ensure you're using the Next.js Image component
import '../globals.css'
import image from './img/left.jpg'
import butt from './img/CTA_Rund_weiss_EN-to-our-products.svg'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
export default function CardBig({ }) {
  return (
    <Card sx={{ backgroundColor: '#faf7f3', display: 'flex', boxShadow: 'none', flexDirection: { xs: 'column', sm: 'column', md: 'column' } }} >
      <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', width: { xs: '100%', sm: '100%', md: '100%' }, marginLeft: '5%', position: 'relative' }}>
        <Image src={image} alt='a' style={{ width: '80%', height: '80%', borderRadius: '0px', }} />
        <Box sx={{ position: 'absolute', bottom: '10%',left:'10%', cursor: "pointer", display: 'flex', justifyContent: 'center', alignItems: 'center',width:{xs:'50%',md:'auto'} ,height:{xs:'50%',md:'auto'}}}>
          <Image src={butt} alt='a' style={{borderRadius: '50%',border: '1px solid white' }} className='spin' />
          <ArrowRightAltIcon sx={{ color: 'white', fontSize: '70px',position:'absolute' }} />
        </Box>
      </Box>
      <Box sx={{ width: { xs: '100%', sm: '100%', md: '100%' }, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '16px' }}>
        <CardContent>
          <Typography component="div" variant="h2" sx={{ fontFamily: 'le' }}>
            A TEMPTING VARIETY: DISCOVER THE WORLD OF DARBO!
          </Typography>
          <Typography component="div" sx={{ fontFamily: 'cr', color: 'text.secondary', }} className=' text-[12px] lg:text-[20px] my-[10px]'>
            From fruit spreads that beguile the senses to melt-in-the-mouth desserts to syrups for delicious drinks, we have everything your heart could desire.
          </Typography>

        </CardContent>
      </Box>
    </Card>
  );
}