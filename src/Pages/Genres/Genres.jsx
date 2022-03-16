import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './genres.styles.scss';

function Container() {
  const [games, setGames] = useState([]);
  //   const [genres, setGenres] = useState(genresList);

  useEffect(() => {
    // console.log(genres);
    //params for the axios call

    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
      headers: {
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
        'x-rapidapi-key': 'd58b9adf40mshc7366fe0f474689p16ed60jsnc2ce0ae74529',
      },
    };

    axios
      .request(options)
      .then((response) => {
        setGames(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  //   console.log(games[0]);
  //--------------------------------------------
  //busco todos generos y quito los repetidos
  const listSet = new Set(games.map((game) => game.genre));
  const genreList = [...listSet];
  // console.log(genreList);

  const list = (genre) =>
    games.filter((game) => game.genre.toLowerCase() === genre.toLowerCase());
  //   console.log(list('MMORPG'));

  return (
    <div className='genre-list'>
      {genreList.map((genre, i) => {
        return (
          <section key={i} className='genre-list-section'>
            <h3 className='genre-list-section__title'>{genre}</h3>
            <div className='genre-list-section__images'>
              {list(genre).map((game, i) => (
                <div key={i}>
                  <img
                    className='game-image'
                    src={game.thumbnail}
                    alt={game.title}
                  />
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default Container;
