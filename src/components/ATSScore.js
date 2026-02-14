import React from 'react';
import { useResumeStore } from '../store/resumeStore';

export default function ATSScore() {
  const getATSScore = useResumeStore(state => state.getATSScore);
  const { score, suggestions } = getATSScore();

  const getColor = () => {
    if (score >= 80) return '#22c55e';
    if (score >= 60) return '#f59e0b';
    return '#ef4444';
  };

  return (
    <div style={{ background: '#fff', padding: '20px', border: '1px solid #e0e0e0', borderRadius: '4px', marginBottom: '16px' }}>
      <h3 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 600, color: '#666', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
        ATS Readiness Score
      </h3>
      
      {/* Score Display */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
        <div style={{ fontSize: '36px', fontWeight: 700, color: getColor() }}>{score}</div>
        <div style={{ flex: 1 }}>
          <div style={{ height: '8px', background: '#f0f0f0', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ width: `${score}%`, height: '100%', background: getColor(), transition: 'width 0.3s ease' }} />
          </div>
        </div>
      </div>

      {/* Suggestions */}
      {suggestions.length > 0 && (
        <div>
          <div style={{ fontSize: '12px', fontWeight: 600, color: '#666', marginBottom: '8px' }}>Suggestions:</div>
          {suggestions.map((suggestion, idx) => (
            <div key={idx} style={{ fontSize: '13px', color: '#666', marginBottom: '4px', paddingLeft: '12px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0 }}>•</span>
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
