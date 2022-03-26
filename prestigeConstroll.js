function getPrestigeValue(r) {
  switch (r) {
    case "elementalparticles":
      if (game.power.e > 145)
        return Decimal(2 + game.elementalprestiges / 10000)
          .add(getElementalParticleEffect(10))
          .toPower(
            game.power
              .log(10)
              .minus(145)
              .div(10)
              .div(game.power.log(10).div(300))
             
          )
          .mul(Decimal(2).toPower(game.upgrades[18]))
          .mul(getElementalParticleEffect(13))
          .mul(Decimal(4).toPower(game.milestones[0]))
      else return Decimal(0)
    case "protons":
      return 1
  }
}

function updatePrestigeButton(r) {
  e["prestigevalue" + r].innerText = getPrestigeValue(r).formateNumber()
}
function doProtonPrestige() {}
function doElementalPrestige(r = 0) {
  if (game.power.e > 145 || r == 1) {
    game.elementalparticles = game.elementalparticles.add(
      getPrestigeValue("elementalparticles")
    )

    game.totalelementalparticles = game.totalelementalparticles.add(
      getPrestigeValue("elementalparticles")
    )
    game.power = Decimal(0)
    game.particles = Decimal(0)
    game.activeparticles = 1
    game.elementalprestiges += 1
    if(game.milestones[2] == 0)
    {
    for (let i = 0; i < upgrades; i++) {

      if (costnames[i] == "particles") {
        if (i == 7 && game.milestones[0] == 1) {
          game.upgrades[i] = 1
        } else game.upgrades[i] = 0
      }
    }
    buymax("particles")
    openTab("particles", 0)
    redraw()
  }
  
    if (game.milestonetype0 == 0) {
      game.milestonetype0 = 1

      milestonetype0controll()
    }
    
  }
}
function doProtonPrestige() {
  if(game.elementalparticles.e > 66)
  {
  game.protonprestiges += 1
  game.protons = game.protons.plus(getPrestigeValue("protons"))
  completemilestone()
  if(game.milestones[5]==0)
  {

  clearEparticles()
  for (let i = 0; i < upgrades; i++) {
    if (costnames[i] == "elementalparticles") {
      if(i == 8 && game.milestones[1] == 1)
      game.upgrades[i] = 1
      else
      game.upgrades[i] = 0
    }
  }
  clearInterval(autobuyer1timer)
  if (game.upgrades[8] == 0) {
    e.eparticle6.style.display = "none"
    e.eparticle7.style.display = "none"
    e.eparticle8.style.display = "none"
  }
  if (game.upgrades[9] == 0) {
    e.eparticle3.style.display = "none"
    e.eparticle4.style.display = "none"
    e.eparticle5.style.display = "none"
  }
  if (game.upgrades[10] == 0) {
    e.eparticle9.style.display = "none"
  }
  if (game.upgrades[11] == 0) {
    e.eparticle10.style.display = "none"
    e.eparticle11.style.display = "none"
  }
  if (game.upgrades[12] == 0) {
    e.eparticle12.style.display = "none"
  }
  if (game.upgrades[19] == 0) {
    e.eparticle13.style.display = "none"
  }

  doElementalPrestige(1)
  game.elementalparticles = Decimal(0)
}
  }
}
