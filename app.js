const tg = window.Telegram.WebApp;
tg.expand();

const user = tg.initDataUnsafe.user;
let balance = 1000;

document.getElementById("balance").innerText =
  "Баланс: " + balance;

function openGame(game) {
  const area = document.getElementById("game-area");

  if (game === "slot") {
    area.innerHTML = `
      <h2>🎰 Slot</h2>
      <button onclick="spin()">SPIN</button>
      <div id="slot"></div>
    `;
  }

  if (game === "crash") {
    area.innerHTML = `<h2>🚀 Crash (скоро)</h2>`;
  }

  if (game === "dice") {
    area.innerHTML = `<h2>🎲 Dice (скоро)</h2>`;
  }
}

function spin() {
  const symbols = ["🍒","🍋","🔔","💎","7️⃣"];
  let r = [];
  for (let i = 0; i < 3; i++) {
    r.push(symbols[Math.floor(Math.random() * symbols.length)]);
  }

  document.getElementById("slot").innerText = r.join(" | ");

  if (r[0] === r[1] && r[1] === r[2]) {
    balance += 200;
  } else {
    balance -= 50;
  }

  document.getElementById("balance").innerText =
    "Баланс: " + balance;
}
