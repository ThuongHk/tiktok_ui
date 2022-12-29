import React, { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
// import 'tippy.js/dist/tippy.css'; 
import Button from '../button/Button';
import './Header.scss'
import Wrapper from '../Poper/Wrapper';

const Header = () => {

    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => { setSearchResult([1]); }, 0)
    }, [])

    return (
        <div className="wrapHeader">
            <div className="inner">
                <img src='/images/tiktok.png' />
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={attrs => (
                        <div className="box" tabIndex="-1" {...attrs}>
                            <Wrapper>
                                Accacer
                            </Wrapper>
                        </div>
                    )}
                >
                    <div className="search">
                        <input type="text" placeholder='find access video...' />
                        <button class='btn1'><i class="fas fa-times-circle"></i></button>
                        <Tippy content='Tìm kiếm' placement='right'><button class='btn2'><i class="far fa-search"></i></button></Tippy>
                    </div>
                </Tippy>
                <div className='action'>
                    <Button outline>Upload</Button>
                    <Button>Log  in</Button>
                </div>
            </div>

        </div>
    );
};

export default Header;