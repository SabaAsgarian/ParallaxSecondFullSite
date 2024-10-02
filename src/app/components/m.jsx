"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{color:'white',fontFamily:'cr',border:'1px solid white', }}
      >
        EN<KeyboardArrowDownIcon/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{ zIndex: 9999,color:'black',fontFamily:'cr' }}
      >
        <MenuItem onClick={handleClose}>AT</MenuItem>
        <MenuItem onClick={handleClose}>EN</MenuItem>
        <MenuItem onClick={handleClose}>DE</MenuItem>
        <MenuItem onClick={handleClose}>IT</MenuItem>
      </Menu>
    </div>
  );
}
