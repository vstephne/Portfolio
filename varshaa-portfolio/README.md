# Varshaa Shree — Portfolio (React + Vite + Tailwind)

A fast, modern portfolio built with React + Vite + TailwindCSS.

## Local Dev
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Deploy to GitHub Pages

1. Create a **public** repository on GitHub (e.g., `varshaa-portfolio`).
2. Open `vite.config.js` and set:
   ```js
   export default defineConfig({
     plugins: [react()],
     base: "/varshaa-portfolio/", // <-- change to your repo name
   });
   ```
3. Push code to a `main` branch.
4. GitHub will auto-run the **Deploy to GitHub Pages** workflow.
5. In your repo: Settings → Pages → set **Source** to **GitHub Actions** (if not already).
6. Your site will be live at `https://<your-username>.github.io/<repo>/`.

### Custom Domain (optional)
If you use a custom domain, set `base: "/"` and add a `CNAME` file in `public/` with your domain name.
