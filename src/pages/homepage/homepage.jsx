import React,{Fragment} from 'react';
import {Link } from 'react-router-dom';

import './homepage.styles.scss';

const Homepage = () => {
    return (
        <Fragment>
        <div className="page-header header-filter">
            <div className="squares square1"></div>
            <div className="squares square2"></div>
            <div className="squares square3"></div>
            <div className="squares square4"></div>
            <div className="squares square5"></div>
            <div className="squares square6"></div>
            <div className="squares square7"></div>
            <div class="header-text-box">
                <h1 class="heading-primary">
                    <span class="heading-primary--main">Mantra</span>
                    <span class="heading-primary--sub">get out of boredom</span>
                </h1>

                <Link to='/activity' class="custom-button custom-button--white custom-button--animated ">{"Let's   Begin"}</Link>
            </div>
    </div>
        </Fragment>
    )
};

export default Homepage;
