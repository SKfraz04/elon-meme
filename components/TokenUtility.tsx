import React from 'react';
import Image from 'next/image';

const TokenUtility: React.FC = () => {
  const utilities = [
    {
      title: "Governance Rights",
      description: "Token holders can participate in platform governance, voting on key decisions and protocol upgrades to shape the future of the ecosystem.",
      icon: "/assets/utilities.svg"
    },
    {
      title: "Staking Rewards",
      description: "Earn passive income by staking your tokens in our protocol, contributing to network security while receiving regular reward distributions.",
      icon: "/assets/utilities.svg"
    },
    {
      title: "Platform Access",
      description: "Access premium features, reduced fees, and exclusive content across our platform ecosystem with token-based membership tiers.",
      icon: "/assets/utilities.svg"
    },
    {
      title: "Liquidity Mining",
      description: "Participate in liquidity mining programs to earn additional rewards while helping maintain market stability and trading efficiency.",
      icon: "/assets/utilities.svg"
    }
  ];

  return (
    <div className="token-utility" id="token-utility">
      <div className="token-utility-container">
        <div className="content-section">
          <h2 className={`title gradient-text`}>Token Utility</h2>
          <p className="subtitle">
            Our token is designed with multiple utilities to create a sustainable and valuable ecosystem
          </p>
          
          <div className="utility-cards">
            {utilities.map((utility, index) => (
              <div key={index} className="utility-card">
                <div className="icon-container">
                  <Image
                    src={utility.icon}
                    alt={utility.title}
                    width={52}
                    height={52}
                  />
                </div>
                <div className="card-content">
                  <h3>{utility.title}</h3>
                  <p>{utility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="image-section">
          <div className="image-container flex justify-center items-center">
            <Image
            className='rounded-xl'
              src="/assets/utility.jpg"
              alt="Token Utility Illustration"
              width={500}
              height={600}
              objectFit="contain"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .token-utility {
          padding: 4rem 3rem;
          background: linear-gradient(145deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9));
          border-radius: 1.5rem;
          margin: 3rem auto;
          max-width: 1400px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .token-utility-container {
          display: flex;
          gap: 4rem;
          align-items: center;
        }

        .content-section {
          flex: 1.2;
        }

        .image-section {
          flex: 0.8;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-container {
          position: relative;
          height: 600px;
          width: 100%;
          filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.1));
        }

        h2 {
          color: #ffffff;
          font-size: 2.5rem;
          margin-bottom: 1rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .subtitle {
          color: #ffffff;
          font-size: 1.2rem;
          margin-bottom: 3rem;
          opacity: 0.9;
          line-height: 1.6;
        }

        .utility-cards {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .utility-card {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          padding: 1.5rem;
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .utility-card:hover {
          transform: translateX(10px);
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .icon-container {
          background: rgb(255, 255, 255);
          padding: 4px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-content h3 {
          color: #ffffff;
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }

        .card-content p {
          color: #ffffff;
          opacity: 0.8;
          font-size: 1rem;
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .token-utility-container {
            flex-direction: column-reverse;
          }

          .image-container {
            height: 400px;
          }
        }

        @media (max-width: 768px) {
          .token-utility {
            padding: 2rem 1.5rem;
          }

          h2 {
            font-size: 2rem;
          }

          .subtitle {
            font-size: 1.1rem;
          }

          .utility-card {
            padding: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
};

export default TokenUtility; 