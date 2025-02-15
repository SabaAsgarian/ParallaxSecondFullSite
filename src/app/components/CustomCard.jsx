import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import Image from 'next/image';

import '../globals.css';

const Cardd = ({ image, title, description }) => {
    return (
        <Card sx={{
            boxShadow: 'none',
            border: '0px',
            borderRadius: "0px",
            width: { xs: '100%', sm: '100%', md: '20%' },
            margin: {xs:'0',md:'10px',lg:'25px'},
            backgroundColor: 'transparent',
            cursor: 'pointer',
            transition: '1s',
           
        }}>
           <Box sx={{overflow:'hidden'}}>
           <Box sx={{
             
             transition: '1s',
             '&:hover': { transform: 'scale(1.1)' },
             display: 'flex',
             justifyContent: 'center',
             alignItems: 'center',
             width: '100%',
             
         }}>
             <Image src={image} alt={title} style={{ objectFit: 'cover', width: '100%', height: 'auto' ,   overflow:'hidden',}} />
         </Box>
           </Box>
           <CardContent sx={{  
                backgroundColor: 'transparent',
                padding: '10%',
                transition: '1s',
                '&:hover': { 
                    '& .MuiTypography-root': {
                        color: '#ceb7a3'
                    }
                }
            }}>
            <Typography variant="h4" sx={{
                    textAlign: 'center',
                    marginTop: '10px',
                    marginBottom: '5%',
                    fontFamily: 'gm',
                    textTransform:'uppercase',
                    fontWeight: 'bolder',
                    color: 'black',
                    transition: '1s',
                    '&:hover': { color: '#ee6059' }
                }}>
                    {title}
                </Typography>
                <Typography variant="h4" sx={{
                    width: '100%',
                    marginTop: '10%',
                    marginBottom: '20%',
                    textAlign: 'center',
                    fontFamily: 'le',
                    transition: '1s',
                    fontWeight: 'thiner',
                    color: 'black',
                }}>
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Cardd;
