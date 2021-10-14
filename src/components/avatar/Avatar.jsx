import * as React from "react";
import styles from './Avatar.module.scss';

export default function Avatar({ verified = false, size = 90,  url, }) {
    return (
        <div className={'avatar'} width={size} height={size}>
            <img className={'image'} width={size} height={size} src={url} />
            { verified ? (<img className={'badge'} src={'/images/verified.svg'} />) : null }
        </div>
    )
}

