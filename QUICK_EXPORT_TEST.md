# Quick Export Test - 2 Minutes

## 🚀 Start
```bash
npm start
```

---

## ✅ Test 1: Export Buttons (20 seconds)

1. Go to `/preview`
2. ✅ See 2 buttons above resume
   - "Print / Save as PDF" (black)
   - "Copy Resume as Text" (white with border)
3. ✅ Buttons centered and styled

**PASS if:** Both buttons visible and styled correctly

---

## ✅ Test 2: Print/PDF (40 seconds)

1. Click "Print / Save as PDF"
2. ✅ Print dialog opens
3. In print preview:
   - ✅ Navigation bar hidden
   - ✅ Template tabs hidden
   - ✅ Export buttons hidden
   - ✅ Only resume shows
   - ✅ White background
   - ✅ Black text only
4. Close print dialog

**PASS if:** Print preview is clean with no UI elements

---

## ✅ Test 3: Copy as Text (30 seconds)

1. Click "Copy Resume as Text"
2. ✅ See alert "Resume copied to clipboard!"
3. Open notepad/text editor
4. Paste (Ctrl+V)
5. ✅ See plain text resume:
   ```
   Name
   Contact info
   
   SUMMARY
   ...
   
   EXPERIENCE
   ...
   ```

**PASS if:** Plain text resume pastes correctly

---

## ✅ Test 4: Validation Warning (30 seconds)

1. Go to `/builder`
2. Clear name field
3. Go to `/preview`
4. Click "Print / Save as PDF"
5. ✅ See yellow warning: "Your resume may look incomplete."
6. ✅ Print dialog still opens (non-blocking)
7. ✅ Warning disappears after 3 seconds

**PASS if:** Warning shows but doesn't block export

---

## 🎯 All Pass? ✅ EXPORT COMPLETE!

---

## 📊 Visual Checklist

**Export Buttons:**
- [ ] 2 buttons on /preview
- [ ] Black button (Print/PDF)
- [ ] White button (Copy Text)
- [ ] Centered above resume

**Print Preview:**
- [ ] Navigation hidden
- [ ] Buttons hidden
- [ ] White background
- [ ] Black text only
- [ ] Clean layout

**Copy Text:**
- [ ] Alert shows
- [ ] Plain text format
- [ ] All sections included
- [ ] Clean structure

**Validation:**
- [ ] Warning for missing name
- [ ] Warning for no experience/projects
- [ ] Non-blocking
- [ ] Auto-dismisses

---

## 🐛 If Any Fail

1. Check console for errors (F12)
2. Verify print.css loaded
3. Check clipboard permissions
4. See `EXPORT_VERIFICATION.md` for details

---

## 💡 Quick Tips

**To test PDF save:**
1. Click Print button
2. Select "Save as PDF" as printer
3. Choose location
4. Save and open PDF
5. Verify clean, professional output

**To test plain text:**
1. Copy resume
2. Paste in email client
3. Verify formatting preserved
4. Check all sections present

---

**Total time: ~2 minutes**
**All tests pass = Ready to ship! 🚀**
