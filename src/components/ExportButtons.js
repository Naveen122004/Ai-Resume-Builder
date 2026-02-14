import React, { useState } from 'react';
import { useResumeStore } from '../store/resumeStore';

export default function ExportButtons() {
  const { personal, experience, projects } = useResumeStore();
  const [showWarning, setShowWarning] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const isIncomplete = !personal.name || (experience.length === 0 && projects.length === 0);

  const handlePrint = () => {
    if (isIncomplete) {
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 3000);
    }
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    window.print();
  };



  return (
    <div style={{ marginBottom: '24px' }}>
      {showToast && (
        <div style={{ position: 'fixed', top: '20px', right: '20px', padding: '16px 24px', background: '#10b981', color: '#fff', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', fontSize: '14px', fontWeight: 500, zIndex: 1000 }}>
          PDF export ready! Check your downloads.
        </div>
      )}
      {showWarning && (
        <div style={{ padding: '12px', background: '#fef3c7', border: '1px solid #fbbf24', borderRadius: '4px', marginBottom: '12px', fontSize: '13px', color: '#92400e' }}>
          Your resume may look incomplete.
        </div>
      )}
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
        <button 
          onClick={handlePrint}
          style={{ padding: '12px 24px', fontSize: '14px', fontWeight: 600, background: '#000', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Download PDF
        </button>
      </div>
    </div>
  );
}
