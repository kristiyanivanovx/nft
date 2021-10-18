import * as React from "react";
import Logo from "../logo/Logo";
import styles from './Footer.module.scss';
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Footer() {
    return (
        <Grid>
            <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Item>
                    <Logo/>
                </Item>
            </Grid>
            <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Item>
                    da
                </Item>
            </Grid>
            <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Item>
                    ne
                </Item>
            </Grid>
        </Grid>
    )
}
