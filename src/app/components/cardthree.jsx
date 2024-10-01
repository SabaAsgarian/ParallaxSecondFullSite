import * as React from 'react';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Image from 'next/image'; // Ensure you're using the Next.js Image component
import '../globals.css'
import image from './img/Darbo-1544-FIN-768x576.jpg'
import butt from './img/CTA_Rund_weiss_EN-find-out-more.svg'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
export default function CardBig({  }) {
  return (
    <Card sx={{backgroundColor:'#faf7f3', display: 'flex', boxShadow: 'none', flexDirection: { xs: 'column', sm: 'column', md: 'row' } }} >
        
      <Box sx={{ width: { xs: '100%', sm: '100%', md: '50%' }, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '16px' }}>
        <CardContent>
          <Typography component="div" variant="h2" sx={{fontFamily:'le'}}>
          FOR CURRENT AND PROSPECTIVE BULK BUYERS
          </Typography>
          <Typography  component="div" sx={{ color: 'text.secondary' ,fontFamily:'cr'}} className='text-[12px] lg:text-[20px] my-[10px]'>
          Do you have questions about food service or hotel products, bakery needs, or fruit preparations for dairies? You’ll find the answers to all bulk buyer questions here!
          </Typography>
         
         
        </CardContent>
      </Box>
      <Box sx={{position:'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', width: { xs: '100%', sm: '100%', md: '50%' } }}>
        <Image src={image} alt='a' style={{ width:'80%',height:'80%', borderRadius: '0px', }} /> 
        <Image src={butt} alt='a' style={{ width:'30%', height:'50%', borderRadius: '50%',position:'absolute' ,bottom:'10%',left:'10%',border:'1px solid white',cursor:"pointer"}} className='spin'/> 
        <ArrowRightAltIcon sx={{color:'white',position:'absolute' ,bottom:'27%',left:'22%',fontSize:'70px'}}/>
      </Box>
    </Card>
  );
}