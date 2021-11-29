import React from 'react'
import {Avatar} from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import Comment from '@material-ui/icons/InsertComment';
import Share from '@material-ui/icons/Share';
import Send from '@material-ui/icons/Send';
import './css/post.css'

function Post({name, description, message, photoURL}) {
    return(
        <div className="posts">
            <div className="posts_header">
                <div className="posts_headerLeft">
                    <Avatar src={photoURL}/>
                    <div className="posts_profile_details">
                        <h3>{name}</h3>
                        <p>{description}</p>
                    </div>
                </div>
                <MoreVertIcon/>
            </div>
            <div className="posts_body">
                <p>{message}</p>
            </div>
            <div className="posts_footer">
                <div className="posts_footer_option">
                    <ThumbUpAltIcon/>
                    <span>Like</span>
                </div>
                <div className="posts_footer_option">
                    <Comment/>
                    <span>Comment</span>
                </div>
                <div className="posts_footer_option">
                    <Share/>
                    <span>Share</span>
                </div>
                <div className="posts_footer_option">
                    <Send/>
                    <span>Send</span> 
                </div>
            </div>
        </div>
    )
}

export default Post