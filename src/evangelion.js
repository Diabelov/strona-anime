import React from 'react';
import data from './lista.json';
import './App.css'
import { useState } from 'react';

function Evangelion_test() {
    const [activeIframe, setActiveIframe] = useState(0);

    const handleIframeChange = (index) => {
        setActiveIframe(index);
    };

    return (
        <div>
            {data.map((item, index) => (
                <button className='przycisk' key={index} onClick={() => handleIframeChange(index)}>
                    {item.buttonText}
                </button>
            ))}
            <div>
                {data.map((item, index) => (
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
export default Evangelion_test;