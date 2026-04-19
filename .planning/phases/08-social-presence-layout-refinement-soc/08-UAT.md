---
status: testing
phase: 08-social-presence-layout-refinement-soc
source: [08-SUMMARY.md]
started: 2026-04-19T14:19:30Z
updated: 2026-04-19T14:19:30Z
---

## Current Test

number: 1
name: Cold Start Smoke Test
expected: |
  Start the application with `npm run dev`.
  The application should boot without errors.
  The Home page should load and show the new TopHeader.
awaiting: user response

## Tests

### 1. Cold Start Smoke Test
expected: |
  Start the application with `npm run dev`.
  The application should boot without errors.
  The Home page should load and show the new TopHeader.
result: [pending]

### 2. Friend Activity Sidebar Toggle
expected: |
  Click the 'Users' icon in the top-right header.
  The Friend Activity sidebar should expand and collapse, shifting the main content area smoothly.
result: [pending]

### 3. Responsive Layout (xl breakpoint)
expected: |
  Resize the browser window. 
  Above 1280px (xl), the Friend Activity sidebar should be available.
  Below 1280px, the sidebar should automatically disappear, giving more space to the main content.
result: [pending]

### 4. Live Friend Activity Simulation
expected: |
  Open the Friend Activity sidebar and watch for 15-30 seconds.
  A random friend should update their activity to a new track and status should change to 'Now'.
result: [pending]

### 5. Interaction: Play from Social Feed
expected: |
  Click on a song name in a friend's activity row.
  The song should immediately load into the PlayerBar and start playing (or show as playing if simulation).
result: [pending]

## Summary

total: 5
passed: 0
issues: 0
pending: 5
skipped: 0

## Gaps

[none yet]
