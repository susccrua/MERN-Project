import React from 'react'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'

const Feed = () => {
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />

            <Post
                profilePic='https://avatars1.githubusercontent.com/u/15962423?s=460&u=22a5066e8ef42d664c598a51531836559ae138b1&v=4'
                message='Hello i made this'
                timestamp={new Date().getTime()}
                imgName='imgName'
                username='Susana'
            />
        </div>
    )
}

export default Feed
