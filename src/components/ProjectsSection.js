import React, { useState } from 'react';
import { useResumeStore } from '../store/resumeStore';

export default function ProjectsSection() {
  const { projects, setProjects } = useResumeStore();
  const [expanded, setExpanded] = useState({});
  const [techInputs, setTechInputs] = useState({});

  const addProject = () => {
    const newProject = {
      title: '',
      description: '',
      techStack: [],
      liveUrl: '',
      githubUrl: '',
      id: Date.now()
    };
    setProjects([...projects, newProject]);
    setExpanded({ ...expanded, [newProject.id]: true });
  };

  const updateProject = (id, field, value) => {
    setProjects(projects.map(p => p.id === id ? { ...p, [field]: value } : p));
  };

  const deleteProject = (id) => {
    setProjects(projects.filter(p => p.id !== id));
    const newExpanded = { ...expanded };
    delete newExpanded[id];
    setExpanded(newExpanded);
  };

  const addTech = (id, tech) => {
    if (!tech.trim()) return;
    const project = projects.find(p => p.id === id);
    if (project && !project.techStack.includes(tech.trim())) {
      updateProject(id, 'techStack', [...project.techStack, tech.trim()]);
    }
    setTechInputs({ ...techInputs, [id]: '' });
  };

  const removeTech = (id, index) => {
    const project = projects.find(p => p.id === id);
    if (project) {
      updateProject(id, 'techStack', project.techStack.filter((_, i) => i !== index));
    }
  };

  const handleTechKeyDown = (id, e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTech(id, techInputs[id] || '');
    }
  };

  const toggleExpand = (id) => {
    setExpanded({ ...expanded, [id]: !expanded[id] });
  };

  return (
    <div style={{ marginBottom: '32px', padding: '20px', background: '#fff', border: '1px solid #e0e0e0', borderRadius: '4px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 700 }}>Projects</h3>
        <button onClick={addProject} style={{ padding: '8px 16px', fontSize: '13px', background: '#000', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Add Project
        </button>
      </div>

      {projects.map((project) => (
        <div key={project.id} style={{ marginBottom: '12px', border: '1px solid #e0e0e0', borderRadius: '4px', overflow: 'hidden' }}>
          <div 
            onClick={() => toggleExpand(project.id)}
            style={{ padding: '12px', background: '#f9f9f9', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <span style={{ fontWeight: 600, fontSize: '14px' }}>{project.title || 'Untitled Project'}</span>
            <span style={{ fontSize: '18px' }}>{expanded[project.id] ? '−' : '+'}</span>
          </div>

          {expanded[project.id] && (
            <div style={{ padding: '16px' }}>
              <div style={{ marginBottom: '12px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px', color: '#333' }}>Project Title</label>
                <input
                  type="text"
                  value={project.title}
                  onChange={(e) => updateProject(project.id, 'title', e.target.value)}
                  style={{ width: '100%', padding: '8px', fontSize: '14px', border: '1px solid #ddd', borderRadius: '4px' }}
                />
              </div>

              <div style={{ marginBottom: '12px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px', color: '#333' }}>
                  Description ({project.description.length}/200)
                </label>
                <textarea
                  value={project.description}
                  onChange={(e) => e.target.value.length <= 200 && updateProject(project.id, 'description', e.target.value)}
                  rows="3"
                  style={{ width: '100%', padding: '8px', fontSize: '14px', border: '1px solid #ddd', borderRadius: '4px', resize: 'vertical' }}
                />
              </div>

              <div style={{ marginBottom: '12px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px', color: '#333' }}>
                  Tech Stack
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '8px', minHeight: '32px', padding: '8px', background: '#f9f9f9', borderRadius: '4px', border: '1px solid #ddd' }}>
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 10px', background: '#000', color: '#fff', borderRadius: '16px', fontSize: '12px' }}>
                      {tech}
                      <button onClick={() => removeTech(project.id, idx)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: 0, fontSize: '14px', lineHeight: 1 }}>×</button>
                    </span>
                  ))}
                </div>
                <input
                  type="text"
                  value={techInputs[project.id] || ''}
                  onChange={(e) => setTechInputs({ ...techInputs, [project.id]: e.target.value })}
                  onKeyDown={(e) => handleTechKeyDown(project.id, e)}
                  placeholder="Type and press Enter"
                  style={{ width: '100%', padding: '8px', fontSize: '13px', border: '1px solid #ddd', borderRadius: '4px' }}
                />
              </div>

              <div style={{ marginBottom: '12px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px', color: '#333' }}>Live URL (optional)</label>
                <input
                  type="text"
                  value={project.liveUrl}
                  onChange={(e) => updateProject(project.id, 'liveUrl', e.target.value)}
                  placeholder="https://..."
                  style={{ width: '100%', padding: '8px', fontSize: '14px', border: '1px solid #ddd', borderRadius: '4px' }}
                />
              </div>

              <div style={{ marginBottom: '12px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px', color: '#333' }}>GitHub URL (optional)</label>
                <input
                  type="text"
                  value={project.githubUrl}
                  onChange={(e) => updateProject(project.id, 'githubUrl', e.target.value)}
                  placeholder="https://github.com/..."
                  style={{ width: '100%', padding: '8px', fontSize: '14px', border: '1px solid #ddd', borderRadius: '4px' }}
                />
              </div>

              <button onClick={() => deleteProject(project.id)} style={{ padding: '6px 12px', fontSize: '12px', background: '#fff', border: '1px solid #ddd', borderRadius: '4px', cursor: 'pointer' }}>
                Delete Project
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
