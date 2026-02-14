import React, { useState } from 'react';
import { useRBStore } from '../store/rbStore';

export default function BuildPanel({ step, artifactContent }) {
  const [status, setStatus] = useState('pending');
  const [screenshot, setScreenshot] = useState(null);
  const { uploadArtifact } = useRBStore();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(artifactContent);
    alert('Copied to clipboard!');
  };

  const handleScreenshot = (e) => {
    const file = e.target.files[0];
    if (file) {
      setScreenshot(file);
      uploadArtifact(step, { content: artifactContent, screenshot: file.name, timestamp: Date.now() });
      setStatus('success');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>Build Panel</h3>
      
      <div style={{ background: 'white', padding: '12px', borderRadius: '6px', border: '1px solid #e5e7eb' }}>
        <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '8px' }}>Copy This Into Lovable</div>
        <textarea 
          readOnly 
          value={artifactContent} 
          style={{ width: '100%', height: '120px', padding: '8px', fontSize: '12px', fontFamily: 'monospace', border: '1px solid #e5e7eb', borderRadius: '4px', resize: 'none' }}
        />
        <button 
          onClick={copyToClipboard}
          style={{ marginTop: '8px', width: '100%', padding: '8px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px' }}
        >
          Copy
        </button>
      </div>

      <div style={{ background: 'white', padding: '12px', borderRadius: '6px', border: '1px solid #e5e7eb' }}>
        <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '8px' }}>Build in Lovable</div>
        <a 
          href="https://lovable.dev" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ display: 'block', padding: '8px', background: '#8b5cf6', color: 'white', textAlign: 'center', textDecoration: 'none', borderRadius: '4px', fontSize: '14px' }}
        >
          Open Lovable
        </a>
      </div>

      <div style={{ background: 'white', padding: '12px', borderRadius: '6px', border: '1px solid #e5e7eb' }}>
        <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '8px' }}>Upload Proof</div>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
          <button 
            onClick={() => { setStatus('success'); uploadArtifact(step, { content: artifactContent, status: 'success', timestamp: Date.now() }); }}
            style={{ flex: 1, padding: '8px', background: status === 'success' ? '#22c55e' : '#e5e7eb', color: status === 'success' ? 'white' : '#6b7280', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}
          >
            It Worked
          </button>
          <button 
            onClick={() => setStatus('error')}
            style={{ flex: 1, padding: '8px', background: status === 'error' ? '#ef4444' : '#e5e7eb', color: status === 'error' ? 'white' : '#6b7280', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}
          >
            Error
          </button>
        </div>
        <input 
          type="file" 
          accept="image/*"
          onChange={handleScreenshot}
          style={{ width: '100%', padding: '8px', fontSize: '12px', border: '1px solid #e5e7eb', borderRadius: '4px' }}
        />
        {screenshot && <div style={{ marginTop: '8px', fontSize: '12px', color: '#22c55e' }}>✓ Screenshot uploaded</div>}
      </div>
    </div>
  );
}
