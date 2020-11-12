import React from 'react'
import Story from './Story'
import './StoryReel.css'

const StoryReel = () => {
    return (
        <div className='storyReel'>
            <Story
                image='https://img.travelawaits.com/filter:centercrop/quill/9/4/b/0/d/6/94b0d69194412db227a9a3007521a4ab9d95ff65.jpg?w=800&h=800'
                profileSrc='https://avatars1.githubusercontent.com/u/15962423?s=460&u=22a5066e8ef42d664c598a51531836559ae138b1&v=4'
                title='Me'
            />
            <Story
                image='https://rtvc-assets-radionacional-v2.s3.amazonaws.com/s3fs-public/styles/imagen_720x720/public/senalradio/articulo-noticia/galeriaimagen/popayan_1.jpg?itok=h6lJp8nv&timestamp=1522865253'
                profileSrc='https://kottke.org/plus/misc/images/ai-faces-01.jpg'
                title='Somebody'
            />
            <Story
                image='https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fi.forbesimg.com%2Fmedia%2Flists%2Fplaces%2Fdallas-tx_416x416.jpg'
                profileSrc='https://www.irishtimes.com/polopoly_fs/1.3507373.1527244491!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg'
                title='Marky'
            />
        </div>
    )
}

export default StoryReel
