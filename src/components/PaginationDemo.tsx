import usePagination from "../hooks/usePagination";

// Generates a mock dataset of 100 items to demonstrate pagination
const allItems = [];
for (let i = 1; i <= 100; i++) {
  allItems.push(`Item ${i}`);
}

// Demonstrates usePagination hook with a simulated list of 100 items.
// Shows current page items, page controls, and navigation boundaries.
function PaginationDemo() {
  const {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    itemsOnCurrentPage,
    canNextPage,
    canPrevPage,
    nextPage,
    prevPage,
    setPage,
  } = usePagination({
    totalItems: allItems.length,
    itemsPerPage: 10,
    initialPage: 1,
  });

  // Slices the full dataset to only the items on the current page
  const currentItems = allItems.slice(startIndex, endIndex);

  return (
    <div>
      <h2>Pagination Demo</h2>

      {/* Page and item count metadata */}
      <p>
        Page {currentPage} of {totalPages}
      </p>
      <p>Showing {itemsOnCurrentPage} items</p>

      {/* Current page items list */}
      <ul>
        {currentItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {/* Page navigation controls */}
      <button onClick={prevPage} disabled={!canPrevPage}>
        Previous
      </button>

      {/* Jump to specific page buttons */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => setPage(page)}
          disabled={page === currentPage}
        >
          {page}
        </button>
      ))}

      <button onClick={nextPage} disabled={!canNextPage}>
        Next
      </button>
    </div>
  );
}

export default PaginationDemo;
