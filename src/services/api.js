import axios from 'axios';

const API_URL = 'http://localhost:5000/api/transactions';

export const fetchTransactions = (month, search = '', page = 1, perPage = 10) => {
    return axios.get(`${API_URL}`, {
        params: { month, search, page, perPage },
    });
};

export const fetchStatistics = (month) => {
    return axios.get(`${API_URL}/statistics`, { params: { month } });
};

export const fetchBarChartData = (month) => {
    return axios.get(`${API_URL}/bar-chart`, { params: { month } });
};

export const fetchPieChartData = (month) => {
    return axios.get(`${API_URL}/pie-chart`, { params: { month } });
};
