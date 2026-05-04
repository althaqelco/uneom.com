#!/bin/bash
set -e

echo "========================================="
echo "📥 Setting up Git LFS for Firebase Build"
echo "========================================="

# Check if git-lfs is already installed in the environment
if ! command -v git-lfs &> /dev/null; then
    echo "⚙️ git-lfs not found. Downloading standalone binary..."
    curl -sLO https://github.com/git-lfs/git-lfs/releases/download/v3.4.1/git-lfs-linux-amd64-v3.4.1.tar.gz
    tar -xzf git-lfs-linux-amd64-v3.4.1.tar.gz
    cp git-lfs-*/git-lfs .
    chmod +x git-lfs
    export PATH="$PWD:$PATH"
    
    # Cleanup downloaded files
    rm -rf git-lfs-linux-amd64-v3.4.1.tar.gz git-lfs-3.4.1/
else
    echo "✅ git-lfs is already installed in the environment."
fi

# Install local git hooks for LFS
git lfs install --local

echo "🚀 Pulling actual image assets from Git LFS..."
git lfs pull

echo "✅ Git LFS pull complete! Images are now ready for Next.js build."
