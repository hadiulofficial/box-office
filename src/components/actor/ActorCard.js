import React from 'react';
import { Link } from 'react-router-dom';

const ActorCard = ({ image, name, gender, country, birthday, deathday }) => {

    return (
        <div>
            <img src={image} alt={name} />
            <h1>
                {name} {gender ? `(${gender})` : null}
            </h1>
            <p>{country ? `Comes from ${country}` : 'country not found'}</p>
            {birthday ? <p>Born {birthday}</p> : null}
            <p className="deathday">{deathday ? `Died ${deathday}` : 'Alive'}</p>
        </div>
    );
};

export default ActorCard;