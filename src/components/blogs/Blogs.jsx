import React from 'react'
import BlogItem from '../blogItem/BlogItem'

const Blogs = () => {
    return (
        <section className='blog p-4 md:p-8'>
            <div className='container mx-auto'>
                <BlogItem s_url={'https://via.placeholder.com/400x300'}
                    alt_text="blog image 1"
                    parent_classes={'blogitem__img'}
                    content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
                    link_url='#blog1'
                    link_classes='text-sm font-bold tracking-wider uppercase rounded-full border-solid border-2 border-gray-800 px-3 py-2 mt-2'
                    link_label='Read more'
                />
            </div>
        </section>
    )
}

export default Blogs