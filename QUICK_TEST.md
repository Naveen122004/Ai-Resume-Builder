# Quick Test - 2 Minutes

## 🚀 Start
```bash
npm start
```

---

## ✅ Test 1: Auto-Save (30 seconds)

1. Go to `/builder`
2. Type name: "Test User"
3. **Refresh page (F5)**
4. ✅ Name still there? **PASS**

---

## ✅ Test 2: Live Preview (30 seconds)

1. Type in Summary: "Software engineer"
2. ✅ See it in right panel immediately? **PASS**
3. Add Experience entry
4. ✅ "EXPERIENCE" section appears? **PASS**

---

## ✅ Test 3: ATS Score (60 seconds)

1. Empty form → ✅ Score = 0? **PASS**
2. Add 60-word summary → ✅ Score = 15? **PASS**
3. Add 2 projects → ✅ Score = 25? **PASS**
4. Add 1 experience → ✅ Score = 35? **PASS**
5. Add 8 skills → ✅ Score = 45? **PASS**
6. Add GitHub link → ✅ Score = 55? **PASS**
7. Add "50%" in experience → ✅ Score = 70? **PASS**
8. Add complete education → ✅ Score = 80? **PASS**

---

## ✅ Test 4: Suggestions (30 seconds)

1. Empty form → ✅ See 3 suggestions? **PASS**
2. Add 2 projects → ✅ "Add 2 projects" disappears? **PASS**
3. Add 8 skills → ✅ "Add skills" disappears? **PASS**

---

## ✅ Test 5: Persistence (30 seconds)

1. Fill form with data
2. **Close browser completely**
3. Reopen and go to `/builder`
4. ✅ All data restored? **PASS**

---

## 🎯 All Pass? ✅ UPGRADE COMPLETE!

---

## 🐛 If Any Fail

1. Check console for errors (F12)
2. Clear localStorage and retry
3. Verify npm packages installed
4. Check `VERIFICATION_GUIDE.md` for details

---

## 📊 Expected Final State

**After loading sample data:**
- Score: 85
- Color: Green
- Suggestions: 1 ("Add at least 2 projects")
- All sections visible in preview
- Data persists after refresh

---

## ⚡ One-Line Verification

```bash
# Open DevTools > Application > Local Storage
# Key should be: "resumeBuilderData"
# Value should contain your resume data
```

---

**Total time: ~2 minutes**
**All tests pass = Ready to ship! 🚀**
