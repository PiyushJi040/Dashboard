#!/bin/bash

echo "========================================"
echo "   GitHub Upload & Auto-Deploy Script"
echo "========================================"
echo ""

echo "[1/5] Initializing Git repository..."
git init
echo ""

echo "[2/5] Adding all files..."
git add .
echo ""

echo "[3/5] Creating initial commit..."
git commit -m "🎨 Initial commit: Premium dark theme dashboard with auto-deploy"
echo ""

echo "[4/5] Adding remote repository..."
git remote add origin https://github.com/PiyushJi040/Dashboard.git
echo ""

echo "[5/5] Pushing to GitHub..."
git branch -M main
git push -u origin main
echo ""

echo "========================================"
echo "   Upload Complete! ✅"
echo "========================================"
echo ""
echo "✨ GitHub Actions will now automatically deploy your dashboard!"
echo ""
echo "📍 Repository: https://github.com/PiyushJi040/Dashboard"
echo "🌐 Live URL: https://piyushji040.github.io/Dashboard"
echo ""
echo "⏳ Deployment takes ~2-5 minutes"
echo "📊 Check progress: https://github.com/PiyushJi040/Dashboard/actions"
echo ""
