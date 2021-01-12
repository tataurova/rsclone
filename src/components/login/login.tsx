import * as React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

const bg = require('../../../public/assets/img/bg.jpg');

const LoginPage = () => (
    <>
        <Header />
        <img src={ bg.default } alt={'test'}/>
        <h2>LoginPage</h2>
        <Footer />
    </>
);

export default LoginPage;
