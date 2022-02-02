import React from 'react';
import imgNotFound from '../../assets/images/notFound.png'
import { FlexGrid } from '../../styles/styled';
import ActorCard from './ActorCard';


const ActorList = ({ data }) => {
    return (
        <FlexGrid>
            {
                data.map(({ person }) => <ActorCard
                    key={person.id}
                    name={person.name}
                    country={person.country ? person.country.name : null}
                    birthday={person.birthday}
                    deathday={person.deathday}
                    gender={person.gender}
                    image={person.image ? person.image.medium : imgNotFound}
                />)
            }
        </FlexGrid>
    );
};

export default ActorList;