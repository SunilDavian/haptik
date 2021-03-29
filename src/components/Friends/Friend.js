import React, { useState } from 'react';
import { DeleteIcon, FavoriteIcon, UnFavoriteIcon } from '../icons'
import Modal from '../modal';

function Friend({ data, handleDelete, handleUpdate }) {
    const [isOpen, setModalView] = useState(false);

    return (
        <div className='friend-container'>
            <Modal isOpen={isOpen} onSuccess={() => {
                setModalView(false);
                handleDelete(data)
            }} onClose={() => setModalView(false)}>

                <div className='modal-content'>
                    Do you really want to delete your friend {data.name}?
</div>

            </Modal>

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

                <div onClick={(e) => setModalView(true)} className='icon-border'>
                    <DeleteIcon width='25px' fill='#696767cc' />
                </div>
            </div>

        </div>
    )

}

export default Friend;