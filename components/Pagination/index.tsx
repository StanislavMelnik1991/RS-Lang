import React from 'react';
import ReactPaginate from 'react-paginate';
import { useAppSelector } from '../../hooks/redux';
import s from '../../styles/Pagination.module.css';

type PaginationProps = {
  onPageChange: (page: string) => void
  pageCount?: number
};

const Pagination = ({ onPageChange, pageCount }: PaginationProps) => {
  const handlePageClick = (page: string) => {
    onPageChange(page);
  };

  const { page } = useAppSelector((state) => state.textBookReducer);

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={(selectedItem) => handlePageClick(`${selectedItem.selected}`)}
        pageCount={pageCount || 30}
        previousLabel="<"
        className={s.pagination}
        activeClassName={s.paginationLinkActive}
        pageLinkClassName={s.paginationLink}
        breakLinkClassName={s.paginationLink}
        nextLinkClassName={s.paginationLink}
        previousLinkClassName={s.paginationLink}
        forcePage={Number(page)}
      />
    </>
  );
};

export default Pagination;
