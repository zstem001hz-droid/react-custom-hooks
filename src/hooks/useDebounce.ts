import { useState, useEffect } from "react";

// Delays updating the returned value until the input value
// stops changing for the specified delay period
function useDebounce<T>(value: T, delay: number = 500): T {
  // Stores the debounced value - only updates after delay has passed
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  //Sets a timer on every value change.
  //Clears the previous timer if value changes before delay completes.
  useEffect(() => {
    const timer = setTimeout(() => {
      
        console.log("debounce timer fired, updating to:", value);
      setDebouncedValue(value);
    }, delay);

    // Cleanup cancels the pending timer if value or delay changes
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
