import React from 'react';
import { useResumeStore } from '../store/resumeStore';

export default function ATSScoreCircle() {
  const getATSScore = useResumeStore(state => state.getATSScore);
  const { score, suggestions } = getATSScore();

  const getScoreColor = () => {
    if (score <= 40) return { color: '#ef4444', label: 'Needs Work' };
    if (score <= 70) return { color: '#f59e0b', label: 'Getting There' };
    return { color: '#10b981', label: 'Strong Resume' };
  };

  const { color, label } = getScoreColor();
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div style={{ background: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '24px', marginBottom: '24px' }}>
      <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 600 }}>ATS Resume Score</h3>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <div style={{ position: 'relative', width: '120px', height: '120px' }}>
          <svg width="120" height="120" style={{ transform: 'rotate(-90deg)' }}>
            <circle cx="60" cy="60" r="45" fill="none" stroke="#e5e7eb" strokeWidth="10" />
            <circle 
              cx="60" 
              cy="60" 
              r="45" 
              fill="none" 
              stroke={color} 
              strokeWidth="10"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              style={{ transition: 'stroke-dashoffset 0.5s ease' }}
            />
          </svg>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
            <div style={{ fontSize: '32px', fontWeight: 700, color }}>{score}</div>
            <div style={{ fontSize: '11px', color: '#666' }}>/ 100</div>
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '18px', fontWeight: 600, color, marginBottom: '8px' }}>{label}</div>
          {suggestions.length > 0 && (
            <div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#666', marginBottom: '8px' }}>Improvements:</div>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', color: '#666', lineHeight: 1.8 }}>
                {suggestions.map((suggestion, idx) => (
                  <li key={idx}>{suggestion}</li>
                ))}
              </ul>
            </div>
          )}
          {suggestions.length === 0 && (
            <div style={{ fontSize: '13px', color: '#666' }}>Excellent! Your resume is well-optimized.</div>
          )}
        </div>
      </div>
    </div>
  );
}
