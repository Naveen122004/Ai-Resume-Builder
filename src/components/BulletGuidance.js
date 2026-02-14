import React from 'react';

const ACTION_VERBS = ['built', 'developed', 'designed', 'implemented', 'led', 'improved', 'created', 'optimized', 'automated', 'managed', 'launched', 'established', 'increased', 'reduced', 'achieved', 'delivered', 'coordinated', 'executed', 'analyzed', 'architected'];

export default function BulletGuidance({ text }) {
  const suggestions = [];
  
  if (text.trim()) {
    const firstWord = text.trim().split(/\s+/)[0].toLowerCase().replace(/[^a-z]/g, '');
    if (!ACTION_VERBS.includes(firstWord)) {
      suggestions.push('Start with a strong action verb');
    }
    
    if (!/\d+[%kKmM]?|\d+\+/.test(text)) {
      suggestions.push('Add measurable impact (numbers)');
    }
  }

  if (suggestions.length === 0) return null;

  return (
    <div style={{ fontSize: '11px', color: '#f59e0b', marginTop: '4px', fontStyle: 'italic' }}>
      {suggestions.join(' • ')}
    </div>
  );
}
