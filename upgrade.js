function getCost(r) {
  switch (r) {
    case 0:
      return Decimal( 4 * Math.pow(game.upgrades[0] + 1, 1 + game.upgrades[0] / 10))
    case 1:
      return Decimal(9 * Math.pow(game.upgrades[1] + 1, 1 + game.upgrades[1] / 10))
    case 2:
      return Decimal(20).mul(Decimal(game.upgrades[2] + 1).toPower(1 + game.upgrades[2] / 120) )
   case 3:
      return Decimal(10000).mul(Decimal(10).toPower(game.upgrades[3]))
    case 4:
      return Decimal(100000).mul(Decimal(100).toPower(game.upgrades[4]))
    case 5:
      return Decimal(1000000 * Math.pow(100, game.upgrades[5]))
    case 6:
      return Decimal(1e14)
    case 7:
      return Decimal(5e15)
    case 8:
      return Decimal(32)
    case 9:
      return Decimal(2e6)
    case 10:
      return Decimal(5e7)
    case 11:
      return Decimal(2e8)
    case 13:
      return Decimal(10).mul(Decimal(1e3).toPower(game.upgrades[13]*2))
    case 14: 
    return Decimal(50000)
    case 15:
    return Decimal(1e6)
    case 16:
    return Decimal(1e7)
    case 17:
      return Decimal(2e7)
    case 18:
      return Decimal("1e500").toPower(game.upgrades[18] + 1)

    default:
      return Decimal(1e300)
     
  }
}

function buyupgrade(r) {
 let bupgrade = false
  cost = getCost(r)
  if (
    game[costnames[r]].greaterThanOrEqualTo(cost) &&
    loading == 1 &&
    game.upgrades[r] < upgradelimits[r]
  ) {
    game.upgrades[r] += 1
    switch (r) {
      case 0:
        addparticle(1)
      
        break
      case 2:
      case 3:
      case 4:
        game.upgrades[r] += game.upgrades[17] * 99
        break
      case 8:
        alert("To get particles other then quarks sort 10+ particles at once")
      case 9:
      case 10:
      case 11:
        upgradelimits[r+1] = 1
        openTab("elementalparticles",1)
        reveal()
        break;
      case 12:

      reveal()
      break
      case 15:
        autobuyer1timer = setInterval(buymax,1000/game.upgrades[16]+1,"particles")
        upgradelimits[16] = 1
      break
      case 16:
        clearInterval( autobuyer1timer)
        setInterval(buymax,1000/game.upgrades[16]+1,"particles")

      break

      default:

        break
    }
   

    game[costnames[r]] = game[costnames[r]].sub(cost)
    bupgrade = true
  }
  e["cost" + r].innerText = getCost(r).formateNumber() + getCostName(r)
  if (game.upgrades[r] >= upgradelimits[r]) {
    e["upgrade" + r].style.display = "none"
    temphideupgrades(currenttab)
  }// else e["upgrade" + r].style.display = "block"
  return bupgrade
}
