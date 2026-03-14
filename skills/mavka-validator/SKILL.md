---
name: mavka-validator
description: Validates UI code against Mavka Design System standards and accessibility rules.
---

# Mavka Validator Skill

This skill provides tools and guidelines for validating that UI implementations adhere to the Mavka Design System.

## Validation Rules

### 1. Color Compliance
- Checks if used hex codes match the Mavka palette.
- Ensures sufficient contrast ratios for accessibility.

### 2. Spacing Consistency
- Verifies that margins and paddings are multiples of 4px.
- Flags any hardcoded spacing values that don't align with tokens.

### 3. Typography
- Ensures correct font families and sizes are used.
- Validates line-heights and letter-spacing.

## Usage

When this skill is active, the agent will automatically run a validation pass on any UI code before presenting it.

```bash
# Example validation command (placeholder)
mavka-validate --path ./src/components
```
