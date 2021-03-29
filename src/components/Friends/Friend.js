import React from 'react';
import { DeleteIcon, FavoriteIcon, UnFavoriteIcon } from '../icons'

function Friend({ data, handleDelete, handleUpdate }) {

    return (
        <div className='friend-container'>

            <div className='friend-name'>
                <span style={{ fontWeight: 'bold' }}>{data.name}</span>
                <span style={{ color: '#696767cc' }}>is your friend</span>
            </div>

            <div className='action-container'>
                <div onClick={(e) => handleUpdate({
                    ...data,
                    isFavorite: !data.isFavorite
                })} className='icon-border' >
                    {data.isFavorite ? <FavoriteIcon width='25px' fill='#696767cc' /> : <UnFavoriteIcon width='25px' fill='#696767cc' />}
                </div>

                <div onClick={(e) => handleDelete(data)} className='icon-border'>
                    <DeleteIcon width='25px' fill='#696767cc' />
                </div>
            </div>

        </div>
    )

}

export default Friend;