# Installation Guide

## Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

## Step-by-Step Installation

### 1. Navigate to Project Directory

```bash
cd "c:\Users\Naveen magadum\OneDrive\Desktop\KodNest\ResumeBuilder"
```

### 2. Install Dependencies

```bash
npm install
```

This will install:
- react (^18.2.0)
- react-dom (^18.2.0)
- react-router-dom (^6.20.0)
- zustand (^4.4.7)
- react-scripts (5.0.1)

### 3. Start Development Server

```bash
npm start
```

The app will automatically open at `http://localhost:3000`

### 4. Verify Installation

You should see:
- ✅ Top bar with "AI Resume Builder"
- ✅ "Project 3 — Step 1 of 8"
- ✅ Problem definition content
- ✅ Build panel on the right
- ✅ Navigation footer

## Troubleshooting

### Port 3000 Already in Use

```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use different port
set PORT=3001 && npm start
```

### Module Not Found Errors

```bash
# Clear cache and reinstall
rmdir /s /q node_modules
del package-lock.json
npm install
```

### React Scripts Not Found

```bash
npm install react-scripts --save
```

## Build for Production

```bash
npm run build
```

Creates optimized production build in `build/` folder.

## Project Structure Verification

After installation, verify these files exist:

```
✅ package.json
✅ src/App.js
✅ src/index.js
✅ src/components/PremiumLayout.js
✅ src/components/BuildPanel.js
✅ src/store/rbStore.js
✅ src/pages/rb/01-problem.js
✅ src/pages/rb/02-market.js
✅ src/pages/rb/03-architecture.js
✅ src/pages/rb/04-hld.js
✅ src/pages/rb/05-lld.js
✅ src/pages/rb/06-build.js
✅ src/pages/rb/07-test.js
✅ src/pages/rb/08-ship.js
✅ src/pages/rb/proof.js
✅ public/index.html
```

## Next Steps

1. Read [QUICKSTART.md](QUICKSTART.md) for usage guide
2. Read [ARCHITECTURE.md](ARCHITECTURE.md) for system design
3. Read [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) for overview
4. Start at `/rb/01-problem` and begin the build track!

## Support

If you encounter issues:
1. Check Node.js version: `node --version` (should be 16+)
2. Check npm version: `npm --version`
3. Clear browser cache
4. Try incognito/private browsing mode
5. Check browser console for errors (F12)
