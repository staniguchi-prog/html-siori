const members = [
  "しゅうと",
  "りょうが",
  "あきとし",
  "せとっち",
  "そうちゃん"
];

const punishments = [
  "次の写真で変顔",
  "たこ焼き1個おごり",
  "関西弁で30分話す",
  "写真係になる",
  "次の移動で先頭"
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
    const punishment =
      punishments[Math.floor(Math.random() * punishments.length)];

    roulette.textContent = `🎉 ${person}：${punishment}`;
    spinBtn.disabled = false;
  }, 2000);
});
