import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ResultsView = ({ results }) => {
  // Define the schemes
  const schemes = [
    { name: 'Senior Citizens Savings Scheme Account', value: results.SCSS },
    { name: 'Sukanya Samriddhi Account', value: results.SSA },
    { name: 'Kisan Vikas Patra', value: results.KVP },
    { name: 'Mahila Samman Savings Certificate', value: results.Mahila_Samman },
  ];

  // Sort schemes in decreasing order of probability
  const sortedSchemes = schemes.sort((a, b) => b.value - a.value);

  return (
    <div className="results-container">
      <h3>Scheme Results for Selected Village</h3>
      <div className="schemes-list">
        {sortedSchemes.map((scheme, index) => (
          <div key={index} className="scheme-item">
            <span className="scheme-name">{scheme.name}</span>
            <div className="circular-progress">
            <CircularProgressbar
  value={scheme.value * 100}
  text={`${(scheme.value * 100).toFixed(2)}%`}
  styles={buildStyles({
    pathColor: `url(#gradient-${scheme.id})`, // Use the gradient here
    textColor: '#fff',
    trailColor: '#d6d6d6',
    textSize: '20px',
    text: {
      fontWeight: 'bold',
    },
  })}
/>

{/* Add the gradient definition */}
<svg style={{ height: 0 }}>
  <defs>
    <linearGradient id={`gradient-${scheme.id}`} gradientTransform="rotate(90)">
      <stop offset="0%" stopColor="#00d4ff" /> {/* Bright cyan */}
      <stop offset="100%" stopColor="#00ff88" /> {/* Bright greenish cyan */}
    </linearGradient>
  </defs>
</svg>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsView;
