import React, { useState } from 'react';
import { useRBStore } from '../store/rbStore';

const isValidURL = (str) => {
  try {
    const url = new URL(str);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
};

export default function Proof() {
  const {
    lovableLink,
    githubLink,
    deployLink,
    setLovableLink,
    setGithubLink,
    setDeployLink,
    getAllSteps,
    getStepStatus,
    setStepComplete,
    checklistResults,
    setChecklistResult,
    isShipped,
    getFinalSubmission,
    allStepsCompleted,
    allChecklistPassed,
    allLinksProvided
  } = useRBStore();

  const [lovableInput, setLovableInput] = useState(lovableLink);
  const [githubInput, setGithubInput] = useState(githubLink);
  const [deployInput, setDeployInput] = useState(deployLink);
  const [copySuccess, setCopySuccess] = useState(false);

  const steps = getAllSteps();
  const shipped = isShipped();

  const handleSaveLinks = () => {
    if (isValidURL(lovableInput)) setLovableLink(lovableInput);
    if (isValidURL(githubInput)) setGithubLink(githubInput);
    if (isValidURL(deployInput)) setDeployLink(deployInput);
  };

  const handleCopySubmission = () => {
    const submission = getFinalSubmission();
    navigator.clipboard.writeText(submission);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const completedSteps = steps.filter(s => getStepStatus(s.id)).length;
  const passedTests = Object.values(checklistResults).filter(Boolean).length;

  return (
    <div style={{ minHeight: 'calc(100vh - 60px)', background: '#fafafa', padding: '48px 24px', fontFamily: 'system-ui' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        
        {/* Header with Status */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 700, margin: 0 }}>Proof of Work</h1>
          <div style={{
            padding: '8px 16px',
            background: shipped ? '#000' : '#f0f0f0',
            color: shipped ? '#fff' : '#666',
            borderRadius: '4px',
            fontSize: '14px',
            fontWeight: 600
          }}>
            {shipped ? 'Shipped' : 'In Progress'}
          </div>
        </div>

        {/* Shipped Confirmation */}
        {shipped && (
          <div style={{
            background: '#fff',
            padding: '24px',
            border: '1px solid #e0e0e0',
            borderRadius: '4px',
            marginBottom: '24px',
            textAlign: 'center'
          }}>
            <p style={{ fontSize: '18px', fontWeight: 600, margin: 0, color: '#000' }}>
              Project 3 Shipped Successfully.
            </p>
          </div>
        )}

        {/* A) Step Completion Overview */}
        <div style={{ background: '#fff', padding: '32px', border: '1px solid #e0e0e0', borderRadius: '4px', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '24px' }}>Step Completion Overview</h2>
          
          <div style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
            {completedSteps} of {steps.length} steps completed
          </div>

          <div style={{ display: 'grid', gap: '12px' }}>
            {steps.map(step => {
              const completed = getStepStatus(step.id);
              return (
                <div key={step.id} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  background: '#fafafa',
                  border: '1px solid #e0e0e0',
                  borderRadius: '4px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '14px', color: '#999', fontWeight: 600 }}>Step {step.id}</span>
                    <span style={{ fontSize: '14px', fontWeight: 500 }}>{step.name}</span>
                  </div>
                  <button
                    onClick={() => setStepComplete(step.id, !completed)}
                    style={{
                      padding: '6px 12px',
                      background: completed ? '#000' : '#fff',
                      color: completed ? '#fff' : '#000',
                      border: '1px solid #000',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    {completed ? '✓ Done' : 'Mark Done'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Checklist Status */}
        <div style={{ background: '#fff', padding: '32px', border: '1px solid #e0e0e0', borderRadius: '4px', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '24px' }}>Test Checklist Status</h2>
          
          <div style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
            {passedTests} of 10 tests passed
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px' }}>
            {Array.from({ length: 10 }, (_, i) => i + 1).map(testId => {
              const passed = checklistResults[testId] || false;
              return (
                <button
                  key={testId}
                  onClick={() => setChecklistResult(testId, !passed)}
                  style={{
                    padding: '12px',
                    background: passed ? '#000' : '#fafafa',
                    color: passed ? '#fff' : '#000',
                    border: '1px solid #e0e0e0',
                    borderRadius: '4px',
                    fontSize: '13px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  {passed ? '✓' : '○'} Test {testId}
                </button>
              );
            })}
          </div>
        </div>

        {/* B) Artifact Collection */}
        <div style={{ background: '#fff', padding: '32px', border: '1px solid #e0e0e0', borderRadius: '4px', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '8px' }}>Artifact Collection</h2>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '24px' }}>Required to mark Shipped</p>

          <div style={{ display: 'grid', gap: '20px' }}>
            {/* Lovable Link */}
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>
                Lovable Project Link *
              </label>
              <input
                type="url"
                value={lovableInput}
                onChange={(e) => setLovableInput(e.target.value)}
                onBlur={handleSaveLinks}
                placeholder="https://lovable.dev/projects/..."
                style={{
                  width: '100%',
                  padding: '12px',
                  fontSize: '14px',
                  border: `1px solid ${lovableLink && isValidURL(lovableLink) ? '#4ade80' : '#e0e0e0'}`,
                  borderRadius: '4px',
                  fontFamily: 'system-ui',
                  boxSizing: 'border-box'
                }}
              />
              {lovableInput && !isValidURL(lovableInput) && (
                <span style={{ fontSize: '12px', color: '#ef4444', marginTop: '4px', display: 'block' }}>
                  Please enter a valid URL
                </span>
              )}
            </div>

            {/* GitHub Link */}
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>
                GitHub Repository Link *
              </label>
              <input
                type="url"
                value={githubInput}
                onChange={(e) => setGithubInput(e.target.value)}
                onBlur={handleSaveLinks}
                placeholder="https://github.com/username/repo"
                style={{
                  width: '100%',
                  padding: '12px',
                  fontSize: '14px',
                  border: `1px solid ${githubLink && isValidURL(githubLink) ? '#4ade80' : '#e0e0e0'}`,
                  borderRadius: '4px',
                  fontFamily: 'system-ui',
                  boxSizing: 'border-box'
                }}
              />
              {githubInput && !isValidURL(githubInput) && (
                <span style={{ fontSize: '12px', color: '#ef4444', marginTop: '4px', display: 'block' }}>
                  Please enter a valid URL
                </span>
              )}
            </div>

            {/* Deploy Link */}
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>
                Deployed URL *
              </label>
              <input
                type="url"
                value={deployInput}
                onChange={(e) => setDeployInput(e.target.value)}
                onBlur={handleSaveLinks}
                placeholder="https://your-app.vercel.app"
                style={{
                  width: '100%',
                  padding: '12px',
                  fontSize: '14px',
                  border: `1px solid ${deployLink && isValidURL(deployLink) ? '#4ade80' : '#e0e0e0'}`,
                  borderRadius: '4px',
                  fontFamily: 'system-ui',
                  boxSizing: 'border-box'
                }}
              />
              {deployInput && !isValidURL(deployInput) && (
                <span style={{ fontSize: '12px', color: '#ef4444', marginTop: '4px', display: 'block' }}>
                  Please enter a valid URL
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Final Submission Export */}
        <div style={{ background: '#fff', padding: '32px', border: '1px solid #e0e0e0', borderRadius: '4px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '24px' }}>Final Submission</h2>
          
          {!allStepsCompleted() && (
            <div style={{ padding: '12px', background: '#fef3c7', border: '1px solid #fbbf24', borderRadius: '4px', marginBottom: '16px', fontSize: '14px' }}>
              ⚠️ Complete all 8 steps to enable submission
            </div>
          )}
          
          {!allChecklistPassed() && (
            <div style={{ padding: '12px', background: '#fef3c7', border: '1px solid #fbbf24', borderRadius: '4px', marginBottom: '16px', fontSize: '14px' }}>
              ⚠️ Pass all 10 checklist tests to enable submission
            </div>
          )}
          
          {!allLinksProvided() && (
            <div style={{ padding: '12px', background: '#fef3c7', border: '1px solid #fbbf24', borderRadius: '4px', marginBottom: '16px', fontSize: '14px' }}>
              ⚠️ Provide all 3 proof links to enable submission
            </div>
          )}

          <button
            onClick={handleCopySubmission}
            disabled={!shipped}
            style={{
              width: '100%',
              padding: '16px',
              background: shipped ? '#000' : '#e0e0e0',
              color: shipped ? '#fff' : '#999',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              fontWeight: 600,
              cursor: shipped ? 'pointer' : 'not-allowed',
              transition: 'all 0.2s'
            }}
          >
            {copySuccess ? '✓ Copied to Clipboard' : 'Copy Final Submission'}
          </button>

          {shipped && (
            <div style={{
              marginTop: '24px',
              padding: '16px',
              background: '#fafafa',
              border: '1px solid #e0e0e0',
              borderRadius: '4px',
              fontSize: '13px',
              fontFamily: 'monospace',
              whiteSpace: 'pre-wrap',
              lineHeight: '1.6'
            }}>
              {getFinalSubmission()}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
