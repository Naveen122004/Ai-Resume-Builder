URL [profound-tiramisu-290c93.netlify.app](https://profound-tiramisu-290c93.netlify.app/)
# AI Resume Builder - Premium Webapp

A premium web application for building professional, ATS-optimized resumes.

## Features

✅ Clean, minimal design (black & white)
✅ Two-column builder with live preview
✅ Multiple sections: Personal Info, Summary, Education, Experience, Projects, Skills, Links
✅ Add/remove multiple entries for Education, Experience, and Projects
✅ Real-time preview updates
✅ Sample data loader
✅ Premium typography
✅ LocalStorage persistence

## Routes

- `/` - Home page with CTA
- `/builder` - Two-column builder with live preview
- `/preview` - Clean resume preview
- `/proof` - Proof of work placeholder

## Setup

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000)

## How It Works

1. Click "Start Building" on home page
2. Fill in resume sections on the left
3. See live preview on the right
4. Click "Load Sample Data" to see example
5. Visit Preview page for clean layout
6. Data auto-saves to localStorage

## Tech Stack

- React 18
- React Router 6
- Zustand (state management)
- LocalStorage (persistence)
- Premium inline styles

## Design System

- **Colors**: Black (#000) and White (#fff)
- **Typography**: System UI (forms), Georgia (resume)
- **Layout**: Clean, minimal, calm
- **Spacing**: Generous padding and margins
- **Borders**: Subtle 1px borders (#e0e0e0)
