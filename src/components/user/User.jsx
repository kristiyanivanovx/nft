import * as React from "react";
import Avatar from "../avatar/Avatar";
import styles from './User.module.scss';

export default function User({
    verified = false,
    size = 55,
    avatar = '',
    info= '',
    name = '',
}) {
    return (
        <div className={styles.user}>
            <div className={styles.name}>{name}</div>
            <div className={styles.info}>{info}</div>
            <Avatar url={avatar} size={size} verified={verified} />
        </div>
    )
}
