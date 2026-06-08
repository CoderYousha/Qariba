import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Logo from '../images/logo/logo.png';
import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import AuthContext from '../context/AuthContext';
import Fetch from '../services/Fetch';
import { useConstants } from '../hooks/UseConstants';

const pages = [
  {
    'name': 'الصفحة الرئيسية',
    'link': '/home',
  },
  // {
  //   'name': 'خدماتنا',
  //   'link': '/services',
  // },
  {
    'name': 'من نحن',
    'link': '/about-us',
  },
  {
    'name': 'نماذج الأعمال',
    'link': '/portfolio',
  },
  {
    'name': 'الإعلانات',
    'link': '/banners',
  },
  //  {
  //       'name': 'تواصل معنا',
  //       'link': '/home#contact-us',
  //  },
];


function Header({ onMouseEnter, onMouseLeave }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();
  const { wait, profile, setProfile } = React.useContext(AuthContext);
  const { host } = useConstants();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const logout = async () => {

    let result = await Fetch(`${host}/api/logout`, 'POST');

    if (result.status === 200) {
      localStorage.removeItem('token');
      setProfile('');
    }

  }

  return (
    <AppBar id="header" sx={{ background: 'none', boxShadow: 'none' }} position="static">
      {
        !wait &&
        <Container maxWidth="xl" className='absolute top-0' dir="rtl">
          <Toolbar disableGutters>
            <img src={Logo} className='w-14 h-14' />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 1,
                ml: 4,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              QARIBA
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
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
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {
                  !profile ?
                    <MenuItem>
                      <Typography sx={{ textAlign: 'center' }}>تسجيل الدخول</Typography>
                    </MenuItem>
                    :
                    <>
                      <MenuItem onClick={() => { navigate('/profile'); handleCloseNavMenu(); }}>
                        <Typography sx={{ textAlign: 'center' }}>{profile.full_name}</Typography>
                      </MenuItem>
                      <MenuItem onClick={() => { logout(); handleCloseNavMenu(); }}>
                        <Typography sx={{ textAlign: 'center' }}>تسجيل الخروج</Typography>
                      </MenuItem>
                      <MenuItem onClick={() => { navigate('/orders'); handleCloseNavMenu(); }}>
                        <Typography sx={{ textAlign: 'center' }}>طلباتي</Typography>
                      </MenuItem>
                    </>
                }
                {pages.map((page, index) => (
                  <MenuItem key={index} onClick={() => { navigate(page.link); handleCloseNavMenu(); }}>
                    <Typography sx={{ textAlign: 'center' }}>{page.name}</Typography>
                  </MenuItem>
                ))}
                <MenuItem onClick={onMouseEnter}>
                  <Typography sx={{ textAlign: 'center' }}>خدماتنا</Typography>
                </MenuItem>
                <MenuItem>
                  <HashLink to='/home#contact-us' smooth>
                    <Typography sx={{ textAlign: 'center' }}>تواصل معنا</Typography>
                  </HashLink>
                </MenuItem>
              </Menu>
            </Box>
            <img src={Logo} className='w-10 h-10 hidden' />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              QARIBA
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} className='justify-center'>
              {
                !profile ?
                  <Button
                    onClick={() => navigate('/login')}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    تسجيل الدخول
                  </Button>
                  :
                  <>
                    <Button
                      onClick={() => navigate('/profile')}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      {profile.full_name}
                    </Button>
                    <Button
                      onClick={() => logout()}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      تسجيل الخروج
                    </Button>
                    <Button
                      onClick={() => navigate('/orders')}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      طلباتي
                    </Button>
                  </>
              }
              {pages.map((page, index) => (
                <Button
                  key={index}
                  onClick={() => { navigate(page.link); handleCloseNavMenu(); }}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.name}
                </Button>
              ))}
              <Button
                onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                خدماتنا
              </Button>
              <HashLink to='/home#contact-us' smooth>
                <Button
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  تواصل معنا
                </Button>
              </HashLink>
            </Box>
          </Toolbar>
        </Container>

      }
    </AppBar>
  );
}
export default Header;
