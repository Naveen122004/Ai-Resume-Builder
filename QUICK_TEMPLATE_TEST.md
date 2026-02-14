# Quick Template Test - 3 Minutes

## 🚀 Start
```bash
npm start
```

---

## ✅ Test 1: Template Tabs (30 seconds)

1. Go to `/builder`
2. ✅ See 3 tabs: Classic | Modern | Minimal
3. Click Modern → ✅ Layout changes
4. Click Minimal → ✅ Layout changes again
5. ✅ Content stays the same

**PASS if:** All 3 templates show different styling

---

## ✅ Test 2: Template Persistence (30 seconds)

1. Select "Modern" template
2. **Refresh page (F5)**
3. ✅ Modern still selected
4. Go to `/preview`
5. ✅ Modern still selected

**PASS if:** Template choice persists

---

## ✅ Test 3: Bullet Guidance (60 seconds)

1. Go to `/builder`
2. Add Experience entry
3. In Description, type: "Responsible for managing"
4. ✅ See orange text: "Start with a strong action verb"
5. Change to: "Led team of 5"
6. ✅ Orange text disappears

7. Type: "Developed features"
8. ✅ See: "Add measurable impact (numbers)"
9. Change to: "Developed 10+ features"
10. ✅ Suggestion disappears

**PASS if:** Guidance appears and disappears correctly

---

## ✅ Test 4: Improvement Panel (60 seconds)

1. Clear all data (or start fresh)
2. ✅ See "Top 3 Improvements" section
3. ✅ See numbered suggestions (1. 2. 3.)

4. Add 2 projects
5. ✅ "Add more projects" disappears

6. Add "50%" to experience description
7. ✅ "Add measurable impact" disappears

**PASS if:** Improvements update dynamically

---

## ✅ Test 5: Score Stability (30 seconds)

1. Fill some data (score = 40)
2. Switch Classic → Modern → Minimal
3. ✅ Score stays 40
4. ✅ Score doesn't change with template

**PASS if:** Template switching doesn't affect score

---

## 🎯 All Pass? ✅ UPGRADE COMPLETE!

---

## 📊 Visual Checklist

**Templates:**
- [ ] Classic: 2px border, UPPERCASE headers
- [ ] Modern: 3px border, UPPERCASE + underline
- [ ] Minimal: No border, lowercase italic

**Guidance:**
- [ ] Orange text below textareas
- [ ] Action verb check works
- [ ] Numbers check works

**Improvements:**
- [ ] Panel under ATS Score
- [ ] Max 3 suggestions
- [ ] Blue numbered list

**Persistence:**
- [ ] Template persists after refresh
- [ ] Template persists across pages

---

## 🐛 If Any Fail

1. Check console for errors (F12)
2. Verify all components imported
3. Check localStorage has "template" field
4. See `TEMPLATE_VERIFICATION.md` for details

---

**Total time: ~3 minutes**
**All tests pass = Ready to ship! 🚀**
