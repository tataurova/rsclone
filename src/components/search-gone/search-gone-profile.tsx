import * as React from 'react';
import { ChangeEvent, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Box, Container } from '@material-ui/core';
import CardProfile from '../card-profile/card-profile';
import Header from '../header/header';
import Footer from '../footer/footer';
import { data } from '../../mock';
import SearchCard from '../search-cadr-element/search-card';
import FilterCard from '../filter-card-element/filter-card';

type ArrayCardType = Array<CardType>;
export type CardType = {
    id: number;
    image: string;
    name: string;
    city: string;
    birth: string;
    age: string;
    missing: string;
    sign: string;
    close: string;
    with: string;
}
const dataCard: ArrayCardType = data;

interface Props {
    page: string;
}

const SearchingProfile: React.FunctionComponent<Props> = ({ page }: Props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const ageFilterValue = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearchTerm(e.target.value.trim());
  };
  const cityFilterValue = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearchTerm(e.currentTarget.value.trim());
  };
  const nameFilterValue = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearchTerm(e.currentTarget.value.trim());
  };
  const mappedCardProfile = dataCard
    .filter((valAge) => {
      if (searchTerm === '') {
        return valAge;
      } if (valAge.age.includes(searchTerm)
                || valAge.city.toLowerCase().includes(searchTerm.toLowerCase())
                || valAge.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return valAge;
      }
    })
    .map((t) => <CardProfile
            key={t.id}
            id={t.id}
            image={t.image}
            name={t.name}
            city={t.city}
            birth={t.birth}
            age={t.age}
            missing={t.missing}
            sign={t.sign}
            close={t.close}
            with={t.with}
        />);

  return (
        <>
            <Header page={page}/>
            <Box>
                <Container>
                    <Box
                        display='flex'
                        justifyContent='space-between'
                        mt={10}
                        mb={2}
                    >
                        <SearchCard
                            searchName={nameFilterValue}
                            searchAge={ageFilterValue}
                            searchCity={cityFilterValue}

                        />
                        <FilterCard
                            filterAge={ageFilterValue}
                            filterCity={cityFilterValue}/>
                    </Box>

                    <Grid container justify={'space-between'} spacing={8}>
                        {mappedCardProfile}
                    </Grid>
                </Container></Box>
            <Footer/>
        </>
  );
};
export default SearchingProfile;
