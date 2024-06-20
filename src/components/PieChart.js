import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { fetchPieChartData } from '../services/api';

const PieChart = ({ month }) => {
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        const getPieChartData = async () => {
            const response = await fetchPieChartData(month);
            const labels = response.data.map((item) => item.category);
            const data = response.data.map((item) => item.count);

            setChartData({
                labels,
                datasets: [
                    {
                        label: 'Items Count',
                        data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                        ],
                    },
                ],
            });
        };
        getPieChartData();
    }, [month]);

    return <Pie data={chartData} />;
};

export default PieChart;
