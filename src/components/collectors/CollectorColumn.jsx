import React from "react";
import Collector from './Collector';

export default function CollectorColumn ({ items = [] }) {
    return (
        <div className={'container'}>
            {
                items.map((item, idx) => {
                    return <Collector key={idx} item={item} type={(idx) % 2 === 0 ? 'light' : 'dark'} />
                })
            }
        </div>
    );
}