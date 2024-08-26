import React from 'react'
import Pictures from '../../utils/Pictures'
import './Banner.css';

const Banner = ({heading,subheading}) => {
    return (
        <section className='section banner relative'>
            <Pictures s_url={'https://via.placeholder.com/600x600'} m_url={'https://via.placeholder.com/1920x650'} alt_text={'banner'} parent_classes='banner__img'/>

            {heading && (
                <>
                    <div className='banner__overlay absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center px-2 md:px-4'>
                        <div className='banner__text text-center'>
                            <h1 className='banner__heading text-5xl font-extrabold tracking-wide text-white'>{heading}</h1>
                            {subheading && (
                                <p className='banner__subheading text-2xl text-white tracking-wider mt-2 md:mt-4'>{subheading}</p>
                            )}
                        </div>
                    </div>
                </>
            )}
        </section>
    )
}

export default Banner