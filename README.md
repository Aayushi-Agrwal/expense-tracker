# Transaction Tracker

A simple web application to track your income and expenses. Built with **React**, it allows users to add transactions, categorize them as income or expense, and provides a running total of the balance. The app includes a global state management context, local storage persistence, and basic validation to ensure clean data.

## Features

- **Add Income and Expense**: Easily add income or expense transactions with a description and amount.
- **Automatic Summation**: View current balance, total income, and total expenses.
- **Persistent Data**: Transaction data is saved in local storage, so it persists even after refreshing the page.
- **Duplicate Transaction Management**: If a transaction with the same description exists, the app updates the existing entry by adding the new amount.
- **Interactive Modal**: Notifies the user when a transaction is updated instead of added as a duplicate.

## Tech Stack

- **Frontend**: React, HTML, CSS
- **State Management**: Context API with `useReducer`
- **Persistence**: Local Storage

## Installation and Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/transaction-tracker.git
   cd transaction-tracker
   ```

2. **Install Dependencies**

   Make sure you have [Node.js](https://nodejs.org/) installed, then run:

   ```bash
   npm install
   ```

3. **Run the Application**

   Start the development server:

   ```bash
   npm start
   ```

   This will start the app on [http://localhost:3000](http://localhost:3000).

## Folder Structure

```
transaction-tracker/
├── public/                # Public files
├── src/
│   ├── components/        # Components such as AddTransaction, TransactionList, etc.
│   ├── context/           # Global state context (GlobalState.js, AppReducer.js)
├── App.css                # CSS files
├── App.js                 # Main app component
├── index.js               # React entry point
├── .gitignore
├── package.json
├── README.md
```

## Usage

1. **Adding a New Transaction**:
   - Enter a description in the **Text** field.
   - Enter the amount in the **Amount** field. (Positive for income, negative for expense)
   - Click **Add Transaction**.
  
2. **Handling Duplicate Transactions**:
   - If a transaction with the same description exists, the app will show a modal indicating that the existing transaction is being updated.

3. **Deleting a Transaction**:
   - Hover over a transaction in the list and click the delete button to remove it.

## Key Files

- **`GlobalState.js`**: Manages global state using Context API and `useReducer`. Contains logic to add, update, and delete transactions, as well as persist data in local storage.
- **`AppReducer.js`**: Contains reducers to handle state changes for transactions.
- **`Modal.js`**: Custom modal component that appears when an existing transaction is updated.

## Screenshots

<img width="690" alt="image" src="https://github.com/user-attachments/assets/e10112e9-44b0-4f5e-b3dc-c9f63eca095d">


## Contributing

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License.

## Contact

For questions or suggestions, please reach out at [aayushiagrwall@gmail.com](mailto:aayushiagrwall@gmail.com).
