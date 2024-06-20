import React, { useState } from 'react';
import TransactionTable from './components/TransactionTable';
import Statistics from './components/Statistics';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';

const App = () => {
    const [month, setMonth] = useState('March');
    const [search, setSearch] = useState('');

    return (
        <div>
            <h1>MERN Coding Challenge</h1>
            <div>
                <label>Select Month: </label>
                <select value={month} onChange={(e) => setMonth(e.target.value)}>
                    {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((m) => (
                        <option key={m} value={m}>
                            {m}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label>Search Transactions: </label>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <TransactionTable month={month} search={search} />
            <Statistics month={month} />
            <BarChart month={month} />
            <PieChart month={month} />
        </div>
    );
};

export default App;
