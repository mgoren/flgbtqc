A rewrite of the FLGBTQC website to use a static site generator - aka an excuse to teach myself Jekyll

### Development
- `jekyll serve --livereload`

### Deployment
- commits to main branch automatically deploy to GitHub Pages (via GitHub actions CI)
- If deploying without CI, do `jekyll build` and then upload the `_site` folder
