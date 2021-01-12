import * as React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

const bg = require('../../../public/assets/img/bg.jpg');

const CardPage = () => (
        <>
            <Header />
            <img src={ bg.default } alt={'test'}/>
            <h2>GonePage</h2>
            <Footer />
        </>
);

export default CardPage;
