import * as React from "react";
import styles from './Avatar.module.scss';

export default function Avatar({url, verified = false }) {
    return (
        <div className={'avatar'} width={123} height={123}>
            <img src={url} />
            <div className={'badge'}></div>
        </div>
    )
}
