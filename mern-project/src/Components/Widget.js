import React from 'react'

const Widget = () => {
    return (
        <div className='widgets'>
            <iframe
                src="https://www.youtube.com/embed/videoseries?list=PLMlVOaNbLF22xHk8V_5m7RFZHQTAKosE1"
                width="340"
                height="1500"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameborder="0"
                allowTransparency="true"
                allow="encrypted-media"
            >
            </iframe>
        </div>
    )
}

export default Widget
