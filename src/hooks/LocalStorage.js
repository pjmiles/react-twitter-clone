import { useState } from "react";

// function to sync the state value stored in the browser's local storage
export const useLocalStorage = (loginDetails, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(loginDetails);
      if (value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(loginDetails.JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });

  const setValue = (newValue) => {
    try {
      window.localStorage.setItem(loginDetails, JSON.stringify(newValue));
    } catch (err) {
      setStoredValue(newValue);
    }
  };
  return [storedValue, setValue];
};
