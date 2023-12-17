import React, { useState } from 'react';
import classes from '../../CSS/header.module.css';
import { HeaderPicturesFile } from '../../Helpers/Pictures';
import { FiSearch } from "react-icons/fi";
import { FaBell, FaStar, FaUser } from "react-icons/fa6";
import Button from '@mui/material/Button';
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {

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
    return (
        <>
            {isOpenPanel && (
                <div className={classes.panel}>
                    <div className={classes.panel_inner}>
                        <div className={classes.panel_header}>
                            
                        </div>
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
                            <Button variant='outlined' className={classes.logIn_btn} onChange={logInOpen}>Log In</Button>
                            <Button variant='contained' className={classes.signUp_btn} onChange={signUpOpen}>Sign Up</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header