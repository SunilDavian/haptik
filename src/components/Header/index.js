import React, { useState } from 'react';
import { getSearchSvg, SortingIcon } from '../icons';

function Header({ handleSearch, handleSorting }) {
    const [search, setSearch] = useState('');

    return (
        <div className='header-container'>

            <div className='friend-list'>
                Friends List
                </div>

            <div className='filter-container'>

                <div className="wrapper">
                    <img className='search-icon' alt={getSearchSvg()} src={getSearchSvg()} />
                    <input className="search" value={search} onChange={(e) => {
                        setSearch(e.target.value);
                        handleSearch(e.target.value);
                    }} placeholder="Search" type="text" />
                </div>


                <div style={{ margin: '0px 10px 0px 10px' }}>

                    <button onClick={handleSorting}>
                        <SortingIcon />
                        Favorites
                        </button>
                </div>
            </div>

        </div>
    )

}

export default Header;