// Nội dung (khu trưng bày, bài viết) do website sinh ra từ src/data/showroom.js. All URLs work in a subfolder.
const entry=document.currentScript.dataset.entry;
const version=Date.now();
const fresh=url=>url+(url.includes('?')?'&':'?')+'v='+version;
async function read(url,type='text') {
 const r=await fetch(fresh(url),{cache:'no-store'});
 if(!r.ok)throw new Error('Không đọc được '+url+' ('+r.status+')');
 return type==='json'?r.json():r.text();
}
(async()=>{
 const p=await read('noi-dung/cau-hinh.json','json');
 for(const e of p.exhibits)e.paragraphs=e.paragraphs||[];
 for(const z of p.zones)z.body=z.body||'';
 for(const k of ['panorama','logo'])if(p.assets[k])p.assets[k]=fresh(p.assets[k]);
 window.MUSEUM_PROJECT=p;
 // trinh-bay.js (hộp đọc nội dung) chạy trước, rồi mới đến trình xem
 const load=src=>new Promise((ok,fail)=>{const s=document.createElement('script');s.src=src;s.onload=ok;s.onerror=()=>fail(new Error('Không tải được '+src));document.body.append(s)});
 await load('js/trinh-bay.js');
 await load('js/'+entry+'.js');
})().catch(e=>{console.error(e);const box=document.getElementById('loading')||document.getElementById('surface');if(box){box.textContent='Không tải được nội dung. '+e.message;box.style.padding='30px';}});
