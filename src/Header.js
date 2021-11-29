import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import "./css/header.css";
import Headeroptions from './Headeroptions';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import JobIcon from '@material-ui/icons/Work';
import MessegeIcon from '@material-ui/icons/Message';
import NotificationIcon from '@material-ui/icons/Notifications';
import {Avatar} from '@material-ui/core'
function Header(){
    return (
        <div className="header">
            <div className="header_left">
                <div className="header_logo">
                    <img src="https://cdn-icons-png.flaticon.com/512/2111/2111499.png" alt="logo"></img>
                </div>
                <div className="header_search">
                    <SearchIcon/>
                    <input type="text" placeholder="search" ></input>
                </div>
            </div>
            <div className="header_right">
                <Headeroptions Icon={HomeIcon} title="Home"/>
                <Headeroptions Icon={PeopleIcon} title="People"/>
                <Headeroptions Icon={JobIcon} title="Job"/>
                <Headeroptions Icon={MessegeIcon} title="Messege"/>
                <Headeroptions Icon={NotificationIcon} title="Notification"/>
                <Headeroptions Avatar={Avatar} title="Rustam"/>
                
            </div>
        </div>
    )
}

export default Header