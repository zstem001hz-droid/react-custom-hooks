import { useState, useMemo } from "react";

// Defines the shape of arguments the hook accepts
interface UsePaginationProps {
  totalItems: number;
  itemsPerPage?: number;
  initialPage?: number;
}

// Defines the shape of everything the hook returns
interface UsePaginationReturn {
  currentPage: number;
  totalPages: number;
  startIndex: number;
  endIndex: number;
  itemsOnCurrentPage: number;
  canNextPage: boolean;
  canPrevPage: boolean;
  setPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
}

// Manages all pagination logic for any dataset.
// Accepts total item count, items per page, and starting page as inputs.
function usePagination({
  totalItems,
  itemsPerPage = 10,
  initialPage = 1,
}: UsePaginationProps): UsePaginationReturn {
  // Tracks the current active page — initialized from initialPage input
  const [currentPage, setCurrentPage] = useState(initialPage);

  // Calculates all derived pagination values.
  // Only recalculates when totalItems, itemsPerPage, or currentPage changes.
  const pagination = useMemo(() => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsOnCurrentPage = Math.min(itemsPerPage, totalItems - startIndex);
    return { totalPages, startIndex, endIndex, itemsOnCurrentPage };
  }, [totalItems, itemsPerPage, currentPage]);

  // Boundary flags — prevent navigation beyond valid page range
  const canNextPage = currentPage < pagination.totalPages;
  const canPrevPage = currentPage > 1;

  // Clamps page number to valid range before updating state
  function setPage(page: number) {
    const clamped = Math.max(1, Math.min(page, pagination.totalPages));
    setCurrentPage(clamped);
  }

  // Advances to next page if one exists
  function nextPage() {
    if (canNextPage) setCurrentPage((prev) => prev + 1);
  }

  // Returns to previous page if one exists
  function prevPage() {
    if (canPrevPage) setCurrentPage((prev) => prev - 1);
  }

  // Returns all pagination state and controls to the consuming component
  return {
    currentPage,
    totalPages: pagination.totalPages,
    startIndex: pagination.startIndex,
    endIndex: pagination.endIndex,
    itemsOnCurrentPage: pagination.itemsOnCurrentPage,
    canNextPage,
    canPrevPage,
    setPage,
    nextPage,
    prevPage,
  };
}

export default usePagination;
