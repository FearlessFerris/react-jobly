// // Login Component Implementation 


// // Dependencies 
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Box, Button, Input, TextField, Typography } from '@mui/material';


// // Components & Necessary Files 
// import JoblyApi from '../JoblyApi';


// // Styling 
// import '../static/Login.css';


// // Login Component 
// function Login({ setIsLoggedIn, setIsAdmin }) {

//     const navigate = useNavigate();
//     const [ errors, setErrors ] = useState({});
//     const [ formData, setFormData ] = useState({
//         username: '',
//         password: ''
//     });

//     const handleChange = ( e ) => {
//         const { name, value } = e.target;
//         setFormData(( previousData ) => ({
//             ...previousData,
//             [ name ]: value 
//         }));
//     }

//     const handleSubmit = async ( e ) => {
//         e.preventDefault();
//         try{
//             const newErrors = {};
//             if( formData.username === '' ){
//                 newErrors.username = 'Username Field is Required!';
//             }
//             if( formData.password === '' ){
//                 newErrors.password = 'Password Field is Required!';
//             }
//             if( Object.keys( newErrors ) > 0 ){
//                 setErrors( newErrors );
//                 return;
//             }
//             const { token, isAdmin } = await JoblyApi.login( formData );
//             console.log( token );
//             localStorage.setItem( 'token', token );
//             setFormData({
//                 username: '',
//                 password: ''
//             });
//             setIsLoggedIn( true );
//             setIsAdmin( isAdmin );
//             navigate( '/' );
//         }
//         catch( error ){
//             console.error( 'Error Loggin In!!!', error )
//         }
//     }

//     return(
//         <div 
//             className = 'login-container'
//         >

//         <form 
//             onSubmit = { handleSubmit }
//             style = {{
//                 backgroundColor: '#212121',
//                 border: '.2rem solid #00bcd4',
//                 borderRadius: '.6rem',
//                 marginTop: '8rem',
//                 marginBottom: '2rem',
//                 padding: '3rem 6rem',
//                 width: '30rem'
//             }}
//             >
//             <Box 
//                 sx = {{
//                     paddingTop: '2rem',
//                     paddingBottom: '2rem',
//                     paddingLeft: '4rem',
//                     paddingRight: '4rem'
//                 }}
//             >
//                 <Typography
//                     variant = 'h2'
//                     sx = {{
//                         display: 'flex',
//                         justifyContent: 'center',
//                         marginBottom: '6rem'
//                     }}
//                 >
//                     Login 
//                 </Typography>
                
//                 <div 
//                     style = {{
//                         display: 'flex',
//                         justifyContent: 'center',
//                         flexDirection: 'column',
//                         marginTop: '1.5rem'
//                     }}
//                 >
//                     <TextField
//                             label = 'Username'
//                             name = 'username'
//                             value = { formData.username }
//                             onChange = { handleChange }
//                             placeholder = 'Ex: Jack Sparrow'
//                             sx={{ 
//                                 '& .MuiOutlinedInput-root': {
//                                     '& fieldset': {
//                                         borderColor: '#00bcd4',
//                                         borderWidth: '.2rem',
//                                         width: '20rem'
//                                     },
//                                     '&:hover fieldset': {
//                                         borderColor: '#00bcd4',
//                                         borderWidth: '.2rem',
//                                         width: '20rem'
//                                     },
//                                     '&.Mui-focused fieldset': {
//                                         borderColor: '#00bcd4',
//                                         borderWidth: '.2rem',
//                                         width: '20rem'
//                                     },
//                                 },
//                                 '& .MuiInputLabel-root': {
//                                     color: '#00bcd4',
//                                 },
//                                 '& .MuiInputLabel-root.Mui-focused': {
//                                     color: '#00bcd4',
//                                 },
//                             }}
//                             InputProps={{
//                                 style: {
//                                     color: 'white'
//                                 },
//                                 inputProps: {
//                                     style: {
//                                         color: '#00bcd4',
//                                         '&::placeholder': {
//                                             color: '#00bcd4',
//                                             opacity: 1,
//                                         }
//                                     },
//                                     autoComplete: 'current-username'
//                                 }
//                             }}
//                         ></TextField>
//                 </div>

