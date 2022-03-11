import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import {
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  alpha,
} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import MenuIcon from '@mui/icons-material/Menu'
import NavbarStyle from './Navbar.style'
import Logo from './Logo'
import UserAuth, { UserContext } from 'helpers/user/usercontext'
import Link from 'next/link'
const settings = [
  <Link href="./dashboard">Profile</Link>,
  'Account',
  <Link href="./dashboard">Dashboard</Link>,
  <Link href="./">Logout</Link>
]
import NotFound from '@pages/404'

function Index(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const { user, login, logout } = useContext(UserAuth)

  return (
    <NavbarStyle
      position="relative"
      sx={{ bgcolor: alpha('#000000', 0.5), m: '0px' }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters="false">
          <span><Logo /></span>
          <Typography component={motion.div} initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 1 } }} variant="h5" sx={{ fontWeight: 'bold', fontFamily: "'Montserrat Alternates', sans-serif;" }}>
            UrlMiniFy
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              flexDirection: 'row-reverse',
              display: { xs: 'flex', md: 'none' },
            }}
          >
            <IconButton
              size="medium"
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
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <a
                  href="https://github.com/BRAVO68WEB/url-minify"
                  target={'_blank'}
                >
                  <Typography textAlign="center" variant="h6" sx={{ display: 'flex' }}>
                    <GitHubIcon fontSize="medium" />
                    GitHub
                  </Typography>
                </a>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <a href={NotFound}>
                  <Typography textAlign="center" variant="h6" sx={{ display: 'flex' }}>
                    CREDITS
                  </Typography>
                </a>
              </MenuItem>
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              flexDirection: 'row-reverse',
              gap: '10px',
              px: '20px',
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <a
              href="https://github.com/BRAVO68WEB/url-minify"
              target={'_blank'}
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  color: 'white',
                  display: 'flex',
                  gap: '10px',
                  fontSize: 'h6.fontSize',
                  fontFamily: "'Open Sans', sans-serif;",
                  textTransform: 'capitalize',
                  fontWeight: 'bold',
                }}
                component={motion.div}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { delay: 1 } }}
                whileHover={{ scale: 1.1, textShadow: '2px 2px black' }}
              >
                <GitHubIcon fontSize="medium" />
                GitHub
              </Button>
            </a>
            <a href={NotFound}>
              <Button
                component={motion.div}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { delay: 1 } }}
                whileHover={{ scale: 1.1, textShadow: '2px 2px black' }}
                onClick={handleCloseNavMenu}
                sx={{
                  color: 'white',
                  display: 'block',
                  fontSize: 'h6.fontSize',
                  fontFamily: "'Open Sans', sans-serif;",
                  fontWeight: 'bold',
                }}
              >
                CREDITS
              </Button>
            </a>
          </Box>

          {user ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/2.jpg"
                    sx={{ width: 50, height: 50 }}
                  />
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
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Typography sx={{
              color: 'white',
              display: 'flex',
              fontSize: 'h6.fontSize',
              fontFamily: "'Open Sans', sans-serif;",
              fontWeight: 'bold',
            }} component={motion.div}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { delay: 1 } }}
              whileHover={{ scale: 1.1, textShadow: '2px 2px black' }} onClick={login}>
              <Link href="./login">LOGIN</Link>
            </Typography>
          )}
        </Toolbar>
      </Container>
    </NavbarStyle>
  )
}

export default Index
