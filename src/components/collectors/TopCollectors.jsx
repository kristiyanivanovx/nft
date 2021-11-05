import React from "react";
import {Container, FormControl, MenuItem, Select} from "@mui/material";
import Box from "@mui/material/Box";

// info: it seems like tests don't work with either
// locally, it works with each one of the three ways to import
// import { chunk } from 'lodash';
// import chunk  from 'lodash.chunk';
import _ from 'lodash';
import CollectorColumn from "./CollectorColumn";

export default function TopCollectors({ collectors }) {
    const withIds = [];
    collectors.map((c, idx) => withIds.push({ ...c, id: idx }));
    const split = _.chunk(withIds, 3);

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
                    >
                        <MenuItem value={'week'}>This week</MenuItem>
                        <MenuItem value={'month'}>This month</MenuItem>
                        <MenuItem value={'year'}>This year</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            {
                split.map((group) => <CollectorColumn items={group} />)
            }
        </Container>
    );
}

