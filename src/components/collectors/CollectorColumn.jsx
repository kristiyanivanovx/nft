import React from "react";
import Collector from './Collector';
import Grid from "@mui/material/Grid";

export default function CollectorColumn ({ items = [] }) {
    return (
        <div className={'container'}>
            {
                items.map(group => (
                    group.map((item, index) => (
                        <Collector key={index} item={item} type={(index) % 2 === 0 ? 'light' : 'dark'} />
                    ))
                ))
            }
        </div>
    );
}