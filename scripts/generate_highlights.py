import os
import subprocess

os.makedirs("public/instagram", exist_ok=True)

COVERS = [
    {
        "id": "trabajos",
        "title": "TRABAJOS",
        "filename": "cover-1-trabajos.png",
        # Laptop / Browser Window + Code/Design
        "svg": """
        <svg viewBox="0 0 24 24" fill="none" stroke="url(#cyanMint)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
            <rect width="20" height="14" x="2" y="3" rx="2" />
            <line x1="8" x2="16" y1="21" y2="21" />
            <line x1="12" x2="12" y1="17" y2="21" />
            <circle cx="6" cy="7" r="1" fill="#00D2FF" stroke="none" />
            <circle cx="9" cy="7" r="1" fill="#00F5A0" stroke="none" />
            <line x1="6" y1="11" x2="18" y2="11" />
            <line x1="6" y1="14" x2="14" y2="14" />
        </svg>
        """
    },
    {
        "id": "servicios",
        "title": "SERVICIOS",
        "filename": "cover-2-servicios.png",
        # Bento Grid / Services / Shopping & Management
        "svg": """
        <svg viewBox="0 0 24 24" fill="none" stroke="url(#cyanMint)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
            <rect width="7" height="7" x="3" y="3" rx="1.5" />
            <rect width="7" height="7" x="14" y="3" rx="1.5" />
            <rect width="7" height="7" x="14" y="14" rx="1.5" />
            <rect width="7" height="7" x="3" y="14" rx="1.5" />
            <circle cx="6.5" cy="6.5" r="1.5" fill="#00D2FF" stroke="none" />
            <circle cx="17.5" cy="17.5" r="1.5" fill="#00F5A0" stroke="none" />
        </svg>
        """
    },
    {
        "id": "proceso",
        "title": "CÓMO ES",
        "filename": "cover-3-proceso.png",
        # Rocket / Agile Process / Roadmap
        "svg": """
        <svg viewBox="0 0 24 24" fill="none" stroke="url(#cyanMint)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
            <circle cx="15" cy="9" r="1.5" fill="#00F5A0" stroke="none" />
        </svg>
        """
    },
    {
        "id": "clientes",
        "title": "CLIENTES",
        "filename": "cover-4-clientes.png",
        # Heart chat / Testimonials & 5 stars
        "svg": """
        <svg viewBox="0 0 24 24" fill="none" stroke="url(#cyanMint)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
            <path d="M12 8c-1.1 0-2 .9-2 2 0 1.5 2 3.5 2 3.5s2-2 2-3.5c0-1.1-.9-2-2-2z" fill="url(#cyanMint)" stroke="none" />
        </svg>
        """
    },
    {
        "id": "contacto",
        "title": "CONTACTO",
        "filename": "cover-5-contacto.png",
        # WhatsApp Official Glyph
        "svg": """
        <svg viewBox="0 0 24 24" fill="url(#cyanMint)" class="icon" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        """
    }
]

HTML_TEMPLATE = """<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * {{ box-sizing: border-box; margin: 0; padding: 0; }}
  body {{
    width: 1080px;
    height: 1920px;
    background-color: #090D16;
    background-image: radial-gradient(circle, rgba(0, 210, 255, 0.09) 1.5px, transparent 1.5px);
    background-size: 40px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    position: relative;
    overflow: hidden;
  }}

  /* Ambient Cyber Glow */
  .glow {{
    position: absolute;
    width: 650px;
    height: 650px;
    background: radial-gradient(circle, rgba(0, 210, 255, 0.15) 0%, rgba(0, 245, 160, 0.08) 50%, transparent 70%);
    border-radius: 50%;
    filter: blur(60px);
    pointer-events: none;
  }}

  /* Circular Highlight Outer Frame */
  .circle-container {{
    position: relative;
    width: 480px;
    height: 480px;
    border-radius: 50%;
    background: #131B2E;
    border: 4px solid #1E293B;
    box-shadow: 0 0 50px rgba(0, 210, 255, 0.25), inset 0 0 30px rgba(0, 245, 160, 0.08);
    display: flex;
    align-items: center;
    justify-content: center;
  }}

  /* Glowing Accent Ring */
  .ring {{
    position: absolute;
    inset: -10px;
    border-radius: 50%;
    border: 3px solid transparent;
    background: linear-gradient(135deg, #00D2FF, #00F5A0) border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0.85;
    filter: drop-shadow(0 0 12px rgba(0, 245, 160, 0.4));
  }}

  /* Inner Icon */
  .icon {{
    width: 200px;
    height: 200px;
    filter: drop-shadow(0 0 20px rgba(0, 210, 255, 0.5));
  }}

  /* Category Tag */
  .title {{
    margin-top: 50px;
    font-family: 'JetBrains Mono', monospace, monospace;
    font-size: 32px;
    font-weight: 800;
    letter-spacing: 6px;
    color: #FFFFFF;
    text-transform: uppercase;
  }}
  .brand {{
    position: absolute;
    bottom: 80px;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 5px;
    color: #94A3B8;
  }}
  .brand span {{
    color: #00D2FF;
  }}
</style>
</head>
<body>
  <!-- Ambient Glow Behind Icon -->
  <div class="glow"></div>

  <!-- Central Circular Highlight Frame -->
  <div class="circle-container">
    <div class="ring"></div>
    <svg width="0" height="0">
      <defs>
        <linearGradient id="cyanMint" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#00D2FF" />
          <stop offset="100%" stop-color="#00F5A0" />
        </linearGradient>
      </defs>
    </svg>
    {svg}
  </div>

  <div class="title">{title}</div>
  <div class="brand">SHURIAN <span>[LABS]</span></div>
</body>
</html>
"""

chrome_path = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

for item in COVERS:
    html_content = HTML_TEMPLATE.format(svg=item["svg"], title=item["title"])
    temp_html = f"/tmp/{item['id']}.html"
    with open(temp_html, "w", encoding="utf-8") as f:
        f.write(html_content)
    
    out_png = f"public/instagram/{item['filename']}"
    cmd = [
        chrome_path,
        "--headless=new",
        "--window-size=1080,1920",
        f"--screenshot={out_png}",
        f"file://{temp_html}"
    ]
    print(f"Generating {out_png}...")
    subprocess.run(cmd, check=True)

print("All 5 highlight covers generated successfully!")
