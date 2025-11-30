#!/bin/bash

# Quick push script - run this in your terminal
cd "$(dirname "$0")"

echo "🚀 Pushing to GitHub..."
echo ""
echo "You'll be prompted for:"
echo "  Username: ILYJEFF"
echo "  Password: [Your GitHub Personal Access Token]"
echo ""
echo "Get a token at: https://github.com/settings/tokens"
echo ""
echo "Press Enter to continue or Ctrl+C to cancel..."
read

git push origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed! Vercel will auto-deploy."
else
    echo ""
    echo "❌ Push failed. Make sure you have a Personal Access Token."
fi

