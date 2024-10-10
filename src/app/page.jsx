"use client"
import React from 'react'
import Header from './components/Header'
import { Box, Grid, Typography } from '@mui/material'
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

import panj from './components/img/Darbo_Winter1035-1-225x279.jpg'
import Footer from './components/footer'
import a from './components/img/9.png'
import b from './components/img/HO1000g_BLUE_1200x1200px-480x480.png'
import c from './components/img/SRP500ml_HIMB_1200x1200px-480x480.png'
import e from './components/img/5.png'
import Jar from './components/jar'
import loading from './components/img/darbo_seit1879_4c_n_Since_weiss.svg'

const cardData = [
  { image: yek },
  { image: doo },
  { image: seh },
 
  { image: panj },

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
    <div className='bg-[#faf7f3]'>
      <div className='bg-header w-full h-[120vh] bg-cover bg-center overflow-x-hidden'>
        <Header />
        <Box sx={{ width: '100%', height: '70%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <h3 className='font-le text-[30px] lg:text-[40px] text-white font-extrabold w-full text-center'>The unmistakable taste of the very best fruit.</h3>
          <h1 className='font-cr text-[20px] lg:text-[100px] text-white font-extrabold w-full whitespace-break-spaces text-center'>MAXIMUM ENJOYMENT: IT’S IN OUR NATURE.</h1>
        </Box>
      </div>
      <div className='bg-cloud h-[45vh]  translate-y-[-50%] flex justify-center bg-repeat-x'>
      {JarData.map((card, index) => (
          <Jar key={index} image={card.image} title={card.title} />
        ))}
      </div>
      <Grid container spacing={2} sx={{ justifyContent: 'center', alignItems: 'center',marginTop:'2%' }}>
        <Grid item xs={12} sm={6} md={4} lg={12} sx={{ textAlign: 'center' }}>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', position: 'relative' }}>

            <Image src={six} alt='a' className='spin border-5 border-black border-double rounded-full ' />
            <Image src={d} alt='a' className=' border-5 border-black w-[100px] h-[80px] absolute top-[25%]' />
          </Box>
          <div data-aos="fade-up"
            data-aos-duration="3000">
            <Typography variant="h6" sx={{ fontWeight: 'bolder', color: 'black', width: '100%', fontFamily: 'cr', fontSize: '30px' }}>
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
      <div className='!bg-[#faf7f3] w-[100%] h-auto'>
         <Typography variant="h2" sx={{marginLeft: '5%', color: 'black',fontFamily: 'le' }}>
            Our Products
          </Typography>
        <Products scrollPosition={scrollPosition} />
      </div>
    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center'}}>
    <Typography sx={{textAlign:'center',fontFamily:'le',fontSize:{xs:'30px',md:'50px'},fontWeight:'bolder'}}>Follow us on Instagram @darbo_official</Typography>
      </Box> 
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', backgroundColor: '#f6f7fa', height: 'auto',}} >
        
        {cardData.map((card, index) => (
          <CustomCard key={index} image={card.image} />
        ))}
      </Box>
      <Footer/>
    </div>
  )
}
