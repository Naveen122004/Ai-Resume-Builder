import React, { useState } from 'react';
import { useResumeStore } from '../store/resumeStore';

export default function SkillsSection() {
  const { skillCategories, setSkillCategories } = useResumeStore();
  const [inputs, setInputs] = useState({ technical: '', soft: '', tools: '' });
  const [loading, setLoading] = useState(false);

  const addSkill = (category, skill) => {
    if (!skill.trim()) return;
    const updated = { ...skillCategories };
    if (!updated[category].includes(skill.trim())) {
      updated[category] = [...updated[category], skill.trim()];
      setSkillCategories(updated);
    }
    setInputs({ ...inputs, [category]: '' });
  };

  const removeSkill = (category, index) => {
    const updated = { ...skillCategories };
    updated[category] = updated[category].filter((_, i) => i !== index);
    setSkillCategories(updated);
  };

  const handleKeyDown = (category, e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addSkill(category, inputs[category]);
    }
  };

  const suggestSkills = () => {
    setLoading(true);
    setTimeout(() => {
      const suggested = {
        technical: [...skillCategories.technical, 'TypeScript', 'React', 'Node.js', 'PostgreSQL', 'GraphQL'].filter((v, i, a) => a.indexOf(v) === i),
        soft: [...skillCategories.soft, 'Team Leadership', 'Problem Solving'].filter((v, i, a) => a.indexOf(v) === i),
        tools: [...skillCategories.tools, 'Git', 'Docker', 'AWS'].filter((v, i, a) => a.indexOf(v) === i)
      };
      setSkillCategories(suggested);
      setLoading(false);
    }, 1000);
  };

  const renderCategory = (category, label) => (
    <div style={{ marginBottom: '20px' }}>
      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '8px', color: '#333' }}>
        {label} ({skillCategories[category].length})
      </label>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '8px', minHeight: '32px', padding: '8px', background: '#f9f9f9', borderRadius: '4px', border: '1px solid #ddd' }}>
        {skillCategories[category].map((skill, idx) => (
          <span key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 10px', background: '#000', color: '#fff', borderRadius: '16px', fontSize: '12px' }}>
            {skill}
            <button onClick={() => removeSkill(category, idx)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: 0, fontSize: '14px', lineHeight: 1 }}>×</button>
          </span>
        ))}
      </div>
      <input
        type="text"
        value={inputs[category]}
        onChange={(e) => setInputs({ ...inputs, [category]: e.target.value })}
        onKeyDown={(e) => handleKeyDown(category, e)}
        placeholder="Type and press Enter"
        style={{ width: '100%', padding: '8px', fontSize: '13px', border: '1px solid #ddd', borderRadius: '4px' }}
      />
    </div>
  );

  return (
    <div style={{ marginBottom: '32px', padding: '20px', background: '#fff', border: '1px solid #e0e0e0', borderRadius: '4px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 700 }}>Skills</h3>
        <button 
          onClick={suggestSkills} 
          disabled={loading}
          style={{ padding: '6px 12px', fontSize: '12px', background: loading ? '#e5e7eb' : '#000', color: '#fff', border: 'none', borderRadius: '4px', cursor: loading ? 'not-allowed' : 'pointer' }}
        >
          {loading ? 'Loading...' : '✨ Suggest Skills'}
        </button>
      </div>
      {renderCategory('technical', 'Technical Skills')}
      {renderCategory('soft', 'Soft Skills')}
      {renderCategory('tools', 'Tools & Technologies')}
    </div>
  );
}
