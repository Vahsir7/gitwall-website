# GitWall — website

Landing page for **GitWall**, a macOS menu-bar app that watches your GitHub pull
requests and tells you when someone requests changes, re-requests a review, or
CI goes red.

- Live site: <https://gitwall.vahsir.in>
- App source: <https://github.com/Vahsir7/GitWall>

## Structure

Static, single page, no build step.

```
index.html           the page
styles.css            all styling
script.js             copy-to-clipboard + scroll-spy nav
assets/favicon.svg    tab icon / logo mark
vercel.json           clean URLs + static asset caching
```

## Local preview

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Deploy

Deployed on Vercel as a static site — pushing to `main` publishes.
