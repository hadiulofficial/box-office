import React from 'react';
import { Link } from 'react-router-dom';
import { ShowCardStyled }  from '../../styles/ShowCardStyled';

const ShowCard = ({ image, name, summary, id }) => {
    const summaryAsText = summary
        ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')}...`
        : 'No description';

    return (
        <ShowCardStyled>
            <div className="img-wrapper">
                <img src={image} alt={name} />
            </div>
            <h2>{name}</h2>
            <p>{summaryAsText}</p>
            <div className="btns">
                <Link to={`/show/${id}`}>Read More</Link>
                <button>Star this</button>
            </div>
        </ShowCardStyled>
    );
};

export default ShowCard;