import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const sampleData = {
  personal: { name: 'Alex Johnson', email: 'alex@example.com', phone: '(555) 123-4567', location: 'San Francisco, CA' },
  summary: 'Senior Software Engineer with 5+ years building scalable web applications. Specialized in React, Node.js, and cloud architecture.',
  education: [{ school: 'Stanford University', degree: 'BS Computer Science', year: '2018', id: Date.now() }],
  experience: [
    { company: 'Tech Corp', role: 'Senior Engineer', duration: '2020 - Present', description: 'Led development of microservices architecture serving 10M+ users', id: Date.now() },
    { company: 'StartupXYZ', role: 'Full Stack Developer', duration: '2018 - 2020', description: 'Built core product features using React and Node.js', id: Date.now() + 1 }
  ],
  projects: [
    { 
      title: 'AI Chat Platform', 
      description: 'Real-time chat app with AI-powered responses using WebSocket and OpenAI API', 
      techStack: ['React', 'WebSocket', 'OpenAI API'],
      liveUrl: 'https://aichat.demo',
      githubUrl: 'https://github.com/alexj/ai-chat',
      id: Date.now() 
    }
  ],
  skillCategories: {
    technical: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
    soft: ['Team Leadership', 'Problem Solving'],
    tools: ['Git', 'Docker', 'AWS']
  },
  links: { github: 'github.com/alexj', linkedin: 'linkedin.com/in/alexj' }
};

const calculateATSScore = (state) => {
  let score = 0;
  const suggestions = [];

  // Name (+10)
  if (state.personal?.name?.trim()) {
    score += 10;
  } else {
    suggestions.push('Add your name (+10 points)');
  }

  // Email (+10)
  if (state.personal?.email?.trim()) {
    score += 10;
  } else {
    suggestions.push('Add your email (+10 points)');
  }

  // Summary > 50 chars (+10)
  if (state.summary?.trim().length > 50) {
    score += 10;
  } else {
    suggestions.push('Add a professional summary (+10 points)');
  }

  // Experience with bullets (+15)
  if (state.experience?.length >= 1 && state.experience.some(exp => exp.description?.trim())) {
    score += 15;
  } else {
    suggestions.push('Add at least 1 experience entry (+15 points)');
  }

  // Education (+10)
  if (state.education?.length >= 1) {
    score += 10;
  } else {
    suggestions.push('Add education details (+10 points)');
  }

  // Skills: at least 5 (+10)
  const totalSkills = (state.skillCategories?.technical?.length || 0) + 
                      (state.skillCategories?.soft?.length || 0) + 
                      (state.skillCategories?.tools?.length || 0);
  if (totalSkills >= 5) {
    score += 10;
  } else {
    suggestions.push('Add at least 5 skills (+10 points)');
  }

  // Projects (+10)
  if (state.projects?.length >= 1) {
    score += 10;
  } else {
    suggestions.push('Add at least 1 project (+10 points)');
  }

  // Phone (+5)
  if (state.personal?.phone?.trim()) {
    score += 5;
  } else {
    suggestions.push('Add phone number (+5 points)');
  }

  // LinkedIn (+5)
  if (state.links?.linkedin?.trim()) {
    score += 5;
  } else {
    suggestions.push('Add LinkedIn profile (+5 points)');
  }

  // GitHub (+5)
  if (state.links?.github?.trim()) {
    score += 5;
  } else {
    suggestions.push('Add GitHub profile (+5 points)');
  }

  // Action verbs in summary (+10)
  const actionVerbs = ['built', 'led', 'designed', 'improved', 'developed', 'created', 'managed', 'implemented', 'launched', 'achieved'];
  const hasActionVerbs = actionVerbs.some(verb => state.summary?.toLowerCase().includes(verb));
  if (hasActionVerbs) {
    score += 10;
  } else if (state.summary?.trim().length > 50) {
    suggestions.push('Use action verbs in summary (+10 points)');
  }

  return { score: Math.min(score, 100), suggestions: suggestions.slice(0, 5) };
};

const getTopImprovements = (state) => {
  const improvements = [];
  
  if (state.projects.length < 2) {
    improvements.push('Add more projects to showcase your work (target: 2+)');
  }
  
  const hasNumbers = [...state.experience, ...state.projects].some(item => 
    /\d+[%kKmM]?|\d+\+/.test(item.description)
  );
  if (!hasNumbers) {
    improvements.push('Add measurable impact with numbers (%, X, k, etc.)');
  }
  
  const wordCount = state.summary.trim().split(/\s+/).filter(w => w).length;
  if (wordCount < 40) {
    improvements.push('Expand your summary to 40-120 words');
  }
  
  const totalSkills = (state.skillCategories?.technical?.length || 0) + 
                      (state.skillCategories?.soft?.length || 0) + 
                      (state.skillCategories?.tools?.length || 0);
  if (totalSkills < 8) {
    improvements.push('Add more skills to reach 8+ items');
  }
  
  if (state.experience.length === 0) {
    improvements.push('Add experience or internship/project work');
  }
  
  return improvements.slice(0, 3);
};

export const useResumeStore = create(
  persist(
    (set, get) => ({
      personal: { name: '', email: '', phone: '', location: '' },
      summary: '',
      education: [],
      experience: [],
      projects: [],
      skillCategories: { technical: [], soft: [], tools: [] },
      links: { github: '', linkedin: '' },
      template: 'classic',
      accentColor: 'hsl(168, 60%, 40%)',
      
      setPersonal: (data) => set({ personal: data }),
      setSummary: (text) => set({ summary: text }),
      setEducation: (items) => set({ education: items }),
      setExperience: (items) => set({ experience: items }),
      setProjects: (items) => set({ projects: items }),
      setSkillCategories: (categories) => set({ skillCategories: categories }),
      setLinks: (data) => set({ links: data }),
      setTemplate: (template) => set({ template }),
      setAccentColor: (color) => set({ accentColor: color }),
      
      getATSScore: () => calculateATSScore(get()),
      getTopImprovements: () => getTopImprovements(get()),
      
      loadSample: () => set(sampleData),
      reset: () => set({ personal: { name: '', email: '', phone: '', location: '' }, summary: '', education: [], experience: [], projects: [], skillCategories: { technical: [], soft: [], tools: [] }, links: { github: '', linkedin: '' } })
    }),
    { name: 'resumeBuilderData' }
  )
);
