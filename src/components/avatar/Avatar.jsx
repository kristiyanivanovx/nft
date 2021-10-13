import * as React from "react";
import styles from './Avatar.module.scss';

export default function Avatar({url, size = 90, verified = false }) {
    return (
        <div className={'avatar'} width={size} height={size}>
            <img  width={size} src={url} />
            { verified ? (
                <div className={'badge'}>
                    <img className={'image'} src={'/images/verified.svg'} />
                </div> ) : null
            }
        </div>
    )
}
