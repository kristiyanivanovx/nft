import React, {useState} from "react";
import _ from 'lodash';
import Collector from "./Collector";
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import Paper from "@mui/material/Paper";
import {Container, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import Box from "@mui/material/Box";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    display: 'flex',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function TopCollectors ({ collectors }) {
    const [filter, setFilter] = useState('');

    let withIds = [];
    collectors.map((c, idx) => withIds.push({...c, id: idx}));
    let split = _.chunk(withIds, 3);

    const handleChange = (event) => {
        setFilter(event.target.value);
    };

    return (
        <Container maxWidth="xl">
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>
                <h3>Top Collectors</h3>

                <FormControl size={'medium'} margin={'dense'}>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="time"
                        value={filter || 'week'}
                        onChange={handleChange}
                    >
                        <MenuItem value={'week'}>This week</MenuItem>
                        <MenuItem value={'month'}>This month</MenuItem>
                        <MenuItem value={'year'}>This year</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    split.map((group) => (
                        group.map((collector, index)=> (
                            <Grid item xs={2} sm={4} md={4} key={index}>
                                <Collector item={collector} />
                            </Grid>
                        ))
                    ))
                }
            </Grid>
        </Container>
    );
}