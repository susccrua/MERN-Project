import React from 'react'
import logo from './eye.png';
import SearchIcon from '@material-ui/icons/Search';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import { Avatar, IconButton } from '@material-ui/core';

import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <img src={logo} alt="logo" />
            </div>
            <div className="header__input">
                <SearchIcon />
                <input placeholder='Search page' type="text" />

            </div>
            <div className="header__center">
                <div className="header__option">
                    <HomeIcon />
                </div>
                <div className="header__option">
                    <ForumIcon />
                </div>
                <div className="header__option">
                    <PeopleIcon />
                </div>
            </div>

            <div className="header__right">
                <div className='header__info'>
                    <Avatar />
                    <h4>Susana</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>

                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>

                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>


            </div>

        </div>
    )
}

export default Header
