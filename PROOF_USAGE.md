# Proof System - Quick Usage Guide

## How to Mark Project as Shipped

### Step 1: Complete All Development Steps
Navigate to `/proof` and mark each step as done:

1. ✅ Project Setup
2. ✅ Core Builder
3. ✅ Live Preview
4. ✅ ATS Scoring
5. ✅ Template System
6. ✅ Export Feature
7. ✅ Testing
8. ✅ Final Polish

**Action:** Click "Mark Done" button for each step.

---

### Step 2: Pass All Checklist Tests
Run through `TEST_CHECKLIST.md` and mark tests as passed:

1. ✅ LocalStorage Persistence
2. ✅ Live Preview Updates
3. ✅ Template Switching
4. ✅ Color Theme Persistence
5. ✅ ATS Score Calculation
6. ✅ Live Score Updates
7. ✅ Export Functionality
8. ✅ Empty States
9. ✅ Mobile Responsive Layout
10. ✅ Console Errors

**Action:** Click each test checkbox after verifying it passes.

---

### Step 3: Provide Proof Links
Enter valid URLs for all three fields:

**Lovable Project Link:**
```
https://lovable.dev/projects/your-project-id
```

**GitHub Repository Link:**
```
https://github.com/yourusername/resume-builder
```

**Deployed URL:**
```
https://your-app.vercel.app
```

**Action:** Paste URLs and click outside input to save.

---

### Step 4: Verify Shipped Status

**Check Status Badge:**
- Top right corner should show "Shipped" (black background)
- If still "In Progress" (gray), check warnings below

**Check Confirmation Message:**
- Should see: "Project 3 Shipped Successfully."

**Check Copy Button:**
- "Copy Final Submission" button should be enabled (black)

---

### Step 5: Export Final Submission

**Click "Copy Final Submission" button**

**Paste into submission form:**
```
------------------------------------------
AI Resume Builder — Final Submission

Lovable Project: https://lovable.dev/projects/...
GitHub Repository: https://github.com/.../...
Live Deployment: https://your-app.vercel.app

Core Capabilities:
- Structured resume builder
- Deterministic ATS scoring
- Template switching
- PDF export with clean formatting
- Persistence + validation checklist
------------------------------------------
```

---

## Troubleshooting

### Status Still Shows "In Progress"

**Check Warning Messages:**

⚠️ **"Complete all 8 steps to enable submission"**
- Go to Step Completion Overview
- Ensure all 8 steps show "✓ Done" (black button)

⚠️ **"Pass all 10 checklist tests to enable submission"**
- Go to Test Checklist Status
- Ensure all 10 tests show checkmark (✓) with black background

⚠️ **"Provide all 3 proof links to enable submission"**
- Go to Artifact Collection
- Ensure all 3 inputs have green borders (valid URLs)
- If red error shows, fix URL format

---

### URL Validation Fails

**Invalid URL Examples:**
- ❌ `lovable.dev/projects/test` (missing https://)
- ❌ `github.com/user/repo` (missing https://)
- ❌ `not-a-url` (invalid format)

**Valid URL Examples:**
- ✅ `https://lovable.dev/projects/test`
- ✅ `https://github.com/user/repo`
- ✅ `https://app.vercel.app`

**Fix:** Add `https://` prefix to all URLs

---

### Data Not Persisting

**Check LocalStorage:**
1. Open DevTools (F12)
2. Go to Application tab
3. Click "Local Storage" → `http://localhost:3000`
4. Find key: `rb-storage`
5. Verify it contains your data

**If missing:**
- Clear browser cache
- Refresh page
- Re-enter data

---

### Copy Button Disabled

**Requirements Checklist:**
- [ ] All 8 steps marked complete
- [ ] All 10 tests marked passed
- [ ] All 3 URLs provided and valid

**If all checked but still disabled:**
- Refresh page
- Verify status badge shows "Shipped"
- Check console for errors (F12)

---

## Data Storage

All proof data is stored in localStorage under key: `rb-storage`

**Stored Data:**
```json
{
  "stepCompletion": {
    "1": true,
    "2": true,
    ...
    "8": true
  },
  "checklistResults": {
    "1": true,
    "2": true,
    ...
    "10": true
  },
  "lovableLink": "https://...",
  "githubLink": "https://...",
  "deployLink": "https://..."
}
```

**To Reset:**
```javascript
// In browser console
localStorage.removeItem('rb-storage');
location.reload();
```

---

## Quick Commands

**Check Shipped Status:**
```javascript
// In browser console
const store = JSON.parse(localStorage.getItem('rb-storage'));
console.log('Steps:', Object.keys(store.state.stepCompletion).length);
console.log('Tests:', Object.keys(store.state.checklistResults).length);
console.log('Links:', store.state.lovableLink ? 'Yes' : 'No');
```

**Mark All Steps Complete (Dev Only):**
```javascript
// In browser console
const store = JSON.parse(localStorage.getItem('rb-storage'));
store.state.stepCompletion = {1:true,2:true,3:true,4:true,5:true,6:true,7:true,8:true};
localStorage.setItem('rb-storage', JSON.stringify(store));
location.reload();
```

**Mark All Tests Passed (Dev Only):**
```javascript
// In browser console
const store = JSON.parse(localStorage.getItem('rb-storage'));
store.state.checklistResults = {1:true,2:true,3:true,4:true,5:true,6:true,7:true,8:true,9:true,10:true};
localStorage.setItem('rb-storage', JSON.stringify(store));
location.reload();
```

---

## Best Practices

1. **Complete steps in order** - Follow the 8-step sequence
2. **Test thoroughly** - Actually run each checklist test
3. **Use real URLs** - Provide actual deployment links
4. **Verify persistence** - Refresh page to confirm data saves
5. **Check console** - Ensure no errors before marking shipped

---

## Final Checklist

Before submitting:

- [ ] Status badge shows "Shipped" (black)
- [ ] Confirmation message displays
- [ ] All 8 steps marked complete
- [ ] All 10 tests marked passed
- [ ] All 3 URLs valid and saved
- [ ] Copy button works
- [ ] Submission text formatted correctly
- [ ] Data persists after refresh
- [ ] No console errors

**When all checked:** ✅ Ready to submit!
