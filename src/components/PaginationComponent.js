import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const PaginationComponent = ({ page, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 0; i < totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination className="justify-content-center mt-3">
      
      <PaginationItem disabled={page === 0}>
        <PaginationLink first onClick={() => onPageChange(0)} />
      </PaginationItem>

      <PaginationItem disabled={page === 0}>
        <PaginationLink previous onClick={() => onPageChange(page - 1)} />
      </PaginationItem>

     
      {pageNumbers.map((pageNum) => (
        <PaginationItem active={pageNum === page} key={pageNum}>
          <PaginationLink onClick={() => onPageChange(pageNum)}>
            {pageNum + 1}
          </PaginationLink>
        </PaginationItem>
      ))}

      <PaginationItem disabled={page === totalPages - 1}>
        <PaginationLink next onClick={() => onPageChange(page + 1)} />
      </PaginationItem>

      <PaginationItem disabled={page === totalPages - 1}>
        <PaginationLink last onClick={() => onPageChange(totalPages - 1)} />
      </PaginationItem>
    </Pagination>
  );
};

export default PaginationComponent;