//                 <div 
//                     style = {{
//                         display: 'flex',
//                         justifyContent: 'center',
//                         flexDirection: 'column',
//                         marginTop: '1.5rem'
//                     }}
//                 >
//                     <TextField
//                             label = 'Password'
//                             name = 'password'
//                             value = { formData.password }
//                             onChange = { handleChange }
//                             placeholder = 'Ex: SuperSecretPassword1832'
//                             sx={{ 
//                                 '& .MuiOutlinedInput-root': {
//                                     '& fieldset': {
//                                         borderColor: '#00bcd4',
//                                         borderWidth: '.2rem',
//                                         width: '20rem'
//                                     },
//                                     '&:hover fieldset': {
//                                         borderColor: '#00bcd4',
//                                         borderWidth: '.2rem',
//                                         width: '20rem'
//                                     },
//                                     '&.Mui-focused fieldset': {
//                                         borderColor: '#00bcd4',
//                                         borderWidth: '.2rem',
//                                         width: '20rem'
//                                     },
//                                 },
//                                 '& .MuiInputLabel-root': {
//                                     color: '#00bcd4',
//                                 },
//                                 '& .MuiInputLabel-root.Mui-focused': {
//                                     color: '#00bcd4',
//                                 },
//                             }}
//                             InputProps={{
//                                 style: {
//                                     color: 'white'
//                                 },
//                                 inputProps: {
//                                     style: {
//                                         color: '#00bcd4',
//                                         '&::placeholder': {
//                                             color: '#00bcd4',
//                                             opacity: 1,
//                                         }
//                                     },
//                                     autoComplete: 'current-password'
//                                 }
//                             }}
//                         ></TextField>
//                 </div>
//                 <div 
//                         style = {{
//                             display: 'flex',
//                             justifyContent: 'center',
//                             marginTop: '3rem'
//                         }}
//                     >
//                         <Button 
//                             type = 'submit'
//                             variant = 'outlined'
//                             sx = {{
//                                 backgroundColor: '#212121',
//                                 border: '.2rem solid #212121',
//                                 color: '#00bcd4',
//                                 fontSize: 'large',
//                                 margin: '.5rem',
//                                 padding: '.6rem 2rem',
//                                 '&:hover': {
//                                     border: '.2rem solid #00bcd4',
//                                     color: '#00bcd4', 
//                                     fontSize: 'large',
//                                     padding: '.6rem 2rem'
//                                 },
//                             }}
//                             >
//                         Login   
//                         </Button>
//                     </div>
//             </Box>
//         </form>
//         </div>
//     )
// }

// export default Login;


// sx={{ 
//     '& .MuiOutlinedInput-root': {
//         '& fieldset': {
//             borderColor: '#00bcd4',
//             borderWidth: '.2rem',
//             width: '20rem'
//         },
//         '&:hover fieldset': {
//             borderColor: '#00bcd4',
//             borderWidth: '.2rem',
//             width: '20rem'
//         },
//         '&.Mui-focused fieldset': {
//             borderColor: '#00bcd4',
//             borderWidth: '.2rem',
//             width: '20rem'
//         },
//     },
//     '& .MuiInputLabel-root': {
//         color: '#00bcd4',
//     },
//     '& .MuiInputLabel-root.Mui-focused': {
//         color: '#00bcd4',
//     },
// }}
// InputProps={{
//     style: {
//         color: 'white'
//     },
//     inputProps: {
//         style: {
//             color: '#00bcd4',
//             '&::placeholder': {
//                 color: '#00bcd4',
//                 opacity: 1,
//             }
//         },
//         autoComplete: 'current-username'
//     }
// }}


// Dependencies 
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { Box, Button, TextField, Typography } from '@mui/material';
import JoblyApi from '../JoblyApi';

// Styling 
import '../static/Login.css';

// Login Component 
function Login({ setIsLoggedIn, setIsAdmin }) {

    const navigate = useNavigate(); 
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((previousData) => ({
            ...previousData,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newErrors = {};
            if (formData.username.trim() === '') {
                newErrors.username = 'Username Field is Required!';
            }
            if (formData.password.trim() === '') {
                newErrors.password = 'Password Field is Required!';
            }
            if (Object.keys(newErrors).length > 0) { 
                setErrors(newErrors);
                return;
            }
            const { token, isAdmin } = await JoblyApi.login(formData);
            localStorage.setItem('token', token);
            setFormData({
                username: '',
                password: ''
            });
            setIsLoggedIn(true);
            setIsAdmin(isAdmin);
            navigate('/'); // Use navigate for navigation
        } catch (error) {
            console.error('Error Logging In:', error);
            setErrors({ general: 'Error logging in. Please try again.' }); 
        }
    }

    return (
        <div className='login-container'>
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
                            marginBottom: '6rem'
                        }}
                    >
                        Login
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
                            placeholder='Ex: Jack Sparrow'
                            error={errors.username ? true : false} 
                            helperText={errors.username ? errors.username : null} 
                            sx={{ 
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
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            marginTop: '1.5rem'
                        }}
                    >
                        <TextField
                            label='Password'
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                            placeholder='Ex: SuperSecretPassword1832'
                            type='password'
                            error={errors.password ? true : false} 
                            helperText={errors.password ? errors.password : null} 
                            sx={{ 
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
                    </div>

                    {errors.general && (
                        <Typography
                            variant='body1'
                            sx={{
                                color: 'red',
                                textAlign: 'center',
                                marginTop: '1rem'
                            }}
                        >
                            {errors.general}
                        </Typography>
                    )}

                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '3rem'
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
                                margin: '.5rem',
                                padding: '.6rem 2rem',
                                '&:hover': {
                                    border: '.2rem solid #00bcd4',
                                    color: '#00bcd4',
                                    fontSize: 'large',
                                    padding: '.6rem 2rem'
                                },
                            }}
                        >
                            Login
                        </Button>
                    </div>
                </Box>
            </form>
        </div>
    )
}

export default Login;
