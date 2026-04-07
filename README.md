# Sopsage landing (React + Vite)

Marketing site for **Sopsage**, aligned with the main app (AI-assisted SOPs, collaboration, exports, analytics, roles, Stripe).

## Development

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

```bash
npm run build    # output in dist/
npm run preview  # serve production build locally
```

## Demo video

Add your recording as:

- `public/demo.mp4` — required for the inline player to load.

Optional:

- `public/demo-poster.jpg` — add a `poster` attribute on the `<video>` in `src/components/DemoVideo.tsx` if you want a thumbnail before play.

If `demo.mp4` is missing, the demo section shows instructions to add the file.

## Environment (optional)

Create `.env.local` (not committed):

| Variable                   | Purpose                                                                  |
| -------------------------- | ------------------------------------------------------------------------ |
| `VITE_APP_ORIGIN`          | App origin for Sign in / Get started links (default `https://sopsage.com`) |
| `VITE_EMAILJS_SERVICE_ID`  | EmailJS service                                                          |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template                                                         |
| `VITE_EMAILJS_PUBLIC_KEY`  | EmailJS public key                                                       |
| `VITE_CONTACT_TO_EMAIL`    | Inbox for contact form notifications                                     |

See `EMAILJS_SETUP.md` for EmailJS template details.

## GitHub Pages

The workflow sets `VITE_BASE` to `/<repository-name>/` for project pages. For a site at the domain root (e.g. custom domain), set `VITE_BASE=/` in the build step instead.

## License

Created for Sopsage. All rights reserved.
