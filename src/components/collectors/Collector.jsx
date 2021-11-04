import User from "../user/User";
import React from "react";
import styles from './CollectorColumn.module.scss';

export default function Collector ({ item, type }) {
    let className = type ? styles.light : '';

    return (
        <div className={className}>
            <span>id: {item.id} | </span>
            <span>NFTs count: {item.nftsCount}</span>
            <hr/>

            <User
                avatar={item.avatar}
                name={item.name}
                verified={item.verified}
            />
        </div>
    );
}