import React from 'react';
import data from './lista.json';
import './App.css';
import { useState } from 'react';

function Odtwarzacz({ page }) {
    const [activeIframe, setActiveIframe] = useState(0);

    const handleIframeChange = (index) => {
        setActiveIframe(index);
    };

    const animeData = data[page];

    return (
        <div>
            {animeData.map((item, index) => (
                <button className='przycisk' key={index} onClick={() => handleIframeChange(index)}>
                    {item.buttonText}
                </button>
            ))}
            <div>
                {animeData.map((item, index) => (
                    activeIframe === index && (
                        <iframe
                            key={index}
                            src={item.iframeSrc}
                            width={item.iframeWidth}
                            height={item.iframeHeight}
                            allowFullScreen
                        />

                    )
                ))}
            </div>
        </div>
    );
}

export default Odtwarzacz;