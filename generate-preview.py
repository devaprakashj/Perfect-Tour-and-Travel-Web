"""
Generate social-preview.png (1200x630) for Perfect Planners Tours & Travels
Uses only Pillow (PIL) - no external fonts required
"""
from PIL import Image, ImageDraw, ImageFont
import os, math

W, H = 1200, 630
out_path = os.path.join(os.path.dirname(__file__), "public", "social-preview.png")

img = Image.new("RGB", (W, H), "#003580")
draw = ImageDraw.Draw(img)

# ── Background gradient (navy → blue → green) via horizontal bands ──────────
for x in range(W):
    t = x / W
    if t < 0.6:
        r = int(0x00 + (0x00 - 0x00) * t / 0.6)
        g = int(0x35 + (0x57 - 0x35) * t / 0.6)
        b = int(0x80 + (0xB8 - 0x80) * t / 0.6)
    else:
        t2 = (t - 0.6) / 0.4
        r = int(0x00 + (0x00 - 0x00) * t2)
        g = int(0x57 + (0xA8 - 0x57) * t2)
        b = int(0xB8 + (0x6B - 0xB8) * t2)
    draw.line([(x, 0), (x, H)], fill=(r, g, b))

# Overlay darkening (top and bottom)
overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ov_draw = ImageDraw.Draw(overlay)
for y in range(H):
    alpha = int(60 + (y / H) * 80)
    ov_draw.line([(0, y), (W, y)], fill=(0, 0, 0, alpha))
