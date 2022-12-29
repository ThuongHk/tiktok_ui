import React from 'react';
import clsx from 'clsx';
import styles from './Wrapper.module.scss';

const Wrapper = () => {
    return (
        <div className={clsx(styles.wrapper)}>
            <p>Tìm kiếm</p>
        </div>
    );
};

export default Wrapper;