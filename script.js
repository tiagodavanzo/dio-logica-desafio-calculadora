console.log("Calculadora de Partidas Rankeadas");

function getBalance(wins, losses) {
  return wins - losses;
}

function getLevel(balance) {
  switch (true) {
    case balance <= 10:
      return "Ferro";
    case balance >= 11 && balance <= 20:
      return "Bronze";
    case balance >= 21 && balance <= 50:
      return "Prata";
    case balance >= 51 && balance <= 80:
      return "Ouro";
    case balance >= 81 && balance <= 90:
      return "Diamante";
    case balance >= 91 && balance <= 100:
      return "Lendário";
    case balance >= 101:
      return "Imortal";
  }
}

let balance = getBalance(500, 30);
let level = getLevel(balance);

console.log(`O Herói tem de saldo de ${balance} está no nível ${level}`);
