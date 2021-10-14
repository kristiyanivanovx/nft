import React from 'react';
import {default as MuiCard} from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Chip} from "@mui/material";

// const ExpandMore = styled((props) => {
//     const { expand, ...other } = props;
//     return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//     transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//         duration: theme.transitions.duration.shortest,
//     }),
// }));

export default function Card({ name, likes, mediaUrl, user, price, currency }) {

    return (
       <>
           <MuiCard sx={{ maxWidth: 345 }} className={'card'}>
               <CardHeader
                   avatar={user}
                   action={
                       <IconButton aria-label="settings">
                           <MoreVertIcon />
                       </IconButton>
                   }
               />
               <CardMedia
                   className={'media'}
                   component="img"
                   height="194"
                   image={mediaUrl}
                   alt="nft"
               />
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
                    <span aria-label="title" className={'title'}>
                        {name}{' '}
                    </span>
                       <span className={'price'}>
                       {price}{' '}{currency}
                    </span>
                   </div>
                   <div>
                       <Chip label={likes} likeIcon={<FavoriteIcon />} className={'likes'} variant="outlined" clickable />
                   </div>
               </CardActions>
           </MuiCard>
       </>
    );
}