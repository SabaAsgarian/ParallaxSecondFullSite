import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import Image from 'next/image';
import '../globals.css'

const Jar = ({ image, title }) => {
    return (
        <Card sx={{
            zIndex:'9999',
            backgroundColor: 'transparent',
            width: { xs: '100%', sm: '100%', md: '20%' }, 
            
            border: '0px',
            boxShadow: 'none',
            position: 'relative',
            overflow: 'visible'
        }} className="my-10 page2 updown">
            <CardContent sx={{
                position: 'relative',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                    '& .jar-image': {
                        transform: 'translateY(-10px)'
                    },
                    '& .jar-title': {
                        color: '#c3a88f'
                    }
                }
            }}>
                <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    height: 'auto' 
                }}>
                    <Image 
                        src={image} 
                        alt={title}  
                        style={{
                            height: '70%',
                            width: '40%',
                            objectFit: 'cover',
                            cursor: 'pointer'
                        }}
                        className='jar-image transition-transform duration-300'
                    />
                </Box>
                <Typography 
                    variant="h3" 
                    className='jar-title transition-colors duration-300'
                    sx={{ 
                        textAlign: 'center', 
                        marginTop: '10px',
                        fontFamily: 'gm',
                        fontSize: '25px',
                        fontWeight: 'bolder',
                        cursor: 'pointer'
                    }}
                >
                    {title}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Jar;
