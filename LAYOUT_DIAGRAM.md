# AI Resume Builder - Layout Diagrams

## Home Page (/)

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│                                                         │
│                                                         │
│              Build a Resume That Gets Read.             │
│                                                         │
│                   [Start Building]                      │
│                                                         │
│                                                         │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## Builder Page (/builder)

```
┌─────────────────────────────────────────────────────────┐
│ AI Resume Builder  │  Builder  Preview  Proof           │ ← Navigation
├─────────────────────────────────────────────────────────┤
│                             │                           │
│  Resume Builder             │  Live Preview             │
│  [Load Sample Data]         │                           │
│                             │                           │
│  ┌─────────────────────┐    │  ┌─────────────────────┐  │
│  │ Personal Info       │    │  │ ALEX JOHNSON        │  │
│  │ Name: [        ]    │    │  │ alex@example.com    │  │
│  │ Email: [       ]    │    │  │ (555) 123-4567      │  │
│  │ Phone: [       ]    │    │  │ San Francisco, CA   │  │
│  │ Location: [    ]    │    │  │                     │  │
│  └─────────────────────┘    │  │ SUMMARY             │  │
│                             │  │ Senior Software...  │  │
│  ┌─────────────────────┐    │  │                     │  │
│  │ Summary             │    │  │ EXPERIENCE          │  │
│  │ [              ]    │    │  │ Senior Engineer     │  │
│  │ [              ]    │    │  │ Tech Corp           │  │
│  └─────────────────────┘    │  │ 2020 - Present      │  │
│                             │  │                     │  │
│  ┌─────────────────────┐    │  │ PROJECTS            │  │
│  │ Education           │    │  │ AI Chat Platform    │  │
│  │ School: [      ]    │    │  │                     │  │
│  │ Degree: [      ]    │    │  │ EDUCATION           │  │
│  │ Year: [        ]    │    │  │ Stanford University │  │
│  │ [Remove]            │    │  │                     │  │
│  │ [Add Education]     │    │  │ SKILLS              │  │
│  └─────────────────────┘    │  │ React, Node.js...   │  │
│                             │  └─────────────────────┘  │
│  ┌─────────────────────┐    │                           │
│  │ Experience          │    │                           │
│  │ Company: [     ]    │    │                           │
│  │ Role: [        ]    │    │                           │
│  │ Duration: [    ]    │    │                           │
│  │ Description: [ ]    │    │                           │
│  │ [Remove]            │    │                           │
│  │ [Add Experience]    │    │                           │
│  └─────────────────────┘    │                           │
│                             │                           │
│  ┌─────────────────────┐    │                           │
│  │ Projects            │    │                           │
│  │ Name: [        ]    │    │                           │
│  │ Description: [ ]    │    │                           │
│  │ [Remove]            │    │                           │
│  │ [Add Project]       │    │                           │
│  └─────────────────────┘    │                           │
│                             │                           │
│  ┌─────────────────────┐    │                           │
│  │ Skills              │    │                           │
│  │ [React, Node.js...] │    │                           │
│  └─────────────────────┘    │                           │
│                             │                           │
│  ┌─────────────────────┐    │                           │
│  │ Links               │    │                           │
│  │ GitHub: [      ]    │    │                           │
│  │ LinkedIn: [    ]    │    │                           │
│  └─────────────────────┘    │                           │
│                             │                           │
└─────────────────────────────┴───────────────────────────┘
     50% width                      50% width
```

---

## Preview Page (/preview)

