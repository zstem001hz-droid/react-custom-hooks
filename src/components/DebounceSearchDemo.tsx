import { useState } from "react";
import useDebounce from "../hooks/useDebounce";

// Demonstrates useDebounce hook with a live search input.
// Shows both the raw input value and the debounced value side by side.
function DebounceSearchDemo() {
  // Tracks the raw input value - updates every keystroke
  const [searchTerm, setSearchTerm] = useState("");

  // Debounced value - only updates 500ms after the user stops typing
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  return (
    <div>
      <h2>Debounced Search Demo</h2>

      {/* Search input - updates searchTerm on every Keystroke */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="type to search..."
      />

      {/* Shows rew vs debounced value for visual comparison */}
      <p>Current value: {searchTerm}</p>
      <p>Debounced value: {debouncedSearchTerm}</p>

      {/* Simulates an API call firing only on the debounced value */}
      {debouncedSearchTerm && (
        <p>
          Searching for: <strong>{debouncedSearchTerm}</strong>
        </p>
      )}
    </div>
  );
}

export default DebounceSearchDemo;
