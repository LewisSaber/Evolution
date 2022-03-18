let loading = 0;
function loadUpgrades() {
  for (let i = 0; i < upgrades; i++) {
    callupgrades["buyupgrade" + i]();
  }
  if(game.activeparticles > 50)
  {
      e.upgrade0.style.display = "none"
  }
  if(get_pSpeed() > 5)
  {
      e.upgrade1.style.display = "none"
  }
  loading = 1;
}
function getCost(r)
{
switch (r) {
    case 0:
       return  4 * Math.pow(game.upgrades[0] + 1,1 + game.upgrades[0]/10)
    case 1:
        return  9 * Math.pow(game.upgrades[1] + 1,1 + game.upgrades[1]/30)
    case 2:
        return   20 * Math.pow(game.upgrades[2] + 1,1 + game.upgrades[2]/90);

    default:

        break;
}
}
callupgrades = {
  buyupgrade0: function () {
   cost = getCost(0)
    if (game.particles >= cost && loading == 1) {
      game.upgrades[0] += 1;
      game.particles -= cost;
      addparticle(1);
    }
    cost = getCost(0)
    e.cost0.innerText = cost.formateNumber() + costnames[0];
    if(game.activeparticles > 50)
    {
        e.upgrade0.style.display = "none"
    }
  },
  buyupgrade1: function () {
    cost = getCost(1)
    if (game.particles >= cost && loading == 1) {
      game.upgrades[1] += 1;
      game.particles -= cost;
    
    }
    cost = getCost(1)
    e.cost1.innerText = cost.formateNumber() + costnames[1];
  
  if(get_pSpeed() > 5)
  {
      e.upgrade1.style.display = "none"
  }
  },
  buyupgrade2: function () {
    cost = getCost(2)
    if (game.particles >= cost && loading == 1) {
      game.upgrades[2] += 1;
      game.particles -= cost;
    
    }
   cost = getCost(2)
    e.cost2.innerText = cost.formateNumber() + costnames[2];
  },
};
loadUpgrades();
