'use strict';
// Khung nội dung của Phòng truyền thống 360°: mỗi khu mở chính trang tương ứng của website
// (cùng giao diện, đủ chi tiết; menu và chân trang tự ẩn khi nằm trong khung).
// Nạp trước viewer.js; viewer.js gọi openZone() khi bấm điểm khu hoặc nút "Xem nội dung khu".

const tbReader = (() => {
 const dialog = document.getElementById('reader');
 const head = dialog.querySelector('.dialog-head');
 const label = document.getElementById('readerLabel');
 const body = document.getElementById('readerBody');
 const close = document.getElementById('close');

 // Đầu khung: nhãn khu + tên khu | Quay lại · Mở trang đầy đủ · Đóng
 const titleBox = document.createElement('div');
 titleBox.className = 'reader-title';
 label.replaceWith(titleBox);
 const title = document.createElement('strong');
 titleBox.append(label, title);
 const actions = document.createElement('div');
 actions.className = 'reader-actions';
 actions.innerHTML = '<button type="button" class="reader-btn" id="readerBack" hidden><span aria-hidden="true">←</span> Quay lại</button>'
  + '<a class="reader-btn reader-btn--primary" id="readerOpen" target="_top">Mở trang đầy đủ <span aria-hidden="true">↗</span></a>';
 actions.append(close);
 head.append(actions);
 const back = actions.querySelector('#readerBack');
 const open = actions.querySelector('#readerOpen');

 let frame = null, stack = [], timer = 0, returning = '';
 const current = () => {
  try { const l = frame.contentWindow.location; return l.href === 'about:blank' ? '' : l.pathname + l.search; } catch { return ''; }
 };
 // Theo dõi trang đang mở trong khung (kể cả chuyển trang phía client) để cập nhật nút
 const watch = () => {
  const path = current();
  if (!path) return;
  // Hiện trang ngay khi đã dựng xong nội dung, không chờ tải hết ảnh, video
  if (frame.contentDocument && frame.contentDocument.readyState !== 'loading') body.classList.add('is-loaded');
  // Đang quay lại: bỏ qua trang cũ cho tới khi khung về đúng trang đích
  if (returning) { if (path !== returning) return; returning = ''; }
  if (path !== stack[stack.length - 1]) stack.push(path);
  back.hidden = stack.length < 2;
  open.href = frame.contentWindow.location.href;
 };
 back.onclick = () => {
  if (stack.length < 2) return;
  stack.pop();
  returning = stack[stack.length - 1];
  back.hidden = stack.length < 2;
  frame.contentWindow.location.replace(returning);
 };
 dialog.addEventListener('close', () => { clearInterval(timer); body.innerHTML = ''; frame = null; });

 return {
  show(kicker, name, page) {
   if (typeof stopAuto === 'function') stopAuto();
   label.textContent = kicker;
   title.textContent = name;
   stack = [];
   returning = '';
   back.hidden = true;
   open.href = page;
   body.innerHTML = '<div class="reader-loading"><span class="spin"></span>Đang mở nội dung…</div>';
   frame = document.createElement('iframe');
   frame.className = 'reader-frame';
   frame.title = name;
   frame.src = page;
   frame.addEventListener('load', () => { body.classList.add('is-loaded'); watch(); });
   body.classList.remove('is-loaded');
   body.append(frame);
   clearInterval(timer);
   timer = setInterval(watch, 400);
   if (!dialog.open) dialog.showModal();
  },
 };
})();

function openZone(id) {
 const zones = window.MUSEUM_PROJECT.zones;
 const z = zones.find((item) => item.id === id) || zones[0];
 const n = zones.indexOf(z);
 tbReader.show(n ? 'Khu ' + String(n).padStart(2, '0') : 'Sảnh', z.name, z.page);
}
