import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';





function LoginLogout() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { isAuthenticated, loginWithRedirect, logout  } = useAuth0();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

   const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  if (isAuthenticated) {
    return (
        <>
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Mohammad" src="/static/images/avatar/2.jpg" />
                </IconButton>
                </Tooltip>
                <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                >
                    <MenuItem key="logout" onClick={e => { logout(); }  }>
                        <Typography sx={{ textAlign: 'center' }}>logout</Typography>
                    </MenuItem>
                </Menu>
            </Box>
        </>
    )
  } else {
    return (
        <Button onClick={e => loginWithRedirect() }>Log in</Button>
    )
  }
  
}

export default LoginLogout
