import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRBStore } from '../store/rbStore';

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

export default function PremiumLayout({ currentStep, children, buildPanelContent }) {
  const navigate = useNavigate();
  const { canAccessStep, hasArtifact } = useRBStore();
  
  const getStatus = () => {
    const completed = STEPS.filter(s => hasArtifact(s.num)).length;
    if (completed === 8) return 'Complete';
    if (completed > 0) return 'In Progress';
    return 'Not Started';
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', fontFamily: 'system-ui' }}>
      {/* Top Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 24px', background: '#1a1a1a', color: 'white', borderBottom: '1px solid #333' }}>
        <div style={{ fontWeight: 600 }}>AI Resume Builder</div>
        <div style={{ fontSize: '14px' }}>Project 3 — Step {currentStep} of 8</div>
        <div style={{ padding: '4px 12px', background: getStatus() === 'Complete' ? '#22c55e' : getStatus() === 'In Progress' ? '#3b82f6' : '#6b7280', borderRadius: '4px', fontSize: '12px' }}>
          {getStatus()}
        </div>
      </div>

      {/* Context Header */}
      <div style={{ padding: '16px 24px', background: '#f9fafb', borderBottom: '1px solid #e5e7eb' }}>
        <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 700 }}>{STEPS[currentStep - 1]?.label}</h1>
      </div>

      {/* Main Content Area */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Main Workspace (70%) */}
        <div style={{ flex: '0 0 70%', padding: '24px', overflowY: 'auto', background: 'white' }}>
          {children}
        </div>

        {/* Build Panel (30%) */}
        <div style={{ flex: '0 0 30%', padding: '24px', background: '#f9fafb', borderLeft: '1px solid #e5e7eb', overflowY: 'auto' }}>
          {buildPanelContent}
        </div>
      </div>

      {/* Proof Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 24px', background: '#f3f4f6', borderTop: '1px solid #e5e7eb' }}>
        <button 
          onClick={() => {
            const prevStep = STEPS.find(s => s.num === currentStep - 1);
            if (prevStep) navigate(prevStep.path);
          }}
          disabled={currentStep === 1}
          style={{ padding: '8px 16px', background: currentStep === 1 ? '#e5e7eb' : '#3b82f6', color: currentStep === 1 ? '#9ca3af' : 'white', border: 'none', borderRadius: '4px', cursor: currentStep === 1 ? 'not-allowed' : 'pointer' }}
        >
          Previous
        </button>
        
        <button 
          onClick={() => navigate('/rb/proof')}
          style={{ padding: '8px 16px', background: '#10b981', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          View Proof
        </button>
        
        <button 
          onClick={() => {
            const nextStep = STEPS.find(s => s.num === currentStep + 1);
            if (nextStep && canAccessStep(nextStep.num)) navigate(nextStep.path);
          }}
          disabled={!hasArtifact(currentStep) || currentStep === 8}
          style={{ padding: '8px 16px', background: !hasArtifact(currentStep) || currentStep === 8 ? '#e5e7eb' : '#3b82f6', color: !hasArtifact(currentStep) || currentStep === 8 ? '#9ca3af' : 'white', border: 'none', borderRadius: '4px', cursor: !hasArtifact(currentStep) || currentStep === 8 ? 'not-allowed' : 'pointer' }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
