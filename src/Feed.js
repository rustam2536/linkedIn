import React from 'react';
import {Avatar} from '@material-ui/core';
import PhotoIcon from '@material-ui/icons/PhotoLibrary';
import Video from '@material-ui/icons/YouTube';
import Event from '@material-ui/icons/Event';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Post from "./Post";
import "./css/feed.css";

// const db = getFirestore(app);

function Feed() {

const submitPost = (e) => {

}
    return(
        <div className="feed">
          <div className="feed_input">
            <div className="feed_form">
                <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQE9XvK6q-slog/profile-displayphoto-shrink_800_800/0/1629689491685?e=1639612800&v=beta&t=3P2sRbX9QN29Sczt3ULgq1WSmkD4FKElePqFIZtoR6o"/>
                <form onSubmit={submitPost}>
                    <input type="text" placeholder="start a post" ></input>
                    <input type="submit"></input>
                </form>
            </div>
            <div className="feed_options">
                <div className="option">
                    <PhotoIcon style={{color:'#70b5f9'}} />
                    <span>Photo</span>
                </div>
                <div className="option">
                    <Video style={{color:'#7fc15e'}} />
                    <span>Video</span>
                </div>
                <div className="option">
                    <Event style={{color:'#e7a33e'}} />
                    <span>Event</span>
                </div>
                <div className="option">
                    <AssignmentIcon style={{color:'#fc9295'}} />
                    <span>Write Artical</span>
                </div>
            </div>
          </div>
          <Post name="Rustam" description="developer" message="hello guys this is my 1st post" photoURL="https://media-exp1.licdn.com/dms/image/C5603AQE9XvK6q-slog/profile-displayphoto-shrink_800_800/0/1629689491685?e=1639612800&v=beta&t=3P2sRbX9QN29Sczt3ULgq1WSmkD4FKElePqFIZtoR6o" />
          <Post name="Rajan" description="i'm rajan" message="hello guys" photoURL="https://media-exp1.licdn.com/dms/image/C5603AQE9XvK6q-slog/profile-displayphoto-shrink_800_800/0/1629689491685?e=1639612800&v=beta&t=3P2sRbX9QN29Sczt3ULgq1WSmkD4FKElePqFIZtoR6o" />
          <Post name="Rajkumar" description="this is first post" message="hello guys" photoURL="https://media-exp1.licdn.com/dms/image/C5603AQE9XvK6q-slog/profile-displayphoto-shrink_800_800/0/1629689491685?e=1639612800&v=beta&t=3P2sRbX9QN29Sczt3ULgq1WSmkD4FKElePqFIZtoR6o" />
          <Post name="Arman" description="this is first post" message="hello guys" photoURL="https://media-exp1.licdn.com/dms/image/C5603AQE9XvK6q-slog/profile-displayphoto-shrink_800_800/0/1629689491685?e=1639612800&v=beta&t=3P2sRbX9QN29Sczt3ULgq1WSmkD4FKElePqFIZtoR6o" />
          
          
        </div>
    )
}

export default Feed