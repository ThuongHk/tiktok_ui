import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

const Button = ({ outline, href, children, primary }) => {
    let Comp = 'button';
    let props = {}
    if (href) {
        props.href = href;
        Comp = 'a'
    }
    const classes = clsx('btn', { outline, primary })

    return (
        <Comp className={classes}  {...props}>
            {children}
        </Comp>
    );
};

export default Button;