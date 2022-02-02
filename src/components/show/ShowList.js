import React from 'react';
import ShowCard from './ShowCard';
import imgNotFound from '../../assets/images/notFound.png'
import { FlexGrid } from '../../styles/styled';

const ShowList = ({ data }) => {
    return (
        <FlexGrid>
            {
                data.map(({show}) => <ShowCard
                    key={show.id}
                    id={show.id}
                    name={show.name}
                    image={show.image ? show.image.medium : imgNotFound }
                    summary={show.summary}
                />)
            }
        </FlexGrid>
    );
};

export default ShowList;