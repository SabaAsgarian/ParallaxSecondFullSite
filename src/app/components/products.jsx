import React from 'react';
import { Box, Container, Grid, Typography, Button, CssBaseline } from '@mui/material';
import one from './img/1.png';
import two from './img/5.png';
import three from './img/6.png';
import four from './img/9.png';

import Image from 'next/image';

const arr = [
  {
    title: "Honey",
    src: one,
  },
  {
    title: "Sauces & Fruitdressers",
    src: two,
  },
  {
    title: "Syrup",
    src: three,
  },
  {
    title: "Jams",
    src: four,
  },

];

const Products = () => {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const [transformValue, setTransformValue] = React.useState(0);

  const handleScroll = () => {
    const currentPosition = window.scrollY;
    if (currentPosition > scrollPosition) {
      // Scrolling down
      setScrollPosition(currentPosition);
      setTransformValue(currentPosition / 8);
    } else {
      // Scrolling up
      setScrollPosition(currentPosition);
      setTransformValue(currentPosition / 8);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container maxWidth="2xl" sx={{ py: 4, backgroundColor: '#faf7f3 !important',height:'auto' }}>
      <CssBaseline />
   
      <div className="sticky-parent">
        <div className="sticky">
        
          <div className="scroll w-[500vw] sm:w-[400vw] md:w-[300vw] lg:w-[170vw]" sx={{ transform: `translateX(-${transformValue}px)` }} style={{ transform: `translateX(-${transformValue}px)`, color: 'black !important' }}>
            {arr.map((item, index) => (
              <Grid key={index} item xs={3} sm={12} md={12} lg={12} sx={{display:'flex',cursor:'pointer'}} className='hover:bg-[#c3a78e]' >
                <figure className='flex '>
                  <Image src={item.src} alt={item.title} className='w-full ' />
                  <figcaption className='text-black font-cr w-full font-extrabold'>{item.title}</figcaption>
                </figure>
              </Grid>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Products;
