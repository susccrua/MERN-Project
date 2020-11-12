import { Avatar, Input } from '@material-ui/core'
import React, { useState } from 'react'
import './MessageSender.css'

const MessageSender = () => {
    // React hooks. See codecademy lectures
    const [input, setInput] = useState('')
    const [image, setImage] = useState(null)

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    const handleSubmit = () => {
        console.log('Submit');
    }

    return (
        <div className='messageSender'>
            <div className='messageSender__top'>
                <Avatar src='https://avatars1.githubusercontent.com/u/15962423?s=460&u=22a5066e8ef42d664c598a51531836559ae138b1&v=4' />
                <form>
                    <input
                        type='text'
                        className='messageSender__input'
                        placeholder="Comment on the site!"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Input
                        type="file" className='messageSender__fileSelector'
                        onChange={handleChange}
                    />
                    <button
                        onClick={handleSubmit} type='submit'>
                        Hidden?
                    </button>
                </form>
            </div>

            <div className="messageSender__bottom">
                <div></div>
            </div>

        </div>
    )
}

export default MessageSender

