import React from "react";
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
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuIcon from "@mui/icons-material/Menu";
import NavbarStyle from "./Navbar.style";
import Logo from "./Logo";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Index(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  return (
    <NavbarStyle
      position="relative"
      sx={{ bgcolor: alpha("#000000", 0.5), m: "0px" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters="false">
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            URL MINIFY
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              flexDirection: "row-reverse",
              display: { xs: "flex", md: "none" },
            }}
          >
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <a
                  href="https://github.com/BRAVO68WEB/url-minify"
                  target={"_blank"}
                >
                  <Typography textAlign="center" sx={{ display: "flex" }}>
                    <GitHubIcon fontSize="small" />
                    GitHub
                  </Typography>
                </a>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" sx={{ display: "flex" }}>
                  CRIDITS
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              flexDirection: "row-reverse",
              gap: "10px",
              px: "20px",
              display: { xs: "none", md: "flex" },
            }}
          >
            <a
              href="https://github.com/BRAVO68WEB/url-minify"
              target={"_blank"}
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  color: "white",
                  display: "flex",
                  gap: "10px",
                  fontSize: "h5.fontSize",
                  fontFamily: "sans-serif",
                  fontStyle: "bold",
                  textTransform: "capitalize",
                  fontWeight: "bold",
                }}
              >
                <GitHubIcon fontSize="large" />
                GitHub
              </Button>
            </a>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ color: "white", display: "block", fontSize: "h5.fontSize" }}
            >
              CREDITS
            </Button>
          </Box>

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
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
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
        </Toolbar>
      </Container>
    </NavbarStyle>
  );
}

export default Index;
