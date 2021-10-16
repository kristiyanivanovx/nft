import Grid from "@mui/material/Grid";
import Logo from "../logo/Logo";
import SearchIcon from "@mui/icons-material";
import * as React from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import Link from "../link/Link";
import {IconButton, InputAdornment, TextField} from "@mui/material";
import styles from './Header.module.scss';

// const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

export default function Header({  }) {
    return (
        <Box sx={{ flexGrow: 1 }} className={styles.search__bar}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={2} sm={4} md={4} >
                   <Item>
                       <Logo />
                       {/*<Logo type={'muted'}/>*/}
                   </Item>
                </Grid>
                <Grid item xs={2} sm={4} md={4} >
                    <Item>
                        <TextField
                            // label="With normal TextField"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position={'absolute'}>
                                        <IconButton>
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                        {/*<TextField  id="outlined-basic"  variant="outlined" />*/}
                    </Item>
                </Grid>
                <Grid item xs={2} sm={4} md={4} >
                    <Item>
                        <Button variant="string" component={Link} noLinkStyle href="/">
                            Home
                        </Button>
                        <Button variant="string" component={Link} noLinkStyle href="/">
                            Activity
                        </Button>
                        <Button variant="contained" component={Link} noLinkStyle href="/">
                            EXPLORE
                        </Button>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}