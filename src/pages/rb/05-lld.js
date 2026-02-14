import React from 'react';
import PremiumLayout from '../../components/PremiumLayout';
import BuildPanel from '../../components/BuildPanel';

export default function LLD() {
  const artifactContent = `Low-Level Design: AI Resume Builder

API Endpoints:

POST /api/auth/register
POST /api/auth/login
GET /api/user/profile

POST /api/resume/create
PUT /api/resume/:id
GET /api/resume/:id
DELETE /api/resume/:id

POST /api/ai/generate-content
POST /api/ai/optimize-bullet
GET /api/ai/keywords

POST /api/ats/scan
GET /api/ats/score/:resumeId

GET /api/templates
POST /api/export/pdf
POST /api/export/docx

Database Schema:
- users (id, email, password_hash, created_at)
- resumes (id, user_id, title, data, template_id)
- templates (id, name, layout, styles)
- ats_scores (id, resume_id, score, suggestions)`;

  return (
    <PremiumLayout 
      currentStep={5}
      buildPanelContent={<BuildPanel step={5} artifactContent={artifactContent} />}
    >
      <div>
        <h2>Low-Level Design</h2>
        <p>Detail the APIs, database schema, and implementation specifics.</p>
        <div style={{ background: '#f9fafb', padding: '16px', borderRadius: '8px', marginTop: '16px' }}>
          <pre style={{ margin: 0, whiteSpace: 'pre-wrap', fontFamily: 'monospace', fontSize: '14px' }}>{artifactContent}</pre>
        </div>
      </div>
    </PremiumLayout>
  );
}
