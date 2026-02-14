import React from 'react';
import { useResumeStore } from '../store/resumeStore';

const ClassicTemplate = ({ data, accentColor }) => (
  <div className="resume-preview" style={{ background: '#fff', padding: '48px', fontFamily: 'Georgia, serif', color: '#000', minHeight: '100%', border: '1px solid #e0e0e0' }}>
    <div style={{ borderBottom: `2px solid ${accentColor}`, paddingBottom: '16px', marginBottom: '24px' }}>
      <h1 style={{ margin: 0, fontSize: '32px', fontWeight: 700, color: accentColor }}>{data.personal.name || 'Your Name'}</h1>
      <div style={{ marginTop: '8px', fontSize: '14px', color: '#333' }}>
        {data.personal.email && <span>{data.personal.email}</span>}
        {data.personal.phone && <span style={{ marginLeft: '16px' }}>{data.personal.phone}</span>}
        {data.personal.location && <span style={{ marginLeft: '16px' }}>{data.personal.location}</span>}
      </div>
      {(data.links.github || data.links.linkedin) && (
        <div style={{ marginTop: '4px', fontSize: '14px', color: '#333' }}>
          {data.links.github && <span>{data.links.github}</span>}
          {data.links.linkedin && <span style={{ marginLeft: '16px' }}>{data.links.linkedin}</span>}
        </div>
      )}
    </div>

    {data.summary && (
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '1px', color: accentColor }}>Summary</h2>
        <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6 }}>{data.summary}</p>
      </div>
    )}

    {data.experience.length > 0 && (
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 12px 0', textTransform: 'uppercase', letterSpacing: '1px', color: accentColor, borderBottom: `1px solid ${accentColor}`, paddingBottom: '4px' }}>Experience</h2>
        {data.experience.map(exp => (
          <div key={exp.id} style={{ marginBottom: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <strong style={{ fontSize: '15px' }}>{exp.role}</strong>
              <span style={{ fontSize: '14px', color: '#666' }}>{exp.duration}</span>
            </div>
            <div style={{ fontSize: '14px', fontStyle: 'italic', marginBottom: '4px' }}>{exp.company}</div>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6 }}>{exp.description}</p>
          </div>
        ))}
      </div>
    )}

    {data.projects.length > 0 && (
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 12px 0', textTransform: 'uppercase', letterSpacing: '1px', color: accentColor, borderBottom: `1px solid ${accentColor}`, paddingBottom: '4px' }}>Projects</h2>
        {data.projects.map(proj => (
          <div key={proj.id} style={{ marginBottom: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
              <strong style={{ fontSize: '15px' }}>{proj.title}</strong>
              <div style={{ display: 'flex', gap: '8px' }}>
                {proj.liveUrl && <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: '12px', color: accentColor, textDecoration: 'none' }}>🔗</a>}
                {proj.githubUrl && <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: '12px', color: accentColor, textDecoration: 'none' }}>⚙️</a>}
              </div>
            </div>
            {proj.description && <p style={{ margin: '0 0 8px 0', fontSize: '14px', lineHeight: 1.6 }}>{proj.description}</p>}
            {proj.techStack?.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {proj.techStack.map((tech, idx) => (
                  <span key={idx} style={{ padding: '2px 8px', background: '#f0f0f0', border: '1px solid #ddd', borderRadius: '12px', fontSize: '11px' }}>{tech}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    )}

    {data.education.length > 0 && (
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 12px 0', textTransform: 'uppercase', letterSpacing: '1px', color: accentColor, borderBottom: `1px solid ${accentColor}`, paddingBottom: '4px' }}>Education</h2>
        {data.education.map(edu => (
          <div key={edu.id} style={{ marginBottom: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <strong style={{ fontSize: '15px' }}>{edu.school}</strong>
              <span style={{ fontSize: '14px', color: '#666' }}>{edu.year}</span>
            </div>
            <div style={{ fontSize: '14px' }}>{edu.degree}</div>
          </div>
        ))}
      </div>
    )}

    {((data.skillCategories?.technical?.length || 0) > 0 || (data.skillCategories?.soft?.length || 0) > 0 || (data.skillCategories?.tools?.length || 0) > 0) && (
      <div>
        <h2 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 12px 0', textTransform: 'uppercase', letterSpacing: '1px', color: accentColor, borderBottom: `1px solid ${accentColor}`, paddingBottom: '4px' }}>Skills</h2>
        {(data.skillCategories?.technical?.length || 0) > 0 && (
          <div style={{ marginBottom: '12px' }}>
            <strong style={{ fontSize: '13px', display: 'block', marginBottom: '6px' }}>Technical Skills</strong>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {data.skillCategories.technical.map((skill, idx) => (
                <span key={idx} style={{ padding: '4px 10px', background: accentColor, color: '#fff', borderRadius: '12px', fontSize: '12px' }}>{skill}</span>
              ))}
            </div>
          </div>
        )}
        {(data.skillCategories?.soft?.length || 0) > 0 && (
          <div style={{ marginBottom: '12px' }}>
            <strong style={{ fontSize: '13px', display: 'block', marginBottom: '6px' }}>Soft Skills</strong>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {data.skillCategories.soft.map((skill, idx) => (
                <span key={idx} style={{ padding: '4px 10px', background: accentColor, color: '#fff', borderRadius: '12px', fontSize: '12px' }}>{skill}</span>
              ))}
            </div>
          </div>
        )}
        {(data.skillCategories?.tools?.length || 0) > 0 && (
          <div>
            <strong style={{ fontSize: '13px', display: 'block', marginBottom: '6px' }}>Tools & Technologies</strong>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {data.skillCategories.tools.map((skill, idx) => (
                <span key={idx} style={{ padding: '4px 10px', background: accentColor, color: '#fff', borderRadius: '12px', fontSize: '12px' }}>{skill}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    )}
  </div>
);

const ModernTemplate = ({ data, accentColor }) => (
  <div className="resume-preview" style={{ background: '#fff', display: 'flex', minHeight: '100%', border: '1px solid #e0e0e0', fontFamily: 'system-ui' }}>
    <div style={{ width: '35%', background: accentColor, color: '#fff', padding: '32px 24px' }}>
      <h1 style={{ margin: '0 0 8px 0', fontSize: '24px', fontWeight: 700 }}>{data.personal.name || 'Your Name'}</h1>
      <div style={{ fontSize: '12px', marginBottom: '24px', opacity: 0.9 }}>
        {data.personal.email && <div>{data.personal.email}</div>}
        {data.personal.phone && <div>{data.personal.phone}</div>}
        {data.personal.location && <div>{data.personal.location}</div>}
      </div>

      {(data.links.github || data.links.linkedin) && (
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ fontSize: '14px', fontWeight: 700, margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>Links</h3>
          {data.links.github && <div style={{ fontSize: '11px', marginBottom: '4px', opacity: 0.9 }}>{data.links.github}</div>}
          {data.links.linkedin && <div style={{ fontSize: '11px', opacity: 0.9 }}>{data.links.linkedin}</div>}
        </div>
      )}

      {((data.skillCategories?.technical?.length || 0) > 0 || (data.skillCategories?.soft?.length || 0) > 0 || (data.skillCategories?.tools?.length || 0) > 0) && (
        <div>
          <h3 style={{ fontSize: '14px', fontWeight: 700, margin: '0 0 12px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>Skills</h3>
          {(data.skillCategories?.technical?.length || 0) > 0 && (
            <div style={{ marginBottom: '12px' }}>
              <div style={{ fontSize: '11px', fontWeight: 600, marginBottom: '6px', opacity: 0.8 }}>Technical</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                {data.skillCategories.technical.map((skill, idx) => (
                  <span key={idx} style={{ padding: '3px 8px', background: 'rgba(255,255,255,0.2)', borderRadius: '10px', fontSize: '10px' }}>{skill}</span>
                ))}
              </div>
            </div>
          )}
          {(data.skillCategories?.soft?.length || 0) > 0 && (
            <div style={{ marginBottom: '12px' }}>
              <div style={{ fontSize: '11px', fontWeight: 600, marginBottom: '6px', opacity: 0.8 }}>Soft Skills</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                {data.skillCategories.soft.map((skill, idx) => (
                  <span key={idx} style={{ padding: '3px 8px', background: 'rgba(255,255,255,0.2)', borderRadius: '10px', fontSize: '10px' }}>{skill}</span>
                ))}
              </div>
            </div>
          )}
          {(data.skillCategories?.tools?.length || 0) > 0 && (
            <div>
              <div style={{ fontSize: '11px', fontWeight: 600, marginBottom: '6px', opacity: 0.8 }}>Tools</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                {data.skillCategories.tools.map((skill, idx) => (
                  <span key={idx} style={{ padding: '3px 8px', background: 'rgba(255,255,255,0.2)', borderRadius: '10px', fontSize: '10px' }}>{skill}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>

    <div style={{ flex: 1, padding: '32px' }}>
      {data.summary && (
        <div style={{ marginBottom: '24px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '1px', color: accentColor }}>Summary</h2>
          <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.6, color: '#333' }}>{data.summary}</p>
        </div>
      )}

      {data.experience.length > 0 && (
        <div style={{ marginBottom: '24px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 12px 0', textTransform: 'uppercase', letterSpacing: '1px', color: accentColor }}>Experience</h2>
          {data.experience.map(exp => (
            <div key={exp.id} style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <strong style={{ fontSize: '14px' }}>{exp.role}</strong>
                <span style={{ fontSize: '12px', color: '#666' }}>{exp.duration}</span>
              </div>
              <div style={{ fontSize: '13px', fontStyle: 'italic', marginBottom: '4px', color: '#666' }}>{exp.company}</div>
              <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.6, color: '#333' }}>{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {data.projects.length > 0 && (
        <div style={{ marginBottom: '24px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 12px 0', textTransform: 'uppercase', letterSpacing: '1px', color: accentColor }}>Projects</h2>
          {data.projects.map(proj => (
            <div key={proj.id} style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                <strong style={{ fontSize: '14px' }}>{proj.title}</strong>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {proj.liveUrl && <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: '12px', color: accentColor, textDecoration: 'none' }}>🔗</a>}
                  {proj.githubUrl && <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: '12px', color: accentColor, textDecoration: 'none' }}>⚙️</a>}
                </div>
              </div>
              {proj.description && <p style={{ margin: '0 0 8px 0', fontSize: '13px', lineHeight: 1.6, color: '#333' }}>{proj.description}</p>}
              {proj.techStack?.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                  {proj.techStack.map((tech, idx) => (
                    <span key={idx} style={{ padding: '2px 8px', background: '#f0f0f0', border: '1px solid #ddd', borderRadius: '10px', fontSize: '10px' }}>{tech}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {data.education.length > 0 && (
        <div>
          <h2 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 12px 0', textTransform: 'uppercase', letterSpacing: '1px', color: accentColor }}>Education</h2>
          {data.education.map(edu => (
            <div key={edu.id} style={{ marginBottom: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <strong style={{ fontSize: '14px' }}>{edu.school}</strong>
                <span style={{ fontSize: '12px', color: '#666' }}>{edu.year}</span>
              </div>
              <div style={{ fontSize: '13px', color: '#666' }}>{edu.degree}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

const MinimalTemplate = ({ data, accentColor }) => (
  <div className="resume-preview" style={{ background: '#fff', padding: '64px', fontFamily: 'system-ui', color: '#000', minHeight: '100%', border: '1px solid #e0e0e0' }}>
    <div style={{ marginBottom: '48px' }}>
      <h1 style={{ margin: '0 0 4px 0', fontSize: '36px', fontWeight: 300, color: accentColor }}>{data.personal.name || 'Your Name'}</h1>
      <div style={{ fontSize: '13px', color: '#666' }}>
        {data.personal.email && <span>{data.personal.email}</span>}
        {data.personal.phone && <span style={{ marginLeft: '12px' }}>{data.personal.phone}</span>}
        {data.personal.location && <span style={{ marginLeft: '12px' }}>{data.personal.location}</span>}
      </div>
      {(data.links.github || data.links.linkedin) && (
        <div style={{ marginTop: '4px', fontSize: '13px', color: '#666' }}>
          {data.links.github && <span>{data.links.github}</span>}
          {data.links.linkedin && <span style={{ marginLeft: '12px' }}>{data.links.linkedin}</span>}
        </div>
      )}
    </div>

    {data.summary && (
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '14px', fontWeight: 400, margin: '0 0 12px 0', fontStyle: 'italic', color: accentColor }}>summary</h2>
        <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.8, color: '#333' }}>{data.summary}</p>
      </div>
    )}

    {data.experience.length > 0 && (
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '14px', fontWeight: 400, margin: '0 0 16px 0', fontStyle: 'italic', color: accentColor }}>experience</h2>
        {data.experience.map(exp => (
          <div key={exp.id} style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <strong style={{ fontSize: '15px', fontWeight: 500 }}>{exp.role}</strong>
              <span style={{ fontSize: '13px', color: '#999' }}>{exp.duration}</span>
            </div>
            <div style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>{exp.company}</div>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.8, color: '#333' }}>{exp.description}</p>
          </div>
        ))}
      </div>
    )}

    {data.projects.length > 0 && (
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '14px', fontWeight: 400, margin: '0 0 16px 0', fontStyle: 'italic', color: accentColor }}>projects</h2>
        {data.projects.map(proj => (
          <div key={proj.id} style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
              <strong style={{ fontSize: '15px', fontWeight: 500 }}>{proj.title}</strong>
              <div style={{ display: 'flex', gap: '8px' }}>
                {proj.liveUrl && <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: '12px', color: accentColor, textDecoration: 'none' }}>🔗</a>}
                {proj.githubUrl && <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: '12px', color: accentColor, textDecoration: 'none' }}>⚙️</a>}
              </div>
            </div>
            {proj.description && <p style={{ margin: '0 0 8px 0', fontSize: '14px', lineHeight: 1.8, color: '#333' }}>{proj.description}</p>}
            {proj.techStack?.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {proj.techStack.map((tech, idx) => (
                  <span key={idx} style={{ padding: '2px 10px', background: '#f5f5f5', borderRadius: '12px', fontSize: '11px', color: '#666' }}>{tech}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    )}

    {data.education.length > 0 && (
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '14px', fontWeight: 400, margin: '0 0 16px 0', fontStyle: 'italic', color: accentColor }}>education</h2>
        {data.education.map(edu => (
          <div key={edu.id} style={{ marginBottom: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <strong style={{ fontSize: '15px', fontWeight: 500 }}>{edu.school}</strong>
              <span style={{ fontSize: '13px', color: '#999' }}>{edu.year}</span>
            </div>
            <div style={{ fontSize: '14px', color: '#666' }}>{edu.degree}</div>
          </div>
        ))}
      </div>
    )}

    {((data.skillCategories?.technical?.length || 0) > 0 || (data.skillCategories?.soft?.length || 0) > 0 || (data.skillCategories?.tools?.length || 0) > 0) && (
      <div>
        <h2 style={{ fontSize: '14px', fontWeight: 400, margin: '0 0 16px 0', fontStyle: 'italic', color: accentColor }}>skills</h2>
        {(data.skillCategories?.technical?.length || 0) > 0 && (
          <div style={{ marginBottom: '16px' }}>
            <div style={{ fontSize: '12px', fontWeight: 500, marginBottom: '8px', color: '#666' }}>Technical</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {data.skillCategories.technical.map((skill, idx) => (
                <span key={idx} style={{ padding: '4px 12px', background: '#f5f5f5', borderRadius: '14px', fontSize: '12px', color: '#333' }}>{skill}</span>
              ))}
            </div>
          </div>
        )}
        {(data.skillCategories?.soft?.length || 0) > 0 && (
          <div style={{ marginBottom: '16px' }}>
            <div style={{ fontSize: '12px', fontWeight: 500, marginBottom: '8px', color: '#666' }}>Soft Skills</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {data.skillCategories.soft.map((skill, idx) => (
                <span key={idx} style={{ padding: '4px 12px', background: '#f5f5f5', borderRadius: '14px', fontSize: '12px', color: '#333' }}>{skill}</span>
              ))}
            </div>
          </div>
        )}
        {(data.skillCategories?.tools?.length || 0) > 0 && (
          <div>
            <div style={{ fontSize: '12px', fontWeight: 500, marginBottom: '8px', color: '#666' }}>Tools</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {data.skillCategories.tools.map((skill, idx) => (
                <span key={idx} style={{ padding: '4px 12px', background: '#f5f5f5', borderRadius: '14px', fontSize: '12px', color: '#333' }}>{skill}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    )}
  </div>
);

export default function ResumePreview() {
  const { personal, summary, education, experience, projects, skillCategories, links, template, accentColor } = useResumeStore();
  
  const data = { 
    personal: personal || { name: '', email: '', phone: '', location: '' }, 
    summary: summary || '', 
    education: education || [], 
    experience: experience || [], 
    projects: projects || [], 
    skillCategories: skillCategories || { technical: [], soft: [], tools: [] }, 
    links: links || { github: '', linkedin: '' } 
  };

  if (template === 'modern') return <ModernTemplate data={data} accentColor={accentColor} />;
  if (template === 'minimal') return <MinimalTemplate data={data} accentColor={accentColor} />;
  return <ClassicTemplate data={data} accentColor={accentColor} />;
}
