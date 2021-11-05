import React from "react";
import Collector from "./Collector";
import Grid from "@mui/material/Grid";
import {Container, FormControl, MenuItem, Select} from "@mui/material";
import Box from "@mui/material/Box";

// tests don't work with either the one or the other
// locally, it works with both
// import { chunk } from 'lodash';
import chunk  from 'lodash.chunk';
import CollectorColumn from "./CollectorColumn";

export default function TopCollectors({ collectors }) {
    const withIds = [];
    collectors.map((c, idx) => withIds.push({ ...c, id: idx }));
    const split = chunk(withIds, 3);

    let childs = [];
    split.map((group) => (
        group.map((collector, index) => (
            childs.push(<Grid item xs={2} sm={4} md={4} key={index}>
                <Collector item={collector} />
            </Grid>)
        ))
    ))

    return (
        <Container maxWidth="xl">
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>
                <h3>Top Collectors</h3>

                <FormControl size={'medium'} margin={'dense'}>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="time"
                        // value={filter || 'week'}
                        // onChange={handleChange}
                    >
                        <MenuItem value={'week'}>This week</MenuItem>
                        <MenuItem value={'month'}>This month</MenuItem>
                        <MenuItem value={'year'}>This year</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <CollectorColumn items={childs} />
                        {/*split.map((group) => (*/}
                        {/*    group.map((collector, index)=> (*/}
                        {/*        <Grid item xs={2} sm={4} md={4} key={index}>*/}
                        {/*            <Collector item={collector} />*/}
                        {/*         </Grid>*/}
                        {/*     ))*/}
                        {/* ))*/}
            </Grid>
        </Container>
    );
}