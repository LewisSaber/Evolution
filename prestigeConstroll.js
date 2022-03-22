function getPrestigeValue(r) {
    switch (r) {
      case "elementalparticles":
          if(game.power.e > 145)
        return Decimal(2+game.elementalprestiges/10000).toPower((game.power.e - 145)/10/(game.power.e/300)) 
        else return Decimal(0)      
    }
  }

  function updatePrestigeButton(r) {
    e.prestigevalue.innerText = getPrestigeValue(r).formateNumber()
  }
  function doElementalPrestige()
  {
      if(game.power.e > 145)
      {
    for(let i = 0; i < upgrades; i++)
  {
      if(costnames[i] == "particles")
      game.upgrades[i] = 0
  }
  game.elementalparticles = game.elementalparticles.add( getPrestigeValue("elementalparticles"))
  game.totalelementalparticles =game.totalelementalparticles.add( getPrestigeValue("elementalparticles"))
  game.power = Decimal(0)
  game.particles = Decimal(0)
  game.activeparticles = 1
  game.elementalprestiges += 1
  
buymax("particles")
openTab("particles",0)

redraw()
      }
  }