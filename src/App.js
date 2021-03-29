import React, { useEffect, useState } from 'react';
import Friends from './components/Friends';
import Header from './components/Header';
import Pagination from './components/Pagination';
import { paginate } from './components/Pagination/Paginate';
import Data from './mock/data.json';
import './App.css';

function App() {

  const [friendsData, setFriends] = useState([...Data].reverse());

  const [filteredList, setFilteredList] = useState(friendsData);

  const [currentPage, setCurrentPage] = useState(1);

  const [name, setName] = useState('');

  const [isSorting, setSorting] = useState(false);

  const pageSize = 4;

  useEffect(() => {
    if (isSorting) {
      const newList = [...friendsData]
      newList.sort((a, b) => (+b.isFavorite) - (+a.isFavorite) || a.name.localeCompare(b.name));

      setFilteredList(newList);
    } else {

      setFilteredList(friendsData);
    }

  }, [friendsData, isSorting])


  const handlePageChange = page => {
    setCurrentPage(page);
  }

  const handleSearch = (value) => {
    if (!value) {
      setFilteredList(friendsData);
    }

    const newFriendList = friendsData.filter(friend => friend.name.toLowerCase().includes(value));

    setFilteredList(newFriendList);
  }

  const handleUpdate = (updateFriend) => {

    const newFriendList = friendsData.map(friend => {
      if (updateFriend.id === friend.id) {
        return updateFriend;
      }

      return friend;
    })

    setFriends(newFriendList);
  }

  const handleDelete = (deletedFriend) => {
    const newFriendList = friendsData.filter(friend => friend.id !== deletedFriend.id);

    if (newFriendList.length < currentPage * pageSize) {
      setCurrentPage(currentPage - 1);
    }

    setFriends(newFriendList);
  }

  const handleSorting = () => {
    setSorting(!isSorting);
  }

  const getPageData = () => {

    const paginationData = paginate(filteredList, currentPage, pageSize);

    return { totalCount: filteredList.length, data: paginationData }
  }

  const { totalCount, data } = getPageData();

  console.log('data>.----', data, totalCount);

  return (
    <div>
      <Header handleSearch={handleSearch} handleSorting={handleSorting} />

      <form onSubmit={(e) => {
        e.preventDefault();
        if (!name) {
          return;
        }

        setFriends([
          {
            id: Date.now(),
            name,
            isFavorite: false
          },
          ...friendsData,
        ])

        setName('');
      }}>
        <input className='addFriend' type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your friend name' />
      </form>

      <Friends friends={data} handleUpdate={handleUpdate} handleDelete={handleDelete} />

      <Pagination
        itemsCount={totalCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />

      {totalCount > pageSize ? <div style={{ textAlign: 'center', color: '#696767cc' }}>
        page {currentPage} of {Math.ceil(totalCount / pageSize)}
      </div> : null}
    </div>
  );
}

export default App;

