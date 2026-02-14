# Resume Builder - Feature Test Checklist

## Test Date: _________
## Tester: _________

---

## 1. LocalStorage Persistence ✓
**Test Steps:**
1. Navigate to `/builder`
2. Fill in Personal Info (name, email, phone, location)
3. Add Summary text
4. Add 1 Education entry
5. Add 1 Experience entry
6. Add 1 Project entry
7. Add 3 skills in Technical category
8. Add GitHub and LinkedIn links
9. Refresh the page (F5)
10. Verify all data persists

**Expected:** All form data remains after refresh
**Result:** ☐ Pass ☐ Fail
**Notes:** _________________________________

---

## 2. Live Preview Updates ✓
**Test Steps:**
1. Open `/builder` (split view: form left, preview right)
2. Type name in Personal Info → Check preview updates immediately
3. Add summary text → Check preview updates
4. Add experience entry → Check preview updates
5. Add project → Check preview updates
6. Add skills → Check preview updates

**Expected:** Preview updates in real-time without delay
**Result:** ☐ Pass ☐ Fail
**Notes:** _________________________________

---

## 3. Template Switching ✓
**Test Steps:**
1. Fill in complete resume data on `/builder`
2. Navigate to `/preview`
3. Click "Classic" template → Verify data displays
4. Click "Modern" template → Verify data displays (two-column layout)
5. Click "Minimal" template → Verify data displays
6. Refresh page → Verify selected template persists

**Expected:** All data preserved across template changes
**Result:** ☐ Pass ☐ Fail
**Notes:** _________________________________

---

## 4. Color Theme Persistence ✓
**Test Steps:**
1. Navigate to `/preview`
2. Select "Navy" color (blue circle)
3. Verify accent color changes in preview
4. Refresh page (F5)
5. Verify Navy color persists

**Expected:** Selected color remains after refresh
**Result:** ☐ Pass ☐ Fail
**Notes:** _________________________________

---

## 5. ATS Score Calculation ✓
**Test Steps:**
1. Start with empty resume
2. Add name → Score should increase by +10
3. Add email → Score should increase by +10
4. Add summary (60+ chars with "built") → Score +10 (summary) +10 (action verb)
5. Add 1 experience → Score +15
6. Add 1 education → Score +10
7. Add 5 skills → Score +10
8. Add 1 project → Score +10
9. Add phone → Score +5
10. Add LinkedIn → Score +5
11. Add GitHub → Score +5

**Expected:** Final score = 100
**Result:** ☐ Pass ☐ Fail
**Actual Score:** _____
**Notes:** _________________________________

---

## 6. Live Score Updates ✓
**Test Steps:**
1. Open `/preview` with empty resume
2. Open `/builder` in another tab
3. Add name → Switch to preview → Check score updated
4. Add email → Switch to preview → Check score updated
5. Add summary → Switch to preview → Check score updated

**Alternative (same tab):**
1. Navigate to `/preview` → Note score
2. Navigate to `/builder` → Add data
3. Navigate back to `/preview` → Verify score increased

**Expected:** Score updates reflect latest data
**Result:** ☐ Pass ☐ Fail
**Notes:** _________________________________

---

## 7. Export Functionality ✓
**Test Steps:**
1. Fill complete resume on `/builder`
2. Navigate to `/preview`
3. Click "Download PDF" button
4. Verify toast notification appears ("PDF export ready!")
5. Use browser Print dialog (Ctrl+P / Cmd+P)
6. Verify print preview shows clean resume (no buttons/UI)
7. Check margins and page breaks

**Expected:** 
- Toast shows and auto-dismisses
- Print preview is clean
- No UI elements in print view

**Result:** ☐ Pass ☐ Fail
**Notes:** _________________________________

---

## 8. Empty States ✓
**Test Steps:**
1. Clear localStorage: `localStorage.clear()` in console
2. Refresh page
3. Navigate to `/builder` → Check empty form renders
4. Navigate to `/preview` → Check "Your Name" placeholder shows
5. Check ATS score shows 0 with suggestions
6. Add only name → Check preview shows name
7. Leave other fields empty → Check no errors

**Expected:** 
- No crashes with empty data
- Placeholders show correctly
- Score = 0 with all suggestions listed

**Result:** ☐ Pass ☐ Fail
**Notes:** _________________________________

---

## 9. Mobile Responsive Layout ✓
**Test Steps:**
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Select "iPhone 12 Pro" (390px width)
4. Navigate to `/` → Check home page layout
5. Navigate to `/builder` → Check form stacks vertically
6. Navigate to `/preview` → Check resume is readable
7. Test template picker → Check thumbnails fit
8. Test color picker → Check circles fit
9. Test ATS score circle → Check layout

**Expected:** 
- All content readable on mobile
- No horizontal scroll
- Buttons accessible

**Result:** ☐ Pass ☐ Fail
**Notes:** _________________________________

---

## 10. Console Errors ✓
**Test Steps:**
1. Open DevTools Console (F12)
2. Clear console
3. Navigate to `/` → Check for errors
4. Navigate to `/builder` → Check for errors
5. Navigate to `/preview` → Check for errors
6. Navigate to `/proof` → Check for errors
7. Fill form data → Check for errors
8. Switch templates → Check for errors
9. Change colors → Check for errors
10. Refresh each page → Check for errors

**Expected:** Zero console errors (warnings OK)
**Result:** ☐ Pass ☐ Fail
**Error Count:** _____
**Notes:** _________________________________

---

## Additional Tests

### Skills Section
- ☐ Add skill by pressing Enter
- ☐ Remove skill by clicking X
- ☐ Skills show in preview
- ☐ "Suggest Skills" button works

### Projects Section
- ☐ Add project with all fields
- ☐ Tech stack tags work
- ☐ Character counter shows (200 max)
- ☐ Collapse/expand works
- ☐ Delete project works
- ☐ Links show in preview

### Navigation
- ☐ All routes work (/, /builder, /preview, /proof)
- ☐ "Start Building" button navigates to /builder
- ☐ Navigation links work

### ATS Score Display
- ☐ Circular progress animates
- ☐ Color changes: Red (0-40), Amber (41-70), Green (71-100)
- ☐ Label changes: "Needs Work", "Getting There", "Strong Resume"
- ☐ Suggestions list shows (max 5)
- ☐ "Excellent!" message when score = 100

---

## Summary

**Total Tests:** 10 core + additional
**Passed:** _____
**Failed:** _____
**Pass Rate:** _____%

**Critical Issues:**
_________________________________
_________________________________

**Minor Issues:**
_________________________________
_________________________________

**Recommendations:**
_________________________________
_________________________________

---

## Sign-off

**Tester Signature:** _________________
**Date:** _________________
**Status:** ☐ Approved ☐ Needs Fixes
