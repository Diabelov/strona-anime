import { ReactEventHandler, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [AnimeArray, setAnimeArray] = useState<any>([]);
  const [SelectedAnime, setSelectedAnime] = useState<any>([])

  // const animes = [
  //   {
  //     name: "gówno 1"
  //   },
  //   {
  //     name: "szmata 2"
  //   },
  //   {
  //     name: "cing ciang ciong1"
  //   },
  //   {
  //     name: "overflow season 2"
  //   },
  //   {
  //     name: "two piece"
  //   }
  // ]

  const onTypeEnd = (e: React.ChangeEvent<HTMLInputElement>) => {
    let animeArray = [];

    for (const anime of AnimeArray) {
      if (anime.username.toLowerCase().includes(e.target.value.toLowerCase())) {
        animeArray.push(AnimeArray[AnimeArray.indexOf(anime)])
      }
    }

    setSelectedAnime(animeArray)
  }

  useEffect(() => {
    fetch("http://localhost:8080/api/get")
    .then(response => response.json())
    .then(response => setAnimeArray(response.users))
  })

  return (
    <div>
      <input 
        placeholder='wpisz nazwe'
        type="text"
        onChange={onTypeEnd}
      />
      <h1 id="test">Znalezione anime:</h1>
      {SelectedAnime.map((o: any, i: number) => {
        return <>
          <a key={i} href={o.link}>{o.username}</a>
          <br />
        </>
      })}  
    </div>
  )
}

export default App
