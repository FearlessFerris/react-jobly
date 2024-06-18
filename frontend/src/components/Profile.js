import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import JoblyApi from '../JoblyApi';

function Profile() {
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    async function getUser() {
      try {
        const user = await JoblyApi.getCurrentUser();
        setFormData({
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          password: ''
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
    getUser();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newErrors = {};
      if (formData.password === '') {
        newErrors.password = 'Password is required to make changes.';
      }
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      await JoblyApi.updateProfile(formData);
      setFormData((prevData) => ({
        ...prevData,
        password: ''
      }));
      setErrors({});
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      setErrors({ apiError: 'Error updating profile. Please try again later.' });
    }
  };

  return (
    <div
        className = 'profile-container'
        style = {{
            display: 'flex',
            justifyContent: 'center'
        }}
    >

    <Box sx={{
        backgroundColor: '#212121',
        border: '.2rem solid #00bcd4',
        borderRadius: '.6rem',
        marginTop: '8rem',
        padding: '3rem 6rem',
        width: '25rem',
        color: 'white'
    }}>
      <Typography variant="h4" sx={{ marginBottom: '2rem', textAlign: 'center' }}>
        Edit Profile
      </Typography>

      <div> 
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          sx={{ 
              marginBottom: '.8rem',
              '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                      borderColor: '#00bcd4',
                      borderWidth: '.2rem',
                      width: '20rem'
                    },
                    '&:hover fieldset': {
                        borderColor: '#00bcd4',
                        borderWidth: '.2rem',
                        width: '20rem'
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: '#00bcd4',
                        borderWidth: '.2rem',
                        width: '20rem'
                    },
                },
                '& .MuiInputLabel-root': {
                    color: '#00bcd4',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                    color: '#00bcd4',
                },
            }}
            InputProps={{
                style: {
                    color: 'white'
                },
                inputProps: {
                    style: {
                        color: '#00bcd4',
                        '&::placeholder': {
                            color: '#00bcd4',
                            opacity: 1,
                        }
                    },
                    autoComplete: 'current-username'
                }
            }}
            />
        <TextField
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          sx={{ 
              marginBottom: '.8rem',
              '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                      borderColor: '#00bcd4',
                      borderWidth: '.2rem',
                      width: '20rem'
                    },
                    '&:hover fieldset': {
                        borderColor: '#00bcd4',
                        borderWidth: '.2rem',
                        width: '20rem'
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: '#00bcd4',
                        borderWidth: '.2rem',
                        width: '20rem'
                    },
                },
                '& .MuiInputLabel-root': {
                    color: '#00bcd4',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                    color: '#00bcd4',
                },
            }}
            InputProps={{
                style: {
                    color: 'white'
                },
                inputProps: {
                    style: {
                        color: '#00bcd4',
                        '&::placeholder': {
                            color: '#00bcd4',
                            opacity: 1,
                        }
                    },
                    autoComplete: 'current-firstname'
                }
            }}
            />
        <TextField
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          sx={{ 
              marginBottom: '.8rem',
              '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                      borderColor: '#00bcd4',
                      borderWidth: '.2rem',
                      width: '20rem'
                    },
                    '&:hover fieldset': {
                        borderColor: '#00bcd4',
                        borderWidth: '.2rem',
                        width: '20rem'
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: '#00bcd4',
                        borderWidth: '.2rem',
                        width: '20rem'
                    },
                },
                '& .MuiInputLabel-root': {
                    color: '#00bcd4',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                    color: '#00bcd4',
                },
            }}
            InputProps={{
                style: {
                    color: 'white'
                },
                inputProps: {
                    style: {
                        color: '#00bcd4',
                        '&::placeholder': {
                            color: '#00bcd4',
                            opacity: 1,
                        }
                    },
                    autoComplete: 'current-lastname'
                }
            }}
            />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          sx={{ 
              marginBottom: '.8rem',
              '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                      borderColor: '#00bcd4',
                      borderWidth: '.2rem',
                      width: '20rem'
                    },
                    '&:hover fieldset': {
                        borderColor: '#00bcd4',
                        borderWidth: '.2rem',
                        width: '20rem'
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: '#00bcd4',
                        borderWidth: '.2rem',
                        width: '20rem'
                    },
                },
                '& .MuiInputLabel-root': {
                    color: '#00bcd4',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                    color: '#00bcd4',
                },
            }}
            InputProps={{
                style: {
                    color: 'white'
                },
                inputProps: {
                    style: {
                        color: '#00bcd4',
                        '&::placeholder': {
                            color: '#00bcd4',
                            opacity: 1,
                        }
                    },
                    autoComplete: 'current-email'
                }
            }}
            />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          sx={{ 
              marginBottom: '.8rem',
              '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                      borderColor: '#00bcd4',
                      borderWidth: '.2rem',
                      width: '20rem'
                    },
                    '&:hover fieldset': {
                        borderColor: '#00bcd4',
                        borderWidth: '.2rem',
                        width: '20rem'
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: '#00bcd4',
                        borderWidth: '.2rem',
                        width: '20rem'
                    },
                },
                '& .MuiInputLabel-root': {
                    color: '#00bcd4',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                    color: '#00bcd4',
                },
            }}
            InputProps={{
                style: {
                    color: 'white'
                },
                inputProps: {
                    style: {
                        color: '#00bcd4',
                        '&::placeholder': {
                            color: '#00bcd4',
                            opacity: 1,
                        }
                    },
                    autoComplete: 'current-password'
                }
            }}
            />
        {errors.password && (
            <Typography color="error" sx={{ marginBottom: '1rem' }}>
            {errors.password}
          </Typography>
        )}
        {errors.apiError && (
            <Typography color="error" sx={{ marginBottom: '1rem' }}>
            {errors.apiError}
          </Typography>
        )}
        <Button
          type="submit"
          variant="outlined"
          sx={{
              backgroundColor: '#212121',
              border: '.2rem solid #212121',
              color: '#00bcd4',
              fontSize: 'large',
              padding: '.6rem 2rem',
              width: '100%',
              '&:hover': {
                  border: '.2rem solid #00bcd4',
                  color: '#00bcd4'
                }
            }}
            >
          Save Changes
        </Button>
      </form>
    </div>
    </Box>
</div>
  );
}

export default Profile;
