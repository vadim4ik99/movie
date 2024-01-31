import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import './PaginationUI.css';

function PaginationUI({ currentPage, totalPages, onPageChange }) {
  const pageItems = [];

  const displayPages = 10; // Number of pages to display initially
  let startPage = currentPage - Math.floor(displayPages / 2);
  startPage = Math.max(startPage, 1);
  const endPage = startPage + displayPages - 1;
  startPage = Math.min(startPage, Math.max(totalPages - displayPages + 1, 1));

  for (let i = startPage; i <= endPage && i <= totalPages; i++) {
    pageItems.push(
      <Pagination.Item
        key={i}
        active={i === currentPage}
        onClick={() => onPageChange(i)}
      >
        {i}
      </Pagination.Item>
    );
  }

  return (
    <Pagination className='custom-pagination'>
      <Pagination.First 
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1} 
      />
      <Pagination.Prev
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Предыдущая
      </Pagination.Prev>
      {pageItems}
      <Pagination.Next
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Следущая
      </Pagination.Next>
      <Pagination.Last onClick={() => onPageChange(totalPages)} />
    </Pagination>
  );
}

export default PaginationUI;