```
┌─────────────────────────────────────────────────────────┐
│ AI Resume Builder  │  Builder  Preview  Proof           │
├─────────────────────────────────────────────────────────┤
│                                                         │
│                                                         │
│              ┌─────────────────────────┐                │
│              │                         │                │
│              │  ALEX JOHNSON           │                │
│              │  alex@example.com       │                │
│              │  (555) 123-4567         │                │
│              │  San Francisco, CA      │                │
│              │                         │                │
│              │  SUMMARY                │                │
│              │  Senior Software...     │                │
│              │                         │                │
│              │  EXPERIENCE             │                │
│              │  Senior Engineer        │                │
│              │  Tech Corp              │                │
│              │  2020 - Present         │                │
│              │  Led development...     │                │
│              │                         │                │
│              │  PROJECTS               │                │
│              │  AI Chat Platform       │                │
│              │  Real-time chat...      │                │
│              │                         │                │
│              │  EDUCATION              │                │
│              │  Stanford University    │                │
│              │  BS Computer Science    │                │
│              │                         │                │
│              │  SKILLS                 │                │
│              │  React, Node.js...      │                │
│              │                         │                │
│              └─────────────────────────┘                │
│                                                         │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## Proof Page (/proof)

```
┌─────────────────────────────────────────────────────────┐
│ AI Resume Builder  │  Builder  Preview  Proof           │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Proof of Work                                          │
│                                                         │
│  ┌───────────────────────────────────────────────────┐  │
│  │                                                   │  │
│  │  Artifacts and proof of completion will appear   │  │
│  │  here.                                            │  │
│  │                                                   │  │
│  └───────────────────────────────────────────────────┘  │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## Navigation Component

```
┌─────────────────────────────────────────────────────────┐
│ AI Resume Builder  │  Builder  Preview  Proof           │
└─────────────────────────────────────────────────────────┘
     Logo (clickable)      Nav links (active state)
```

**Active state**: Bold, black text
**Inactive state**: Regular, gray text

---

## Resume Preview Component

```
┌─────────────────────────────────────────────────────────┐
│ YOUR NAME                                               │ ← 32px bold
│ ─────────────────────────────────────────────────────── │ ← 2px border
│ email • phone • location                                │ ← 14px
│ github • linkedin                                       │ ← 14px
│                                                         │
│ SUMMARY                                                 │ ← 18px uppercase
│ Professional summary text goes here...                  │ ← 14px
│                                                         │
│ EXPERIENCE                                              │ ← 18px uppercase
│ Senior Engineer                    2020 - Present       │ ← 15px bold
│ Tech Corp                                               │ ← 14px italic
│ Led development of microservices...                     │ ← 14px
│                                                         │
│ PROJECTS                                                │ ← 18px uppercase
│ AI Chat Platform                                        │ ← 15px bold
│ Real-time chat app with AI...                           │ ← 14px
│                                                         │
│ EDUCATION                                               │ ← 18px uppercase
│ Stanford University                           2018      │ ← 15px bold
│ BS Computer Science                                     │ ← 14px
│                                                         │
│ SKILLS                                                  │ ← 18px uppercase
│ React, Node.js, TypeScript, AWS...                      │ ← 14px
└─────────────────────────────────────────────────────────┘
```

**Typography:**
- Font: Georgia (serif)
- Headers: Uppercase, letter-spacing: 1px
- Clean hierarchy
- Generous line-height: 1.6

---

## Color Palette

```
Background:  #fafafa (light gray)
             #f5f5f5 (lighter gray)
             #f9f9f9 (form backgrounds)

Foreground:  #000 (black - primary text)
             #333 (dark gray - secondary text)
             #666 (medium gray - tertiary text)

Borders:     #e0e0e0 (light border)
             #ddd (form borders)

Buttons:     #000 (black background)
             #fff (white text)
```

---

## Spacing System

```
Padding:
- Small: 8px, 10px, 12px
- Medium: 16px, 20px, 24px
- Large: 32px, 48px

Margins:
- Small: 4px, 8px, 12px
- Medium: 16px, 24px
- Large: 32px, 48px

Border Radius: 4px (consistent)
Border Width: 1px or 2px
```

---

## Responsive Breakpoints

**Builder Page:**
- Left column: 50% width
- Right column: 50% width
- Both scrollable independently
- Max height: calc(100vh - 60px)

**Preview Page:**
- Max width: 800px
- Centered
- Padding: 48px

---

## Interactive States

**Buttons:**
- Default: Black background, white text
- Hover: Slightly lighter (not implemented yet)
- Disabled: Gray background, gray text

**Inputs:**
- Default: White background, gray border
- Focus: (not styled yet)

**Navigation:**
- Active: Bold, black
- Inactive: Regular, gray
- Hover: (not styled yet)
