import React from 'react';
import { useResumeStore } from '../store/resumeStore';

const templates = [
  { id: 'classic', name: 'Classic', desc: 'Traditional single-column' },
  { id: 'modern', name: 'Modern', desc: 'Two-column with sidebar' },
  { id: 'minimal', name: 'Minimal', desc: 'Clean and spacious' }
];

export default function TemplatePicker() {
  const { template, setTemplate } = useResumeStore();

  const renderThumbnail = (t) => {
    const isActive = template === t.id;
    
    return (
      <div
        key={t.id}
        onClick={() => setTemplate(t.id)}
        style={{
          width: '120px',
          cursor: 'pointer',
          border: isActive ? '2px solid #3b82f6' : '1px solid #e0e0e0',
          borderRadius: '4px',
          overflow: 'hidden',
          background: '#fff',
          position: 'relative'
        }}
      >
        {isActive && (
          <div style={{ position: 'absolute', top: '4px', right: '4px', background: '#3b82f6', color: '#fff', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>
            ✓
          </div>
        )}
        <div style={{ height: '80px', background: '#f9f9f9', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {t.id === 'classic' && (
            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ height: '12px', background: '#000', borderRadius: '2px' }}></div>
              <div style={{ height: '2px', background: '#000' }}></div>
              <div style={{ height: '6px', background: '#ddd', borderRadius: '1px' }}></div>
              <div style={{ height: '6px', background: '#ddd', borderRadius: '1px' }}></div>
              <div style={{ height: '2px', background: '#000', marginTop: '4px' }}></div>
              <div style={{ height: '6px', background: '#ddd', borderRadius: '1px' }}></div>
            </div>
          )}
          {t.id === 'modern' && (
            <div style={{ width: '100%', height: '100%', display: 'flex', gap: '4px' }}>
              <div style={{ width: '35%', background: '#3b82f6', borderRadius: '2px' }}></div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ height: '10px', background: '#000', borderRadius: '2px' }}></div>
                <div style={{ height: '6px', background: '#ddd', borderRadius: '1px' }}></div>
                <div style={{ height: '6px', background: '#ddd', borderRadius: '1px' }}></div>
                <div style={{ height: '6px', background: '#ddd', borderRadius: '1px' }}></div>
              </div>
            </div>
          )}
          {t.id === 'minimal' && (
            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: '8px', padding: '4px' }}>
              <div style={{ height: '10px', background: '#000', borderRadius: '2px', width: '60%' }}></div>
              <div style={{ height: '4px', background: '#ddd', borderRadius: '1px' }}></div>
              <div style={{ height: '4px', background: '#ddd', borderRadius: '1px', width: '80%' }}></div>
              <div style={{ height: '10px' }}></div>
              <div style={{ height: '4px', background: '#ddd', borderRadius: '1px' }}></div>
            </div>
          )}
        </div>
        <div style={{ padding: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '2px' }}>{t.name}</div>
          <div style={{ fontSize: '10px', color: '#666' }}>{t.desc}</div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ marginBottom: '16px' }}>
      <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '8px', color: '#666' }}>Template</div>
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
        {templates.map(renderThumbnail)}
      </div>
    </div>
  );
}
