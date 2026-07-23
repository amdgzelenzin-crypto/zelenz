import os
import re

# Color mapping: Pink/Mauve/RoseGold theme to Black/Gold Premium Theme
color_map = {
    # Dark Mauve -> Black/Dark Gray
    "#3D1520": "#0a0a0a",
    # Light pinks / creams -> Dark backgrounds
    "#FDE8E8": "#000000",
    "#FFF5F7": "#111111",
    "#FFF0E8": "#151515",
    "#FDEEF0": "#111111",
    "#F9C8C8": "#222222",
    "#FFF9FA": "#111111",
    "#FFE4E8": "#2a2a2a",
    # Rose Golds / Corals -> Premium Gold
    "#E8A890": "#D4AF37",
    "#D4907A": "#C5A059",
    "#C07060": "#B8860B",
    "#A86070": "#C5A059",
    "#F07080": "#D4AF37",
    "#F9919F": "#C5A059",
    "#B76E79": "#D4AF37",
    "#B07880": "#9e8140",
    "#6B4F55": "#cccccc",
    "#4E4247": "#aaaaaa",
    # White / Light Text on Dark
    "#FFFFFF": "#ffffff", # keep white, but we need to ensure text isn't black on black
    # Gold (adjust slightly for premium feel)
    "#D4A055": "#D4AF37",
    "#C4903A": "#C5A059",
    "#F5E0A0": "#FFDF00",
    "#F5D5C8": "#aaaaaa",
    "#E8CC90": "#D4AF37",
}

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    new_content = content
    # For each mapping, do case-insensitive replace
    for old_color, new_color in color_map.items():
        new_content = re.sub(re.escape(old_color), new_color, new_content, flags=re.IGNORECASE)
    
    # Custom fixes: Since background is now black, we need to change some text-white to text-black if they are on gold bg, 
    # but let's just do hex code replacement for now.
    
    if new_content != content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

for root, dirs, files in os.walk('.'):
    if 'node_modules' in root or '.next' in root or '.git' in root:
        continue
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts') or file.endswith('.css'):
            process_file(os.path.join(root, file))

print("Done")
