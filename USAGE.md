# AI Resume Builder - Usage Guide

## Quick Start

```bash
npm install
npm start
```

Open `http://localhost:3000`

---

## Pages

### 1. Home (/)
- Clean landing page
- Headline: "Build a Resume That Gets Read."
- Click "Start Building" → goes to /builder

### 2. Builder (/builder)
**Two-column layout:**

**Left Column - Form Sections:**
- Personal Info (name, email, phone, location)
- Professional Summary (textarea)
- Education (add multiple entries)
- Experience (add multiple entries)
- Projects (add multiple entries)
- Skills (comma-separated)
- Links (GitHub, LinkedIn)

**Right Column - Live Preview:**
- Real-time resume preview
- Updates as you type
- Premium typography (Georgia serif)
- Black & white design

**Features:**
- "Load Sample Data" button - fills form with example data
- Add/Remove buttons for Education, Experience, Projects
- Auto-saves to localStorage

### 3. Preview (/preview)
- Full-page clean resume layout
- Premium typography
- Minimal black & white design
- Print-ready format

### 4. Proof (/proof)
- Placeholder for artifacts
- Future: proof of work tracking

---

## Navigation

Top nav bar appears on all pages except home:
- **Builder** - Edit resume
- **Preview** - View clean layout
- **Proof** - Artifacts page

---

## Data Persistence

- All data auto-saves to localStorage
- Survives page refresh
- Key: `resume-storage`

---

## Design System

**Colors:**
- Primary: Black (#000)
- Background: White (#fff)
- Light gray: (#fafafa, #f5f5f5)
- Borders: (#e0e0e0, #ddd)

**Typography:**
- Forms: system-ui
- Resume: Georgia (serif)
- Clean, readable, professional

**Layout:**
- Generous spacing
- Minimal borders
- Clean, calm aesthetic

---

## Features NOT Implemented (Yet)

- ❌ ATS scoring
- ❌ Export to PDF/DOCX
- ❌ Form validation
- ❌ AI content generation
- ❌ Template selection

**Current focus:** Structure + live preview skeleton

---

## Sample Data

Click "Load Sample Data" to see:
- Complete personal info
- Professional summary
- 1 education entry
- 2 experience entries
- 1 project entry
- Skills list
- GitHub & LinkedIn links

---

## Tips

1. Start with "Load Sample Data" to see the structure
2. Edit sections in any order
3. Use Add/Remove buttons for multiple entries
4. Check live preview as you type
5. Visit Preview page for clean view
6. Data persists automatically

---

## File Structure

```
src/
├── components/
│   ├── Navigation.js       # Top nav bar
│   └── ResumePreview.js    # Live preview component
├── pages/
│   ├── Home.js             # Landing page
│   ├── Builder.js          # Two-column builder
│   ├── Preview.js          # Clean preview page
│   └── Proof.js            # Proof placeholder
├── store/
│   └── resumeStore.js      # Zustand state
└── App.js                  # Router
```

---

## Next Steps (Future)

1. Add ATS scoring
2. Implement PDF export
3. Add form validation
4. AI content suggestions
5. Multiple templates
6. Authentication
7. Cloud storage
