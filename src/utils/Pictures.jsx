import React from 'react'

const Pictures = ({ s_url, m_url, l_url, alt_text }) => {
    return (
        <picture>

            {m_url && (
                <source media="(min-width:768px)" srcset={m_url} />
            )}
            {l_url && (
                <source media="(min-width:1024px)" srcset={l_url} />
            )}
            {(s_url) && (
                <img src={s_url} alt={alt_text} style={{width:'auto'}}/>
            )}
        </picture>
    )
}

export default Pictures