import * as React from "react";
import Avatar from "../avatar/Avatar";
import Select, {IconButton, InputAdornment, TextField} from '@mui/material';
import Card from '../../components/card/Card';
import styles from "../header/Header.module.scss";
import Grid from "@mui/material/Grid";
import Logo from "../logo/Logo";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Link from "../link/Link";
import Box from "@mui/material/Box";

export default function Trending({ cards = []}) {
    let user = {
        verified : true,
        avatarUrl: '/images/logo.svg'
    }

    return (
        <Box sx={{ flexGrow: 1 }} className={styles.search__bar}>
            <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={3} sm={3} md={3} >
                    <Card name={'da'} likes={1343} mediaUrl={'/images/nft.jpg'} user={user} price={'15.7'} currency={'BTC'}/>
                </Grid>
                <Grid item xs={3} sm={3} md={3} >
                    <Card name={'da'} likes={1344} mediaUrl={'/images/nft.jpg'} user={user} price={'32.7'} currency={'BTC'}/>
                </Grid>
                <Grid item xs={3} sm={3} md={3} >
                    <Card name={'da'} likes={1334} mediaUrl={'/images/nft.jpg'} user={user} price={'31.6'} currency={'BTC'}/>
                </Grid>
                <Grid item xs={3} sm={3} md={3} >
                    <Card name={'da'} likes={134} mediaUrl={'/images/nft.jpg'} user={user} price={'35.6'} currency={'BTC'}/>
                </Grid>
            </Grid>
        </Box>
    )
}
