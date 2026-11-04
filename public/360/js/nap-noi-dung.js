// Read editable text and config afresh on each visit. All URLs work in a subfolder.
const entry=document.currentScript.dataset.entry;
const version=Date.now();
const fresh=url=>url+(url.includes('?')?'&':'?')+'v='+version;
async function read(url,type='text') {
 const r=await fetch(fresh(url),{cache:'no-store'});
 if(!r.ok)throw new Error('Không đọc được '+url+' ('+r.status+')');
 return type==='json'?r.json():r.text();
}
function split(text){const lines=text.replace(/^\uFEFF/,'').replace(/\r/g,'').split('\n');const title=lines.shift().trim();return {title,body:lines.join('\n').trim()};}
(async()=>{
 const p=await read('noi-dung/cau-hinh.json','json');
 await Promise.all([
  ...p.exhibits.map(async e=>{const t=split(await read(e.textFile));e.title=t.title||e.title;e.paragraphs=t.body.split(/\n\s*\n/).filter(Boolean);if(e.image)e.image=fresh(e.image);}),
  ...p.zones.map(async z=>{const t=split(await read(z.textFile));z.name=t.title||z.name;z.body=t.body;})
 ]);
 // A video is optional; the screen keeps its placeholder until the MP4 is supplied.
 if(p.assets.video){try{const r=await fetch(fresh(p.assets.video),{method:'HEAD',cache:'no-store'});if(!r.ok)p.assets.video='';}catch{p.assets.video='';}}
 for(const k of ['panorama','logo','video'])if(p.assets[k])p.assets[k]=fresh(p.assets[k]);
 p.book.pdf=fresh(p.book.pdf);p.book.pages=p.book.pages.map(fresh);
 window.MUSEUM_PROJECT=p;
 const s=document.createElement('script');s.src='js/'+entry+'.js';document.body.append(s);
})().catch(e=>{console.error(e);const box=document.getElementById('loading')||document.getElementById('surface');if(box){box.textContent='Không tải được nội dung. Hãy kiểm tra tệp trên hosting và mở bằng địa chỉ http/https. '+e.message;box.style.padding='30px';}});
