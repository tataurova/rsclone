import * as React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

const bg = require('../../../public/assets/img/bg.jpg');

interface Props {
    page: string;
}

const NotFound: React.FunctionComponent<Props> = ({ page }: Props) => (
        <>
            <Header page={page}/>
            <img src={ bg.default } alt={'test'}/>
            <h2>Not Found 404</h2>
            <Footer />
        </>
);

export default NotFound;
