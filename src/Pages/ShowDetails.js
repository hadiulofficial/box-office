import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';

const ShowDetails = () => {
    const [showDetails, setShowDetails] = useState(null)
    const { id } = useParams()
    
    useEffect(() => {
        apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
        .then(data => {
            setShowDetails(data)
        })
    }, [id]);

    return (
        <div>
            <h1>Details</h1>
            
        </div>
    );
};

export default ShowDetails;