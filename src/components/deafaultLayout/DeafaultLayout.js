import React from 'react';
import Header from './Header';
import Sibar from './Sibar';
import './DeafaultLayout.scss'

const DeafaultLayout = ({ children }) => {
    return (
        <div className='wrapDeafauLayout'>
            <Header />
            <div className='container'>
                <Sibar />
                <div className='content'>{children}</div>
            </div>
        </div>
    );
};

export default DeafaultLayout;
