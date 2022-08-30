import React from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

const MyPaginate = styled(ReactPaginate).attrs({
  activeClassName: 'active',
})`
  margin: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
  padding: 0 5rem;
  li a {
    border-radius: 7px;
    padding: 0.1rem 1rem;
    border: gray 1px solid;
    cursor: pointer;
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }
  li.active a {
    background-color: #9f7aea;
    border-color: transparent;
    color: white;
    min-width: 32px;
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;

type PaginationProps = {
  onPageChange: (page: string) => void
};

const Pagination = ({ onPageChange }: PaginationProps) => {
  const handlePageClick = (page: string) => {
    onPageChange(page);
  };

  return (
    <>
      <MyPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={(selectedItem) => handlePageClick(`${selectedItem.selected}`)}
        pageRangeDisplayed={5}
        pageCount={30}
        previousLabel="<"
      />
    </>
  );
};

export default Pagination;
