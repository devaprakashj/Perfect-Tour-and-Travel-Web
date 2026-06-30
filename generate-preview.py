"""
Generate social-preview.jpg (1200x630) for Perfect Planners Tours & Travels
Optimized JPEG - target < 500 KB
"""
from PIL import Image, ImageDraw, ImageFont
import os, io

W, H = 1200, 630
out_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "public", "social-preview.jpg")

# ── Background gradient (navy -> blue -> teal) ────────────────────────────────
img = Image.new("RGB", (W, H))
draw = ImageDraw.Draw(img)
for x in range(W):
    t = x / W
    if t < 0.6:
        g = int(0x35 + (0x57 - 0x35) * (t / 0.6))
        b = int(0x80 + (0xB8 - 0x80) * (t / 0.6))
    else:
        t2 = (t - 0.6) / 0.4
        g = int(0x57 + (0xA8 - 0x57) * t2)
        b = int(0xB8 + (0x6B - 0xB8) * t2)
    draw.line([(x, 0), (x, H)], fill=(0, g, b))

# Dark overlay top->bottom
overlay = Image.new("RGBA", (W, H))
ov = ImageDraw.Draw(overlay)
for y in range(H):
    a = int(30 + (y / H) * 80)
    ov.line([(0, y), (W, y)], fill=(0, 0, 0, a))
img = Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB")
draw = ImageDraw.Draw(img)

GOLD = (255, 183, 0)
WHITE = (255, 255, 255)
DIM   = (185, 198, 215)

# ── Gold accent bars ──────────────────────────────────────────────────────────
draw.rectangle([0, 0, W, 7], fill=GOLD)
draw.rectangle([0, H - 7, W, H], fill=GOLD)
draw.rectangle([80, 58, 84, 572], fill=GOLD)  # left vertical line

# ── Font helpers ──────────────────────────────────────────────────────────────
def sans(size, bold=False):
    paths = (["C:/Windows/Fonts/arialbd.ttf", "C:/Windows/Fonts/calibrib.ttf"]
             if bold else
             ["C:/Windows/Fonts/arial.ttf", "C:/Windows/Fonts/calibri.ttf",
              "C:/Windows/Fonts/verdana.ttf"])
    for p in paths:
        if os.path.exists(p):
            try: return ImageFont.truetype(p, size)
            except: pass
    return ImageFont.load_default()

def serif(size):
    for p in ["C:/Windows/Fonts/georgiab.ttf", "C:/Windows/Fonts/georgia.ttf",
              "C:/Windows/Fonts/arialbd.ttf"]:
        if os.path.exists(p):
            try: return ImageFont.truetype(p, size)
            except: pass
    return ImageFont.load_default()

# ── Compass logo ──────────────────────────────────────────────────────────────
cx, cy = 148, 118
draw.ellipse([cx-44, cy-44, cx+44, cy+44], fill=(255,183,0,30), outline=(255,183,0,80), width=2)
draw.ellipse([cx-31, cy-31, cx+31, cy+31], outline=GOLD, width=2)
draw.polygon([(cx, cy-23),(cx+5,cy),(cx,cy+4),(cx-5,cy)], fill=GOLD)           # N needle
draw.polygon([(cx, cy+23),(cx+5,cy),(cx,cy-4),(cx-5,cy)], fill=(155,175,195))  # S needle
draw.ellipse([cx-4, cy-4, cx+4, cy+4], fill=WHITE)
f9 = sans(9, bold=True)
draw.text((cx, cy-39), "N", font=f9, fill=GOLD, anchor="mm")
draw.text((cx+40, cy+2), "E", font=f9, fill=DIM, anchor="mm")
draw.text((cx, cy+47), "S", font=f9, fill=DIM, anchor="mm")
draw.text((cx-40, cy+2), "W", font=f9, fill=DIM, anchor="mm")
draw.polygon([(210,120),(238,108),(234,120),(238,132)], fill=GOLD)  # plane

