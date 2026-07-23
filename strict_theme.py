import os
import re

# Precise mappings
color_map = {
    # Darks to Pure Black
    "#0a0a0a": "#000000",
    "#111111": "#000000",
    "#151515": "#000000",
    "#000000": "#000000",
    "#fff0f2": "#000000",
    "#fff9f5": "#000000",
    
    # Grays/Darks to Charcoal
    "#222222": "#323232",
    "#2a2a2a": "#323232",
    "#374151": "#323232",
    "#4b5563": "#323232",
    "#2d1518": "#323232",
    "#6b3040": "#323232",
    "#8a7878": "#323232",
    "#8a4858": "#323232",
    "#5c2d3a": "#323232",
    
    # Golds
    "#d4af37": "#c49c4d",
    "#c5a059": "#c1a447",
    "#b8843a": "#c49c4d",
    "#9e8140": "#c49c4d",
    "#ffdf00": "#eed982",
    "#f0c090": "#eed982",
    "#b8860b": "#c1a447",
    
    # Creams / Light sand
    "#aaaaaa": "#e9ce98",
    "#cccccc": "#e9ce98",
    "#f0f0f0": "#e9ce98",
    "#e0e0e0": "#e9ce98",
    "#f5e8c8": "#e9ce98",
    "#f5e6c8": "#e9ce98",
    "#fadadd": "#e9ce98",
    "#f5d5c0": "#e9ce98",
    
    # Remaining Pinks
    "#e06878": "#c1a447",
    "#f4a8b0": "#c49c4d",
    "#ee8898": "#c1a447",
    "#ea4335": "#c49c4d",
    
    # Whites
    "#ffffff": "#ffffff",
    "#fff": "#ffffff"
}

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    new_content = content
    
    # For every hex color in the file, if it exists in color_map, replace it
    # Find all hex colors
    hex_pattern = re.compile(r'#[0-9a-fA-F]{3,8}')
    matches = set(hex_pattern.findall(content))
    
    for match in matches:
        lower_match = match.lower()
        if lower_match in color_map:
            # We do a replace using re.sub with ignorecase
            new_content = re.sub(re.escape(match), color_map[lower_match], new_content, flags=re.IGNORECASE)
    
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

print("Done strict replacement")
