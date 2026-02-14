# System Architecture

## Project Structure

```
ResumeBuilder/
├── src/
│   ├── components/
│   │   ├── PremiumLayout.js    # Main layout wrapper
│   │   └── BuildPanel.js       # Right-side build panel
│   ├── pages/rb/
│   │   ├── 01-problem.js       # Step 1: Problem definition
│   │   ├── 02-market.js        # Step 2: Market research
│   │   ├── 03-architecture.js  # Step 3: System architecture
│   │   ├── 04-hld.js           # Step 4: High-level design
│   │   ├── 05-lld.js           # Step 5: Low-level design
│   │   ├── 06-build.js         # Step 6: Build phase
│   │   ├── 07-test.js          # Step 7: Testing phase
│   │   ├── 08-ship.js          # Step 8: Deployment
│   │   └── proof.js            # Proof of completion page
│   ├── store/
│   │   └── rbStore.js          # Zustand state management
│   ├── App.js                  # Router configuration
│   └── index.js                # Entry point
└── public/
    └── index.html              # HTML template
```

## Component Hierarchy

```
App (Router)
└── Routes
    ├── /rb/01-problem → Problem
    │   └── PremiumLayout
    │       ├── Top Bar
    │       ├── Context Header
    │       ├── Main Workspace (70%)
    │       ├── BuildPanel (30%)
    │       └── Proof Footer
    ├── /rb/02-market → Market
    ├── ... (steps 3-8)
    └── /rb/proof → Proof
```

## State Management (Zustand)

```javascript
rbStore {
  artifacts: {
    rb_step_1_artifact: { content, screenshot, timestamp },
    rb_step_2_artifact: { ... },
    ...
  },
  lovableLink: string,
  githubLink: string,
  deployLink: string,
  
  // Methods
  uploadArtifact(step, file)
  hasArtifact(step)
  canAccessStep(step)
  setLovableLink(link)
  setGithubLink(link)
  setDeployLink(link)
  reset()
}
```

## Gating Logic

```
Step 1: Always accessible
Step 2: Requires Step 1 artifact
Step 3: Requires Step 2 artifact
...
Step 8: Requires Step 7 artifact
Proof: Accessible anytime (shows progress)
```

## Data Flow

```
User Action → BuildPanel
    ↓
Click "It Worked"
    ↓
uploadArtifact(step, data)
    ↓
Zustand Store (persisted to localStorage)
    ↓
hasArtifact(step) returns true
    ↓
Next button enabled
    ↓
Navigate to next step
```

## Premium Layout Breakdown

```
┌─────────────────────────────────────────────────────┐
│ Top Bar: Logo | Step X of 8 | Status Badge         │
├─────────────────────────────────────────────────────┤
│ Context Header: Step Title                          │
├──────────────────────────────┬──────────────────────┤
│                              │                      │
│  Main Workspace (70%)        │  Build Panel (30%)   │
│  - Step content              │  - Copy textarea     │
│  - Instructions              │  - Copy button       │
│  - Artifact preview          │  - Open Lovable      │
│                              │  - Status buttons    │
│                              │  - Screenshot upload │
│                              │                      │
├──────────────────────────────┴──────────────────────┤
│ Footer: Previous | View Proof | Next                │
└─────────────────────────────────────────────────────┘
```

## Key Design Decisions

1. **Zustand over Redux**: Simpler API, less boilerplate
2. **LocalStorage Persistence**: Survives page refreshes
3. **Inline Styles**: No CSS files, faster development
4. **Linear Progression**: Enforces learning path
5. **Artifact-Based Gating**: Proof of completion required
