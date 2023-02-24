import React from 'react'
import './discuss.scss'
import { TiTick } from 'react-icons/ti'

const Discuss = () => {
    const discussData = ["Free Consultation", "Budget Quotations", "Latest Technologies", "Eco Friendly Constructions"]
    return (
        <div className='discuss-section'>
            <div className='discuss-content'>
                <h5>Founder</h5>
                <h2>Let's discuss your spaces!</h2>
                <p>Tired of lengthy and frustrating design processes? We would love to hear about your project, please feel free to contact us.</p>
                {discussData.map((item, index) => (
                    <div className='discuss-icon'>
                        <TiTick />
                        <h6 key={index}>{item}</h6>
                    </div>
                ))}
                <button className='btn primary'>Send Inquiry</button>
            </div>
            <div className='discuss-img'>
                <img src='/assets/discuss-img.jpg' />
            </div>
        </div>
    )
}

export default Discuss
