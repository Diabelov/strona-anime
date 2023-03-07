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
        <div>
            <href>
            <button style={{position: "relative", right: "-1173px"}}>Następny sezon</button></href> {/* nie zrobiony przcisk (trzeba zrobić), zmień sposób wyświetlania się odcinków czyli po kliknięciu
            innego przycisku i guess, dodać opis anime, zmienić player na nie cda tylko lokalnie (z drugiego dysku), w końcu użyć api i najlepiej to na nutkach zapytać o wszystkie moduły*/}
        </div>
        </div>
    );
}
export default Evangelion_test;