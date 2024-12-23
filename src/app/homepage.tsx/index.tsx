import React from 'react';
import Banner from './Banner';
import Awards from './Awards';
import Services from './Services';
import Credits from './Credits';

const HomePage = () => {
    return (
        <div>
            <Banner />
            <Awards />
            <Services />
            <Credits />
        </div>
    );
};

export default HomePage;