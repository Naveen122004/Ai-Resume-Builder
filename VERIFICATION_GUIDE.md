# AI Resume Builder - Verification Guide

## ✅ Features Implemented

1. **Auto-save to localStorage** (key: `resumeBuilderData`)
2. **Live Preview** with empty state handling
3. **ATS Score v1** (0-100, deterministic)
4. **Suggestions** (max 3)

---

## 🧪 Verification Steps

### 1. Auto-Save & Persistence

**Test 1: Data persists after refresh**
```
1. Open http://localhost:3000/builder
2. Fill in some fields:
   - Name: "John Doe"
   - Email: "john@example.com"
   - Summary: "Software engineer with 5 years experience"
3. Refresh the page (F5)
4. ✅ VERIFY: All data is still there
```

**Test 2: localStorage key is correct**
```
1. Open browser DevTools (F12)
2. Go to Application > Local Storage
3. ✅ VERIFY: Key is "resumeBuilderData"
4. ✅ VERIFY: Value contains your resume data
```

**Test 3: Data persists across sessions**
```
1. Fill in resume data
2. Close browser completely
3. Reopen browser and go to /builder
4. ✅ VERIFY: All data is restored
```

---

### 2. Live Preview

**Test 1: Real-time updates**
```
1. Go to /builder
2. Type in Name field: "Jane Smith"
3. ✅ VERIFY: Right panel shows "JANE SMITH" immediately
4. Type in Summary: "Test summary"
5. ✅ VERIFY: Summary appears in preview instantly
```

**Test 2: Empty state handling**
```
1. Start with empty form
2. ✅ VERIFY: Preview shows "Your Name" placeholder
3. ✅ VERIFY: Empty sections (Experience, Projects) don't appear
4. Add one experience entry
5. ✅ VERIFY: "EXPERIENCE" section appears in preview
```

**Test 3: Section visibility**
```
1. Fill only Personal Info and Summary
2. ✅ VERIFY: Only header and Summary section show
3. Add Education entry
4. ✅ VERIFY: Education section appears
5. Remove Education entry
6. ✅ VERIFY: Education section disappears
```

---

### 3. ATS Score Calculation

**Test 1: Starting score (empty form)**
```
1. Clear all data (or start fresh)
2. ✅ VERIFY: Score = 0
3. ✅ VERIFY: Multiple suggestions shown
```

**Test 2: Summary scoring (+15 points)**
```
1. Write summary with 50 words (count them)
2. ✅ VERIFY: Score increases by +15
3. ✅ VERIFY: "Write a stronger summary" suggestion disappears
```

**Test 3: Projects scoring (+10 points)**
```
1. Add 1 project
2. ✅ VERIFY: Score doesn't change
3. Add 2nd project
4. ✅ VERIFY: Score increases by +10
5. ✅ VERIFY: "Add at least 2 projects" suggestion disappears
```

**Test 4: Experience scoring (+10 points)**
```
1. Add 1 experience entry
2. ✅ VERIFY: Score increases by +10
```

**Test 5: Skills scoring (+10 points)**
```
1. Enter skills: "React, Node, Python, AWS, Docker, Kubernetes, TypeScript, PostgreSQL"
2. ✅ VERIFY: Score increases by +10 (8 skills)
3. ✅ VERIFY: "Add more skills" suggestion disappears
```

**Test 6: Links scoring (+10 points)**
```
1. Add GitHub: "github.com/user"
2. ✅ VERIFY: Score increases by +10
```

**Test 7: Numbers in bullets (+15 points)**
```
1. Add experience description: "Improved performance by 50%"
2. ✅ VERIFY: Score increases by +15
3. ✅ VERIFY: "Add measurable impact" suggestion disappears
```

**Test 8: Education complete (+10 points)**
```
1. Add education with all fields filled:
   - School: "MIT"
   - Degree: "BS Computer Science"
   - Year: "2020"
2. ✅ VERIFY: Score increases by +10
```

**Test 9: Maximum score (100)**
```
1. Click "Load Sample Data"
2. ✅ VERIFY: Score = 85 (sample has most criteria)
3. Add 2nd project
4. ✅ VERIFY: Score = 95
5. Add numbers to 2nd project description
6. ✅ VERIFY: Score = 100 (capped)
```

