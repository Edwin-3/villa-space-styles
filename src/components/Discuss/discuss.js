import React from 'react'
import './discuss.scss'

const Discuss = () => {
    return (
        <div className='discuss-section'>
            <div className='discuss-content'>
                <h2>Discuss for a cool Project!</h2>
                <p>Tired of lengthy and frustrating design processes? We have made quality our habit, it's not something we strive for - we live by</p>
                <button className='btn primary'>Send Inquiry</button>
            </div>
            <div className='discuss-img'>
                <img src='/assets/discuss-img.jpg' />
            </div>
        </div>
    )
}

export default Discuss