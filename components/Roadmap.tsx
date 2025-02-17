import React from 'react';

const Roadmap: React.FC = () => {
  const roadmapData = [
    {
      phase: 'Phase 1: Foundation',
      quarter: 'Q1 2025',
      items: [
        'Initial Department of Government Efficency (DOGE) Token Development',
        'Smart Contract Architecture Design',
        'Core Team Assembly',
        'Community Building on X/Twitter',
        'Meme Creation Campaign Launch'
      ],
      status: 'upcoming'
    },
    {
      phase: 'Phase 2: Community Growth',
      quarter: 'Q2 2025',
      items: [
        'DGE Token Smart Contract Deployment',
        'Security Audit Completion',
        'Meme Contest Platform Launch',
        'Bureaucracy-themed NFT Collection',
        'Social Media Expansion'
      ],
      status: 'upcoming'
    },
    {
      phase: 'Phase 3: Market Entry',
      quarter: 'Q3 2025',
      items: [
        'DEX Listing Campaign',
        'Governance Token Distribution',
        'Virtual Government Office Launch',
        'Meme Voting System Implementation',
        'Community Treasury Establishment'
      ],
      status: 'upcoming'
    },
    {
      phase: 'Phase 4: Utility Expansion',
      quarter: 'Q4 2025',
      items: [
        'Department of Government Efficency (DOGE) Staking Program',
        'Red Tape Reduction Protocol',
        'Cross-chain Bridge Development',
        'Bureaucrat NFT Staking',
        'Efficiency Mining Program'
      ],
      status: 'upcoming'
    },
    {
      phase: 'Phase 5: Ecosystem Growth',
      quarter: 'Q1 2026',
      items: [
        'Department of Government Efficency (DOGE) DAO Implementation',
        'Mobile DApp Launch',
        'Partnerships with Other Meme Projects',
        'Automated Bureaucracy System',
        'Global Marketing Campaign'
      ],
      status: 'upcoming'
    },
    {
      phase: 'Phase 6: Innovation',
      quarter: 'Q2 2026',
      items: [
        'AI-Powered Meme Generator',
        'Virtual Government Metaverse',
        'Cross-Project Governance Integration',
        'Department of Government Efficency (DOGE) Yield Farming',
        'Real-World Efficiency Partnerships'
      ],
      status: 'upcoming'
    }
  ];

  return (
    <div className="roadmap">
      <div className="roadmap-container">
        <h2 className={`title gradient-text`}>Roadmap</h2>
        <p className="description">
          Our strategic roadmap outlines the key milestones and development phases 
          that will drive our project's growth and success.
        </p>

        <div className="timeline">
          {roadmapData.map((phase, index) => (
            <div key={index} className={`timeline-item ${phase.status}`}>
              <div className="timeline-content">
                <div className="phase-header">
                  <h3>{phase.phase}</h3>
                  <span className="quarter">{phase.quarter}</span>
                  <span className={`status-badge ${phase.status}`}>
                    {phase.status.charAt(0).toUpperCase() + phase.status.slice(1)}
                  </span>
                </div>
                <ul className="milestone-list">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .roadmap {
          padding: 4rem 2rem;
          background: linear-gradient(145deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9));
          border-radius: 1.5rem;
          margin: 3rem auto;
          max-width: 1400px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .roadmap-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        h2 {
          color: #ffffff;
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 1rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .description {
          color: #ffffff;
          text-align: center;
          font-size: 1.1rem;
          margin-bottom: 4rem;
          opacity: 0.9;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .timeline {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          position: relative;
        }

        .timeline-item {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 1rem;
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .timeline-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .phase-header {
          margin-bottom: 1.5rem;
          position: relative;
        }

        .phase-header h3 {
          color: #ffffff;
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
        }

        .quarter {
          color: #ffffff;
          opacity: 0.7;
          font-size: 0.9rem;
          display: block;
          margin-bottom: 0.5rem;
        }

        .status-badge {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .status-badge.completed {
          background: rgba(46, 213, 115, 0.2);
          color: #2ed573;
        }

        .status-badge.in-progress {
          background: rgba(54, 162, 255, 0.2);
          color: #36a2ff;
        }

        .status-badge.upcoming {
          background: rgba(255, 206, 86, 0.2);
          color: #ffce56;
        }

        .milestone-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .milestone-list li {
          color: #ffffff;
          opacity: 0.9;
          margin-bottom: 0.75rem;
          padding-left: 1.5rem;
          position: relative;
          font-size: 0.95rem;
        }

        .milestone-list li::before {
          content: "•";
          position: absolute;
          left: 0;
          color: #36a2ff;
        }

        .timeline-item.completed {
          border-color: rgba(46, 213, 115, 0.3);
        }

        .timeline-item.in-progress {
          border-color: rgba(54, 162, 255, 0.3);
        }

        .timeline-item.upcoming {
          border-color: rgba(255, 206, 86, 0.3);
        }

        @media (max-width: 768px) {
          .roadmap {
            padding: 2rem 1rem;
          }

          h2 {
            font-size: 2rem;
          }

          .description {
            font-size: 1rem;
            margin-bottom: 2rem;
          }

          .timeline {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Roadmap; 