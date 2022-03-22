function getPrestigeValue(r) {
    switch (r) {
      case "elementalparticles":
          if(game.power.e > 145)
        return Decimal(2+game.elementalprestiges/10000).add(getElementalParticleEffect(10)).toPower((game.power.log(10).minus(145).div(10).div(game.power.log(10).div(300)))).mul(Decimal(2).toPower(game.upgrades[18]))
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
        game.elementalparticles = game.elementalparticles.add( getPrestigeValue("elementalparticles"))
 
  
  game.totalelementalparticles =game.totalelementalparticles.add( getPrestigeValue("elementalparticles"))
  game.power = Decimal(0)
  game.particles = Decimal(0)
  game.activeparticles = 1
  game.elementalprestiges += 1
  for(let i = 0; i < upgrades; i++)
  {
      if(costnames[i] == "particles")
      {
       
        game.upgrades[i] = 0
        
        
      }
     
      
  }
  
buymax("particles")
openTab("particles",0)

redraw()
      }
  }