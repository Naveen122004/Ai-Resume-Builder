import React from 'react';
import { useResumeStore } from '../store/resumeStore';

export default function TemplateTabs() {
  const { template, setTemplate } = useResumeStore();

  const tabStyle = (isActive) => ({
    padding: '8px 20px',
    fontSize: '13px',
    fontWeight: isActive ? 600 : 500,
    background: isActive ? '#000' : 'transparent',
    color: isActive ? '#fff' : '#666',
    border: '1px solid #e0e0e0',
    cursor: 'pointer',
    transition: 'all 0.2s'
  });

  return (
    <div style={{ display: 'flex', gap: '0', marginBottom: '16px', border: '1px solid #e0e0e0', borderRadius: '4px', overflow: 'hidden', width: 'fit-content' }}>
      <button onClick={() => setTemplate('classic')} style={tabStyle(template === 'classic')}>
        Classic
      </button>
      <button onClick={() => setTemplate('modern')} style={tabStyle(template === 'modern')}>
        Modern
      </button>
      <button onClick={() => setTemplate('minimal')} style={tabStyle(template === 'minimal')}>
        Minimal
      </button>
    </div>
  );
}
