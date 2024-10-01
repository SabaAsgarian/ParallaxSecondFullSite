"use client"
import { Box, Button } from "@mui/material"
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import React from 'react';
import logO from './img/darbo_seit1879_4c_n_Since_weiss.svg'
import Image from "next/image";
import Typography from "@mui/material/Typography";

import Me from './img/me.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import Link from "next/link";
import './../globals.css';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#23221f',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'start',
    color: theme.palette.text.secondary,
    boxShadow: 'none', // {{ edit_1 }} Remove box shadow
    ...theme.applyStyles('dark', {
        backgroundColor: '#23221f',
    }),
}));

export default function footer() {
    return (
        <>
            <Box sx={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'start', alignItems: 'start', backgroundColor: '#23221f', marginTop: '10%', color: 'white' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', width: '100%', marginLeft: '5%', marginTop: '5%' }}> {/* Changed to column */}

                    <Link href="/" style={{ textDecoration: 'none' }}>
                        <Image
                            src={logO}
                            alt="Logo"
                            priority
                            width={550}
                            height={150}
                            style={{ width: '100%', maxWidth: '550px', height: 'auto', marginBottom: '10%' }} // {{ edit_1 }} Responsive styling
                        />
                    </Link>

                    {/* New Box for Return Policy and Warranty */}
              

                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 3, sm: 2, md: 4, lg: 10 }}
                    >
                        <Item><a href="#link1" style={{ color: 'white', textDecoration: 'none', textAlign: 'start' }}>
                            <h1 className="text-[20px] lg:text-[30px] font-cr">Contact</h1>

                            <p className="p-hover font-gm text-[18px]" >Adolf Darbo AG
                                Dornau 18
                                6135 Stans
                                A – Austria</p>
                                <p className="p-hover font-gm text-[18px]">T: +43 (0)5242 6951-0
                                M: info(at)darbo.at</p>
                           <Button sx={{color:'white',border:'1px solid white',width:'120px',borderRadius:'0px','&:hover': {
                                        color: 'white',backgroundColor:'#c3a78e'
                                    }}}>
                            Contact
                           </Button>


                        </a></Item>
                        <Item><a href="#link1" style={{ color: 'white', textDecoration: 'none', textAlign: 'start' }}>
                            <h1 className="text-[20px] lg:text-[30px] font-cr">Products</h1>

                            <p className="p-hover font-gm text-[18px]" style={{}}>Jams</p>
                            <p className="p-hover font-gm text-[18px]" style={{}}>Sauces & Fruitdesserts</p>
                            <p className="p-hover font-gm text-[18px]" style={{}}>Honey</p>
                            <p className="p-hover font-gm text-[18px]" style={{}}>Syrup</p>
                     
                           





                        </a></Item>
                        <Item><a href="#link1" style={{ color: 'white', textDecoration: 'none', textAlign: 'start' }}>
                            <h1 className="text-[20px] lg:text-[30px] font-cr">Inspiration</h1>

                            <p className="p-hover font-gm text-[18px]" style={{}}>Recipes</p>
                          


                        </a></Item>
                        <Item><a href="#link1" style={{ color: 'white', textDecoration: 'none', textAlign: 'start' }}>
                            <h1 className="text-[20px] lg:text-[30px] font-cr">About us</h1>

                            <p className="p-hover font-gm text-[18px]" style={{}}>Darbo – the company</p>
                            <p className="p-hover font-gm text-[18px]" style={{}}>TV spots</p>
                            <p className="p-hover font-gm text-[18px]" style={{}}>Shop</p>
                            <p className="p-hover font-gm text-[18px]" style={{}}>Syrup</p>
                     
                           

                            





                        </a></Item>
                        <Item><a href="#link1" style={{ color: 'white', textDecoration: 'none', textAlign: 'start' }}>
                            <h1 className="text-[20px] lg:text-[30px] font-cr">For Bulk Buyers</h1>

                            <Button sx={{color:'white',width:'250px',border:'1px solid white',width:'120px',borderRadius:'0px','&:hover': {
                                        color:'white',backgroundColor:'#c3a78e'
                                    }}}>
                            For Bulk Buyers
                           </Button>
                     
                           





                        </a></Item>
                    </Stack>
                    <Box sx={{ width: '100%', my: '5%' }}>
                        <Stack spacing={2}>
                            <Item>
                                <Image src={Me} alt="me" width={100} height={100} style={{ borderRadius: '50%', backgroundColor: '#c3a78e' }} />
                                <Typography sx={{color:"white",fontFamily:'cr'}}>Developed by saba asgarian</Typography>
                                <Link href='https://www.instagram.com/saba_asgarian_web?igsh=M2Z2dTU3cHFmeW1o&utm_source=qr'>
                                    <InstagramIcon sx={{ color: 'white', ml: '2%' }} /> {/* Set color here */}
                                </Link>
                                <Link href='https://www.linkedin.com/in/saba-asgarian-69161088?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'>
                                    <LinkedInIcon sx={{ color: 'white', ml: '2%' }} /> {/* Set color here */}
                                </Link>
                                <Link href='https://github.com/SabaAsgarian'>
                                    <GitHubIcon sx={{ color: 'white', ml: '2%' }} /> {/* Set color here */}
                                </Link>
                                <Link href='mailto:computer.sabaa@gmail.co'>
                                    <MailIcon sx={{ color: 'white', ml: '2%' }} /> {/* Set color here */}
                                </Link>
                            </Item>
                        </Stack>
                    </Box>

                </Box>
            </Box>
        </>
    )
}