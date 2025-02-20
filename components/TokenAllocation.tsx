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
    'Team & Advisors',
    'Community & Marketing',
    'Liquidity Pool',
    'Development Fund',
    'Private Sale',
  ],
  datasets: [
    {
      data: [15, 25, 30, 20, 10],
      discription: ["Reserved for team members and advisors with a vesting period to ensure long-term commitment.",
        "Reserved for team members and advisors with a vesting period to ensure long-term commitment.",
        "Dedicated to community rewards, marketing initiatives, and ecosystem growth.",
        "Supports ongoing platform development, upgrades, and technical improvements.",
        "Allocated to early supporters and strategic partners."],
      backgroundColor: [
        '#3B82F6', // Team & Advisors - blue
        '#4FD1C5', // Community & Marketing - teal
        '#9F7AEA', // Liquidity Pool - purple
        '#F472B6', // Development Fund - pink
        '#2563EB', // Private Sale - darker blue
      ],
      borderColor: [
        '#3B82F6',
        '#4FD1C5',
        '#9F7AEA',
        '#F472B6',
        '#2563EB',
      ],
      borderWidth: 1,
      offset: 10,
      hoverOffset: 15,
    },
  ],
};

const TokenAllocation: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState < number | null > (null);

  const options = {
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          font: {
            size: 16,
            fontFamily: "Bruno Ace SC', serif",
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
          label: function (context: any) {
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
      <div className='flex justify-end items-center'>
        <img
          src='/assets/Blueshadow.png'
          alt='tokenomics'
          className='h-full w-50'
          style={{
            position: 'absolute',
            transform: 'rotate(180deg)'
          }}
        />
      </div>
      <div className="token-allocation-container">
        <h2 className="uppercase title GradientText">TOKEN ALLOCATION</h2>
        <p className="description font-['Bruno_Ace_SC']">
          OUR TOKEN DISTRIBUTION IS CAREFULLY DESIGNED TO ENSURE LONG-TERM
          SUSTAINABILITY AND FAIR DISTRIBUTION ACROSS DIFFERENT STAKEHOLDERS.
        </p>

        <div className="content-wrapper">
          <div className="timeline-section">
            {tokenData.labels.map((label, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"> <div className="timeline-dot2"></div></div>
                <div className="timeline-content">
                  <h3 className='uppercase GradientText'>{label}</h3>
                  <p>{tokenData.datasets[0].discription[index]}</p>
                </div>
              </div>
            ))}
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
      </div>

      <style jsx>{`
      .token-allocation {
        padding: 4rem 2rem;
        background-color: #000000;
        color: #ffffff;
      }

      .token-allocation-container {
        max-width: 1400px;
        margin: 0 auto;
      }

      .title {
        text-align: center;
        font-size: 42px;
        color: #8B5CF6;
        font-family: 'Bruno Ace SC', serif;
        margin-bottom: 1rem;
        letter-spacing: 0.1em;
      }

      .description {
        text-align: center;
        color: #ffffff;
        max-width: 800px;
        margin: 0 auto 4rem;
        line-height: 1.6;
        font-size: 14px;
        letter-spacing: 0.05em;
      }

      .content-wrapper {
        display: flex;
        gap: 4rem;
        align-items: center;
      }

      .timeline-section {
        flex: 1;
        position: relative;
      }

      .timeline-section::before {
        content: '';
        position: absolute;
        left: 7px;
        top: 0;
        bottom: 0;
        width: 2px;
        background: rgba(139, 92, 246, 0.3);
      }

      .timeline-item {
        display: flex;
        align-items: flex-start;
        margin-bottom: 2.5rem;
        position: relative;
      }
          .timeline-item:last-child {
        margin-bottom: 0px;
      }

      .timeline-dot {
        width: 16px;
        height: 16px;
        background: #8B5CF6;
        border-radius: 50%;
        margin-right: 2rem;
        margin-top: 28px;
        flex-shrink: 0;
          display:flex;
              justify-content:center;
              align-items:center;
      }
              .timeline-dot2 {
            
        width: 10px;
        height: 10px;
        background: #ffffff;
        border-radius: 50%;
        flex-shrink: 0;
      }


      .timeline-content {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 12px;
        padding: 9px;
        flex-grow: 1;
        line-height: 30px;
      }

      .timeline-content h3 {
        text-align: left;
        font-size: 1.1rem;
        font-weight: 600;
      }

      .timeline-content p {
        color: #94A3B8;
        font-size: 0.9rem;
      }

      .chart-section {
        flex: 1;
        min-height: 500px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .chart-container {
        width: 100%;
        height: 500px;
        position: relative;
      }

      @media (max-width: 1024px) {
        .content-wrapper {
          flex-direction: column;
        }

        .timeline-section {
          width: 100%;
        }

        .chart-section {
          width: 100%;
          min-height: 400px;
        }
      }

      @media (max-width: 768px) {
        .token-allocation {
          padding: 2rem 1rem;
        }

        .title {
          font-size: 2rem;
        }

        .description {
          font-size: 1rem;
          margin-bottom: 2rem;
        }
      }
    `}</style>
    </div>);
};

export default TokenAllocation; 