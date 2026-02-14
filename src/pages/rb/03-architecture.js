import React from 'react';
import PremiumLayout from '../../components/PremiumLayout';
import BuildPanel from '../../components/BuildPanel';

export default function Architecture() {
  const artifactContent = `System Architecture: AI Resume Builder

Frontend:
- React + TypeScript
- Tailwind CSS
- React Router
- Zustand (state)

Backend:
- Node.js + Express
- PostgreSQL (user data)
- Redis (caching)

AI Services:
- OpenAI GPT-4 (content generation)
- Custom ATS parser

Infrastructure:
- Vercel (frontend)
- AWS Lambda (backend)
- S3 (resume storage)
- CloudFront (CDN)

Key Flows:
1. User input → AI processing → Resume generation
2. Template selection → Customization → Export
3. ATS scan → Optimization suggestions`;

  return (
    <PremiumLayout 
      currentStep={3}
      buildPanelContent={<BuildPanel step={3} artifactContent={artifactContent} />}
    >
      <div>
        <h2>System Architecture</h2>
        <p>Design the high-level system architecture and technology stack.</p>
        <div style={{ background: '#f9fafb', padding: '16px', borderRadius: '8px', marginTop: '16px' }}>
          <pre style={{ margin: 0, whiteSpace: 'pre-wrap', fontFamily: 'monospace', fontSize: '14px' }}>{artifactContent}</pre>
        </div>
      </div>
    </PremiumLayout>
  );
}
