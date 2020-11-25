import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar'
import styles from '../../Styles/Header.module.css'

export default function SimpleMenu({history,avatar,username,handelLogout}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    
    
    setAnchorEl(null);
    
    if(e.target.textContent === 'Profile'){
      history.push(`/viewprofile/${username}`)
    }
    else
    if(e.target.textContent === 'Logout'){
      
      handelLogout();
    }
    
  };
  
  return (
    
    <>
      <Button
       style={{padding:0}}
       aria-controls="simple-menu" aria-haspopup="true" 
       onClick={handleClick}>
        <Avatar
                      className={styles.avatar_img}              
                      alt={username}
                      src={avatar}
                      />
        </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Save</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  );
}
