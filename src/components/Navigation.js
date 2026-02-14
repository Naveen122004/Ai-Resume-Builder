import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const navStyle = { padding: '8px 20px', fontSize: '14px', fontWeight: 500, background: 'transparent', border: 'none', cursor: 'pointer', color: '#666', transition: 'color 0.2s' };
  const activeStyle = { ...navStyle, color: '#000', fontWeight: 600 };

  return (
    <nav className="no-print" style={{ background: '#fff', borderBottom: '1px solid #e0e0e0', padding: '0 24px', display: 'flex', alignItems: 'center', height: '60px', fontFamily: 'system-ui' }}>
      <div style={{ fontSize: '18px', fontWeight: 700, marginRight: '48px', cursor: 'pointer' }} onClick={() => navigate('/')}>
        AI Resume Builder
      </div>
      <button onClick={() => navigate('/builder')} style={location.pathname === '/builder' ? activeStyle : navStyle}>
        Builder
      </button>
      <button onClick={() => navigate('/preview')} style={location.pathname === '/preview' ? activeStyle : navStyle}>
        Preview
      </button>
      <button onClick={() => navigate('/proof')} style={location.pathname === '/proof' ? activeStyle : navStyle}>
        Proof
      </button>
    </nav>
  );
}
