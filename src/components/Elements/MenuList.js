import React  from "react";
import { NavLink } from "react-router-dom";
import {Nav} from 'react-bootstrap'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SettingsIcon from '@material-ui/icons/Settings';
import EventNoteOutlinedIcon from '@material-ui/icons/EventNoteOutlined';
import BrokenImageOutlinedIcon from '@material-ui/icons/BrokenImageOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import EmojiEventsOutlinedIcon from '@material-ui/icons/EmojiEventsOutlined';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';


const MenuList = (props) => {
    const {toggleMenu , web} = props;
    const links = [
        {name:'Home' , icon: <BrokenImageOutlinedIcon/> , nav: '/'},
        {name:'My Courses' , icon: <BookOutlinedIcon/> , nav: '/courses'},
        {name:'Favorite' , icon: <FavoriteBorderIcon/> , nav: '/favorite'},
        {name:'Test' , icon: <EventNoteOutlinedIcon/> , nav: '/test'},
        {name:'Achievements' , icon: <EmojiEventsOutlinedIcon/> , nav: '/achievements'},
        {name:'Certificate' , icon: <AssignmentOutlinedIcon/> , nav: '/certificate'},
        {name:'Settings' , icon: <SettingsIcon/> , nav: '/settings'},
    ]

    return(
        <Nav className="flex-column mt-5 pt-3 pr-4">
            {links.map((l ,i)=>(
                <NavLink
                    exact key={i}
                    className={'nav-link animated slideInLeft'}
                    to={l.nav}
                    activeClassName="active"
                    onClick={()=>{ !web && toggleMenu() }}
                >
                    {l.icon}<span>{l.name}</span>
                </NavLink>
            ))}
        </Nav>
        )
}


export default MenuList
