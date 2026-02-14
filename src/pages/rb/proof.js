import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRBStore } from '../../store/rbStore';

const STEPS = [
  { num: 1, path: '/rb/01-problem', label: 'Problem' },
  { num: 2, path: '/rb/02-market', label: 'Market' },
  { num: 3, path: '/rb/03-architecture', label: 'Architecture' },
  { num: 4, path: '/rb/04-hld', label: 'HLD' },
  { num: 5, path: '/rb/05-lld', label: 'LLD' },
  { num: 6, path: '/rb/06-build', label: 'Build' },
  { num: 7, path: '/rb/07-test', label: 'Test' },
  { num: 8, path: '/rb/08-ship', label: 'Ship' }
];

export default function Proof() {
  const navigate = useNavigate();
  const { hasArtifact, lovableLink, githubLink, deployLink, setLovableLink, setGithubLink, setDeployLink } = useRBStore();

  const completedSteps = STEPS.filter(s => hasArtifact(s.num)).length;
  const allComplete = completedSteps === 8;

  const copyFinalSubmission = () => {
    const submission = `AI Resume Builder - Final Submission

Project: AI Resume Builder (Build Track)
Completed Steps: ${completedSteps}/8

Links:
- Lovable: ${lovableLink || 'Not provided'}
- GitHub: ${githubLink || 'Not provided'}
- Deploy: ${deployLink || 'Not provided'}

Step Status:
${STEPS.map(s => `${s.num}. ${s.label}: ${hasArtifact(s.num) ? '✓ Complete' : '✗ Incomplete'}`).join('\n')}

Submitted: ${new Date().toLocaleString()}`;

    navigator.clipboard.writeText(submission);
    alert('Final submission copied to clipboard!');
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f9fafb', fontFamily: 'system-ui' }}>
      {/* Header */}
      <div style={{ background: '#1a1a1a', color: 'white', padding: '24px' }}>
        <h1 style={{ margin: 0, fontSize: '32px', fontWeight: 700 }}>AI Resume Builder - Proof of Completion</h1>
        <p style={{ margin: '8px 0 0 0', color: '#9ca3af' }}>Project 3 — Build Track</p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px' }}>
        {/* Progress Overview */}
        <div style={{ background: 'white', padding: '24px', borderRadius: '8px', marginBottom: '24px', border: '1px solid #e5e7eb' }}>
          <h2 style={{ margin: '0 0 16px 0', fontSize: '20px', fontWeight: 600 }}>Progress Overview</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            <div style={{ flex: 1, height: '8px', background: '#e5e7eb', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: `${(completedSteps / 8) * 100}%`, height: '100%', background: '#3b82f6', transition: 'width 0.3s' }} />
            </div>
            <div style={{ fontSize: '18px', fontWeight: 600, color: allComplete ? '#22c55e' : '#3b82f6' }}>
              {completedSteps}/8
            </div>
          </div>
          {allComplete && (
            <div style={{ padding: '12px', background: '#dcfce7', color: '#166534', borderRadius: '6px', fontSize: '14px' }}>
              🎉 Congratulations! All steps completed. Submit your final links below.
            </div>
          )}
        </div>

        {/* Step Status Grid */}
        <div style={{ background: 'white', padding: '24px', borderRadius: '8px', marginBottom: '24px', border: '1px solid #e5e7eb' }}>
          <h2 style={{ margin: '0 0 16px 0', fontSize: '20px', fontWeight: 600 }}>Step Status</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px' }}>
            {STEPS.map(step => (
              <div 
                key={step.num}
                onClick={() => navigate(step.path)}
                style={{ 
                  padding: '16px', 
                  background: hasArtifact(step.num) ? '#dcfce7' : '#f9fafb', 
                  border: `2px solid ${hasArtifact(step.num) ? '#22c55e' : '#e5e7eb'}`,
                  borderRadius: '6px',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>Step {step.num}</div>
                    <div style={{ fontSize: '16px', fontWeight: 600 }}>{step.label}</div>
                  </div>
                  <div style={{ fontSize: '24px' }}>
                    {hasArtifact(step.num) ? '✓' : '○'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Submission Links */}
        <div style={{ background: 'white', padding: '24px', borderRadius: '8px', marginBottom: '24px', border: '1px solid #e5e7eb' }}>
          <h2 style={{ margin: '0 0 16px 0', fontSize: '20px', fontWeight: 600 }}>Submission Links</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, marginBottom: '8px' }}>Lovable Link</label>
              <input 
                type="url"
                value={lovableLink}
                onChange={(e) => setLovableLink(e.target.value)}
                placeholder="https://lovable.dev/projects/..."
                style={{ width: '100%', padding: '10px', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '14px' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, marginBottom: '8px' }}>GitHub Link</label>
              <input 
                type="url"
                value={githubLink}
                onChange={(e) => setGithubLink(e.target.value)}
                placeholder="https://github.com/username/repo"
                style={{ width: '100%', padding: '10px', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '14px' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, marginBottom: '8px' }}>Deploy Link</label>
              <input 
                type="url"
                value={deployLink}
                onChange={(e) => setDeployLink(e.target.value)}
                placeholder="https://your-app.vercel.app"
                style={{ width: '100%', padding: '10px', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '14px' }}
              />
            </div>
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '12px' }}>
          <button 
            onClick={copyFinalSubmission}
            disabled={!allComplete}
            style={{ 
              flex: 1,
              padding: '16px', 
              background: allComplete ? '#3b82f6' : '#e5e7eb', 
              color: allComplete ? 'white' : '#9ca3af', 
              border: 'none', 
              borderRadius: '6px', 
              fontSize: '16px', 
              fontWeight: 600,
              cursor: allComplete ? 'pointer' : 'not-allowed'
            }}
          >
            Copy Final Submission
          </button>
          <button 
            onClick={() => navigate('/rb/01-problem')}
            style={{ 
              padding: '16px 32px', 
              background: 'white', 
              color: '#3b82f6', 
              border: '2px solid #3b82f6', 
              borderRadius: '6px', 
              fontSize: '16px', 
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            Back to Steps
          </button>
        </div>
      </div>
    </div>
  );
}
