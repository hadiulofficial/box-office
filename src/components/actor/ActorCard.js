import React from 'react';
import { ActorCardStyled } from '../../styles/ActorCardStyled';

const ActorCard = ({ image, name, gender, country, birthday, deathday }) => {

    return (
        <ActorCardStyled>
            <div className="img-wrapper">
                <img src={image} alt={name} />
            </div>
            <h1>
                {name} {gender ? `(${gender})` : null}
            </h1>
            <p>{country ? `Comes from ${country}` : 'country not found'}</p>
            {birthday ? <p>Born {birthday}</p> : null}
            <p className="deathday">{deathday ? `Died ${deathday}` : 'Alive'}</p>
        </ActorCardStyled>
    );
};

export default ActorCard;