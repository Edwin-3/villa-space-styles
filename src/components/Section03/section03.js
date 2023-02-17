import React from 'react'
import './section03.scss'

const Section03 = () => {

    const section3Data = [
        {
            image: '/assets/img01.jpg',
            title: 'Smooth Workflow',
            describe: 'We provide the easiest smoothest workflow of interior design. We provide the easiest smoothest workflow of interior design.'
        },
        {
            image: '/assets/img02.jpg',
            title: 'Smooth Workflow',
            describe: 'We provide the easiest smoothest workflow of interior design. We provide the easiest smoothest workflow of interior design.'
        },
        {
            image: '/assets/img03.jpg',
            title: 'Smooth Workflow',
            describe: 'We provide the easiest smoothest workflow of interior design. We provide the easiest smoothest workflow of interior design.'
        },
        {
            image: '/assets/img04.jpg',
            title: 'Smooth Workflow',
            describe: 'We provide the easiest smoothest workflow of interior design. We provide the easiest smoothest workflow of interior design.'
        },

    ]
    return (
        <div className='section03-section'>
            <div className='section03-heading'>
                <h5>How it works</h5>
                <h2>Visualize your Ideas</h2>
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

export default Section03