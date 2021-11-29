import React from 'react'
import {Avatar} from '@material-ui/core'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_profile">
                <img src="https://images.unsplash.com/photo-1614854262318-831574f15f1f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29sb3VyJTIwZ3JhZGllbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="" ></img>
                <div className="profile_details">
                    <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQE9XvK6q-slog/profile-displayphoto-shrink_800_800/0/1629689491685?e=1639612800&v=beta&t=3P2sRbX9QN29Sczt3ULgq1WSmkD4FKElePqFIZtoR6o"/>
                    <span>Rustam</span><br></br>
                    <span>developer</span>
                </div>
                <div className="profile_stats">
                    <span>Who view your profile</span>
                    <span className="stat_number">20</span>
                </div>
                <div className="profile_stats">
                    <span>Grow your network:</span>
                    <span className="stat_number">150</span>
                </div>

            </div>
            <div className="sidebar_recent">
                <p>Recent</p>
                <p className="hash"><span>#</span>branding</p>
                <p className="hash"><span>#</span>development</p>
                <p className="hash"><span>#</span>react.js</p>
                <p className="hash"><span>#</span>programming</p>
                <p className="hash"><span>#</span>javaScript</p>
            </div>

        </div>
    )
}

export default Sidebar