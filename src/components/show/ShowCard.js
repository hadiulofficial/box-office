import React from 'react';
import { Link } from 'react-router-dom';

const ShowCard = ({ image, name, summary , id }) => {
    const summaryAsText = summary
        ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')}...`
        : 'No description';

    return (
        <div>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>{summaryAsText}</p>
            <div>
                <Link to={`/show/${id}`}>Read More</Link>
                <button>Star this</button>
            </div>
        </div>
    );
};

export default ShowCard;