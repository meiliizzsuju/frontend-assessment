import React, { useState } from 'react';
import myData from '../utils/data.json';
import './Exercise2.css'

const Exercise2 = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    console.log("checkdata myData :" + myData)

    const handleTabClick = (index) => {
        setActiveIndex(index === activeIndex ? -1 : index);
    };

    return (
        <div className="accordionTab p-4">
            {myData.map((item, index) => (
                <div key={index} className={`accordionTab__item ${activeIndex === index ? 'active' : ''}`}>
                    <button onClick={() => handleTabClick(index)} class='accordionTab__button' >
                        {item.title}
                        <svg class='accordionTab__button--icon' width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25' stroke='currentColor' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'></path>
                        </svg>
                    </button>
                    <div className="accordionTab__content">
                        <div className="accordionTab__content--inner" dangerouslySetInnerHTML={{ __html: item.content }}></div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Exercise2