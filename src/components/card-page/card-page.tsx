import * as React from 'react';
import { connect } from 'react-redux';
import { Operation as DataOperation } from '../../reducer/data/data';
import NameSpace from '../../reducer/name-space';
import Header from '../header/header';
import Footer from '../footer/footer';

const bg = require('../../../public/assets/img/bg.jpg');

interface Props {
    page: string;
}

const CardPage: React.FunctionComponent<Props> = function CardPage({ page }: Props) {
  return (
        <>
            <Header page={page}/>
            <img src={ bg.default } alt={'test'}/>
            <h2>GonePage</h2>
            <Footer />
        </>
  );
};

export const mapStateToProps = (state) => ({
  authorizationStatus: state[NameSpace.AUTH].authorizationStatus,
});

export const mapDispatchToProps = (dispatch) => ({
  loadGonePeople() {
    dispatch(DataOperation.loadGonePeople());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CardPage);
