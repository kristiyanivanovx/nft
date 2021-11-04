import React from 'react';
import styles from '../how/Step.module.scss';

export default function Step ({ number, title, description })  {
    return (
        <div className={styles.blurred}>
            <h3>
                {title}
            </h3>
            <p>
                {description}
            </p>
            <span>{number}</span>
        </div>
    );
}

