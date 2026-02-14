import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const STEPS = [
  { id: 1, name: 'Project Setup' },
  { id: 2, name: 'Core Builder' },
  { id: 3, name: 'Live Preview' },
  { id: 4, name: 'ATS Scoring' },
  { id: 5, name: 'Template System' },
  { id: 6, name: 'Export Feature' },
  { id: 7, name: 'Testing' },
  { id: 8, name: 'Final Polish' }
];

export const useRBStore = create(
  persist(
    (set, get) => ({
      artifacts: {},
      lovableLink: '',
      githubLink: '',
      deployLink: '',
      stepCompletion: {},
      checklistResults: {},
      
      uploadArtifact: (step, file) => {
        set((state) => ({
          artifacts: { ...state.artifacts, [`rb_step_${step}_artifact`]: file }
        }));
      },
      
      hasArtifact: (step) => {
        return !!get().artifacts[`rb_step_${step}_artifact`];
      },
      
      canAccessStep: (step) => {
        if (step === 1) return true;
        return get().hasArtifact(step - 1);
      },
      
      setLovableLink: (link) => set({ lovableLink: link }),
      setGithubLink: (link) => set({ githubLink: link }),
      setDeployLink: (link) => set({ deployLink: link }),
      
      setStepComplete: (stepId, completed) => {
        set((state) => ({
          stepCompletion: { ...state.stepCompletion, [stepId]: completed }
        }));
      },
      
      setChecklistResult: (testId, passed) => {
        set((state) => ({
          checklistResults: { ...state.checklistResults, [testId]: passed }
        }));
      },
      
      getAllSteps: () => STEPS,
      
      getStepStatus: (stepId) => {
        return get().stepCompletion[stepId] || false;
      },
      
      allStepsCompleted: () => {
        const completion = get().stepCompletion;
        return STEPS.every(step => completion[step.id] === true);
      },
      
      allChecklistPassed: () => {
        const results = get().checklistResults;
        const testIds = Array.from({ length: 10 }, (_, i) => i + 1);
        return testIds.every(id => results[id] === true);
      },
      
      allLinksProvided: () => {
        const { lovableLink, githubLink, deployLink } = get();
        return lovableLink.trim() !== '' && githubLink.trim() !== '' && deployLink.trim() !== '';
      },
      
      isShipped: () => {
        return get().allStepsCompleted() && get().allChecklistPassed() && get().allLinksProvided();
      },
      
      getFinalSubmission: () => {
        const { lovableLink, githubLink, deployLink } = get();
        return `------------------------------------------
AI Resume Builder — Final Submission

Lovable Project: ${lovableLink}
GitHub Repository: ${githubLink}
Live Deployment: ${deployLink}

Core Capabilities:
- Structured resume builder
- Deterministic ATS scoring
- Template switching
- PDF export with clean formatting
- Persistence + validation checklist
------------------------------------------`;
      },
      
      reset: () => set({ 
        artifacts: {}, 
        lovableLink: '', 
        githubLink: '', 
        deployLink: '',
        stepCompletion: {},
        checklistResults: {}
      })
    }),
    { name: 'rb-storage' }
  )
);
