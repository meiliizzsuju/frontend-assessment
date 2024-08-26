import React from 'react'
import Pictures from '../../utils/Pictures';
import './BlogItem.css';

const BlogItem = ({ s_url, m_url, l_url, alt_text, parent_classes, content, link_url, link_classes, link_label }) => {
    return (
        <div className={'blogitem p-4 pb-6 rounded border-2 border-gray-200 shadow-md text-center flex flex-col justify-between'}>
            <div className='blogitem__top'>
                <Pictures s_url={s_url} m_url={m_url} l_url={l_url} alt_text={alt_text} parent_classes={parent_classes} />

                {content && (
                    <p className='mt-2 mb-4'>{content}</p>
                )}
            </div>
            <div className='blogitem__bottom'>
                <a href={link_url} className={link_classes}>{link_label}</a>
            </div>
        </div>
    )
}

export default BlogItem