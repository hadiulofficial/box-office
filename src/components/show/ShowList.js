import React from 'react';
import ShowCard from './ShowCard';
import imgNotFound from '../../assets/images/notFound.png'

const ShowList = ({ data }) => {
    return (
        <div>
            {
                data.map(({show}) => <ShowCard
                    key={show.id}
                    id={show.id}
                    name={show.name}
                    image={show.image ? show.image.medium : imgNotFound }
                    summary={show.summary}
                />)
            }
        </div>
    );
};

export default ShowList;