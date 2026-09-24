import urllib.request
import json
import os
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

out_dir = 'public/client_logos'
os.makedirs(out_dir, exist_ok=True)

USER_AGENT = 'RadcomComproApp/1.0 (magenta.com17@gmail.com)'

wiki_map = {
    'polri.go.id': 'Logo_Bareskrim.png',
    'kai.id': 'Logo_PT_Kereta_Api_Indonesia_(Persero)_2020.svg',
    'mofa.gov.sa': 'Emblem_of_Saudi_Arabia.svg',
    'worldwildlife.org': 'WWF_logo.svg',
    'care-international.org': 'CARE_International_logo.svg',
    'internationalsos.com': 'International_SOS_logo.svg',
    'childfund.org': 'ChildFund_Logo.png',
    'icrc.org': 'International_Committee_of_the_Red_Cross_Logo.svg',
    'ykan.or.id': 'The_Nature_Conservancy_logo.svg',
    'atlascopco.com': 'Atlas_Copco_logo.svg',
    'abc-battery.com': 'ABC_Dry_Cell_Logo.svg',
    'sinarmas.com': 'Sinar_Mas_logo.svg',
    'ccb.com': 'China_Construction_Bank.svg',
    'hilti.id': 'Hilti_logo.svg',
    'heidelberg.com': 'Heidelberger_Druckmaschinen_Logo.svg',
    'tuv.com': 'TUV_Rheinland_logo.svg',
    'erlangga.co.id': 'Penerbit_Erlangga_Logo.svg',
    'marriott.com': 'Marriott_International_logo.svg',
    'parker.com': 'Parker_Hannifin_logo.svg',
    'bgp.com.cn': 'China_National_Petroleum_Corporation_logo.svg',
    'megafinance.co.id': 'CT_Corp_logo.svg',
}

def fetch_wiki_url(file_name):
    api = f"https://commons.wikimedia.org/w/api.php?action=query&titles=File:{urllib.parse.quote(file_name)}&prop=imageinfo&iiprop=url&format=json"
    req = urllib.request.Request(api, headers={'User-Agent': USER_AGENT})
    try:
        with urllib.request.urlopen(req, context=ctx, timeout=10) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            pages = data.get('query', {}).get('pages', {})
            for k, v in pages.items():
                info = v.get('imageinfo', [])
                if info:
                    return info[0].get('url')
    except Exception as e:
        print(f"Error checking {file_name}: {e}")
    return None

def download_file(url, target_path):
    req = urllib.request.Request(url, headers={'User-Agent': USER_AGENT})
    try:
        with urllib.request.urlopen(req, context=ctx, timeout=15) as resp:
            content = resp.read()
            if len(content) > 100:
                with open(target_path, 'wb') as f:
                    f.write(content)
                print(f"✓ Saved {target_path} ({len(content)} bytes)")
                return True
    except Exception as e:
        print(f"Error downloading {url}: {e}")
    return False

for domain, filename in wiki_map.items():
    ext = os.path.splitext(filename)[1]
    name_clean = domain.replace('.', '_')
    dest = os.path.join(out_dir, f"{name_clean}{ext}")
    if os.path.exists(dest) and os.path.getsize(dest) > 500:
        print(f"Already exists: {dest}")
        continue
    url = fetch_wiki_url(filename)
    if url:
        download_file(url, dest)
    else:
        print(f"Not found: {filename}")

print("Done wiki downloads.")
