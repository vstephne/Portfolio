# Varshaa Shree — Portfolio (React + Vite + Tailwind)

A fast, modern portfolio built with React + Vite + TailwindCSS.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to GitHub Pages

This site is automatically deployed to GitHub Pages from the `main` branch’s `varshaa-portfolio` directory.

**Steps:**
1. All site files are inside `varshaa-portfolio`.
2. The repository is already configured to deploy from this folder.
3. After pushing changes to the `main` branch, GitHub Pages will update your site at:  
   `https://vstephne.github.io/Portfolio/`

### Custom Domain (optional)
- To use your own domain, set `base: "/"` in `vite.config.js`.
- Add a `CNAME` file to the `public/` folder containing your domain name.
- Configure your domain’s DNS to point to GitHub Pages.

## Notes

- If you change the source folder or branch, update the Pages settings in the repository’s Settings > Pages.
- For further customization, consult [GitHub Pages documentation](https://docs.github.com/pages).