# Yahiya Khan — Student Portfolio (Ready to Upload)

**No dashboard. No database. No installation.** This is a complete static website you can open in a browser or upload to Netlify / GitHub Pages.

## 1) Open your portfolio now

1. Extract the ZIP into a folder.
2. Open `index.html` in Chrome, Edge or another modern browser.
3. Use the five top links: **About Me**, **Projects / Portfolio**, **Certifications**, **Tasks**, **Contact**.
4. Click any certificate, presentation or recording: they point to actual files in the ZIP.

Roman Urdu: **ZIP extract karo, phir `index.html` double-click karo. Dashboard bilkul nahi hai.**

## 2) IBM SkillsBuild certifications

The 11 course cards link to these files in `files/certifications/`. `NN` is the course number from `01` to `11`.

| Item | Filename |
|---|---|
| Certificate PDF made from the supplied certificate image | `NN-certificate.pdf` |
| Editable presentation | `NN-presentation.pptx` |
| Silent slideshow video | `NN-recording.mp4` |

## 3) Update a course

Edit the matching title in the `courseTitles` list in `assets/content.js`. When replacing a course file, keep its numbered filename and extension.

## 4) Your About Me, CV, LinkedIn and GitHub

- ATS-style updated CV: `files/cv/Yahiya_Khan_ATS_CV.pdf` (made from your supplied CV and linked on the website).
- Original uploaded CV backup: `files/cv/original-yahiya-cv.pdf`.
- Intro sample: `files/intro/intro-placeholder.mp4` (20-second, replaces in place; same filename).
- LinkedIn: URL taken from your CV.
- GitHub: `https://github.com/kyahiya235-ops` inferred from the uploaded Git repository's origin URL — **please confirm it is your own profile**.

**CHECK BEFORE SUBMISSION:** Your uploaded CV says Master's study 2023–2025 was *pursuing*. I deliberately did not state that the Master's was completed. Confirm the accurate current status and correct both the portfolio text in `index.html` and the ATS CV PDF as needed.

If you replace your CV PDF, keep the name `Yahiya_Khan_ATS_CV.pdf`, otherwise update the link in `index.html` and task links in `assets/content.js`.

## 5) Projects / AI Agent Prototypes

Three interactive example concept demos are included:

- `demos/supply-chain-faq.html`
- `demos/shipment-status.html`
- `demos/career-prep.html`

They use prewritten JavaScript responses. **They are NOT actual AI models.** Replace them with your own agents and update each project in the `projects` list inside `assets/content.js`.

Each sample project's GitHub link points to the source-file path of the *existing uploaded portfolio repository*. It may not work until you push these new files to `https://github.com/kyahiya235-ops/yahiya-cv` on the main branch. If your actual agents are in different repositories, replace each `github:` URL with the correct repository link. The portfolio doesn't claim these demos were completed AI projects.

A verified bachelor thesis project (as titled in your supplied CV) is also included, without inventing a live demo or a source repository.

## 6) Tasks

The Tasks section lists **Task 1 — Profile & Project Idea (Improved Version)**, **Task 2 — Job Prep & First 2 Certifications**, and **Task 3 — Complete Student Portfolio Page**. Edit the `tasks` array in `assets/content.js` to update dates, descriptions or links.

- Task 1 links to the ATS CV, profile links, intro animation and Yahiya's **AI-Powered Smart Logistics & Dynamic Route Optimization System** presentation in both PPTX and PDF.
- Task 2 links to the first two IBM course sets and the cover-letter draft. The selected job posting and tailored letter are pending.
- Task 3 links to the portfolio sections, including all 11 certificates.

## 7) Contact form (no dashboard)

It opens the visitor's default email app with a prepared message. The visitor must **click Send in that app**. No message is stored or sent directly from the site. If you require a server-side contact form later, you'll need a form service or backend.

## 8) How to publish (easy option)

**Netlify:** Go to the Netlify dashboard, choose to deploy manually / drag-and-drop a folder, and drop this extracted `Yahiya_Portfolio_Final` folder or a ZIP of its contents. It is a static site and needs **no build command**.

**GitHub Pages:** Create or update a GitHub repository with **all files and folders** from this directory at the repository root. In repo settings, enable Pages from the main branch and root (`/`). Share the published URL with the teacher. Links to example GitHub demo source files will work after these files exist at the expected repository paths (or edit the URL to match your actual repo).

Never upload just `index.html` alone: include the `assets/`, `files/`, `images/`, and `demos/` folders too.

## 9) Submission checklist

- [ ] Confirm Master's degree status in CV and About Me.
- [ ] Verify GitHub profile/repository and LinkedIn links.
- [ ] Replace sample introduction with personal video or approved animation.
- [ ] Use your own screen recordings if your teacher requires personal narration or a live presentation.
- [ ] Replace sample AI agent demos with genuine projects and per-project GitHub/live links.
- [ ] Add the selected job posting and tailored cover letter.
- [ ] Check Task dates and files; then publish and test every link.

