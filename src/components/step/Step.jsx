import React from 'react';
import PropTypes from 'prop-types';
import styles from '../how/Step.module.scss';

const Step = ({ number, title, description }) => {
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
};

export default Step;