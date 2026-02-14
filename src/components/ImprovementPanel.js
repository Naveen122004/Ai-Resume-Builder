import React from 'react';
import { useResumeStore } from '../store/resumeStore';

export default function ImprovementPanel() {
  const getTopImprovements = useResumeStore(state => state.getTopImprovements);
  const improvements = getTopImprovements();

  if (improvements.length === 0) {
    return (
      <div style={{ background: '#dcfce7', padding: '16px', border: '1px solid #86efac', borderRadius: '4px', marginBottom: '16px' }}>
        <div style={{ fontSize: '13px', fontWeight: 600, color: '#166534', marginBottom: '4px' }}>
          ✓ Excellent Resume!
        </div>
        <div style={{ fontSize: '12px', color: '#166534' }}>
          Your resume meets all key criteria.
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: '#fff', padding: '16px', border: '1px solid #e0e0e0', borderRadius: '4px', marginBottom: '16px' }}>
      <h3 style={{ margin: '0 0 12px 0', fontSize: '13px', fontWeight: 600, color: '#666', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
        Top 3 Improvements
      </h3>
      {improvements.map((improvement, idx) => (
        <div key={idx} style={{ fontSize: '12px', color: '#666', marginBottom: '8px', paddingLeft: '16px', position: 'relative' }}>
          <span style={{ position: 'absolute', left: 0, color: '#3b82f6', fontWeight: 600 }}>{idx + 1}.</span>
          {improvement}
        </div>
      ))}
    </div>
  );
}
