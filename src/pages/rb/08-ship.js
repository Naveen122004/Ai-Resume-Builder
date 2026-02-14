import React from 'react';
import PremiumLayout from '../../components/PremiumLayout';
import BuildPanel from '../../components/BuildPanel';

export default function Ship() {
  const artifactContent = `Deployment Plan: AI Resume Builder

Pre-Deployment:
- Final code review
- Security audit
- Performance optimization
- Documentation update

Deployment Steps:
1. Build production bundle
2. Deploy frontend to Vercel
3. Deploy backend to AWS Lambda
4. Configure DNS and SSL
5. Setup monitoring (Sentry)
6. Enable analytics (Google Analytics)

Post-Deployment:
- Smoke tests
- Monitor error rates
- Check performance metrics
- User feedback collection

Rollback Plan:
- Keep previous version ready
- Database migration rollback script
- Quick revert procedure

Launch Checklist:
✓ All tests passing
✓ Security scan complete
✓ Performance benchmarks met
✓ Documentation complete`;

  return (
    <PremiumLayout 
      currentStep={8}
      buildPanelContent={<BuildPanel step={8} artifactContent={artifactContent} />}
    >
      <div>
        <h2>Ship Phase</h2>
        <p>Deploy the system to production and monitor its performance.</p>
        <div style={{ background: '#f9fafb', padding: '16px', borderRadius: '8px', marginTop: '16px' }}>
          <pre style={{ margin: 0, whiteSpace: 'pre-wrap', fontFamily: 'monospace', fontSize: '14px' }}>{artifactContent}</pre>
        </div>
      </div>
    </PremiumLayout>
  );
}
