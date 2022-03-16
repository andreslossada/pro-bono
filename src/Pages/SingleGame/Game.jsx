import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './game.styles.scss';
import useApp from '../../store/Context';

function Game() {
  const { currentGame, setCurrentGame } = useApp();
  const [game, setGame] = useState([]);

  //destructuring single game object
  const {
    id,
    description,
    short_description,
    developer,
    game_url,
    genre,
    platform,
    publisher,
    release_date,
    thumbnail,
    title,
    minimum_system_requirements = [],
    status,
    screenshots = [],
  } = game;

  useEffect(() => {
    //params for the axios call
    console.log(currentGame.id);
    const currentID = currentGame.id;
    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
      params: { id: { currentID } },
      headers: {
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
        'x-rapidapi-key': 'd58b9adf40mshc7366fe0f474689p16ed60jsnc2ce0ae74529',
      },
    };
    // calls and set the game in the useState
    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
        setGame(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div key={id} className='game-container'>
      <section className='game-container--header'>
        <img src={thumbnail} alt={title} />
        <h1 className='game-title'>{title}</h1>
      </section>
      <section className='game-container--description'>
        <h3>About {title}:</h3>
        <p className='description'>{description}</p>
      </section>
      <section className='game-container--gallery'>
        {screenshots.map((el, i) => {
          return (
            <img
              className='screenshot-image'
              src={el.image}
              alt={title}
              key={i}
            />
          );
        })}
      </section>
      <section className='game-container--additional-info'>
        <div>
          <span>Title:</span>
          <p>{title}</p>
        </div>
        <div>
          <span>Developer:</span>
          <p>{developer}</p>
        </div>
        <div>
          <span>Publisher:</span>
          <p>{publisher}</p>
        </div>
        <div>
          <span>Release Date:</span>
          <p>{release_date}</p>
        </div>
        <div>
          <span>Genre:</span>
          <p>{genre}</p>
        </div>
        <div>
          <span>Platform:</span>
          <p>{platform}</p>
        </div>
      </section>
      <div className='section-title'>
        <h4>Minimum System Requirements:</h4>
        <span>{platform}</span>
      </div>
      <section className='game-container--system-req'>
        <div>
          <span>OS:</span>
          <p>{minimum_system_requirements.os}</p>
        </div>
        <div>
          <span>Processor:</span>
          <p>{minimum_system_requirements.processor}</p>
        </div>

        <div>
          <span>Memory:</span>
          <p>{minimum_system_requirements.memory}</p>
        </div>
        <div>
          <span>graphics:</span>
          <p>{minimum_system_requirements.graphics}</p>
        </div>
        <div>
          <span>Storage:</span>
          <p>{minimum_system_requirements.storage}</p>
        </div>
        <div>
          <span>Additional Notes:</span>
          <p>Specifications may change during development</p>
        </div>
      </section>
      <a href={game_url} target='_blank' rel='noreferrer'>
        PLAY NOW
      </a>
    </div>
  );
}

export default Game;
