import React from "react";
import Collector from './Collector';
import Box from "@mui/material/Box";

// export default function CollectorColumn ({ children = [] }) {
export default function CollectorColumn ({ items = [] }) {
    return (
        <div className={'container'}>
            {
                items
                // items.map((item, index) => (
                //     <Collector item={item} type={(index) % 2 === 0 ? 'light' : 'null'} />
                // ))
            }
        </div>
    );
}