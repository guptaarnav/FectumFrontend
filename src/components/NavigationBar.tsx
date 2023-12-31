import React, { useState } from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, MenuItem, Button, Badge, InputBase } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { useAppContext } from '../context/AppContext'; // Adjust the path according to your project structure
import { Link as RouterLink } from 'react-router-dom';

const pages = [
  {title: 'Home',
   link: "/"},
  {title: 'Catalog',
    link: "/"},
  {title: 'About',
    link: "/about"},
  {title: 'Blog',
    link: "/"},
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavigationBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { cart, isAuthenticated } = useAppContext(); // Use the context to access cart

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0); // Calculate total items in cart

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            size="large"
            aria-label="open drawer"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
          >
            <MenuIcon />
          </IconButton>

          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.title}
                component={RouterLink}
                to={page.link}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page.title}
              </Button>
            ))}
          </Menu>

                    
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#responsive-navbar"
            sx={{
              display: { xs: 'none', md: 'flex' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src="/assets/White-Main-Sidebyside.png" alt="GenFab" style={{ maxHeight: '125px', marginTop: '-30px', marginBottom: '-30px'}} />
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'center' }}>
            <img src="/assets/White-Logo-Only.png" alt="GenFab" style={{ maxHeight: '50px' }} />
          </Box>

          <Box sx={(theme) => ({ flexGrow: 1, display: { xs: 'none', md: 'flex' } })}>
          {pages.map((page) => (
              <Button
                key={page.title}
                component={RouterLink}
                to={page.link}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          {/* Search Bar */}
          <Box sx={(theme) => ({
            position: 'relative',
            borderRadius: 1,
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.25)' },
            marginRight: 2,
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: { marginLeft: 3, width: 'auto' },
          })}>
            <Box sx={(theme) => ({
              padding: '0 16px',
              height: '100%',
              position: 'absolute',
              pointerEvents: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            })}>
              <SearchIcon />
            </Box>
            <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              sx={(theme) => ({
                color: 'inherit',
                '& .MuiInputBase-input': {
                  padding: '8px 8px 8px 0',
                  // vertical padding + font size from searchIcon
                  paddingLeft: `calc(1em + 32px)`,
                  transition: 'width 0.3s',
                  width: '100%',
                  [theme.breakpoints.up('md')]: { width: '20ch' },
                },
              })}
            />
          </Box>

          

          {/* User Menu */}
          {(!isAuthenticated) ? (
            <>
              <RouterLink to="/login" style={{ color: 'inherit' }}>
                <Button color="inherit">Login</Button>
              </RouterLink>
              <RouterLink to="/register" style={{ color: 'inherit' }}>
                <Button color="inherit">Sign Up</Button>
              </RouterLink>
            </>
          ) : (
            <>
            {/* Cart Icon */}
              <RouterLink to="/cart" style={{ color: 'inherit' }}>
              <IconButton color="inherit" sx={{ ml: 1, mr: 1 }}>
                <Badge badgeContent={cartItemCount} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </RouterLink>
            <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
            <Typography variant="subtitle1" sx={{ display: { xs: 'none', sm: 'block' }, marginRight: '10px' }}>
              Bill Gates
            </Typography>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <AccountCircleIcon sx={{color:"white"}}/>

            </IconButton>
            <Menu
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          </>
          )}
          
          
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavigationBar;
