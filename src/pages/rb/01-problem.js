import React from 'react';
import PremiumLayout from '../../components/PremiumLayout';
import BuildPanel from '../../components/BuildPanel';

export default function Problem() {
  const artifactContent = `Problem Statement: AI Resume Builder

Users struggle to create professional, ATS-optimized resumes that stand out to recruiters.

Key Pain Points:
- Manual formatting is time-consuming
- Lack of industry-specific templates
- No AI-powered content suggestions
- Poor ATS compatibility

Target Users:
- Job seekers
- Career changers
- Recent graduates

Success Metrics:
- Resume creation time < 10 minutes
- 80%+ ATS pass rate
- User satisfaction > 4.5/5`;

  return (
    <PremiumLayout 
      currentStep={1}
      buildPanelContent={<BuildPanel step={1} artifactContent={artifactContent} />}
    >
      <div>
        <h2>Define the Problem</h2>
        <p>Identify the core problem your AI Resume Builder will solve.</p>
        <div style={{ background: '#f9fafb', padding: '16px', borderRadius: '8px', marginTop: '16px' }}>
          <pre style={{ margin: 0, whiteSpace: 'pre-wrap', fontFamily: 'monospace', fontSize: '14px' }}>{artifactContent}</pre>
        </div>
      </div>
    </PremiumLayout>
  );
}
