import React from 'react';
import Nav from '../components/Nav';
import Title from '../components/Title';

const HomePageLayout = ({ children }) => {
    return (
        <div>
            <Title
                title="Box Office"
                subTitle="Find your movie and actor. Then see details."
            />
            <Nav />
            {children}
        </div>
    );
};

export default HomePageLayout;