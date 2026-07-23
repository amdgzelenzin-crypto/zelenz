import os
import re

# ─── PALETTE ──────────────────────────────────────────────────────────────
# Background levels  (darkest → lightest)
BLACK        = "#000000"   # pure black  — page bg, deepest surfaces
CHARCOAL     = "#1a1a1a"   # near-black  — card bg
DARK_GRAY    = "#323232"   # charcoal    — borders, secondary surfaces
GOLD_DARK    = "#c49c4d"   # muted gold  — primary accent
GOLD_MAIN    = "#c1a447"   # ochre gold  — hover accent
GOLD_LIGHT   = "#e9ce98"   # light sand  — body text, muted text
GOLD_PALE    = "#eed982"   # pastel gold — highlights, shimmer
TEXT_PRIMARY  = "#e9ce98"  # body text on dark bg
TEXT_HEADING  = "#c49c4d"  # headings accent
TEXT_MUTED    = "#8a7a5a"  # very muted text
WHITE_TEXT    = "#e9ce98"  # where "white" text was used on dark bg
BORDER        = "#2a2200"  # gold-tinted dark border

def fix_rgba(m):
    """Convert all remaining pink/rose rgba to gold-tinted equivalents"""
    val = m.group(0)
    lower = val.lower()
    # Pink rgba patterns → transparent gold
    if "183,110,121" in lower or "183, 110, 121" in lower:
        alpha_match = re.search(r'[\d.]+\)$', val)
        a = alpha_match.group(0).rstrip(')') if alpha_match else "0.12"
        return f"rgba(196, 156, 77, {a})"
    if "249, 200, 200" in lower or "249,200,200" in lower:
        alpha_match = re.search(r'[\d.]+\)$', val)
        a = alpha_match.group(0).rstrip(')') if alpha_match else "0.1"
        return f"rgba(196, 156, 77, {a})"
    if "249,145,159" in lower or "249, 145, 159" in lower:
        alpha_match = re.search(r'[\d.]+\)$', val)
        a = alpha_match.group(0).rstrip(')') if alpha_match else "0.15"
        return f"rgba(196, 156, 77, {a})"
    if "245,210,200" in lower or "245, 210, 200" in lower:
        alpha_match = re.search(r'[\d.]+\)$', val)
        a = alpha_match.group(0).rstrip(')') if alpha_match else "0.15"
        return f"rgba(196, 156, 77, {a})"
    if "61,21,32" in lower or "61, 21, 32" in lower or "61,26,31" in lower or "61, 26, 31" in lower:
        alpha_match = re.search(r'[\d.]+\)$', val)
        a = alpha_match.group(0).rstrip(')') if alpha_match else "0.8"
        fa = float(a)
        if fa >= 0.8:
            return f"rgba(0, 0, 0, {a})"
        else:
            return f"rgba(26, 26, 26, {a})"
    if "232,168,144" in lower or "232, 168, 144" in lower:
        return "rgba(196, 156, 77, 0.30)"
    if "212, 160, 85" in lower or "212,160,85" in lower:
        return "rgba(196, 156, 77, 0.35)"
    if "253,232,232" in lower or "253, 232, 232" in lower:
        alpha_match = re.search(r'[\d.]+\)$', val)
        a = alpha_match.group(0).rstrip(')') if alpha_match else "0.92"
        return f"rgba(0, 0, 0, {a})"
    if "78, 66, 71" in lower or "78,66,71" in lower:
        return "rgba(196, 156, 77, 0.45)"
    # Keep whites-with-opacity in rgba (used for button overlays on dark)
    return val

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    new_content = content
    
    # 1. Fix malformed #fffffffff (too many f's) → body text on dark = gold-sand
    new_content = new_content.replace("#fffffffff", GOLD_LIGHT)
    
    # 2. Fix bg-white Tailwind class → bg-[#1a1a1a]
    new_content = re.sub(r'\bbg-white\b', 'bg-[#1a1a1a]', new_content)
    
    # 3. Fix text-white only where text will be on dark bg (keep in lightbox/overlay contexts)
    # For now just ensure #ffffff as text color → WHITE_TEXT (gold-sand) in non-overlay contexts
    # We'll handle this carefully - only inside style= props
    
    # 4. Fix #ffffff → gold-sand where used as text/body color, keep as text on gold buttons
    # We'll do a targeted replacement in component styles
    
    # 5. Replace all pink-family rgba
    new_content = re.sub(
        r'rgba\(\s*(?:183\s*,\s*110\s*,\s*121|249\s*,\s*200\s*,\s*200|249\s*,\s*145\s*,\s*159|245\s*,\s*210\s*,\s*200|61\s*,\s*2[16]\s*,\s*3[12]|232\s*,\s*168\s*,\s*144|212\s*,\s*160\s*,\s*85|253\s*,\s*232\s*,\s*232|78\s*,\s*66\s*,\s*71)\s*,\s*[\d.]+\)',
        fix_rgba, new_content)
    
    # 6. Fix scrolled navbar: was pink cream, now dark gold
    new_content = new_content.replace(
        '"rgba(253,232,232,0.92)"',
        '"rgba(10,10,10,0.95)"'
    )
    new_content = new_content.replace(
        'rgba(253,232,232,0.92)',
        'rgba(10,10,10,0.95)'
    )
    # Also: "rgba(255,250,248,0.94)"
    new_content = new_content.replace(
        'rgba(255,250,248,0.94)',
        'rgba(10,10,10,0.95)'
    )
    new_content = new_content.replace(
        '"rgba(255,250,248,0.94)"',
        '"rgba(10,10,10,0.95)"'
    )
    
    # 7. Fix body text color: black text (#000000) on black background = invisible
    # body p and h color should be gold-sand and gold
    # Replace 'color: #000000' in @layer base headings → gold
    # Replace 'color: #000000' in p → TEXT_PRIMARY
    # We do this carefully with context
    
    # 8. Fix .section-white → charcoal dark
    new_content = new_content.replace(
        '.section-white    { background: #fffffffff; }',
        '.section-white    { background: #1a1a1a; }'
    )
    # Catch if already partially fixed
    new_content = re.sub(
        r'\.section-white\s*\{\s*background:\s*#[0-9a-fA-Ff]+;?\s*\}',
        '.section-white    { background: #1a1a1a; }', new_content
    )
    
    # 9. Fix bg-white in globals utility class
    new_content = new_content.replace(
        '@apply bg-white rounded-xl',
        '@apply bg-[#1a1a1a] rounded-xl'
    )
    
    # 10. Fix `.bridal-form-card { background: #fffffffff` → charcoal
    new_content = re.sub(
        r'(\.bridal-form-card\s*\{[^}]*background:\s*)#[0-9a-fA-Ff]+',
        r'\g<1>#1a1a1a', new_content
    )
    
    # 11. Fix `.bridal-form-field option { background: ...}` → black
    new_content = re.sub(
        r'(\.bridal-form-field option\s*\{[^}]*background:\s*)#[0-9a-fA-Ff]+',
        r'\g<1>#000000', new_content
    )
    
    # 12. Fix btn-primary color #fffffffff → #000000 (dark text on gold button)
    new_content = re.sub(
        r'(\.btn-primary\s*\{[^}]*color:\s*)#[0-9a-fA-Ff]+',
        r'\g<1>#000000', new_content
    )
    
    # 13. Fix btn-outline-gold hover color
    new_content = re.sub(
        r'(\.btn-outline-gold:hover\s*\{[^}]*color:\s*)#[0-9a-fA-Ff]+',
        r'\g<1>#000000', new_content
    )
    
    # 14. btn-glass → gold-tinted glass instead of white glass
    new_content = new_content.replace(
        'background: rgba(255,255,255,0.18);\n  color: #fffffffff;\n  border: 1.5px solid rgba(255,255,255,0.55);',
        'background: rgba(196,156,77,0.1);\n  color: #e9ce98;\n  border: 1.5px solid rgba(196,156,77,0.4);'
    )
    new_content = new_content.replace(
        'background: rgba(255,255,255,0.32);',
        'background: rgba(196,156,77,0.2);'
    )

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

print("Done full theme fix")
