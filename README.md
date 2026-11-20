# Ivula Secure Ops

Sales demo site for security and systems installers: IP CCTV, access control, fire alarms, electric fences and perimeter monitoring. Built by Ivula Technologies.

## What it is

One static page (`index.html`) with hash routes, one per solution, each with a working click-through demo. Everything runs in the browser with sample data: no database, no build step, no environment variables.

- `#home` overview, video hero, main offer (Service & Maintenance System) and 30-day pilot
- `#service` technician job card app, contracts with M-Pesa billing, monthly client report
- `#cctv`, `#access`, `#fire`, `#fence`, `#monitoring`, `#business`

## Deploy

- **Vercel:** import this repo, framework preset "Other", no build command, output directory `.` (root).
- **cPanel:** upload `index.html`, `hero.mp4`, `poster.jpg` and `bius.png` to the domain's folder.

## Background video

`hero.mp4` is rendered from `source/hero-scene.html` (canvas animation, 10 s loop). To re-render: run `node source/record-hero.js` (Playwright) into a `f/` folder, then
`ffmpeg -framerate 30 -i f/%04d.jpg -c:v libx264 -pix_fmt yuv420p -crf 26 -movflags +faststart -an hero.mp4`.
