import React from 'react';
import './pagination.css';

const Pagination = (props) => {

    const { itemsCount, pageSize, currentPage, onPageChange } = props;
    const pageCount = Math.ceil(itemsCount / pageSize);
    if (pageCount === 1) return null;

    function range(start, end) {
        return Array(end - start + 1).fill().map((_, idx) => start + idx)
    }

    const pages = range(1, pageCount);


    return (
        <div className="pagination">
            {pages.map(page => (
                <div key={page}
                    onClick={() => onPageChange(page)}
                    className={page === currentPage ? 'active' : 'page-item'}>
                    {page}
                </div>
            ))}
        </div>
    )
}

export default Pagination;