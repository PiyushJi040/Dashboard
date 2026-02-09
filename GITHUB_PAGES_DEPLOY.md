# 🚀 GitHub Pages Deployment Guide

## 📋 Automatic Deployment Setup

Your dashboard will automatically deploy to GitHub Pages whenever you push to the `main` branch!

### Step 1: Upload to GitHub

```bash
cd c:/Users/namke/OneDrive/Desktop/done-projects/dashboard

git init
git add .
git commit -m "🎨 Initial commit with GitHub Actions deployment"
git remote add origin https://github.com/PiyushJi040/Dashboard.git
git branch -M main
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository: https://github.com/PiyushJi040/Dashboard
2. Click **Settings** → **Pages**
3. Under **Source**, select: `gh-pages` branch
4. Click **Save**

### Step 3: Wait for Deployment

- GitHub Actions will automatically build and deploy
- Check progress: **Actions** tab in your repository
- Takes ~2-5 minutes

### Step 4: Access Your Dashboard

Your dashboard will be live at:
```
https://piyushji040.github.io/Dashboard
```

---

## 🔧 Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
cd client
npm install gh-pages --save-dev
npm run deploy
```

---

## 🌐 Custom Domain (Optional)

### Add Custom Domain:

1. Buy a domain (e.g., from Namecheap, GoDaddy)
2. Add CNAME record pointing to: `piyushji040.github.io`
3. In GitHub Settings → Pages, add your custom domain
4. Update `.github/workflows/deploy.yml`:
   ```yaml
   cname: yourdomain.com
   ```

---

## 🔄 Update Deployment

Every time you push to `main`, it auto-deploys:

```bash
git add .
git commit -m "Update dashboard"
git push origin main
```

---

## ⚙️ Environment Variables

For API calls, update `client/src/config.js`:

```javascript
export const API_URL = process.env.NODE_ENV === 'production'
  ? 'https://your-backend-api.onrender.com'
  : 'http://localhost:5001';
```

---

## 🐛 Troubleshooting

### Issue: 404 on refresh
**Solution:** Add to `client/public/index.html`:
```html
<script>
  (function(l) {
    if (l.search[1] === '/' ) {
      var decoded = l.search.slice(1).split('&').map(function(s) { 
        return s.replace(/~and~/g, '&')
      }).join('?');
      window.history.replaceState(null, null,
          l.pathname.slice(0, -1) + decoded + l.hash
      );
    }
  }(window.location))
</script>
```

### Issue: Blank page after deployment
**Solution:** Check `homepage` in `package.json` matches your repo name

### Issue: Build fails
**Solution:** Check the Actions tab for error logs

---

## 📊 Deployment Status

Add this badge to your README:

```markdown
![Deploy Status](https://github.com/PiyushJi040/Dashboard/actions/workflows/deploy.yml/badge.svg)
```

---

## ✅ Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled
- [ ] Actions workflow running
- [ ] Deployment successful
- [ ] Dashboard accessible online
- [ ] All features working
- [ ] Responsive on mobile

---

**Your dashboard will be live at:** https://piyushji040.github.io/Dashboard 🎉
