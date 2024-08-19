# 🌐 Enea's Portfolio

![GitHub issues](https://img.shields.io/github/issues/enea-scaccabarozzi/portfolio)
![GitHub forks](https://img.shields.io/github/forks/enea-scaccabarozzi/portfolio)
![GitHub stars](https://img.shields.io/github/stars/enea-scaccabarozzi/portfolio)
![GitHub license](https://img.shields.io/github/license/enea-scaccabarozzi/portfolio)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/enea-scaccabarozzi/portfolio/ci-cd-workflow.yml)

Welcome to the repository of my personal portfolio and blog! This project contain a small static portfolio site to claim my corner on the internet. It's build following my personal taste and needs, and it's a good example of how to build a modern website using Next.js, React, Tailwind CSS and many other cool stuff.

## Features

The webiste is build using the following stack

- ⚡️ Next.js 14 with App Router
- ⚛️ React 18
- ✨ TypeScript
- 💨 Tailwind CSS 3 — Configured with CSS Variables to extend the **primary** color
- 💎 Shadcn/ui — A collection of UI components for React and Tailwind CSS
- 🃏 Jest — Configured for unit testing
- 📏 ESLint — Find and fix problems in your code, also will **auto sort** your imports
- 💖 Prettier — Format your code consistently
- 🐶 Husky & Lint Staged — Run scripts on your staged files before they are committed
- 🤖 Conventional Commit Lint — Make sure you & your teammates follow conventional commit
- ⏰ Release Please — Generate your changelog by activating the `release-please` workflow
- 👷 Github Actions — Lint your code on PR and deploy new changes on the fly
- 🚘 Automatic Branch and Issue Autolink — Branch will be automatically created on issue **assign**, and auto linked on PR
- 🔥 Snippets — A collection of useful snippets
- 🗺 Site Map — Automatically generate sitemap.xml
- 🐳 Doker - easy deploy everywhere, free from big clouds

Other than that, this project also leverage:

- 👻 Personal [blog](blog.eneascaccabarozi.xyz) with Ghost CMS
- 📊 Plausible Analytics to monitor interactions

## Deployment

You might ask why choose plain Docker over Vercel or other cloud providers? The answer is simple, all the stack you see here should be self hostable on my home lab. This is a way to keep in house all the data and the services I use, and to have full control over them, getting a bit of fresh air from the big cloud providers.

I have a docker Swarm setup wich run this application redundantly on multiple nodes, side to side with many other useful services, like the docker registry where this CI/CD pipeline push the images, Plausible Analytics and Ghost CMS, to talk about the ones used here directly
