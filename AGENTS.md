<!-- BEGIN:nextjs-agent-rules -->
# AGENTS.md 

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

## Project Overview
This repository contains a personal portfolio built with Next.js using the App Router and Tailwind CSS.

The goal is to maintain a clean, modern, scalable, and professional codebase for a developer portfolio with a tech-style visual identity.

## Tech Stack
- Next.js
- React
- TypeScript
- Tailwind CSS
- App Router

## Main Goal
Keep the project organized, reusable, responsive, and easy to extend.

The portfolio should support:
- Hero section
- About section
- Skills section
- Projects section
- Contact section
- Reusable UI components
- Future animation support

## Architecture Rules
- Keep routing inside `app/`
- Keep reusable components inside `components/`
- Split components by responsibility:
  - `components/layout/` for layout elements like Navbar and Footer
  - `components/sections/` for portfolio sections like Hero, About, Skills, Projects, Contact
  - `components/ui/` for reusable UI pieces like buttons, cards, badges, section titles, social links
- Keep static content in `data/`
- Keep helper functions in `lib/`
- Keep static assets in `public/`
<!-- END:nextjs-agent-rules -->
