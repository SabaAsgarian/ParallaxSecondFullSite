"use client"
import { Box, Button, Divider, IconButton, List, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

import * as React from 'react';
import { styled, alpha, useTheme } from '@mui/material/styles';
import CallIcon from '@mui/icons-material/Call';




import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import logo from './img/darbo_seit1879_4c_n_Since_schwarz.svg'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Hidden } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


import { styled as muiStyled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';

import M from './m'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';

import { useMediaQuery } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import './../globals.css'
const drawerWidth = '100%';

const AppBar = styled(MuiAppBar)(({ theme, isFixed }) => ({
    zIndex: 9999,
    position: 'static', // Change to static
    backgroundColor: '#0000008a', // Set background color to white
    color: 'white',
    borderBottom: '1px solid black',
  
    boxShadow: isFixed ? '0 0 50px 0 rgba(0, 0, 0, 0.1)' : 'none',
  
    position: isFixed ? 'fixed' : 'relative',
    top: 0,
    left: 0,
    right: 0,
    justifyContent: 'space-between',
    // '&:hover': {
    //   backgroundColor: 'white'
    //   ,color:'black'
    // }
  }));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
    zIndex: '99999'
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
    '& .MuiDrawer-paper': {
        width: drawerWidth,
        height:'120vh',
        backgroundColor: 'transparent', // Set background color to white
        color: 'white', // Set text color to black
       
    },
    zIndex: '99999',
}));