# ── Logo text ─────────────────────────────────────────────────────────────────
draw.text((252, 96),  "Perfect Planners", font=serif(27),        fill=WHITE)
draw.text((252, 130), "TOURS & TRAVELS",  font=sans(13, bold=True), fill=GOLD)
draw.line([(112, 170), (560, 170)], fill=(255,255,255,40), width=1)

# ── Main headline ─────────────────────────────────────────────────────────────
f62 = serif(62)
draw.text((112, 196), "Perfect Planners", font=f62, fill=WHITE)
draw.text((112, 268), "Tours & Travels",  font=f62, fill=WHITE)
draw.rounded_rectangle([112, 342, 458, 348], radius=3, fill=GOLD)

# ── Tagline ───────────────────────────────────────────────────────────────────
draw.text((112, 362), "Explore the World with Confidence", font=sans(27), fill=(238,244,255))

# ── Badge pill ────────────────────────────────────────────────────────────────
draw.rounded_rectangle([110, 406, 556, 450], radius=22,
                        fill=(255,183,0,46), outline=(255,183,0,100), width=2)
draw.text((333, 428), "DOMESTIC & INTERNATIONAL PACKAGES",
          font=sans(15, bold=True), fill=GOLD, anchor="mm")

# ── Destination cards ─────────────────────────────────────────────────────────
dests = [
    ("Andaman",   "Tropical Paradise", "From Rs.29,999"),
    ("Kerala",    "God's Own Country", "From Rs.7,000"),
    ("Thailand",  "Amazing Thailand",  "From Rs.40,000"),
    ("Dubai",     "City of Gold",      "From Rs.45,000"),
    ("Manali",    "Snowy Peaks",       "From Rs.18,000"),
    ("Singapore", "The Lion City",     "From Rs.50,000"),
]
positions = [(700,80),(905,80),(700,215),(905,215),(700,350),(905,350)]
f_cn = sans(15, bold=True); f_cs = sans(11)

for (ox, oy), (name, sub, price) in zip(positions, dests):
    draw.rounded_rectangle([ox, oy, ox+185, oy+100], radius=13,
                            fill=(255,255,255,25), outline=(255,255,255,50), width=1)
    draw.text((ox+92, oy+22), name,  font=f_cn, fill=WHITE, anchor="mm")
    draw.text((ox+92, oy+46), sub,   font=f_cs, fill=GOLD,  anchor="mm")
    draw.text((ox+92, oy+70), price, font=f_cs, fill=DIM,   anchor="mm")

# ── Stats bar ─────────────────────────────────────────────────────────────────
draw.rounded_rectangle([112, 470, 680, 554], radius=15,
                        fill=(255,255,255,18), outline=(255,255,255,30), width=1)
for x, num, lbl in [(192,"500+","Happy Travelers"),(390,"50+","Destinations"),(570,"10+","Years Exp.")]:
    draw.text((x, 498), num, font=sans(26, bold=True), fill=GOLD, anchor="mm")
    draw.text((x, 526), lbl, font=sans(12), fill=DIM, anchor="mm")
for x in [310, 480]:
    draw.line([(x, 486), (x, 543)], fill=(255,255,255,38), width=1)

# ── Footer ────────────────────────────────────────────────────────────────────
f_ft = sans(13)
draw.text((112,  577), "perfectplannerstours.vercel.app",  font=f_ft, fill=(175,192,212))
draw.text((1088, 577), "7339004469  |  8122694469",         font=f_ft, fill=(175,192,212), anchor="ra")

# ── Save as JPEG, quality-step to stay under 500 KB ──────────────────────────
for q in [85, 78, 72, 65, 58]:
    buf = io.BytesIO()
    img.save(buf, "JPEG", quality=q, optimize=True, progressive=True)
    size_kb = buf.tell() / 1024
    if size_kb < 500:
        with open(out_path, "wb") as f:
            f.write(buf.getvalue())
        print(f"Saved: {out_path}  ({W}x{H}px, {size_kb:.1f} KB, quality={q})")
        break
else:
    img.save(out_path, "JPEG", quality=55, optimize=True)
    print("Saved at quality=55 (fallback)")
