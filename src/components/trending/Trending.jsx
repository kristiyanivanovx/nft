import * as React from "react";
import Card from '../../components/card/Card';
import styles from "../header/Header.module.scss";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function Trending({ cards = []}) {
    return (
        <Box sx={{ flexGrow: 1 }} className={styles.search__bar}>
            <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    cards.map(card => (
                        <Grid item xs={3} sm={3} md={3} >
                            <Card
                                name={card.name}
                                likes={card.likes}
                                mediaUrl={card.mediaUrl}
                                user={card.user}
                                price={card.price}
                                currency={card.currency}
                                timeLeft={card.timeLeft}
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}
