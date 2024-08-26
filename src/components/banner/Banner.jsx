import React from 'react'
import Pictures from '../../utils/Pictures'

const Banner = ({heading,subheading}) => {
    return (
        <section className='section banner'>
            <Pictures s_url={'https://via.placeholder.com/600x600'} m_url={'https://via.placeholder.com/1920x650'} alt_text={'banner'}/>

            {heading && (
                <>
                    <div className='banner__text section__padding'>
                        <h1 className='banner__heading'>{heading}</h1>
                        {subheading && (
                            <p className='banner__subheading'>{subheading}</p>
                        )}
                    </div>
                </>
            )}
        </section>
    )
}

export default Banner