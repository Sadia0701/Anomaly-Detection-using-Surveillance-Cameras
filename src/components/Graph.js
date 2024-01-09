import React from 'react';
import { Line } from 'react-chartjs-2';

const Graph = () => {
  const data = {
    labels: ['Point 1', 'Point 2', 'Point 3', 'Point 4', 'Point 5'],
    datasets: [
      {
        label: 'Graph Data',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [10, 25, 30, 45, 50],
      },
    ],
  };

  const options = {
    scales: {
      x: [
        {
          scaleLabel: {
            display: true,
            labelString: 'True Positive',
          },
        },
      ],
      y: [
        {
          scaleLabel: {
            display: true,
            labelString: 'False Positive',
          },
        },
      ],
    },
  };

  return (
    <div>
      <h2>Graph Example</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default Graph;
