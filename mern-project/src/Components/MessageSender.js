import { Avatar, Input } from '@material-ui/core'
import React, { useState } from 'react'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import VideocamIcon from '@material-ui/icons/Videocam';
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
        e.preventDefault()

        if (image) {
            const imgForm = new FormData()
            imgForm.append('file', image, image.name)

            axios.post('/upload/image', imgForm, {
                headers: {
                    'accept': 'application/json',
                    'Accept-Lamguage': 'en-US,en;q=0.8',
                    'Content-Type': `multipart/form-data; boundary=${imgForm._boundary}`,
                }
            }).then((res) => {
                console.log(res.data)

                const postData = {
                    text: input,
                    imgName: res.data.filename,
                    user: user.displayName,
                    avatar: user.photoURL,
                    timestamp: Date.now()
                }
                console.log(postData)
                savePost(postData)
            })
        }

        setImageUrl('')
        setInput('')
        setImage(null)

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
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <AddAPhotoIcon style={{ color: 'green' }} />
                    <h3>Photo/Video</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender

