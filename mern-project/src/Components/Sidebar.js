import React from 'react'
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DescriptionIcon from '@material-ui/icons/Description';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SidebarRow from './SidebarRow.js';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div class="sidebar">
            <SidebarRow src="https://avatars1.githubusercontent.com/u/15962423?s=460&u=22a5066e8ef42d664c598a51531836559ae138b1&v=4" title="Susana Cruz" />
            <SidebarRow Icon={GitHubIcon} title='GitHub' />
            <SidebarRow Icon={LinkedInIcon} title='LinkedIn' />
            <SidebarRow Icon={DescriptionIcon} title='Resume' />
            <SidebarRow Icon={ContactMailIcon} title='Contact' />
            <SidebarRow Icon={ExpandMoreIcon} title='More' />
        </div>
    )
}

export default Sidebar