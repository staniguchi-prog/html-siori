// ===== メニュー =====
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
  overlay.classList.toggle("show");
});

// メニュー内リンククリックで閉じる
menu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("show");
    overlay.classList.remove("show");
  });
});

// 背景タップで閉じる
overlay.addEventListener("click", () => {
  menu.classList.remove("show");
  overlay.classList.remove("show");
});


// ===== 罰ゲームルーレット =====
const members = [
  "しゅうと",
  "りょうが",
  "あきとし",
  "せとっち",
  "そうちゃん"
];


const roulette = document.getElementById("roulette");
const spinBtn = document.getElementById("spinBtn");

spinBtn.addEventListener("click", () => {
  spinBtn.disabled = true;

  const spin = setInterval(() => {
    roulette.textContent =
      members[Math.floor(Math.random() * members.length)];
  }, 100);

  setTimeout(() => {
    clearInterval(spin);

    const person =
      members[Math.floor(Math.random() * members.length)];
    roulette.textContent = `😱 ${person}：`;
    spinBtn.disabled = false;
  }, 2000);
});
