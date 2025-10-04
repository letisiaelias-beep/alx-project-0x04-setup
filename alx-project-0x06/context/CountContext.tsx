// context/CountContext.tsx
"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface CountContextProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const CountContext = createContext<CountContextProps | undefined>(undefined);

export const CountProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <CountContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CountContext.Provider>
  );
};

export const useCount = (): CountContextProps => {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
};
