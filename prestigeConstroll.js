function getPrestigeValue(r) {
    switch (r) {
      case "elementalparticles":
          if(game.power.toString().length > 150)
        return BigInt(1+game.elementalprestiges)**BigInt(Math.trunc((game.power.toString().length - 150)/10))
        else return BigInt(0)      
    }
  }

  function updatePrestigeButton(r) {
    e.prestigevalue.innerText = getPrestigeValue(r).formateNumber()
  }
  function doElementalPrestige()
  {
      if(game.power.toString().length > 150)
      {
    for(let i = 0; i < upgrades; i++)
  {
      if(costnames[i] == "particles")
      game.upgrades[i] = 0
  }
  game.elementalparticles += getPrestigeValue("elementalparticles")
  game.power = BigInt(0)
  game.particles = BigInt(0)
  game.activeparticles = 1
  game.elementalprestiges += 1
  
buymax("particles")
openTab("particles",0)

redraw()
      }
  }