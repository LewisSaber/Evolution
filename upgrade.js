let loading = 0;
function loadUpgrades() {
  for (let i = 0; i < upgrades; i++) {
    //callupgrades["buyupgrade" + i]();
    buyupgrade(i);
  }
  if (game.upgrades[i] >= upgradelimits[i]) {
    e["upgrade"+i].style.display = "none";
  }
  loading = 1;
}
function getCost(r) {
  switch (r) {
    case 0:
      return 4 * Math.pow(game.upgrades[0] + 1, 1 + game.upgrades[0] / 10);
    case 1:
      return 9 * Math.pow(game.upgrades[1] + 1, 1 + game.upgrades[1] / 30);
    case 2:
      return 20 * Math.pow(game.upgrades[2] + 1, 1 + game.upgrades[2] / 120);
    case 3:
      return 10000 * Math.pow(10, game.upgrades[3]);
    case 4:
      return 100000 * Math.pow(100, game.upgrades[4]);
    case 5:
      return 1000000 * Math.pow(100, game.upgrades[5]);
    case 6:
      return 1e14 ;
      case 7:
        return 1e16 ;
    default:
      break;
  }
}

function buyupgrade(r) {
  cost = BigInt(Math.trunc(getCost(r)));
  if (game[costnames[r]] >= cost && loading == 1) {
    switch (r) {
      case 0:
        addparticle(1);

        break;
      default:
        break;
    }
    game.upgrades[r] += 1;
    
    game[costnames[r]] -= cost;
  }
  e["cost" + r].innerText = getCost(r).formateNumber() + getCostName(r);
  if (game.upgrades[r] >= upgradelimits[r]) {
    e["upgrade"+r].style.display = "none";
  }
  
}
loadUpgrades();
