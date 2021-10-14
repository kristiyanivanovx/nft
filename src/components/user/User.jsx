import * as React from "react";
import Avatar from "../avatar/Avatar";
import styles from './User.module.scss';

export default function User({
    // size = 55,
    // name = '',
    // info= '',
    // avatar = '',
    // verified = false,
     size,
     name,
     info,
     avatar,
     verified ,
}) {
    return (
        <div className={styles.user}>
            <div className={styles.name}>{name}</div>
            <div className={styles.info}>{info}</div>
            <Avatar url={avatar} size={size} verified={verified} />
        </div>
    )
}

User.defaultProps = {
    size: 55,
    name: '',
    info: '',
    avatar: '',
    verified: false,
}
