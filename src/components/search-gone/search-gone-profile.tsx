import * as React from 'react';
import CardProfile from '../card-profile/card-profile';
import {ArrayCardType} from "../app/app";
import Grid from "@material-ui/core/Grid";
import {Container} from "@material-ui/core";

type ProfileTypeProps = {
    data: ArrayCardType
}
const SearchingProfile = (props: ProfileTypeProps) => {

    const mappedCardProfile = props.data.map((t) =>
        <CardProfile
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
        />

    )

    return (
        <Container>
        <Grid container justify={"space-between"} spacing={8}>
        {mappedCardProfile}
        </Grid>
        </Container>
    );
}
export default SearchingProfile;
