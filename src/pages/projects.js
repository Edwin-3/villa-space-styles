import React from 'react'
import './projects.scss'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { Link } from 'react-router-dom';

const Projects = () => {

    const images = [
        { id: 1, src: 'assets/villaImg01.jpg', alt: 'Image 1' },
        { id: 2, src: 'assets/villaImg02.jpg', alt: 'Image 2' },
        { id: 3, src: 'assets/villaImg03.jpg', alt: 'Image 3' },
        { id: 4, src: 'assets/villaImg04.jpg', alt: 'Image 4' },
        { id: 5, src: 'assets/villaImg05.jpg', alt: 'Image 5' },
        { id: 6, src: 'assets/villaImg06.jpg', alt: 'Image 6' },
    ];

    function ImageList(props) {
        const { images } = props;

        return (
            <div className='image-list'>
                {images.map((image) => (
                    <img key={image.id} src={image.src} alt={image.alt} />
                ))}
            </div>
        );
    }
    return (
        <div className='project-body'>
            <div className='header'>
                <Link to="/">
                    <MdOutlineKeyboardBackspace />
                </Link>
                <h5>photography by ZeeArt Media</h5>
            </div>
            <ImageList images={images} />

        </div>
    )
}

export default Projects