import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../Scss/api_test.scss';

function AnimeList() {
    const [animeList, setAnimeList] = useState([]);
    const { title } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/anime/${title}`)
            .then(response => response.json())
            .then(response => setAnimeList(response))
            .then(data => console.log(data, title));
    }, [title, animeList]);
    return (
        <div className="home">
            <h1 style={{ color: "#9c9c9c" }}>Wyniki wyszukiwania dla: {title}</h1>
            <ul>
                {animeList && animeList.map((anime, index) => (
                    <li key={index} className='item'>
                        <img src={anime.imageUrl} alt={anime.title} />
                        <p className='item'>{anime.title}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AnimeList;