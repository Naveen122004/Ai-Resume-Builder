import React from 'react';
import { useResumeStore } from '../store/resumeStore';
import ResumePreview from '../components/ResumePreview';
import ATSScore from '../components/ATSScore';
import TemplateTabs from '../components/TemplateTabs';
import BulletGuidance from '../components/BulletGuidance';
import ImprovementPanel from '../components/ImprovementPanel';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';

export default function Builder() {
  const { personal, summary, education, experience, links, setPersonal, setSummary, setEducation, setExperience, setLinks, loadSample } = useResumeStore();

  const inputStyle = { width: '100%', padding: '10px', fontSize: '14px', border: '1px solid #ddd', borderRadius: '4px', fontFamily: 'system-ui' };
  const labelStyle = { display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px', color: '#333' };
  const sectionStyle = { marginBottom: '32px', padding: '20px', background: '#fff', border: '1px solid #e0e0e0', borderRadius: '4px' };

  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - 60px)', background: '#fafafa', fontFamily: 'system-ui' }}>
      {/* Left: Form */}
      <div style={{ flex: '0 0 50%', padding: '24px', overflowY: 'auto', maxHeight: 'calc(100vh - 60px)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 700 }}>Resume Builder</h2>
          <button onClick={loadSample} style={{ padding: '8px 16px', fontSize: '13px', background: '#000', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Load Sample Data
          </button>
        </div>

        {/* Personal Info */}
        <div style={sectionStyle}>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 700 }}>Personal Information</h3>
          <div style={{ marginBottom: '12px' }}>
            <label style={labelStyle}>Name</label>
            <input type="text" value={personal.name} onChange={(e) => setPersonal({ ...personal, name: e.target.value })} style={inputStyle} />
          </div>
          <div style={{ marginBottom: '12px' }}>
            <label style={labelStyle}>Email</label>
            <input type="email" value={personal.email} onChange={(e) => setPersonal({ ...personal, email: e.target.value })} style={inputStyle} />
          </div>
          <div style={{ marginBottom: '12px' }}>
            <label style={labelStyle}>Phone</label>
            <input type="tel" value={personal.phone} onChange={(e) => setPersonal({ ...personal, phone: e.target.value })} style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Location</label>
            <input type="text" value={personal.location} onChange={(e) => setPersonal({ ...personal, location: e.target.value })} style={inputStyle} />
          </div>
        </div>

        {/* Summary */}
        <div style={sectionStyle}>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 700 }}>Professional Summary</h3>
          <textarea value={summary} onChange={(e) => setSummary(e.target.value)} rows="4" style={{ ...inputStyle, resize: 'vertical' }} />
        </div>

        {/* Education */}
        <div style={sectionStyle}>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 700 }}>Education</h3>
          {education.map((edu, idx) => (
            <div key={edu.id} style={{ marginBottom: '16px', padding: '12px', background: '#f9f9f9', borderRadius: '4px' }}>
              <div style={{ marginBottom: '12px' }}>
                <label style={labelStyle}>School</label>
                <input type="text" value={edu.school} onChange={(e) => { const updated = [...education]; updated[idx].school = e.target.value; setEducation(updated); }} style={inputStyle} />
              </div>
              <div style={{ marginBottom: '12px' }}>
                <label style={labelStyle}>Degree</label>
                <input type="text" value={edu.degree} onChange={(e) => { const updated = [...education]; updated[idx].degree = e.target.value; setEducation(updated); }} style={inputStyle} />
              </div>
              <div style={{ marginBottom: '12px' }}>
                <label style={labelStyle}>Year</label>
                <input type="text" value={edu.year} onChange={(e) => { const updated = [...education]; updated[idx].year = e.target.value; setEducation(updated); }} style={inputStyle} />
              </div>
              <button onClick={() => setEducation(education.filter((_, i) => i !== idx))} style={{ padding: '6px 12px', fontSize: '12px', background: '#fff', border: '1px solid #ddd', borderRadius: '4px', cursor: 'pointer' }}>Remove</button>
            </div>
          ))}
          <button onClick={() => setEducation([...education, { school: '', degree: '', year: '', id: Date.now() }])} style={{ padding: '8px 16px', fontSize: '13px', background: '#000', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Add Education
          </button>
        </div>

        {/* Experience */}
        <div style={sectionStyle}>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 700 }}>Experience</h3>
          {experience.map((exp, idx) => (
            <div key={exp.id} style={{ marginBottom: '16px', padding: '12px', background: '#f9f9f9', borderRadius: '4px' }}>
              <div style={{ marginBottom: '12px' }}>
                <label style={labelStyle}>Company</label>
                <input type="text" value={exp.company} onChange={(e) => { const updated = [...experience]; updated[idx].company = e.target.value; setExperience(updated); }} style={inputStyle} />
              </div>
              <div style={{ marginBottom: '12px' }}>
                <label style={labelStyle}>Role</label>
                <input type="text" value={exp.role} onChange={(e) => { const updated = [...experience]; updated[idx].role = e.target.value; setExperience(updated); }} style={inputStyle} />
              </div>
              <div style={{ marginBottom: '12px' }}>
                <label style={labelStyle}>Duration</label>
                <input type="text" value={exp.duration} onChange={(e) => { const updated = [...experience]; updated[idx].duration = e.target.value; setExperience(updated); }} style={inputStyle} />
              </div>
              <div style={{ marginBottom: '12px' }}>
                <label style={labelStyle}>Description</label>
                <textarea value={exp.description} onChange={(e) => { const updated = [...experience]; updated[idx].description = e.target.value; setExperience(updated); }} rows="3" style={{ ...inputStyle, resize: 'vertical' }} />
                <BulletGuidance text={exp.description} />
              </div>
              <button onClick={() => setExperience(experience.filter((_, i) => i !== idx))} style={{ padding: '6px 12px', fontSize: '12px', background: '#fff', border: '1px solid #ddd', borderRadius: '4px', cursor: 'pointer' }}>Remove</button>
            </div>
          ))}
          <button onClick={() => setExperience([...experience, { company: '', role: '', duration: '', description: '', id: Date.now() }])} style={{ padding: '8px 16px', fontSize: '13px', background: '#000', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Add Experience
          </button>
        </div>

        {/* Projects */}
        <ProjectsSection />

        {/* Skills */}
        <SkillsSection />

        {/* Links */}
        <div style={sectionStyle}>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 700 }}>Links</h3>
          <div style={{ marginBottom: '12px' }}>
            <label style={labelStyle}>GitHub</label>
            <input type="text" value={links.github} onChange={(e) => setLinks({ ...links, github: e.target.value })} placeholder="github.com/username" style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>LinkedIn</label>
            <input type="text" value={links.linkedin} onChange={(e) => setLinks({ ...links, linkedin: e.target.value })} placeholder="linkedin.com/in/username" style={inputStyle} />
          </div>
        </div>
      </div>

      {/* Right: Live Preview */}
      <div style={{ flex: '0 0 50%', padding: '24px', overflowY: 'auto', maxHeight: 'calc(100vh - 60px)', background: '#f5f5f5' }}>
        <h2 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: 700, color: '#666' }}>Live Preview</h2>
        <TemplateTabs />
        <ATSScore />
        <ImprovementPanel />
        <ResumePreview />
      </div>
    </div>
  );
}
