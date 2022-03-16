import React, { useEffect, useState } from 'react';
import GameCard from '../../Components/GameCard/GameCard';
import axios from 'axios';
import './container.styles.scss';
import InfiniteScroll from 'react-infinite-scroll-component';

//begin and end of list of games. also adds end-numbers of games
//for some reason it doesnt work if it's inside the component
let begin = 0;
let end = 26;

function GameList() {
  const [games, setGames] = useState([]);

  const fetchData = () => {
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
        const allGames = response.data;

        setGames([
          ...games,
          ...allGames.filter((game, i) => i >= begin && i < end),
        ]);
        begin = end;
        end = end + 25;
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <InfiniteScroll
      dataLength={games.length}
      next={fetchData}
      hasMore={false}
      className='game-list'
    >
      {games.map((game, index) => {
        return <GameCard game={game} key={index} />;
      })}
    </InfiniteScroll>
  );
}

export default GameList;
