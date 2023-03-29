import React from 'react';
import data from './json/lista.json';
import './Scss/odtwarzacz.scss'
import { useState } from 'react';

function Odtwarzacz({ page }) {
    const [activeIframe, setActiveIframe] = useState(0);

    const handleIframeChange = (index) => {
        setActiveIframe(index);
    };

    const animeData = data[page];

    return (
        <div className="odtwarzacz">
            <div className="odtwarzacz_okno">
                {animeData.map((item, index) => (
                    activeIframe === index && (
                        // eslint-disable-next-line jsx-a11y/iframe-has-title
                        <iframe
                            key={index}
                            src={item["iframeSrc"]}
                            width={item["iframeWidth"]}
                            height={item["iframeHeight"]}
                            allowFullScreen
                        />

                    )
                ))}
            </div>
            <div className="odtwarzacz_lista">
                {animeData.map((item, index) => (
                        <button className='odtwarzacz_przycisk' key={index} onClick={() => handleIframeChange(index)}>
                            {item.buttonText}
                        </button>
                        ))}
            </div>
        </div>
    );
}


export default Odtwarzacz;