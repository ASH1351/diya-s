import os
import numpy as np
from PIL import Image
from skimage import measure

os.makedirs('public/assets', exist_ok=True)
os.makedirs('scripts', exist_ok=True)

img = Image.open('public/assets/dw-logo-mark.png').convert('RGBA')
alpha = np.array(img)[:, :, 3]
binary = alpha > 80

# Find contours for filled vector SVG
contours = measure.find_contours(binary.astype(float), 0.5)
contours = sorted(contours, key=lambda c: len(c), reverse=True)
sig_contours = [c for c in contours if len(c) > 30]

svg_paths = []
for c in sig_contours:
    step = 2
    pts = c[::step]
    if len(pts) < 3:
        continue
    d = f"M {pts[0,1]:.1f} {pts[0,0]:.1f} "
    for p in pts[1:]:
        d += f"L {p[1]:.1f} {p[0]:.1f} "
    d += "Z"
    svg_paths.append(d)

h, w = binary.shape
svg_header = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="100%" height="100%">
  <defs>
    <linearGradient id="dwGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D98E1F" />
      <stop offset="50%" stop-color="#F5A623" />
      <stop offset="100%" stop-color="#FFD36B" />
    </linearGradient>
    <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
  <g fill="url(#dwGoldGrad)" fill-rule="evenodd" filter="url(#goldGlow)">
"""

svg_body = "\n".join([f'    <path d="{d}" />' for d in svg_paths])
svg_footer = "\n  </g>\n</svg>\n"

with open('public/assets/dw-logo-vector.svg', 'w') as f:
    f.write(svg_header + svg_body + svg_footer)

# Also create the stroke animation SVG for the loader!
# For the loader stroke-drawing animation, we generate stroke path contours:
loader_header = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="100%" height="100%" class="dw-loader-svg">
  <defs>
    <linearGradient id="loaderGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D98E1F" />
      <stop offset="45%" stop-color="#F5A623" />
      <stop offset="100%" stop-color="#FFD36B" />
    </linearGradient>
    <filter id="loaderGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="4" result="glow" />
      <feMerge>
        <feMergeNode in="glow" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
  <g fill="none" stroke="url(#loaderGoldGrad)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" filter="url(#loaderGlow)" class="dw-drawing-paths">
"""

loader_body = "\n".join([f'    <path d="{d}" class="dw-stroke-path" />' for d in svg_paths])
loader_footer = "\n  </g>\n</svg>\n"

with open('public/assets/dw-logo-draw.svg', 'w') as f:
    f.write(loader_header + loader_body + loader_footer)

# Also create favicon.svg
favicon_svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}">
  <defs>
    <linearGradient id="favGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D98E1F" />
      <stop offset="50%" stop-color="#F5A623" />
      <stop offset="100%" stop-color="#FFD36B" />
    </linearGradient>
  </defs>
  <rect width="{w}" height="{h}" rx="{w*0.2}" fill="#3C3C3D"/>
  <g fill="url(#favGold)" fill-rule="evenodd" transform="scale(0.85) translate({w*0.09}, {h*0.09})">
{svg_body}
  </g>
</svg>
"""
with open('public/favicon.svg', 'w') as f:
    f.write(favicon_svg)

print("SVG vector and loader assets built successfully!")
