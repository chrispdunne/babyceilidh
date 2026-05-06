# Little Folk Ceilidh (static site)

Family ceilidh sessions in **Sussex**. Plain HTML/CSS/JS — no build step. Hosted on **Netlify**.

## Local preview

From the project root:

```bash
python3 -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080).

Equivalent via npm (uses the same Python command):

```bash
npm run serve
```

## Netlify

- **Publish directory:** `.` (repository root — `index.html` at the top level).
- Config lives in [`netlify.toml`](netlify.toml) (`publish = "."`, no build command).

Connect the Git repo in the Netlify UI and deploy; no Node install is required for production.

`package.json` exists only for the `npm run serve` shortcut (same as the Python command above). It has **no dependencies**, so Netlify’s `npm install` step stays negligible. Remove it if you prefer not to have any npm tooling in the repo.
