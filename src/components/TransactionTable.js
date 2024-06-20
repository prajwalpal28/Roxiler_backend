import React, { useState, useEffect } from 'react';
import { fetchTransactions } from '../services/api';

const TransactionTable = ({ month, search }) => {
    const [transactions, setTransactions] = useState([]);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);

    useEffect(() => {
        const getTransactions = async () => {
            const response = await fetchTransactions(month, search, page, perPage);
            setTransactions(response.data);
        };
        getTransactions();
    }, [month, search, page, perPage]);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Date of Sale</th>
                        <th>Sold</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction._id}>
                            <td>{transaction.title}</td>
                            <td>{transaction.description}</td>
                            <td>{transaction.price}</td>
                            <td>{transaction.category}</td>
                            <td>{new Date(transaction.dateOfSale).toLocaleDateString()}</td>
                            <td>{transaction.sold ? 'Yes' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))}>Previous</button>
            <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
        </div>
    );
};

export default TransactionTable;
