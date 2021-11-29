import React from 'react';
import './css/widget.css';
import {Avatar} from '@material-ui/core';
// import Linkedin from './Linkedin-Logo.png';


function Widget() {
    return(
        <div className="widget">
            <div className="widget_top">
                <div className="widget_header">
                    <h3>Linkedin news</h3>
                    <Avatar/>
                </div>
                <div className="widget_body">
                    <ul>
                        <li>
                            <span>Top Startups on hiring freshers</span>
                            <p>Top news • 6,540 readers</p>
                        </li>
                        <li>
                            <span>Air India says Tata to government</span>
                            <p>Top news • 6,540 readers</p>
                        </li>
                        <li>
                            <span>Air India says Tata to government</span>
                            <p>Top news • 6,540 readers</p>
                        </li>
                        
                    </ul>
                </div>
            </div>

            <div className="widget_bottom">
                <div className="widget_header">
                    <h3>Linkedin news</h3>
                    <Avatar/>
                </div>
                <div className="widget_body">
                    <ul>
                        <li>
                            <span>Air India says Tata to government</span>
                            <p>Top news • 6,540 readers</p>
                        </li>
                        <li>
                            <span>Air India says Tata to government</span>
                            <p>Top news • 6,540 readers</p>
                        </li>
                        <li>
                            <span>Air India says Tata to government</span>
                            <p>Top news • 6,540 readers</p>
                        </li>
                        
                    </ul>
                </div>
            </div>
            <div className="widget_footer">
                <div className="widgetfooterBody">
                    <span>About </span>
                    <span> Accessbility </span><br></br>
                    <span> Help</span>
                    <p>
                      LinkedIn Corporation © 2021
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default Widget