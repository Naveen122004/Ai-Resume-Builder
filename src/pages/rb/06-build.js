import React from 'react';
import PremiumLayout from '../../components/PremiumLayout';
import BuildPanel from '../../components/BuildPanel';

export default function Build() {
  const artifactContent = `Build Instructions: AI Resume Builder

Phase 1: Core Setup
- Initialize React app
- Setup routing
- Configure Tailwind CSS
- Setup state management

Phase 2: UI Components
- Landing page
- Dashboard
- Resume editor
- Template selector
- Preview panel

Phase 3: Features
- Form inputs for resume sections
- Drag-and-drop section reordering
- Real-time preview
- Template switching
- AI content generation integration

Phase 4: Integration
- Connect to AI API
- Implement ATS scanner
- Add export functionality
- Setup authentication

Deliverable: Working MVP with core features`;

  return (
    <PremiumLayout 
      currentStep={6}
      buildPanelContent={<BuildPanel step={6} artifactContent={artifactContent} />}
    >
      <div>
        <h2>Build Phase</h2>
        <p>Implement the system according to the design specifications.</p>
        <div style={{ background: '#f9fafb', padding: '16px', borderRadius: '8px', marginTop: '16px' }}>
          <pre style={{ margin: 0, whiteSpace: 'pre-wrap', fontFamily: 'monospace', fontSize: '14px' }}>{artifactContent}</pre>
        </div>
      </div>
    </PremiumLayout>
  );
}
