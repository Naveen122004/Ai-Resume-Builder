import React from 'react';
import PremiumLayout from '../../components/PremiumLayout';
import BuildPanel from '../../components/BuildPanel';

export default function Market() {
  const artifactContent = `Market Analysis: AI Resume Builder

Market Size:
- Global resume services market: $5.2B
- Growing at 6.8% CAGR
- 150M+ job seekers annually

Competitors:
- Resume.io (template-focused)
- Zety (guided builder)
- Rezi (ATS optimization)

Our Differentiation:
- AI-powered content generation
- Real-time ATS scoring
- Industry-specific optimization
- One-click LinkedIn import

Target Market:
- Primary: Tech professionals (25-40 years)
- Secondary: Career changers
- Tertiary: Recent graduates`;

  return (
    <PremiumLayout 
      currentStep={2}
      buildPanelContent={<BuildPanel step={2} artifactContent={artifactContent} />}
    >
      <div>
        <h2>Market Research</h2>
        <p>Analyze the market opportunity and competitive landscape.</p>
        <div style={{ background: '#f9fafb', padding: '16px', borderRadius: '8px', marginTop: '16px' }}>
          <pre style={{ margin: 0, whiteSpace: 'pre-wrap', fontFamily: 'monospace', fontSize: '14px' }}>{artifactContent}</pre>
        </div>
      </div>
    </PremiumLayout>
  );
}
