import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const tokenData = {
  labels: [
    'Team & Advisors (15%)',
    'Community & Marketing (25%)',
    'Liquidity Pool (30%)',
    'Development Fund (20%)',
    'Private Sale (10%)',
  ],
  datasets: [
    {
      data: [15, 25, 30, 20, 10],
      backgroundColor: [
        'rgba(255, 99, 232, 0.85)',
        'rgba(54, 162, 255, 0.85)',
        'rgba(255, 206, 86, 0.85)',
        'rgba(75, 222, 192, 0.85)',
        'rgba(153, 102, 255, 0.85)',
      ],
      borderColor: [
        'rgba(255, 99, 232, 1)',
        'rgba(54, 162, 255, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 222, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 2,
      offset: 25,
      hoverOffset: 35,
    },
  ],
};

const TokenAllocation: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const options = {
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          font: {
            size: 16,
            family: "'Inter', sans-serif",
            weight: 600,
          },
          color: '#ffffff',
          padding: 25,
        },
        onHover: (event: any, legendItem: any) => {
          setHoveredIndex(legendItem.index);
        },
        onLeave: () => {
          setHoveredIndex(null);
        },
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `${context.label}: ${context.raw}%`;
          }
        },
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        padding: 15,
        titleFont: {
          size: 16,
          weight: 600,
          family: "'Inter', sans-serif",
        },
        bodyFont: {
          size: 14,
          family: "'Inter', sans-serif",
        },
      },
      datalabels: {
        color: '#ffffff',
        font: {
          weight: 'bold' as const,
          size: 14,
        },
        formatter: (value: number) => `${value}%`,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="token-allocation" id="token-allocation">
      <div className="token-allocation-container">
        <div className="content-section">
          <h2 className={`title gradient-text`}>Token Allocation</h2>
          <p className="description">
            Our token distribution is carefully designed to ensure long-term sustainability 
            and fair distribution across different stakeholders.
          </p>
          
          <div className="allocation-details">
            <div className="allocation-item">
              <h3>Team & Advisors (15%)</h3>
              <p>Reserved for team members and advisors with a vesting period to ensure long-term commitment.</p>
            </div>
            
            <div className="allocation-item">
              <h3>Community & Marketing (25%)</h3>
              <p>Dedicated to community rewards, marketing initiatives, and ecosystem growth.</p>
            </div>
            
            <div className="allocation-item">
              <h3>Liquidity Pool (30%)</h3>
              <p>Ensures stable trading and price discovery on decentralized exchanges.</p>
            </div>
            
            <div className="allocation-item">
              <h3>Development Fund (20%)</h3>
              <p>Supports ongoing platform development, upgrades, and technical improvements.</p>
            </div>
            
            <div className="allocation-item">
              <h3>Private Sale (10%)</h3>
              <p>Allocated to early supporters and strategic partners.</p>
            </div>
          </div>
        </div>
        
        <div className="chart-section">
          <div className="chart-container">
            <Pie 
              data={tokenData} 
              options={options}
            />
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .token-allocation {
          padding: 3rem;
          background: linear-gradient(145deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9));
          border-radius: 1.5rem;
          margin: 3rem auto;
          max-width: 1400px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }
        
        .token-allocation-container {
          display: flex;
          gap: 3rem;
          align-items: center;
        }
        
        .content-section {
          flex: 1.2;
          padding-right: 3rem;
        }
        
        .chart-section {
          flex: 1;
          min-height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        
        .chart-container {
          height: 550px;
          width: 100%;
          position: relative;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 2rem;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        .chart-section {
          animation: float 6s ease-in-out infinite;
          align-self: stretch;
          display: flex;
          align-items: center;
        }
        
        h2 {
          color: #ffffff;
          margin-bottom: 1rem;
          font-size: 2rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .description {
          color: #ffffff;
          font-size: 1.1rem;
          margin-bottom: 2rem;
          opacity: 0.9;
          line-height: 1.6;
        }
        
        .allocation-details {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .allocation-item {
          background: rgba(255, 255, 255, 0.05);
          padding: 1rem;
          border-radius: 0.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .allocation-item h3 {
          color: #ffffff;
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }
        
        .allocation-item p {
          color: #ffffff;
          opacity: 0.8;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        @media (max-width: 1024px) {
          .token-allocation-container {
            flex-direction: column;
            align-items: stretch;
          }
          
          .content-section {
            padding-right: 0;
          }
          
          .chart-section {
            min-height: 500px;
            margin: 2rem 0;
          }
          
          .chart-container {
            height: 450px;
          }
        }

        @media (max-width: 768px) {
          .token-allocation {
            padding: 1rem;
          }
          
          h2 {
            font-size: 1.75rem;
          }
          
          .description {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default TokenAllocation; 