export default function header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [isFixed, setIsFixed] = React.useState(false);
    // const [displayText, setDisplayText] = React.useState('Shine With Rose'); // State for text display
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md')); // Check if screen is small or medium

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsFixed(true);
            
        } else {
            setIsFixed(false);
        }
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);




    // Change display text in an infinite loop
    // React.useEffect(() => {
    //   const texts = ['⭐ Shine With Rose ⭐', '🔄Return Policy After One Month Using🔄'];
    //   let index = 0;

    //   const timer = setInterval(() => {
    //     index = (index + 1) % texts.length; // Cycle through the texts
    //     setDisplayText(texts[index]);
    //   }, 1000); // Change text every second

    //   return () => clearInterval(timer); // Cleanup timer on unmount
    // }, []); // Run once on mount

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );
    return (
        <div>

            <AppBar isFixed={isFixed}>
                <Toolbar>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%',padding:'2%' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center',fontFamily:'cr' }}>
                            <Typography sx={{fontFamily:'cr'}}>
                                <M />
                            </Typography>
                            <IconButton sx={{ color: 'white' }}>
                                <SearchOutlinedIcon />
                            </IconButton>

                        </Box>
                        <Hidden lgDown>
                           
                                <Link href="#shop" className='colorlink'>
                                    <Typography sx={{fontFamily:'cr',
                                    transitionDuration: '.3s', color: 'white', margin: '0 15px', textDecoration: 'none', '&:hover': {
                                        color: '#c3a88f'
                                    }
                                }} >Products <hr className='hover:bg-[#c3a88f] hover:text-[#c3a88f]'/></Typography>
                                     </Link>
                                <Link href="#shop" style={{fontFamily:'cr',
                                    transitionDuration: '1s', color: 'white', margin: '0 15px', textDecoration: 'none', '&:hover': {
                                        color: '#30efc1'
                                    }
                                }} className='colorlink'>
                                      <Typography sx={{fontFamily:'cr',
                                    transitionDuration: '.3s', color: 'white', margin: '0 15px', textDecoration: 'none', '&:hover': {
                                        color: '#c3a88f'
                                    }
                                }} >
                                    Recipes
                                    </Typography>
                                    </Link>
                                <Link href="#eat" style={{fontFamily:'cr',
                                    transitionDuration: '1s', color: 'white', margin: '0 15px', textDecoration: 'none', '&:hover': {
                                        color: '#30efc1'
                                    }
                                }} className='colorlink'>
                                      <Typography sx={{fontFamily:'cr',
                                    transitionDuration: '.3s', color: 'white', margin: '0 15px', textDecoration: 'none', '&:hover': {
                                        color: '#c3a88f'
                                    }
                                }} >
                                    Tasty News
                                    </Typography>
                                    </Link>
                           
                        </Hidden>
                        
                            <Link href="/" passHref>
                                <Image src={logo} alt="logo" height={200} width={200} />
                            </Link>
                     
                        <Hidden lgDown>
                            
                                <Link href="#about" style={{fontFamily:'cr',
                                    transitionDuration: '1s', color: 'white', textDecoration: 'none', '&:hover': {
                                        color: '#30efc1'
                                    }
                                }} className='colorlink'>
                                      <Typography sx={{fontFamily:'cr',
                                    transitionDuration: '.3s', color: 'white', margin: '0 15px', textDecoration: 'none', '&:hover': {
                                        color: '#c3a88f'
                                    }
                                }} >
                                    About us
                                    </Typography>
                                    </Link>
                                <Link href="#tt" style={{ fontFamily:'cr',
                                    transitionDuration: '1s', color: 'white', margin: '0 15px', textDecoration: 'none', '&:hover': {
                                        color: '#30efc1'
                                    }
                                }} className='colorlink'>
                                      <Typography sx={{fontFamily:'cr',
                                    transitionDuration: '.3s', color: 'white', margin: '0 15px', textDecoration: 'none', '&:hover': {
                                        color: '#c3a88f'
                                    }
                                }} >
                                    Darbo
                                    </Typography>
                                    </Link>
                         
                        </Hidden>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', }}>
                        {isSmallScreen && (
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                            >
                                <MenuIcon />
                            </IconButton>
                        )}

                    </Box>
                    <Hidden lgDown>
                    <Box sx={{ display: 'flex', alignItems: 'center', transitionDuration: '1s',  }}>
                        <Button sx={{borderRadius:'0px', backgroundColor: 'transparent', color: 'white', border: '1px solid white', fontFamily: 'gm' ,width:'200px','&:hover': {
                                        color: 'white',backgroundColor:'#c3a78e',border:'none'
                                    }}}>For Bulk Buyers</Button>
                        <Button sx={{borderRadius:'0px', backgroundColor: 'white', color: 'black', fontFamily: 'gm',width:'150px',marginLeft:'5%','&:hover': {
                                        color: 'white',backgroundColor:'#c3a78e'
                                    } }}> Contact</Button>
                    </Box>
                    </Hidden>
                </Toolbar>
            </AppBar>
            {
                isSmallScreen && (
                    <StyledDrawer
                        variant="temporary"
                        anchor="right"
                        open={open}
                        className='bg-back bg-center bg-cover'
                    >
                        <DrawerHeader>
                            <IconButton onClick={handleDrawerClose} sx={{ color: 'white' }}>
                                {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                            </IconButton>
                        </DrawerHeader>
                        <Divider />
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton component="a" href="/">
                                    <ListItemText primary="Products" sx={{borderBottom:'1px solid white',
                                        transitionDuration: '1s', '&:hover': {
                                            color: '#c3a88f'
                                        }
                                    }} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton component="a" href="/">
                                    <ListItemText primary="Recipes" sx={{borderBottom:'1px solid white',
                                        transitionDuration: '1s', '&:hover': {
                                            color: '#c3a88f'
                                        }
                                    }} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton component="a" href="/">
                                    <ListItemText primary="Tasty News" sx={{borderBottom:'1px solid white',
                                        transitionDuration: '1s', '&:hover': {
                                            color: '#c3a88f'
                                        }
                                    }} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton component="a" href="/">
                                    <ListItemText primary="About us" sx={{borderBottom:'1px solid white',
                                        transitionDuration: '1s', '&:hover': {
                                            color: '#c3a88f'
                                        }
                                    }} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton component="a" href="/">
                                    <ListItemText primary="Darbo" sx={{borderBottom:'1px solid white',
                                        transitionDuration: '1s', '&:hover': {
                                            color: '#c3a88f'
                                        }
                                    }} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton component="a" href="/">
                                <Button sx={{borderRadius:'0px', backgroundColor: 'transparent', color: 'white', border: '1px solid white', fontFamily: 'gm' ,width:'200px','&:hover': {
                                        color: 'white',backgroundColor:'#c3a78e',border:'none'
                                    }}}>For Bulk Buyers</Button>
                        
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton component="a" href="/">
                                <Button sx={{borderRadius:'0px', backgroundColor: 'white', color: 'black', fontFamily: 'gm',width:'150px',marginLeft:'5%','&:hover': {
                                        color: 'white',backgroundColor:'#c3a78e'
                                    } }}> Contact</Button>
                        
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </StyledDrawer>
                )
            }
        </div >
    )
}