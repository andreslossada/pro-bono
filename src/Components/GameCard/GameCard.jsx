import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import './card.styles.scss';
import { AiFillWindows } from 'react-icons/ai';
import { GoBrowser } from 'react-icons/go';
import { NavLink } from 'react-router-dom';
import useApp from '../../store/Context';

export function GameCard({ game }) {
  const { currentGame, setCurrentGame } = useApp();

  const {
    id,
    short_description,
    developer,
    game_url,
    genre,
    platform,
    publisher,
    release_date,
    thumbnail,
    title,
    status,
  } = game;

  //clicking set the game to that game, also redirects but with navlink
  const handleClick = () => {
    setCurrentGame(game);
    // console.log(currentGame.id);
  };
  return (
    <Card sx={{ maxWidth: 345 }} className='effect'>
      <NavLink to='/game' onClick={handleClick}>
        <CardActionArea>
          <CardMedia
            component='img'
            height='140'
            image={thumbnail}
            alt={title}
            className=''
          />
          <CardContent>
            <Typography gutterBottom variant='h4' component='div'>
              {title}
            </Typography>
            <Typography variant='h5' color='text.secondary'>
              {short_description.slice(0, 45)}...
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Typography variant='h4' color='text.secondary'>
              {platform.slice(0, 2) === 'PC' ? (
                <AiFillWindows />
              ) : (
                <GoBrowser />
              )}
            </Typography>

            <div className='genre-tag'>{genre}</div>
          </CardActions>
        </CardActionArea>
      </NavLink>
    </Card>
  );
}

export default GameCard;
