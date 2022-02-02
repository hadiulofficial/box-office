import React, { useReducer, useEffect } from 'react';
import loadingImg from '../assets/images/loading.gif'
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';

const reducer = (prevState, action) => {
    switch(action.type){
        case 'FETCH_SUCCESS': {
            return {
                showDetails: action.showDetails,
                isLoading: false,
                error: null
            }
        }

        case 'FETCH_FAILED': {
            return {
                ...prevState,
                isLoading: false,
                error: action.error
            }
        }

        default:
            return prevState;
    }
}

const initialState = {
    showDetails: null,
    isLoading: true,
    error: null
}

const ShowDetails = () => {
    const { id } = useParams()

    const [{showDetails, isLoading, error}, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        let isMouted = true;

        apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
            .then(data => {
                if (isMouted) {
                    dispatch({
                        type: 'FETCH_SUCCESS',
                        showDetails: data
                    })
                }
            })
            .catch(err => {
                dispatch({
                    type: 'FETCH_FAILED',
                    error: err.message
                })
            })

        return (() => {
            isMouted = false;
        })

    }, [id]);

    console.log('data: ',showDetails)

    if (isLoading) {
        return (
            <div className="loading">
                <img src={loadingImg} alt="loading.." />
            </div>
        )
    }

    if (error) {
        return <div>{error}</div>
    }

    return (
        <div>
            <h1>Details</h1>

        </div>
    );
};

export default ShowDetails;