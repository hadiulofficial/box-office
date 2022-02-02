import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>404 Not Found</h1>
            <button><Link to="/">Go Home</Link></button>
        </div>
    );
};

export default NotFound;