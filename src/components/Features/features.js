import React from 'react'
import './features.scss'

const Features = () => {

    const section3Data = [
        {
            image: '/assets/img01.jpg',
            title: 'Impeccable Detail',
            describe: 'We craft luxurious interiors with a keen eye for detail and quality craftsmanship. Our personalized touch ensures every project is beautiful and functional.'
        },
        {
            image: '/assets/img02.jpg',
            title: 'Designs Built to Last',
            describe: 'Our experienced team creates bespoke interiors tailored to your unique style and needs. From classic to modern, we design spaces that stand the test of time.'
        },
        {
            image: '/assets/img03.jpg',
            title: 'On Time, On Budget, On Point',
            describe: 'We keep your project on track with regular site reviews and timely updates. Our focus on timelines and budgets ensures your satisfaction every step of the way.'
        },
        {
            image: '/assets/img04.jpg',
            title: 'Creative Strategies for Any Challenge',
            describe: 'We love a creative challenge. Our team develops innovative design solutions that reflect your vision and style. We collaborate closely to deliver customized strategies for any space, big or small.'
        },

    ]
    return (
        <div className='section03-section'>
            <div className='section03-heading'>
                <h5>Tailored Interiors</h5>
                <h2>creating Timeless, custom Interiors with creative Flair</h2>
            </div>

            {section3Data.map((item, index) => {
                return (
                    <div key={index} className='section03-content'>
                        <div className='image'><img src={item.image} /></div>
                        <div className='section03-text'>
                            <h3>{item.title}</h3>
                            <p>{item.describe} </p>
                        </div>
                    </div>
                )
            })

            }
        </div>
    )
}

export default Features