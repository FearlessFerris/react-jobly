import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar({ isLoggedIn, handleLogout, isAdmin }) {

    console.log( isAdmin );
  return (
    <AppBar position="static" sx={{ backgroundColor: '#212121', marginBottom: '2rem' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box>
          <Button
            component={Link}
            to="/"
            variant="outlined"
            size="large"
            sx={{
              color: '#00bcd4',
              border: '.2rem solid #212121',
              fontSize: 'large',
              margin: '0 8px',
              '&:hover': {
                border: '.2rem solid #00bcd4',
              },
            }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/jobs"
            variant="outlined"
            size="large"
            sx={{
              color: '#00bcd4',
              border: '.2rem solid #212121',
              fontSize: 'large',
              margin: '0 8px',
              '&:hover': {
                border: '.2rem solid #00bcd4',
              },
            }}
          >
            Jobs
          </Button>
          <Button
            component={Link}
            to="/companies"
            variant="outlined"
            size="large"
            sx={{
              color: '#00bcd4',
              border: '.2rem solid #212121',
              fontSize: 'large',
              margin: '0 8px',
              '&:hover': {
                border: '.2rem solid #00bcd4',
              },
            }}
          >
            Companies
          </Button>
          {isAdmin && (
            <Button
              component={Link}
              to="/create-user"
              variant="outlined"
              size="large"
              sx={{
                color: '#00bcd4',
                border: '.2rem solid #212121',
                fontSize: 'large',
                margin: '0 8px',
                '&:hover': {
                  border: '.2rem solid #00bcd4',
                },
              }}
            >
              Create User
            </Button>
          )}
          {isLoggedIn && (
            <Button
              component={Link}
              to="/profile"
              variant="outlined"
              size="large"
              sx={{
                color: '#00bcd4',
                border: '.2rem solid #212121',
                fontSize: 'large',
                margin: '0 8px',
                '&:hover': {
                  border: '.2rem solid #00bcd4',
                },
              }}
            >
              Profile
            </Button>
          )}
        </Box>
        <Button
          component={Link}
          to="/login"
          variant="outlined"
          size="large"
          sx={{
            color: '#00bcd4',
            border: '.2rem solid #212121',
            fontSize: 'large',
            margin: '0 8px',
            '&:hover': {
              border: '.2rem solid #00bcd4',
            },
          }}
          onClick={handleLogout}
        >
          {isLoggedIn ? 'Logout' : 'Login'}
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
