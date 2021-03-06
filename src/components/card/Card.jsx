import React from 'react';
import {default as MuiCard} from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Chip} from "@mui/material";
import Avatar from "../avatar/Avatar";
import styles from './Card.module.scss';
import millify from "millify";
import Countdown from 'react-countdown';

const renderer = ({ hours, minutes, seconds, completed }) => <span>{hours}:{minutes}:{seconds}</span>

export default function Card({ name, likes = 0, mediaUrl, user, price, currency, timeLeft }) {
    const { verified, avatarUrl} = user;
    const avatar = <Avatar verified={verified} url={avatarUrl} />

    const millifiedLikes = millify(likes, {
        units: ["", "k", "M", "B"],
        // precision: 2
    });

    return (
       <div>
           <MuiCard sx={{ maxWidth: 345 }} className={styles.card}>
               <CardHeader
                   avatar={avatar}
                   action={
                       <IconButton aria-label="settings">
                           <MoreVertIcon />
                       </IconButton>
                   }
               />
               <CardMedia
                   className={styles.media}
                   component="img"
                   height="194"
                   image={mediaUrl}
                   alt="nft"
               />
               {
                   (timeLeft) ? (
                       <div>
                           <img className={styles.badge} src="" alt=""/>
                           <Countdown
                               date={Date.now() + timeLeft}
                               renderer={renderer}
                           />
                       </div>
                   ) : null
               }
               <CardContent>
                   <Typography variant="body2" color="text.secondary">
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                       Ad aut deleniti et id impedit,
                       necessitatibus nobis porro quia quidem reiciendis sint suscipit
                       temporibus ullam veniam vitae! Accusamus numquam praesentium voluptate?
                   </Typography>
               </CardContent>
               <CardActions disableSpacing>
                   <div>
                       <span className={styles.title}>
                            {name}
                       </span>
                       {' '}
                       <span className={styles.price}>
                            ~{price}{' '}{currency}
                       </span>
                   </div>
                   <div>
                       <Chip
                           label={millifiedLikes}
                           // likeIcon={<FavoriteIcon />}
                           className={'likes'}
                           variant="outlined" clickable />
                   </div>
               </CardActions>
           </MuiCard>
       </div>
    );
}