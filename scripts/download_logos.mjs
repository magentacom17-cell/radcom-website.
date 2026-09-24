import https from 'https';
import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/client_logos');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': userAgent } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed ${url}: status ${res.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        // Check if file is non-empty
        const stats = fs.statSync(dest);
        if (stats.size > 200) {
          resolve(true);
        } else {
          fs.unlinkSync(dest);
          reject(new Error('File too small'));
        }
      });
    }).on('error', (err) => {
      if (fs.existsSync(dest)) fs.unlinkSync(dest);
      reject(err);
    });
  });
}

async function getWikimediaUrl(filename) {
  const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=File:${encodeURIComponent(filename)}&prop=imageinfo&iiprop=url&format=json`;
  return new Promise((resolve, reject) => {
    https.get(apiUrl, { headers: { 'User-Agent': userAgent } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query?.pages;
          if (!pages) return resolve(null);
          for (const k in pages) {
            const info = pages[k].imageinfo?.[0];
            if (info?.url) return resolve(info.url);
          }
          resolve(null);
        } catch (e) {
          resolve(null);
        }
      });
    }).on('error', () => resolve(null));
  });
}

const wikimediaMap = {
  'kai.id': 'Logo_PT_Kereta_Api_Indonesia_(Persero)_2020.svg',
  'mofa.gov.sa': 'Emblem_of_Saudi_Arabia.svg',
  'worldwildlife.org': 'WWF_logo.svg',
  'care-international.org': 'CARE_International_logo.svg',
  'internationalsos.com': 'International_SOS_logo.svg',
  'childfund.org': 'ChildFund_Logo.png',
  'icrc.org': 'International_Committee_of_the_Red_Cross_Logo.svg',
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
  'alilahotels.com': 'Hyatt_Hotels_Logo.svg',
};

async function main() {
  console.log('Fetching logos...');

  for (const [domain, wikiFile] of Object.entries(wikimediaMap)) {
    const dest = path.join(outDir, `${domain.replace(/\./g, '_')}${path.extname(wikiFile)}`);
    try {
      const url = await getWikimediaUrl(wikiFile);
      if (url) {
        await downloadFile(url, dest);
        console.log(`✓ Wikimedia: ${domain} -> ${dest}`);
      }
    } catch (e) {
      console.log(`✗ Error for ${domain}:`, e.message);
    }
  }
}

main();
