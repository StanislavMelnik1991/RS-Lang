import React from 'react';
import ReactPaginate from 'react-paginate';
import s from '../../styles/Pagination.module.css';

type PaginationProps = {
  onPageChange: (page: string) => void
};

const Pagination = ({ onPageChange }: PaginationProps) => {
  const handlePageClick = (page: string) => {
    onPageChange(page);
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={(selectedItem) => handlePageClick(`${selectedItem.selected}`)}
        pageCount={30}
        previousLabel="<"
        className={s.pagination}
        activeClassName={s.paginationLinkActive}
        pageLinkClassName={s.paginationLink}
        breakLinkClassName={s.paginationLink}
        nextLinkClassName={s.paginationLink}
        previousLinkClassName={s.paginationLink}
      />
    </>
  );
};

export default Pagination;
