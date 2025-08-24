import React from 'react';
import './FeatureGrid.css';

type Feature = {
  iconEmoji?: string;
  title: string;
  description: string;
  bullets?: readonly string[];
};

export const FeatureGrid: React.FC<{ features: readonly Feature[] }> = ({ features }) => {
  return (
    <div className="features-grid">
      {features.map((f, i) => (
        <article key={i} className="feature-card glass-card">
          <div className="feature-icon" aria-hidden>{f.iconEmoji ?? '🔧'}</div>
          <h3>{f.title}</h3>
          <p>{f.description}</p>
          {f.bullets && (
            <ul>
              {f.bullets.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </div>
  );
};

export default FeatureGrid;
