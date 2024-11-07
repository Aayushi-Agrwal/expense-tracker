import React, { createContext, useReducer, useEffect, useState } from "react";
import AppReducer from "./AppReducer";
import Modal from "../components/Modal";

// initial state
const initialState = {
  transactions: JSON.parse(localStorage.getItem("transactions")) || [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const [showModal, setShowModal] = useState(false);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(newTransaction) {
    // Check if a transaction with the same text already exists
    const existingTransaction = state.transactions.find(
      (transaction) => transaction.text === newTransaction.text
    );

    if (existingTransaction) {
      // If it exists, create an updated transaction with the new amount added
      setShowModal(true);
      const updatedTransaction = {
        ...existingTransaction,
        amount: existingTransaction.amount + newTransaction.amount,
      };

      dispatch({
        type: "UPDATE_TRANSACTION",
        payload: updatedTransaction,
      });
    } else {
      // If it doesn't exist, add as a new transaction
      dispatch({
        type: "ADD_TRANSACTION",
        payload: newTransaction,
      });
    }
  }

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state.transactions));
  }, [state.transactions]);

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
      {showModal && (
        <Modal
          message="Transaction already exists, Updating..."
          onClose={() => setShowModal(false)}
        />
      )}
    </GlobalContext.Provider>
  );
};
