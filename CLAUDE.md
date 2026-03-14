# CLAUDE.md - Project Context for AI Agents

## Overview
This is the documentation project for `mdsdocs`, built using Mintlify. It adheres to an "Agentic" repository layout to optimize AI collaboration.

## Core Structure
- `agents/`: Specialized AI agent profiles and character cards.
- `skills/`: Reusable agent capabilities and tools.
- `commands/`: Custom documented workflows and CLI commands.
- `arc/`: Architectural Context and Decision Records (ADRs).
- `docs.json`: Mintlify configuration.

## Development Environment
- **Local Dev Server**: `mint dev`
- **Link Checker**: `mint broken-links`
- **Preview**: [http://localhost:3000](http://localhost:3000)

## Code & Docs Interaction
- All documentation is in MDX format.
- Use the **Mintlify Skill** for component knowledge.
- Avoid SSR; all data fetching is client-side only (if applicable).
