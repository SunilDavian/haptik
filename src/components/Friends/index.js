import React from 'react';
import Friend from './Friend';

function FriendList({ friends, ...rest }) {

    const friendsView = friends.map((friend, id) => <Friend key={id} data={friend} {...rest} />)

    return (
        <div>
            {friendsView}
        </div>
    )

}

export default FriendList;