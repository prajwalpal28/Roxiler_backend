import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { fetchBarChartData } from '../services/api';

const BarChart = ({ month }) => {
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        const getBarChartData = async () => {
            const response = await fetchBarChartData(month);
            const labels = response.data.map((item) => item.range);
            const data = response.data.map((item) => item.count);

            setChartData({
                labels,
                datasets: [
                    {
                        label: 'Items Count',
                        data,
                        backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    },
                ],
            });
        };
        getBarChartData();
    }, [month]);

    return <Bar data={chartData} />;
};

export default BarChart;
