import React, { useState } from 'react';
import HomePageLayout from '../layouts/HomePageLayout';
import { apiGet } from '../misc/config.js'

const Home = () => {
    const [input, setInput] = useState('')
    const [results, setResult] = useState(null)
    const [searchOption, setSearchOption] = useState("shows")

    const isShowsSearch = searchOption === 'shows';

    const onInputChange = (e) => {
        setInput(e.target.value);
    }

    const onSearch = () => {
        apiGet(`/search/${searchOption}?q=${input}`)
            .then(data => {
                setResult(data)
            })
    }

    const onKeyDown = e => {
        if (e.keyCode === 13) {
            onSearch()
        }
    }

    const onRadioChange = e => {
        setSearchOption(e.target.value)
    }



    const renderResults = () => {
        if (results && results.length === 0) {
            return <div>No Resul Found!</div>
        } else if (results && results.length > 0) {
            return results[0].show
                ? results.map((item) => <div key={item.show.id}>{item.show.name}</div>)
                : results.map((item) => <div key={item.person.id}>{item.person.name}</div>)
        } else {
            return null;
        }
    }

    return (
        <HomePageLayout>

            <input
                type="text"
                onChange={onInputChange}
                value={input}
                onKeyDown={onKeyDown}
                placeholder="Search what do you want!"
            />

            <lebel htmlFor="shows-search">
                Shows
                <input
                    type="radio"
                    id="shows-search"
                    value="shows"
                    onChange={onRadioChange}
                    checked={isShowsSearch}
                />
            </lebel>

            <lebel htmlFor="actors-search">
                Actors
                <input
                    type="radio"
                    value="people"
                    id="actors-search"
                    onChange={onRadioChange}
                    checked={!isShowsSearch}
                />
            </lebel>

            <button
                type="button"
                onClick={onSearch}
            >Search</button>
            {renderResults()}

        </HomePageLayout>
    );
};

export default Home;