import * as React from "react";
import Avatar from "../avatar/Avatar";
import styles from './User.module.scss';

export default function User({
     name = '',
     info='',
     avatar ='',
     size = 55,
     verified = false
}) {
    return (
        <div className={styles.user}>
            <title className={styles.name}>{name}</title>
            <hr/>
            <p className={styles.info}>{info}</p>
            <hr/>
            <Avatar avatar={avatar} size={size} verified={verified} />
        </div>
    )
}
