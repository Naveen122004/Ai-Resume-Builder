# AI Resume Builder - Quick Reference

## 🚀 Start

```bash
npm install && npm start
```

Opens at `http://localhost:3000`

---

## 📍 Routes

| URL | Page |
|-----|------|
| `/` | Home - Landing page with CTA |
| `/builder` | Builder - Two-column form + preview |
| `/preview` | Preview - Clean full-page resume |
| `/proof` | Proof - Artifacts placeholder |

---

## 🎨 Design

- **Colors**: Black (#000) + White (#fff)
- **Fonts**: System UI (forms), Georgia (resume)
- **Style**: Premium, clean, calm

---

## 📝 Form Sections

1. **Personal Info** - name, email, phone, location
2. **Summary** - textarea
3. **Education** - multiple entries (school, degree, year)
4. **Experience** - multiple entries (company, role, duration, description)
5. **Projects** - multiple entries (name, description)
6. **Skills** - comma-separated
7. **Links** - GitHub, LinkedIn

---

## ✨ Features

✅ Two-column builder (50/50 split)
✅ Live preview (updates as you type)
✅ "Load Sample Data" button
✅ Add/Remove entries
✅ Auto-save to localStorage
✅ Top navigation bar
✅ Premium typography

---

## 💾 Data

**Store**: Zustand + LocalStorage
**Key**: `resume-storage`
**Auto-saves**: Yes

---

## ❌ Not Included

- ATS scoring
- Export (PDF/DOCX)
- Validation
- AI features

**Focus**: Structure + preview skeleton only

---

## 📦 Key Files

```
src/
├── pages/
│   ├── Home.js          # Landing
│   ├── Builder.js       # Two-column builder
│   ├── Preview.js       # Clean preview
│   └── Proof.js         # Placeholder
├── components/
│   ├── Navigation.js    # Top nav
│   └── ResumePreview.js # Live preview
└── store/
    └── resumeStore.js   # State
```

---

## 🎯 User Flow

```
Home → Click "Start Building" → Builder
     → Fill form (or load sample)
     → See live preview
     → Navigate to Preview
     → Data auto-saves
```

---

## 🔧 Commands

```bash
# Install dependencies
npm install

# Start dev server
npm start

# Build for production
npm run build
```

---

## 📖 Documentation

- `README.md` - Overview
- `USAGE.md` - Detailed usage guide
- `WEBAPP_SUMMARY.md` - Complete summary
- `QUICK_REFERENCE.md` - This file

---

## ✅ Status

**COMPLETE** - Ready to use!

Next: Add ATS scoring, export, validation
