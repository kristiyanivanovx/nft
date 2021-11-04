import User from "../user/User";
import React from "react";

export default function Collector ({ item, isLight }) {
    return (
        <div style={
            isLight ? {backgroundColor: 'rgba(170,232,215,0.6)'} : {}
        }>
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