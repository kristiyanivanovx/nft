import React from 'react';
import Step from "../step/Step";
import Grid from "@mui/material/Grid";
import styles from "../header/Header.module.scss";
import Box from "@mui/material/Box";

const How = ({ title, description, items = [], link }) => {
    return (
        <Box sx={{ flexGrow: 1 }} className={styles.search__bar}>
            <h1>
                {title}
            </h1>
            <p>
                {description}
            </p>
            <div>
                <a className={'button'} href={link}>Learn more</a>
            </div>
                <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        items.map((item, idx) => (
                            <Grid item xs={3} sm={3} md={3} >
                                <Step {...item} number={idx} />
                            </Grid>
                        ))
                    }
                </Grid>
        </Box>
    );
};

export default How;