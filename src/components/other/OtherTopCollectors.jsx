import React from "react";
import Collector from "../collectors/Collector";
import Grid from "@mui/material/Grid";
import {Container, FormControl, MenuItem, Select} from "@mui/material";
import Box from "@mui/material/Box";

// tests don't work with either
// locally, it works with each one of the three ways to import
// import { chunk } from 'lodash';
// import chunk  from 'lodash.chunk';
import _ from 'lodash';
import CollectorColumn from "../collectors/CollectorColumn";

export default function TopCollectRs({ collectors  }) {
    const withIds = [];
    collectors.map((c, idx) => withIds.push({ ...c, id: idx }));
    const split = _.chunk(withIds, 3);

    // let final = [];
    // split.map((items, idx) => (
    //     <Grid item xs={2} sm={4} md={4} key={idx}>
    //         <CollectorColumn items={items}/>
    //     </Grid>
    // ))

    // split.map((items, idx) => {
    //     final.push(
    //         <Grid item xs={2} sm={4} md={4} key={idx}>
    //             <CollectorColumn items={items}/>
    //         </Grid>
    //     )
    // })

    // split.forEach((group, idx) => (
    //     final.push(
    //         <Grid item xs={2} sm={4} md={4} key={idx}>
    //             <CollectorColumn items={group}/>
    //         </Grid>
    //     )
    // ))

    // items.map((group, idx) => (
    //     Array.isArray(group) ? group.map((item, index) => (
    //         <Collector key={index} item={item} type={(index + idx) % 2 === 0 ? 'light' : 'dark'} />
    //     )) : <Collector key={idx} item={group} type={(idx) % 2 === 0 ? 'light' : 'dark'} />
    // ))

    return (
        <Container maxWidth="xl">
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>
                <div>
                    <h3>Top Collectors</h3>
                    <hr/>
                </div>

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

            {/*<Grid container spacing={{ xs: 3, md: 2 }} columns={{ xs: 4, sm: 12, md: 12 }}>*/}
            <CollectorColumn items={split} />
            {/*</Grid>*/}
        </Container>
    );
}

