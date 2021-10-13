import Grid from "@mui/material/Grid";
import Logo from "../../src/components/logo/Logo";
import SearchIcon from "@mui/icons-material/Search";
import * as React from "react";
import Item from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function Header({  }) {
    return (
        <Grid container spacing={2}>
            <Grid item xs={6} md={8}>
                {/*<Item>xs=6 md=8</Item>*/}
                <div>1</div>
                <Logo/>
            </Grid>
            <Grid item xs={6} md={4}>
                <SearchIcon/>
                <div>2</div>
            </Grid>
            <Grid item xs={6} md={8}>
                <div>3</div>
            </Grid>
        </Grid>
    );
}