import React from 'react';
import ResumePreview from '../components/ResumePreview';
import TemplatePicker from '../components/TemplatePicker';
import ColorPicker from '../components/ColorPicker';
import ExportButtons from '../components/ExportButtons';
import ATSScoreCircle from '../components/ATSScoreCircle';

export default function Preview() {
  return (
    <div style={{ minHeight: 'calc(100vh - 60px)', background: '#f5f5f5', padding: '48px', fontFamily: 'system-ui' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="no-print" style={{ marginBottom: '24px' }}>
          <ATSScoreCircle />
          <TemplatePicker />
          <ColorPicker />
        </div>
        <div className="no-print">
          <ExportButtons />
        </div>
        <ResumePreview />
      </div>
    </div>
  );
}
