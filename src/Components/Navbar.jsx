import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: '#080808' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              CONNECTIFY
            </Link>
          </Typography>

          <div style={{ display: 'flex', gap: '8px' }}>
            <Button color="inherit">
              <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                HOME
              </Link>
            </Button>
            <Button color="inherit">
              <Link to="/x" style={{ color: 'inherit', textDecoration: 'none' }}>
                SEARCH
              </Link>
            </Button>
            
            <Button color="inherit">
              <Link to="/p" style={{ color: 'inherit', textDecoration: 'none' }}>
                PROFILE
              </Link>
            </Button>
            <Button color="inherit">
              <Link to="/c" style={{ color: 'inherit', textDecoration: 'none' }}>
                SETTINGS
              </Link>
            </Button>
            <Button color="inherit">
              <Link to="/l" style={{ color: 'inherit', textDecoration: 'none' }}>
                LOG IN
              </Link>
            </Button>
             <Button color="inherit">
              <Link to="/s" style={{ color: 'inherit', textDecoration: 'none' }}>
                Sign Up
              </Link>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;