#!/bin/bash

# Loha Mati Image Optimizer
# Uses 'sips' (built-in on macOS) to resize and compress images for the web.

echo "🎨 Starting image optimization..."

# Create a backup folder just in case
mkdir -p _original_high_res

# Find all JPG and PNG files
find . -maxdepth 2 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r img; do
    # Skip the backup folder and hidden files
    if [[ "$img" == *"_original_high_res"* ]] || [[ "$img" == *"/."* ]]; then
        continue
    fi

    echo "📸 Optimizing: $img"
    
    # Backup the original
    cp "$img" "_original_high_res/"

    # 1. Resize to max 2000px (maintaining aspect ratio)
    # 2. Set quality to 75% (great balance for web)
    sips -Z 2000 "$img" --setProperty formatOptions 75 > /dev/null 2>&1
done

echo "✅ Optimization complete! Original high-res photos are safe in the '_original_high_res' folder."
echo "🚀 Your site will now load much faster and is ready for hosting."