---

### 4. Score Visual Feedback

**Test 1: Score display**
```
1. ✅ VERIFY: Large number (36px) shows current score
2. ✅ VERIFY: Progress bar fills proportionally
3. ✅ VERIFY: Score updates live as you type
```

**Test 2: Color coding**
```
1. Score 0-59: ✅ VERIFY: Red (#ef4444)
2. Score 60-79: ✅ VERIFY: Orange (#f59e0b)
3. Score 80-100: ✅ VERIFY: Green (#22c55e)
```

**Test 3: Smooth transitions**
```
1. Add content to increase score
2. ✅ VERIFY: Progress bar animates smoothly (0.3s transition)
```

---

### 5. Suggestions

**Test 1: Max 3 suggestions**
```
1. Start with empty form
2. ✅ VERIFY: Exactly 3 suggestions shown (not more)
```

**Test 2: Dynamic suggestions**
```
1. Empty form shows suggestions
2. Add 2 projects
3. ✅ VERIFY: "Add at least 2 projects" disappears
4. ✅ VERIFY: Other suggestions remain
```

**Test 3: Suggestion text**
```
✅ VERIFY these exact messages appear when applicable:
- "Write a stronger summary (40–120 words)."
- "Add at least 2 projects."
- "Add more skills (target 8+)."
- "Add measurable impact (numbers) in bullets."
```

---

### 6. Complete User Flow

**Full test scenario:**
```
1. Open /builder (empty form)
   ✅ Score = 0
   ✅ 3 suggestions shown

2. Add name: "Alex Johnson"
   ✅ Preview updates immediately
   ✅ Score unchanged

3. Add summary (60 words)
   ✅ Score = 15
   ✅ Summary suggestion disappears

4. Add 1 experience with "Increased sales by 30%"
   ✅ Score = 40 (+10 experience, +15 numbers)

5. Add 2 projects
   ✅ Score = 50 (+10 projects)

6. Add 8 skills
   ✅ Score = 60 (+10 skills)
   ✅ Color changes to orange

7. Add GitHub link
   ✅ Score = 70 (+10 links)

8. Add complete education
   ✅ Score = 80 (+10 education)
   ✅ Color changes to green

9. Refresh page
   ✅ All data persists
   ✅ Score remains 80

10. Close and reopen browser
    ✅ Data still there
    ✅ Score still 80
```

---

## 🎯 Quick Verification Checklist

### Auto-Save
- [ ] Data persists after refresh
- [ ] localStorage key is "resumeBuilderData"
- [ ] Data persists after browser restart

### Live Preview
- [ ] Updates in real-time
- [ ] Empty sections hidden
- [ ] Filled sections appear
- [ ] Clean typography (Georgia serif)

### ATS Score
- [ ] Starts at 0
- [ ] Summary: +15 (40-120 words)
- [ ] Projects: +10 (2+ projects)
- [ ] Experience: +10 (1+ entry)
- [ ] Skills: +10 (8+ skills)
- [ ] Links: +10 (GitHub or LinkedIn)
- [ ] Numbers: +15 (numbers in bullets)
- [ ] Education: +10 (complete fields)
- [ ] Caps at 100

### Visual Feedback
- [ ] Score number displays
- [ ] Progress bar fills
- [ ] Colors: Red < 60, Orange 60-79, Green 80+
- [ ] Smooth transitions

### Suggestions
- [ ] Max 3 suggestions
- [ ] Updates dynamically
- [ ] Disappears when criteria met
- [ ] Correct text messages

---

## 🐛 Common Issues

**Issue: Data not persisting**
- Check localStorage in DevTools
- Verify key is "resumeBuilderData"
- Clear cache and try again

**Issue: Score not updating**
- Check if form fields are actually changing
- Verify Zustand store is connected
- Refresh page to recalculate

**Issue: Preview not updating**
- Check React DevTools
- Verify useResumeStore is working
- Check console for errors

---

## ✅ Success Criteria

All tests pass = Feature complete! 🎉

**Expected Results:**
- ✅ Auto-save works perfectly
- ✅ Live preview is real-time
- ✅ ATS score calculates correctly
- ✅ Suggestions are helpful
- ✅ Premium design maintained
- ✅ No routes changed
- ✅ localStorage key correct
