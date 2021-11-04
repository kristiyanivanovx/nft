import React from "react";
import Collector from './Collector';

export default function CollectorsColumn ({ items = [] }) {
    return (
        <div className={'container'}>
            {
                items.map((item, index) => (
                    <Collector item={item} isLight={(index) % 2 === 0} />
                ))
            }
        </div>
    );
}