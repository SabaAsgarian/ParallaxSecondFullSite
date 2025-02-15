"use client"
import React from 'react'
import Header from './components/Header'
import { Box, Button, Grid, Typography } from '@mui/material'
import { useState, useEffect } from 'react';
import Products from './components/products';

import six from './components/img/CTA_Startseite_So-schmecken-nur_EN.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import d from './components/img/d.png'
import Image from 'next/image';
import Cardone from './components/cardone'
import CardTwo from './components/cardtwo'
import Cardthree from './components/cardthree'
import t from './components/img/jami.png'
import j from './components/img/CTA_Rund_weiss_EN-discover-now.svg'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CustomCard from './components/CustomCard'
import yek from './components/img/yek.webp'
import doo from './components/img/doo.webp'
import seh from './components/img/seh.webp'

import panj from './components/img/chah.jpg'
import Footer from './components/footer'
import a from './components/img/9.png'
import b from './components/img/HO1000g_BLUE_1200x1200px-480x480.png'
import c from './components/img/SRP500ml_HIMB_1200x1200px-480x480.png'
import e from './components/img/5.png'
import Jar from './components/jar'
import loading from './components/img/darbo_seit1879_4c_n_Since_weiss.svg'
import Discover from './components/carddiscover'
import one from './components/img/1.jpg'
import two from './components/img/2.jpg'
import three from './components/img/3.jpg'
import four from './components/img/4.jpg'
const cardData = [
  { image: yek,title: '⭐⭐⭐⭐',description:' Our varied assortment makes baking a piece of cake.' },
  { image: doo,title: '⭐⭐⭐⭐',description:' Our varied assortment makes baking a piece of cake.' },
  { image: seh,title: '⭐⭐⭐⭐⭐',description:' Our varied assortment makes baking a piece of cake.' },
 
  { image: panj,title: '⭐⭐⭐⭐⭐',description:' Our varied assortment makes baking a piece of cake.' },

];
const cardDataa = [
  { image: one,title: 'For spreading',description:'Our flavorful jams and honeys make a fine spread.' },
  { image: two,title: 'For spooning',description: ' Every single spoonful of our sauces, fruit desserts & preserves is a delight.' },
  { image: three,title: 'For baking',description:' Our varied assortment makes baking a piece of cake.' },
 
  { image: four,title: 'For drinking',description:' Our range of syrups will cheer and delight every mood.' },

];
const JarData = [
  { image: a, title: 'Jams' },
  { image: b, title: 'Honey' },
  { image: c , title: 'Syrup' },
  { image: e, title: 'Sauces & Fruitdessert' },
];
export default function page() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    // Your page initialization code here
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <>
        <div className="bg-black w-full h-[100vh] flex justify-center items-center text-center">
          <Image src={loading} alt="Loading" priority />
        </div>
      </>
    )// Your custom loading indicator
  }
  return (
    <div className='bg-[#faf7f3] overflow-x-hidden'>
      <div className='bg-header w-[100%] h-[120vh] bg-cover bg-center  '>
        <Header />
        <Box sx={{ width: '100%', minHeight: '70%',maxHeight:'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          
          <Typography variant='h3' sx={{fontFamily:'cr',color:'white'}}>The unmistakable taste of the very best fruit.</Typography>
          <Typography variant='h1' sx={{fontFamily:'le',color:'white'}}>MAXIMUM ENJOYMENT: IT’S IN OUR NATURE.</Typography>
          <Box sx={{width:'100%'}}>
            <Button sx={{fontWeight:'bolder',fontSize:'16px',borderRadius:'0px', backgroundColor: '#c3a78e', color: 'white', fontFamily: 'gm' ,width:'250px','&:hover': {
                                        color: 'white',backgroundColor:'gray',border:'none'}}}>
            watch the whole spot
            </Button>
          </Box>
        </Box>
      </div>
      <div className='bg-cloud h-[45vh] translate-y-[-50%] flex justify-center bg-repeat-x'>
      {JarData.map((card, index) => (
          <Jar key={index} image={card.image} title={card.title} />
        ))}
      </div>
      <Grid container spacing={2} sx={{ justifyContent: 'center', alignItems: 'center',display:'flex',textAlign:'center' }}>
        <Grid item xs={12} sm={6} md={4} lg={12} sx={{ textAlign: 'center' }}>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', position: 'relative' }}>

            <Image src={six} alt='a' className='spin border-5 border-black border-double rounded-full ' />
            <Image src={d} alt='a' className=' border-5 border-black w-[100px] h-[80px] absolute top-[25%]' />
          </Box>
          <div data-aos="fade-up"
            data-aos-duration="3000" className='flex justify-center items-center text-center'>
            <Typography variant="h6" sx={{display:'flex',justifyContent:'center',textAlign:'center', fontWeight: 'bolder', color: 'black', width: '80%', fontFamily: 'cr', fontSize: '30px' }}>
              The Darbo Family has been bringing love and dedication to the creation of delicious little delicacies since 1879. Whatever you’re looking for, you’ll find it here as if by magic. And one thing is certain: the results will delight both your eyes and your palate.
            </Typography>
          </div>
        </Grid>
      </Grid>
      <div data-aos="fade-up"
        data-aos-duration="3000" data-aos-offset="400" className='w-full flex my-[10%]'>
        <div className='w-full lg:w-[40%] h-auto'> <Cardone /></div>
        <div className='w-full lg:w-[60%] h-auto translate-y-[10%] translate-x-[10%]'><CardTwo /></div>
      </div>
      <div data-aos="fade-up"
        data-aos-offset="300"
        data-aos-duration="3000" >
        <Cardthree />
      </div>
      <div data-aos="fade-up"
        data-aos-offset="300"
        data-aos-duration="3000" className='bg-chery w-full h-[100vh] relative mt-[10%] bg-center bg-cover'>


        <figure className='absolute w-full h-[50%] lg:w-[30%] lg:h-[80%] left-[10%] top-[10%]  rounded-full flex flex-wrap justify-center items-center'>
          <Image src={t} alt='a' className='w-[50%] lg:w-full h-fit cursor-pointer' />


        </figure>
        <div className='absolute hidden lg:flex right-[20%] top-[20%] '>
          <Image src={j} alt='a' className='w-full  spin cursor-pointer border-2 border-white rounded-full' />
          <ArrowRightAltIcon sx={{ color: 'white', fontSize: '100px', position: 'absolute', top: '45%',left:'45%',transform:'translate(-45%,-45%)' }} />
        </div>
      </div> 
      <div className='bg-repeat-x bg-cloud h-[45vh] translate-y-[-50%]'></div>
      {/* <div className='!bg-[#faf7f3] w-[100%] '>
        <Products scrollPosition={scrollPosition} />
      </div> */}
      <Box sx={{display:'flex',justifyContent:'start',alignItems:'center',textAlign:'center',marginLeft:'3%'}}>
    <Typography variant='h6' sx={{textAlign:'center',fontFamily:'cr',fontWeight:'bolder',fontStyle:'italic',color:'#C3A78E'}}>Tasty tidbits for every environment</Typography>

      </Box> 
 <Box sx={{display:'flex',justifyContent:'start',alignItems:'center',textAlign:'center',marginLeft:'3%',marginBottom:'5%'}}>
    <Typography variant='h1' sx={{textAlign:'center',fontFamily:'le',}}>Discover our product range</Typography>

      </Box> 
      <Box data-aos="fade-up"
        data-aos-duration="3000" data-aos-offset="300" sx={{ width:'100%',display: 'flex', flexWrap: 'wrap', justifyContent: 'center', backgroundColor: '#faf7f3',minHeight:'100vh', maxHeight: 'auto',borderBottom:'2px solid #c3a88f'}} >
        
        {cardDataa.map((card, index) => (
          <Discover key={index} image={card.image}  title={card.title} description={card.description} />
        ))}
      </Box>
      <Box sx={{width:'80%',display:'flex',justifyContent:'start',alignItems:'center',textAlign:'center',marginLeft:'3%',marginTop:{xs:'10%',lg:'5%'}}}>
    <Typography variant='h6' sx={{textAlign:'start',fontFamily:'cr',fontWeight:'bolder',fontStyle:'italic',color:'#C3A78E'}}>Discover your new favorite dishes now</Typography>

      </Box> 
 <Box sx={{width:{xs:'100%',lg:'50%'},display:'flex',justifyContent:'start',alignItems:'center',textAlign:'start',marginLeft:'3%',marginTop:'3%'}}>
    <Typography variant='h1' sx={{textAlign:'start',fontFamily:'le'}}>Our most delectable recipe ideas</Typography>

      </Box> 
 <Box sx={{width:'60%',display:'flex',justifyContent:'start',alignItems:'center',textAlign:'start',marginLeft:'3%',marginBottom:'5%',marginTop:'3%'}}>
    <Typography variant='h6' sx={{textAlign:'start',fontFamily:'gm',fontWeight:'thiner',}}>Our recipe for the perfect meal? A little inspiration from our culinary tips, the right ingredients, one portion of dedication, and of course the finest Darbo products. Happy cooking!</Typography>

      </Box> 
      <Box data-aos="fade-up"
        data-aos-duration="3000" data-aos-offset="100" sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', backgroundColor: '#faf7f3',minHeight:'100vh' , maxHeight: 'auto',}} >
        
        {cardData.map((card, index) => (
          <CustomCard key={index} image={card.image} title={card.title} description={card.description} />
        ))}
      </Box>
    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center'}}>
    <Typography variant='h2' sx={{textAlign:'center',fontFamily:'le'}}>Follow us on Instagram @darbo_official</Typography>
      </Box> 
      <Footer/>
    </div>
  )
}
