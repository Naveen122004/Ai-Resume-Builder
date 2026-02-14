import React from 'react';
import PremiumLayout from '../../components/PremiumLayout';
import BuildPanel from '../../components/BuildPanel';

export default function HLD() {
  const artifactContent = `High-Level Design: AI Resume Builder

Core Modules:

1. User Management
   - Authentication (JWT)
   - Profile storage
   - Subscription tiers

2. Resume Builder
   - Template engine
   - Section manager
   - Real-time preview

3. AI Engine
   - Content generator
   - Bullet point optimizer
   - Keyword suggester

4. ATS Scanner
   - Parse resume
   - Score calculation
   - Improvement recommendations

5. Export System
   - PDF generation
   - DOCX export
   - Plain text format

Data Models:
- User, Resume, Template, Section, ATSScore`;

  return (
    <PremiumLayout 
      currentStep={4}
      buildPanelContent={<BuildPanel step={4} artifactContent={artifactContent} />}
    >
      <div>
        <h2>High-Level Design</h2>
        <p>Define the major system components and their interactions.</p>
        <div style={{ background: '#f9fafb', padding: '16px', borderRadius: '8px', marginTop: '16px' }}>
          <pre style={{ margin: 0, whiteSpace: 'pre-wrap', fontFamily: 'monospace', fontSize: '14px' }}>{artifactContent}</pre>
        </div>
      </div>
    </PremiumLayout>
  );
}
