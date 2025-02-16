"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function BasicMenu({ color }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  
  const toggleMenu = (event) => {
    event.stopPropagation();
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (lang) => (event) => {
    event.stopPropagation();
    handleClose();
    // Handle language change here
    console.log(`Changed to ${lang}`);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={toggleMenu}
        sx={{
          color: color || 'white',
          fontFamily: 'cr',
          border: `1px solid ${color || 'white'}`,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            backgroundColor: 'transparent'
          }
        }}
      >
        EN
        <KeyboardArrowDownIcon sx={{ ml: 1 }} />
      </Button>
      <Menu
      sx={{zIndex:'1000001'}}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        PopoverClasses={{
          root: 'language-menu-popover'
        }}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              }
            },
          },
        }}
      >
        <MenuItem onClick={handleMenuItemClick('AT')}>AT</MenuItem>
        <MenuItem onClick={handleMenuItemClick('EN')}>EN</MenuItem>
        <MenuItem onClick={handleMenuItemClick('DE')}>DE</MenuItem>
        <MenuItem onClick={handleMenuItemClick('IT')}>IT</MenuItem>
      </Menu>
    </div>
  );
}
