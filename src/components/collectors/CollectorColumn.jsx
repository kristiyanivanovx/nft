import React from "react";
import Collector from './Collector';

export default function CollectorColumn ({ items = [] }) {
    return (
        <div className={'container'}>
            {
                items.map((item, index) => (
                    <Collector item={item} type={(index) % 2 === 0} />
                ))
            }
        </div>
    );
}