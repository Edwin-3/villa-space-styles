import React from 'react'
import '../styles.scss'
import './services.scss'


const Services = () => {
    return (
        <div className='service-section'>
            <div className='service-heading'>
                <h5>How it works</h5>
                <h2>Visualize your Ideas</h2>
            </div>
            <div className='service-card-wrapper'>
                <div className='service-card'>
                    <div className='icon'></div>
                    <h4>Smooth Workflow</h4>
                    <p>We provide the easiest smoothest workflow of interior design. </p>
                </div>
                <div className='service-card active'>
                    <div className='icon'></div>
                    <h4>Smooth Workflow</h4>
                    <p>We provide the easiest smoothest workflow of interior design. </p>
                </div>
                <div className='service-card'>
                    <div className='icon'></div>
                    <h4>Smooth Workflow</h4>
                    <p>We provide the easiest smoothest workflow of interior design. </p>
                </div>
                <div className='service-card'>
                    <div className='icon'></div>
                    <h4>Smooth Workflow</h4>
                    <p>We provide the easiest smoothest workflow of interior design. </p>
                </div>

            </div>
        </div>
    )
}

export default Services