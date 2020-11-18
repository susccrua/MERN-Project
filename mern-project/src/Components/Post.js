import { Avatar } from '@material-ui/core'
import React from 'react'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import './Post.css'

const Post = ({ profilePic, imgName, username, timestamp, message }) => {
    return (
        <div className='post'>
            <div className='post__top'>
                <Avatar src={profilePic} className='post__avatar' />

                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(parseInt(timestamp)).toUTCString()}</p>

                </div>
            </div>

            <div className='post__bottom'>
                <p>{message}</p>
            </div>

            <div className='post__options'>
                <div className='post__option'>
                    <InsertEmoticonIcon />
                    <p>Love</p>
                </div>
                <div className='post__option'>
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
            </div>
        </div>
    )
}

export default Post
