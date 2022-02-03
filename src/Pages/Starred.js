import React, { useState, useEffect } from 'react';
import loadingImg from '../assets/images/loading.gif'
import HomePageLayout from '../layouts/HomePageLayout';
import { useShows } from '../misc/customHook';
import { apiGet } from '../misc/config'
import ShowList from '../components/show/ShowList';


const Starred = () => {
    const [starred] = useShows();

    const [shows, setShows] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (starred && starred.length > 0) {
            const promises = starred.map(showId => apiGet(`/shows/${showId}`));

            Promise.all(promises)
                .then(apiData => apiData.map(show => ({ show })))
                .then(results => {
                    setShows(results);
                    setIsLoading(false);
                })
                .catch(err => {
                    setError(err.message);
                    setIsLoading(false);
                });
        } else {
            setIsLoading(false);
        }
    }, [starred]);

    return (
        <HomePageLayout>
            {
                isLoading &&
                <div className="loading">
                    <img src={loadingImg} alt="loading.." />
                </div>
            }
            {error && <div>Error occured: {error}</div>}
            {!isLoading && !shows && <div>No shows were added</div>}
            {!isLoading && !error && shows && <ShowList data={shows} />}
        </HomePageLayout>
    );
};

export default Starred;