img.paste(Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB"))

draw = ImageDraw.Draw(img)

# ── Font loader helper ────────────────────────────────────────────────────────
def get_font(size, bold=False):
    """Try system fonts, fall back to default."""
    candidates_bold = [
        "C:/Windows/Fonts/georgiab.ttf",
        "C:/Windows/Fonts/arialbd.ttf",
        "C:/Windows/Fonts/calibrib.ttf",
    ]
    candidates_regular = [
        "C:/Windows/Fonts/georgia.ttf",
        "C:/Windows/Fonts/arial.ttf",
        "C:/Windows/Fonts/calibri.ttf",
    ]
    for path in (candidates_bold if bold else candidates_regular):
        if os.path.exists(path):
            try:
                return ImageFont.truetype(path, size)
            except Exception:
                pass
    return ImageFont.load_default()

def get_arial(size, bold=False):
    paths = (
        ["C:/Windows/Fonts/arialbd.ttf", "C:/Windows/Fonts/calibrib.ttf"]
        if bold else
        ["C:/Windows/Fonts/arial.ttf", "C:/Windows/Fonts/calibri.ttf"]
    )
    for p in paths:
        if os.path.exists(p):
            try: return ImageFont.truetype(p, size)
            except: pass
    return ImageFont.load_default()

GOLD   = (255, 183, 0)
WHITE  = (255, 255, 255)
WHITE7 = (255, 255, 255, 178)   # 70% white
NAVY   = (0, 53, 128)

# ── Top & bottom gold bars ────────────────────────────────────────────────────
draw.rectangle([0, 0, W, 7], fill=GOLD)
draw.rectangle([0, H-7, W, H], fill=GOLD)

# ── Left vertical gold accent ─────────────────────────────────────────────────
draw.rectangle([80, 60, 84, 570], fill=GOLD)

# ── Decorative circles (top-right) ───────────────────────────────────────────
for r, alpha in [(280, 15), (200, 12), (120, 22)]:
    cx, cy = 1130, -40
    bbox = [cx-r, cy-r, cx+r, cy+r]
    draw.ellipse(bbox, outline=(255, 255, 255, alpha), width=2)

# ── Decorative circles (bottom-left) ─────────────────────────────────────────
for r, alpha in [(260, 12), (160, 20)]:
    cx, cy = 60, 700
    draw.ellipse([cx-r, cy-r, cx+r, cy+r], outline=(0, 168, 107, alpha), width=2)

# ── Compass icon (simplified) ────────────────────────────────────────────────
cx, cy = 148, 120
draw.ellipse([cx-42, cy-42, cx+42, cy+42], outline=(255, 183, 0, 100), width=2,
             fill=(255, 183, 0, 45))
draw.ellipse([cx-30, cy-30, cx+30, cy+30], outline=GOLD, width=2)
# N needle
draw.polygon([(cx, cy-22), (cx+5, cy), (cx, cy+4), (cx-5, cy)], fill=GOLD)
# S needle
draw.polygon([(cx, cy+22), (cx+5, cy), (cx, cy-4), (cx-5, cy)],
             fill=(255, 255, 255, 128))
draw.ellipse([cx-4, cy-4, cx+4, cy+4], fill=WHITE)
# Cardinal labels
lf = get_arial(9, bold=True)
draw.text((cx, cy-38), "N", font=lf, fill=GOLD, anchor="mm")
draw.text((cx+38, cy), "E", font=lf, fill=(200,200,200), anchor="mm")
draw.text((cx, cy+46), "S", font=lf, fill=(200,200,200), anchor="mm")
draw.text((cx-38, cy), "W", font=lf, fill=(200,200,200), anchor="mm")

# Plane icon
plane_x, plane_y = 210, 108
draw.polygon([
    (plane_x, plane_y+12), (plane_x+28, plane_y),
    (plane_x+24, plane_y+12), (plane_x+28, plane_y+24)
], fill=GOLD)

# ── Company name (logo text) ──────────────────────────────────────────────────
f_logo_main = get_font(26, bold=True)
f_logo_sub  = get_arial(13, bold=True)
draw.text((250, 100), "Perfect Planners", font=f_logo_main, fill=WHITE)
draw.text((250, 130), "TOURS & TRAVELS", font=f_logo_sub, fill=GOLD)

# Thin divider line
draw.line([(112, 172), (560, 172)], fill=(255, 255, 255, 40), width=1)

# ── Main Headline ─────────────────────────────────────────────────────────────
f_h1 = get_font(62, bold=True)
draw.text((112, 200), "Perfect Planners", font=f_h1, fill=WHITE)
draw.text((112, 272), "Tours & Travels", font=f_h1, fill=WHITE)

# Gold underline
draw.rounded_rectangle([112, 344, 460, 350], radius=3, fill=GOLD)

# ── Tagline ───────────────────────────────────────────────────────────────────
f_tag = get_arial(27)
draw.text((112, 366), "Explore the World with Confidence", font=f_tag,
          fill=(255, 255, 255, 235))

# ── Sub-tagline pill ──────────────────────────────────────────────────────────
pill_w = 445
draw.rounded_rectangle([110, 410, 110+pill_w, 456], radius=23,
                        fill=(255, 183, 0, 46), outline=(255, 183, 0, 100), width=2)
f_pill = get_arial(15, bold=True)
draw.text((110 + pill_w//2, 433), "✈  DOMESTIC & INTERNATIONAL PACKAGES",
          font=f_pill, fill=GOLD, anchor="mm")

# ── Destination Cards (right side) ───────────────────────────────────────────
destinations = [
    ("Andaman",   "Tropical Paradise", "From ₹29,999", "🏝"),
    ("Kerala",    "God's Own Country", "From ₹7,000",  "🌴"),
    ("Thailand",  "Amazing Thailand",  "From ₹40,000", "🛕"),
    ("Dubai",     "City of Gold",      "From ₹45,000", "🌆"),
    ("Manali",    "Snowy Peaks",        "From ₹18,000", "🏔"),
    ("Singapore", "The Lion City",     "From ₹50,000", "🦁"),
]

card_w, card_h = 185, 115
cols = [(700, 80), (905, 80), (700, 215), (905, 215), (700, 350), (905, 350)]

f_card_name = get_arial(15, bold=True)
f_card_sub  = get_arial(11)
f_card_price= get_arial(11)
f_emoji     = get_arial(24)

for i, ((cx, cy), (name, sub, price, emoji)) in enumerate(zip(cols, destinations)):
    # Card background
    draw.rounded_rectangle([cx, cy, cx+card_w, cy+card_h], radius=14,
                             fill=(255, 255, 255, 26),
                             outline=(255, 255, 255, 51), width=1)
    # Emoji
    draw.text((cx + card_w//2, cy + 30), emoji, font=f_emoji,
              fill=WHITE, anchor="mm")
    # Name
    draw.text((cx + card_w//2, cy + 60), name, font=f_card_name,
              fill=WHITE, anchor="mm")
    # Sub
    draw.text((cx + card_w//2, cy + 80), sub, font=f_card_sub,
              fill=GOLD, anchor="mm")
    # Price
    draw.text((cx + card_w//2, cy + 98), price, font=f_card_price,
              fill=(200, 200, 200), anchor="mm")

# ── Stats Bar ─────────────────────────────────────────────────────────────────
draw.rounded_rectangle([112, 474, 680, 558], radius=16,
                         fill=(255, 255, 255, 18),
                         outline=(255, 255, 255, 31), width=1)

stats = [("500+", "Happy Travelers"), ("50+", "Destinations"), ("10+", "Years Exp.")]
stat_positions = [192, 390, 570]
f_stat_num  = get_arial(26, bold=True)
f_stat_label= get_arial(12)

for pos, (num, label) in zip(stat_positions, stats):
    draw.text((pos, 502), num, font=f_stat_num, fill=GOLD, anchor="mm")
    draw.text((pos, 530), label, font=f_stat_label,
              fill=(200, 200, 200), anchor="mm")

# Dividers between stats
for x in [310, 480]:
    draw.line([(x, 490), (x, 545)], fill=(255, 255, 255, 38), width=1)

# ── Bottom URL & phone ────────────────────────────────────────────────────────
f_small = get_arial(13)
draw.text((112, 578), "perfectplannerstours.vercel.app", font=f_small,
          fill=(255, 255, 255, 115))
draw.text((1088, 578), "7339004469  |  8122694469", font=f_small,
          fill=(255, 255, 255, 115), anchor="ra")

# ── Save ──────────────────────────────────────────────────────────────────────
img.save(out_path, "PNG", optimize=True)
print(f"✅  Saved: {out_path}  ({W}×{H}px)")
