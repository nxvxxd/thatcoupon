#!/bin/bash
# ============================================
# THAT COUPON - DEPLOY SCRIPT v2
# Upload this + thatcoupon-site.zip to VPS
# Then run: bash deploy.sh
# ============================================

SITE_DIR="/home/cpuser718y/apps/thatcoupon"
ZIP_FILE="thatcoupon-site.zip"

echo "========================================"
echo "  THAT COUPON DEPLOY"
echo "========================================"

# 1. Backup existing site
if [ -d "$SITE_DIR" ]; then
    BACKUP_DIR="${SITE_DIR}_backup_$(date +%Y%m%d_%H%M%S)"
    cp -r "$SITE_DIR" "$BACKUP_DIR"
    echo "[OK] Backed up to: $BACKUP_DIR"
else
    mkdir -p "$SITE_DIR"
    echo "[OK] Created site directory"
fi

# 2. Clear old files (keep .well-known)
if [ -d "$SITE_DIR/.well-known" ]; then
    mv "$SITE_DIR/.well-known" /tmp/.well-known_backup
fi
rm -rf "$SITE_DIR"/*
if [ -d /tmp/.well-known_backup ]; then
    mv /tmp/.well-known_backup "$SITE_DIR/.well-known"
fi

# 3. Extract zip
if [ -f "$ZIP_FILE" ]; then
    unzip -o "$ZIP_FILE" -d "$SITE_DIR/"
    echo "[OK] Files extracted"
else
    echo "[ERROR] $ZIP_FILE not found!"
    echo "Upload thatcoupon-site.zip to this directory first."
    exit 1
fi

# 4. Copy .html files into subfolders as index.html
cd "$SITE_DIR"
cp noon-coupon-code.html noon-coupon-code/index.html 2>/dev/null
cp namshi-coupon-code.html namshi-coupon-code/index.html 2>/dev/null
cp shosh-arab-coupon-code.html shosh-arab-coupon-code/index.html 2>/dev/null
cp bloomingdales-uae-coupon.html bloomingdales-uae-coupon/index.html 2>/dev/null
cp about.html about/index.html 2>/dev/null
cp contact.html contact/index.html 2>/dev/null
cp stores.html stores/index.html 2>/dev/null
cp terms.html terms/index.html 2>/dev/null
cp privacy-policy.html privacy-policy/index.html 2>/dev/null
cp categories/fashion.html categories/fashion/index.html 2>/dev/null
cp categories/electronics.html categories/electronics/index.html 2>/dev/null
cp _not-found.html _not-found/index.html 2>/dev/null
echo "[OK] Copied index.html into all subfolders"

# 5. Fix permissions
chown -R cpuser718y:cpuser718y "$SITE_DIR"
find "$SITE_DIR" -type d -exec chmod 755 {} \;
find "$SITE_DIR" -type f -exec chmod 644 {} \;
echo "[OK] Permissions fixed"

# 6. Clean up zip
rm -f "$ZIP_FILE"
echo "[OK] Cleaned up zip file"

echo ""
echo "========================================"
echo "  DEPLOY COMPLETE!"
echo "========================================"
echo ""
echo "Test these URLs:"
echo "  https://thatcoupon.com/"
echo "  https://thatcoupon.com/noon-coupon-code/"
echo "  https://thatcoupon.com/namshi-coupon-code/"
echo "  https://thatcoupon.com/stores/"
echo "  https://thatcoupon.com/about/"
echo "  https://thatcoupon.com/sitemap.xml"
echo "  https://thatcoupon.com/robots.txt"
echo ""
