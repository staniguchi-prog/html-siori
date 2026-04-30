// ===== SIDE MENU =====
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('show');
  overlay.classList.toggle('show');
});

overlay.addEventListener('click', () => {
  menu.classList.remove('show');
  overlay.classList.remove('show');
});

menu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    menu.classList.remove('show');
    overlay.classList.remove('show');
  });
});

// ===== ROULETTE =====
const penalties = [
  "全員分のアイス奢り 🍦",
  "大声で替え歌を1曲披露 🎤",
  "次の食事のお会計を全額払う 💸",
  "5分間スマホ没収 📵",
  "その場で10回スクワット 🏋️",
  "グループラインに黒歴史写真を投稿 📸",
  "次の移動で先頭を歩く 🚶",
  "全員に100円ずつ渡す 💰",
  "1時間コンビニ禁止 🚫",
  "次のアクティビティでグループ最後尾 🐢",
];

let spinning = false;

const spinBtn = document.getElementById('spinBtn');
const rouletteText = document.getElementById('rouletteText');
const rouletteSub = document.getElementById('rouletteSub');
const rouletteBox = document.getElementById('rouletteBox');

spinBtn.addEventListener('click', () => {
  if (spinning) return;

  spinning = true;
  spinBtn.disabled = true;
  rouletteBox.classList.add('spinning');
  rouletteSub.textContent = '決定中...';

  let count = 0;
  const interval = setInterval(() => {
    rouletteText.textContent = penalties[Math.floor(Math.random() * penalties.length)];
    count++;

    if (count >= 20) {
      clearInterval(interval);
      rouletteBox.classList.remove('spinning');

      const result = penalties[Math.floor(Math.random() * penalties.length)];
      rouletteText.textContent = result;
      rouletteSub.textContent = '決定！これが今回の罰ゲームです 🎉';

      spinBtn.disabled = false;
      spinning = false;
    }
  }, 80);
});