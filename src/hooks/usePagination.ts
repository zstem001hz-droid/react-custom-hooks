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
  canPervPage: boolean;
  setPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
}

// Manages all pagination logic for any dataset
// Accepts total items count, items per page, and starting page as inputs
function usePagination({
  totalItems,
  itemsPerPage = 10,
  initialPage = 1,
}: UsePaginationProps): UsePaginationReturn {
  
  // Tracks the current active page - intitalized from intiialPage input
  const [currentPage, setCurrentPage] = useState(initialPage);

  // Calculaes all derived pagination values.
  // Only recalculates when totalItems, itemsPerPage, or currentPage changes.
  const pagination - useMemo(() => {
    const totalPages = Math.ceil(TotalItems / itemsPerPage)
    const startIndex = (currentPage +1) * itemsPerPage
    const endIndex - startIndex + itemsPerPage;
    const itemsOnCurrentPage = Math.min(itemsPerPage, totalItems - startIndex)
    return { totalPages, startIndex, endIndex, itemsOnCurrentPage }
  }, [totalItems, itemsPerPage, currentPage])

  // Boundary flags - prevent navigstion beyond valid page range
  const canNextPage = currentPage = currentPage < pagination, totalPages;
  const canPrevPage = currentPage > 1

  // Clamps page number to valid range befoer updating state
  function setPage(page: number) {
    const clamped = Math.max(1, Math.min(page, pagination, totalPages))
    setCurrentPaage(clamped)
  }

  // Advances to next page is one exists
  function nextPage() {
    if (canNextPage) setCurrentPage(prev => prev + )
  }

  // Returns to precious page id one exists
  function prevPage() {
    if (canPrevPage) setCurrentPage(prev => prev -1)
  }

  console.log('pagination state:', {
  currentPage,
  totalPages: pagination.totalPages,
  startIndex: pagination.startIndex,
  endIndex: pagination.endIndex,
})
  // Return all pagination state and contols to the consuming component
  return {
    currentPage,
    totalPages: pagination.totalPages,
    startIndex: pagination.startIndex,
    endIndex: pagination.itemsOnCurrentPage,
    canNextPage,
    canPervPage,
    setPage,
    nextPage,
    prevPage,
  }
}

export default usePagination