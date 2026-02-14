import React from 'react';
import { useResumeStore } from '../store/resumeStore';

const colors = [
  { name: 'Teal', value: 'hsl(168, 60%, 40%)' },
  { name: 'Navy', value: 'hsl(220, 60%, 35%)' },
  { name: 'Burgundy', value: 'hsl(345, 60%, 35%)' },
  { name: 'Forest', value: 'hsl(150, 50%, 30%)' },
  { name: 'Charcoal', value: 'hsl(0, 0%, 25%)' }
];

export default function ColorPicker() {
  const { accentColor, setAccentColor } = useResumeStore();

  return (
    <div style={{ marginBottom: '16px' }}>
      <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '8px', color: '#666' }}>Accent Color</div>
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
        {colors.map(color => (
          <div
            key={color.value}
            onClick={() => setAccentColor(color.value)}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: color.value,
              cursor: 'pointer',
              border: accentColor === color.value ? '3px solid #3b82f6' : '2px solid #e0e0e0',
              boxShadow: accentColor === color.value ? '0 0 0 2px #fff' : 'none',
              transition: 'all 0.2s'
            }}
            title={color.name}
          />
        ))}
      </div>
    </div>
  );
}
