// Dependencies 
import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import JoblyApi from '../JoblyApi';

// Styling 
import '../static/CreateUser.css';

// CreateUser Component 
function CreateUser() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        firstName: '', 
        lastName: ''   
    });

    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!formData.username || !formData.password || !formData.email || !formData.firstName || !formData.lastName) {
                setError('Please fill in all required fields.');
                return;
            }
            const { username, password, email, firstName, lastName } = formData;
            const response = await JoblyApi.createUser({ username, password, email, firstName, lastName });
            console.log(response); 
            setFormData({
                username: '',
                password: '',
                email: '',
                firstName: '', 
                lastName: ''  
            });
            setError(null);
        } catch (error) {
            console.error('Error Creating User:', error);
            setError('Error creating user. Please try again.');
        }
    }

    return (
        <div className='create-user-container'>
            <form
                onSubmit={handleSubmit}
                style={{
                    backgroundColor: '#212121',
                    border: '.2rem solid #00bcd4',
                    borderRadius: '.6rem',
                    marginTop: '8rem',
                    marginBottom: '2rem',
                    padding: '3rem 6rem',
                    width: '30rem'
                }}
            >
                <Box
                    sx={{
                        paddingTop: '2rem',
                        paddingBottom: '2rem',
                        paddingLeft: '4rem',
                        paddingRight: '4rem'
                    }}
                >
                    <Typography
                        variant='h2'
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginBottom: '2rem' 
                        }}
                    >
                        Create User
                    </Typography>

                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            marginTop: '1.5rem'
                        }}
                    >
                        <TextField
                            label='Username'
                            name='username'
                            value={formData.username}
                            onChange={handleChange}
                            placeholder='Ex: Tony Hawk'
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
                            label='Password'
                            name='password'
                            type='password'
                            value={formData.password}
                            onChange={handleChange}
                            placeholder='Ex: SuperSecretPassword1812'
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
                        <TextField
                            label='Email'
                            name='email'
                            type='email'
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='Ex: James@bond.com'
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
                            label='First Name'
                            name='firstName'
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder='Ex: James'
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
                                label='Last Name' 
                                name='lastName'
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder='Ex: Bond'
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
                        </div>
                        {error && (
                            <Typography
                                variant='body1'
                                sx={{
                                    color: 'red',
                                    textAlign: 'center',
                                    marginTop: '1rem'
                                }}
                            >
                                {error}
                            </Typography>
                        )}
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginTop: '1rem' 
                            }}
                        >
                            <Button
                                type='submit'
                                variant='outlined'
                                sx={{
                                    backgroundColor: '#212121',
                                    border: '.2rem solid #212121',
                                    color: '#00bcd4',
                                    fontSize: 'large',
                                    margin: 'auto',
                                    padding: '.6rem 2rem',
                                    '&:hover': {
                                        border: '.2rem solid #00bcd4',
                                        color: '#00bcd4',
                                        fontSize: 'large',
                                        padding: '.6rem 2rem'
                                    },
                                }}
                            >
                                Create User
                            </Button>
                        </div>
                    </Box>
                </form>
            </div>
        );
    }
    
    export default CreateUser;
    
