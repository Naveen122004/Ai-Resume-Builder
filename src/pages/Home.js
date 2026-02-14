import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fafafa', fontFamily: 'system-ui' }}>
      <div style={{ textAlign: 'center', maxWidth: '600px', padding: '48px' }}>
        <h1 style={{ fontSize: '56px', fontWeight: 700, margin: '0 0 24px 0', color: '#000', lineHeight: 1.2 }}>
          Build a Resume That Gets Read.
        </h1>
        <button 
          onClick={() => navigate('/builder')}
          style={{ padding: '16px 48px', fontSize: '18px', fontWeight: 600, background: '#000', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '32px' }}
        >
          Start Building
        </button>
      </div>
    </div>
  );
}
