import React, { useState } from 'react';
import classes from '../../CSS/header.module.css';
import { HeaderPicturesFile } from '../../Helpers/Pictures';
import { FiSearch } from "react-icons/fi";
import { FaBell, FaStar, FaUser } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

import { Blur, Container, LogInContainer } from '../../UI/Components';

import { FiUserPlus } from 'react-icons/fi'
import { GrFormClose } from 'react-icons/gr';
import { FaFacebookF, FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FiLogIn } from 'react-icons/fi';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

export const DaysArray = () => {
    const days = [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],

        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29],

        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],

        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30],

        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],

        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30],

        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],

        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],

        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30],

        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],

        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],

        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    ]

    return days;
}

export const MounthArray = () => {
    const mounths = [
        "January", "February", "March", "June", "July", "August", "September", "October", "November", "December"
    ]

    return mounths;
}

export const YearsArray = () => {

    const years = [];

    let index = 1900;

    for (; index < 2024; index++) {
        years.push(index)
    }

    return years;
}

const Header = (props) => {

    const [isLogInOpen, setIsLogInOpen] = useState(false);

    const logInOpen = () => {
        setIsLogInOpen(!isLogInOpen);
    }

    const [isSignUpOpen, setIsSignUpOpen] = useState(false);

    const signUpOpen = () => {
        setIsSignUpOpen(!isSignUpOpen);
    }

    const [isOpenPanel, setIsOpenPanel] = useState(false);

    const panel = () => {
        setIsOpenPanel(!isOpenPanel);
    }

    const days = DaysArray();
    const mounths = MounthArray();
    const years = YearsArray();

    const [day, setDay] = useState('');
    const [mounth, setMounth] = useState('');
    const [year, setYear] = useState('');
    const [selectedDay, setSelectedDay] = useState(0);

    const handleDayChange = (event) => {
        setDay(event.target.value);
    }

    const handleMounthChange = (event) => {
        setMounth(event.target.value);
    }

    const handleYearChange = (event) => {
        setYear(event.target.value);
    }

    return (
        <>
            {isLogInOpen && (
                <Container className='fixed w-screen h-screen top-0 left-0 right-0 bottom-0 z-10' style={{ display: props.loginButtonClick }}>
                    <div className='w-full h-full relative flex justify-center items-center'>
                        <Blur className={classes.container + ' absolute w-full h-full bg-slate-900/25 backdrop-blur transition-opacity opacity-100'} />
                        <LogInContainer className={classes.log_in + ' rounded-md border'}>
                            <div className={classes.logInHeader + ' w-full pl-4 pt-2 flex justify-between items-center'}>
                                <div className='flex h-full items-center'>
                                    <FiLogIn className={'text-blue-600 flex items-center h-full'} />
                                    <h1 className={' flex items-center pl-2'}>Log In</h1>
                                </div>
                                <GrFormClose className='text-2xl mr-3 text-blue-600 hover:cursor-pointer' onClick={logInOpen} />
                            </div>
                            <div className={classes.user_icon + ' w-full flex justify-center items-center'}>
                                <FiLogIn className={classes.usr_icon + ' text-blue-600'} />
                            </div>
                            <div className={classes.inputsContainer + ' inputContainer w-full flex flex-col justify-evenly items-center'}>
                                <TextField id="outlined-basic" label="Email*" variant="outlined" size='small' className={classes.loginInput + ' drop-shadow-2xl'} />
                                <TextField id="outlined-basic" label="Password*" variant="outlined" size='small' type='password' className={classes.loginInput + ' drop-shadow-2xl'} />
                            </div>
                            <div className={classes.buttons_container + ' w-full flex items-center flex-col pb-6 mt-4'}>
                                <h4 className={classes.forgot_password + ' w-full pl-9 text-sm text-extrabold text-blue-600 hover:cursor-pointer hover:underline'}>Forgot Password?</h4>
                                <Stack spacing={2} direction="row" className='mt-2 w-full flex justify-center'>
                                    <Button variant="contained" className={classes.logIn_Button + ' rounded-full'}>Log In</Button>
                                </Stack>
                            </div>
                            <div className={classes.login_icons + ' w-full flex justify-center items-center'}>
                                <FaFacebookF className='text-blue-600 text-2xl hover:cursor-pointer' />
                                <FcGoogle className='text-3xl ml-2 hover:cursor-pointer' />
                                <FaApple className='text-3xl ml-2 hover:cursor-pointer' />
                            </div>
                        </LogInContainer>
                    </div>
                </Container>
            )}

            {isSignUpOpen && (
                <Container className='fixed w-screen h-screen top-0 left-0 right-0 bottom-0 z-10 flex justify-center items-center' style={{ display: props.singInVisibility }}>
                    <div className='w-full h-full relative flex justify-center items-center'>
                        <Blur className={classes.container + ' absolute w-full h-full bg-slate-900/25 backdrop-blur transition-opacity opacity-100'} />
                        <LogInContainer className={classes.log_in + ' rounded-md border'}>
                            <div className={classes.logInHeader + ' w-full pl-4 pt-2 flex justify-between items-center'}>
                                <div className='flex h-full'>
                                    <FiUserPlus className={'text-blue-600 flex items-center h-full'} />
                                    <h1 className={' flex items-center pl-2'}>Sign Up</h1>
                                </div>
                                <GrFormClose className='text-2xl mr-3 text-blue-600 hover:cursor-pointer' onClick={signUpOpen} />
                            </div>
                            <div className={classes.user_icon + ' w-full flex justify-center items-center'}>
                                <FiUserPlus className={classes.usr_icon + ' text-blue-600'} />
                            </div>
                            <div className={classes.inputsContainer + ' inputContainer w-full pt-4'}>
                                <div className='w-full flex justify-evenly items-center'>
                                    <TextField id="outlined-basic" label="First Name*" variant="outlined" size='small' type='text' className={classes.loginInput + ' drop-shadow-2xl'} />
                                    <TextField id="outlined-basic" label="Last Name*" variant="outlined" size='small' type='text' className={classes.loginInput + ' drop-shadow-2xl'} />
                                </div>
                                <div className='w-full flex flex-col justify-evenly items-center pt-4 px-2'>
                                    <div className="py-2 w-full flex justify-center">
                                        <TextField id="outlined-basic" label="Email*" variant="outlined" size='small' type='email' className={classes.email_password + ' drop-shadow-2xl'} />
                                    </div>
                                    <div className="py-2 w-full flex justify-center">
                                        <TextField id="outlined-basic" label="Password*" variant="outlined" size='small' type='password' className={classes.email_password + ' drop-shadow-2xl'} />
                                    </div>
                                    <div className="py-2 w-full flex justify-center">
                                        <TextField id="outlined-basic" label="Password Again*" variant="outlined" size='small' type='password' className={classes.email_password + ' drop-shadow-2xl'} />
                                    </div>
                                </div>
                                <div className='w-full py-3'>
                                    <FormControl className='w-full'>
                                        <FormLabel id="demo-radio-buttons-group-label" style={{
                                            paddingLeft: '30px', display: 'flex', alignItems: 'flex-end', fontSize: '14px',
                                        }}>
                                            Date of Birth</FormLabel>
                                    </FormControl>
                                    <div className='w-full flex justify-evenly items-center py-2'>
                                        <Box sx={{ minWidth: 80 }}>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="demo-simple-select-label" style={{ background: '#FFFFFF', paddingRight: '3px' }}>Day</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={day}
                                                    label="Age"
                                                    onChange={handleDayChange}
                                                >
                                                    <div className='overflow-auto' style={{ maxHeight: '200px', marginTop: '-25px', paddingTop: '20px' }}>
                                                        {days[selectedDay].map((day, index) => (<MenuItem value={index + 1 * 10} key={index}
                                                            style={{ display: 'flex', justifyContent: 'center' }}>
                                                            {day}
                                                        </MenuItem>))}
                                                    </div>
                                                </Select>
                                            </FormControl>
                                        </Box>

                                        <Box sx={{ minWidth: 90 }}>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="demo-simple-select-label" style={{ background: '#FFFFFF', paddingRight: '5px' }}>Month</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={mounth}
                                                    label="Age"
                                                    onChange={handleMounthChange}
                                                >
                                                    <div style={{ maxHeight: '200px', marginTop: '-25px', paddingTop: '20px' }}>
                                                        {mounths.map((mounth, index) => (<MenuItem value={index + 1 * 10} key={index}>
                                                            {mounth}
                                                        </MenuItem>))}
                                                    </div>

                                                </Select>
                                            </FormControl>
                                        </Box>

                                        <Box sx={{ minWidth: 80 }}>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="demo-simple-select-label">Year</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={year}
                                                    label="Age"
                                                    onChange={handleYearChange}
                                                >

                                                    <div style={{ maxHeight: '200px', marginTop: '-25px', paddingTop: '20px' }}>
                                                        {years.map((_year, index) => (<MenuItem value={index + 1 * 10} key={index}>
                                                            {_year}
                                                        </MenuItem>))}
                                                    </div>

                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </div>
                                    <div className='w-full pt-3'>
                                        <FormControl style={{ width: '100%' }}>
                                            <FormLabel id="demo-row-radio-buttons-group-label" style={{ paddingLeft: '30px', fontSize: '14px' }}>Gender</FormLabel>
                                            <div className='py-1'>
                                                <RadioGroup
                                                    row
                                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                                    name="row-radio-buttons-group"
                                                    style={{ height: '25px', paddingLeft: '30px' }}
                                                >
                                                    <FormControlLabel value="female" control={<Radio size='small' />} label="Female" style={{ height: '100%' }} />
                                                    <FormControlLabel value="male" control={<Radio size='small' />} label="Male" style={{ height: '100%' }} />
                                                </RadioGroup>

                                            </div>
                                        </FormControl>
                                    </div>
                                </div>
                                <div className='w-full'>

                                </div>
                            </div>
                            <div className={classes.buttons_container + ' w-full flex items-center flex-col pb-6 mt-4'}>
                                <h4 className={classes.forgot_password + ' w-full pl-9 text-sm text-extrabold text-blue-600 hover:cursor-pointer hover:underline'}>Forgot Password?</h4>
                                <Stack spacing={2} direction="row" className='mt-2 w-full flex justify-center'>
                                    <Button variant="contained" className={classes.logIn_Button + ' rounded-full'}>Register</Button>
                                </Stack>
                            </div>
                        </LogInContainer>
                    </div>
                </Container>
            )}

            {isOpenPanel && (
                <div className={classes.panel}>
                    <div className={classes.panel_inner}>
                        <div className={classes.panel_header}>
                            <p>Menu</p>
                            <Button onClick={panel} className={classes.close_btn}><IoClose /></Button>
                        </div>
                        <div className={classes.panel_main_content}>
                            <ul>
                                <li><Button>Hello World</Button></li>
                                <li><Button>Hello World</Button></li>
                                <li><Button>Hello World</Button></li>
                                <li><Button>Hello World</Button></li>
                                <li><Button>Hello World</Button></li>
                                <li><Button>Hello World</Button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            <div className={classes.header}>
                <div className={classes.btn_box}>
                    <Button onClick={panel} className={classes.panel_btn}><GiHamburgerMenu className={classes.panel_btn_icon} /></Button>
                </div>
                <div className={classes.header_inner}>
                    <div className={classes.left_box}>
                        <div className={classes.img_box}>
                            <img src={HeaderPicturesFile.Logo} alt="Logo" />
                        </div>
                        <p>Become Different!</p>
                    </div>
                    <div className={classes.center_box}>
                        <div className={classes.search_box}>
                            <FiSearch className={classes.search_icon} />
                            <input className={classes.input} type="text" placeholder='Search anything...' />
                        </div>
                    </div>
                    <div className={classes.right_box}>
                        <div className={classes.icons_box}>
                            <Button><FaBell className={classes.icon} /></Button>
                            <Button><FaStar className={classes.icon} /></Button>
                            <Button><FaUser className={classes.icon} /></Button>
                        </div>
                        <div className={classes.signup_login_btns}>
                            <Button variant='outlined' className={classes.logIn_btn} onClick={logInOpen}>Log In</Button>
                            <Button variant='contained' className={classes.signUp_btn} onClick={signUpOpen}>Sign Up</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header