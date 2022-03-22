let game = {}
let particlesps
let oldtick
let ticktimer
let eparticles = []
let particlesdrawn = []
let vector = []
let windowy = window.innerHeight
let windowx = window.innerWidth
let ballsize
let basicparticlespeed = (Math.floor((windowx / 1920) * 2) + 1) / 10
let particleperhit = 1
let currenttab = "particles"
let loading = 0
let autobuyer1timer

BigInt.prototype.toJSON = function () {
  return this.toString()
}

Decimal.config({ precision: 8, rounding: 4 })

function resetupgrades() {
  for (let i = 0; i < upgrades; i++) game.upgrades[i] = 0
}
function addarrays() {
  for (let i = game.upgrades.length; i < upgrades; i++) game.upgrades[i] = 0
  for (let i = game.eparticles.length; i < 13; i++) game.eparticles[i] = "0"
  for (let i = eparticles.length; i < 13; i++) eparticles[i] = Decimal(0)
}
function reset() {
  game = {
    particles: Decimal(0),
    tickinterval: 1000,
    activeparticles: 1,
    upgrades: [],
    power: Decimal(0),
    eparticles: [],
    fancymode: 1,
    elementalparticles: Decimal(0),
    elementalprestiges: 0,
    totalelementalparticles: Decimal(0),
  }
  resetupgrades()
  eparticles = []
}


function save() {
  for (let i = 0; i < eparticles.length; i++)
    game.eparticles[i] = eparticles[i].toString()
  localStorage.setItem("theEvolutionSave", JSON.stringify(game))
}

function load() {
  reset()
  let loadgame = JSON.parse(localStorage.getItem("theEvolutionSave"))
  if (loadgame != null) {
    loadGame(loadgame)
  }
}


function loadGame(loadgame) {
  //Sets each variable in 'game' to the equivalent variable in 'loadgame' (the saved file)
  for (i = 0; i < Object.keys(loadgame).length; i++) {
    if (loadgame[Object.keys(loadgame)[i]] != "undefined") {
      if (Object.keys(loadgame)[i] == "upgrade") {
        for (j = 0; j < Object.keys(game.upgrade).length; j++) {
          if (loadgame.upgrade[Object.keys(game.upgrade)[j]] == null) {
            loadgame.upgrade[Object.keys(game.upgrade)[j]] =
              game.upgrade[Object.keys(game.upgrade)[j]]
          } else {
            console.log("loading")
            game.upgrade[Object.keys(game.upgrade)[j]] =
              loadgame.upgrade[Object.keys(game.upgrade)[j]]
          }
        }
      } else if (typeof loadgame[Object.keys(loadgame)[i]] == "string") {
        game[Object.keys(loadgame)[i]] = Decimal(
          loadgame[Object.keys(loadgame)[i]]
        )
      } else {
        game[Object.keys(game)[i]] = loadgame[Object.keys(loadgame)[i]]
      }
    }
  }
}




BigInt.prototype.formateNumber = function (max = 5) {
  formatestring = this.toString()
  if (formatestring.length >= max) {
    formatestring =
      formatestring[0] +
      "." +
      formatestring[1] +
      "e" +
      (formatestring.length - 1)
  }
  return formatestring
}
Number.prototype.formateNumber = function (max = 1e5) {
  if (this.valueOf() >= max) {
    formatestring = this.valueOf().toExponential(1).replace("+", "")
  } else formatestring = this.valueOf() >> 0
  return formatestring
}
function get_pSpeed() {
  return (basicparticlespeed * (game.upgrades[1] + 1) + game.upgrades[14])
}

Decimal.prototype.formateNumber = function (max = 5, r = 1) {
  if (this.e >= max) {
    formatestring = this.toExponential(1).replace("+", "")
  } else formatestring = this.toFixed(r, Decimal.ROUND_DOWN)
  return formatestring
}
function tick() {
  if (game.tickinterval != oldtick) {
    clearInterval(ticktimer)
    ticktimer = setInterval(tick, game.tickinterval)
    oldtick = game.tickinterval
  }
  updateCounterValue()
  if (prestigelist[currenttab]) updatePrestigeButton(currenttab)
  updateParticlesValue()
 
  e.powervalue.innerText = game.power.formateNumber()
}


function LOADING() {
  loading = 0
reset()

load()
addarrays()
for (let i = 0; i < game.eparticles.length; i++) {
  eparticles[i] = Decimal(game.eparticles[i])
}

loadIDS()

side["l"] = getComputedStyle(e.particlesdiv).left
side["l"] = Number(side["l"].substring(0, side["l"].length - 2))
side["t"] = getComputedStyle(e.particlesdiv).top
side["t"] = Number(side["t"].substring(0, side["t"].length - 2))
side["r"] = getComputedStyle(e.particlesdiv).width
side["r"] = Number(side["r"].substring(0, side["r"].length - 2)) //+ side.l;
side["b"] = getComputedStyle(e.particlesdiv).height
side["b"] = Number(side["b"].substring(0, side["b"].length - 2)) // + side.t;
  redraw()

  for (let i = 0; i < upgrades; i++) {
   
    buyupgrade(i)
  }
  if (game.upgrades[i] >= upgradelimits[i]) {
    e["upgrade" + i].style.display = "none"
  }
  if (game.fancymode == 1) {
    e.fancymode.innerHTML = " Smooth Particles:<br>OFF"
  } else {
    e.fancymode.innerHTML = " Smooth Particles:<br>ON"
  }
  reveal()
  openTab("particles", 0)
  setInterval(reveal, 5000)
  buildElementalParticlesSortingChances()
  if(game.upgrades[15] == 1)
  {
  autobuyer1timer = setInterval(buymax,1000,"particles")
  upgradelimits[16] = 1
  }
 
  setInterval(save, 1000)
  ticktimer = setInterval(tick, game.tickinterval)

  loading = 1

}

function reveal() {
  if (game.power.e > 145 || game.elementalprestiges > 0) {
    e.buyMax.style.display = "block"
    e.elementalTabsButton.style.display = "block"
  }
  if (game.upgrades[8] > 0) {
  
    e.eparticle6.style.display = "block"
    e.eparticle7.style.display = "block"
    e.eparticle8.style.display = "block"
  }
  if (game.upgrades[9] > 0) {
    
    e.eparticle3.style.display = "block"
    e.eparticle4.style.display = "block"
    e.eparticle5.style.display = "block"
  }
  if (game.upgrades[10] > 0) {
   
    e.eparticle9.style.display = "block"
  }
  if (game.upgrades[11] > 0) {
   
    e.eparticle10.style.display = "block"
    e.eparticle11.style.display = "block"
  }
  if (game.upgrades[12] > 0) {

    e.eparticle12.style.display = "block"
  }
  if(game.elementalparticles.e > 1)
  {
    upgradelimits[18] = 10000
  }
}

function buymax(r) {
  
  ifbough = false
  for (let i = upgrades-1; i >= 0; i--) {
    if (costnames[i] == r) {
      do {
        ifbough = buyupgrade(i)
      } while (ifbough == true)
    }
  }
}
function temphideupgrades(r)
{
 let totalupgrades = 0
  for(let i = 0;i < upgrades; i++)
  {
    if(game.upgrades[i]<upgradelimits[i])
      {
        if(costnames[i] == r)
        {
          totalupgrades++
          if(totalupgrades > 6)
          {
            e["upgrade" + i].style.display = "none"
          }
          else
          e["upgrade" + i].style.display = "block"
        }
      }
  

}
}
function openupgrades(r) {
  for (let i = 0; i < upgrades; i++)
    if (game.upgrades[i] < upgradelimits[i]) {
      if (costnames[i] == r) {
        e["upgrade" + i].style.display = "block"
      } else e["upgrade" + i].style.display = "none"
    }
    temphideupgrades(r)
}
function openTab(r, n) {
  e.countername.innerHTML = counternames[n] + ": "
  e[currenttab + "div"].style.display = "none"
  e[r + "div"].style.display = "block"
  currenttab = r
  updateCounterValue()
  openupgrades(r)
  e.powervalue.innerText = game.power.formateNumber()
  if (prestigelist[r]) updatePrestigeButton(r)
  updateParticlesValue()
}
function updateCounterValue() {
  e.countervalue.innerText = game[currenttab].formateNumber()
}
function updateParticlesValue() {
  for (let i = 0; i < 13; i++) {
    e["eparticlecontainer" + i].innerText = eparticles[i].formateNumber()
    e["eparticlemultiplier" + i].innerText = getElementalParticleEffect(
      i
    ).formateNumber(5, 2)
  }
}

function getElementalParticleEffect(r) {
  switch (r) {
    case 0:
      return eparticles[0].plus(1).log(eparticles[0].e + 2).mul(getElementalParticleEffect(3))
    case 1:
      if (eparticles[1].equals(0)) return 1
      else
        return Decimal(2)
          .plus(eparticles[1].log(2))
          .toPower(eparticles[1].e + 1).mul(getElementalParticleEffect(4))
    case 2:
      return eparticles[2].plus(1).log(10).div(50).plus(1).mul(getElementalParticleEffect(5))
     case 3:
       return eparticles[3].plus(1).log(150).plus(1)
      case 4:
        return eparticles[4].plus(1).log(8).plus(1)
      case 5:
        return eparticles[5].plus(1).log(80000).div(2).plus(1)
    case 6:
      return eparticles[6].plus(1).log(10).mul(getElementalParticleEffect(11))
    case 7:
      return eparticles[7].plus(1).log(10).plus(1).mul(getElementalParticleEffect(11))
    case 8:
      return eparticles[8].plus(1).log(10).div(50).plus(1).mul(getElementalParticleEffect(11))
    case 9:
      return eparticles[9].plus(1).log(50).plus(1)
    case 10:
      return eparticles[10].plus(1).log(1e15)
    case 11:
      return eparticles[11].plus(1).log(1e15).plus(1)
      
    default:
      return Decimal(0)
  }
}
function clearEparticles() {
  for (let i = 0; i < eparticles.length; i++) eparticles[i] = Decimal(0)
}
let elementalParticlesRawChances =[4,8,2,4,8,2,4,8,2,5,4,3,0]
let elementalParticlesChances = [0]//, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
let elementalParticlesChances10 = [0, 3, 8, 10]
let elementalParticlesFullChance = 0
function buildElementalParticlesSortingChances()
{
for(let i = 1; i <= elementalParticlesRawChances.length;i++)
elementalParticlesChances[i] = elementalParticlesRawChances[i-1] + elementalParticlesChances[i-1]
elementalParticlesFullChance = elementalParticlesChances[elementalParticlesChances.length-1]
}
function sortElementalParticles(r) {
  let random
   let multiplicator = getElementalParticleEffect(9)
  let allowedparticles = game.elementalparticles.toSD(2, Decimal.ROUND_DOWN)

  for (let i = 0; i < r; i++) {
    random = Math.floor(Math.random() * elementalParticlesFullChance)
   
    for (let i = 0; i < 13; i++) {
      if (
        random >= elementalParticlesChances[i] &&
        random < elementalParticlesChances[i + 1]
      ) {
        if (i < 3) eparticles[i] = eparticles[i].add(allowedparticles.div(100).mul(multiplicator))
        if (i >= 3 && i <= 5)
          if (game.upgrades[9] > 0)
            eparticles[i] = eparticles[i].add(allowedparticles.div(100).mul(multiplicator))
          else eparticles[1] = eparticles[1].add(allowedparticles.div(100).mul(multiplicator))
        if (i >= 6 && i <= 8)
          if (game.upgrades[8] > 0)
            eparticles[i] = eparticles[i].add(allowedparticles.div(100).mul(multiplicator))
          else eparticles[2] = eparticles[2].add(allowedparticles.div(100).mul(multiplicator))
        if (i == 9)
          if (game.upgrades[10] > 0)
            eparticles[i] = eparticles[i].add(allowedparticles.div(100).mul(multiplicator))
          else eparticles[0] = eparticles[0].add(allowedparticles.div(100).mul(multiplicator))
        if (i >= 10 && i <= 11)
          if (game.upgrades[11] > 0)
            eparticles[i] = eparticles[i].add(allowedparticles.div(100).mul(multiplicator))
          else eparticles[0] = eparticles[0].add(allowedparticles.div(100).mul(multiplicator))
        if (i == 12)
          if (game.upgrades[12] > 0)
            eparticles[i] = eparticles[i].add(allowedparticles.div(100).mul(multiplicator))
          else eparticles[0] = eparticles[0].add(allowedparticles.div(100).mul(multiplicator))
      }
    }
  }
  game.elementalparticles = game.elementalparticles.minus(allowedparticles)
}

function sortElementalParticles10() {
  let random
  // let allowedparticles = game.elementalparticles.toSD(1,Decimal.ROUND_DOWN)
  let allowedparticles = game.elementalparticles.toFixed(0)
  for (let i = 0; i < allowedparticles; i++) {
    random = Math.floor(Math.random() * 10)
    for (let j = 0; j < 3; j++) {
      if (
        random >= elementalParticlesChances10[j] &&
        random < elementalParticlesChances10[j + 1]
      )
      if(j == 2)
      {
      if(eparticles[0].gte(10) || eparticles[1].gte(10) )
        eparticles[j] = eparticles[j].plus(1)
        else
        eparticles[0] = eparticles[0].plus(1)
      }
      else
      eparticles[j] = eparticles[j].plus(1)
    }
  }
  game.elementalparticles = game.elementalparticles.sub(allowedparticles)
}

function sortElementalParticles100() {
  let random
  let allowedparticles = game.elementalparticles.toSD(1, Decimal.ROUND_DOWN)

  for (let j = 0; j < 10; j++) {
    random = Math.floor(Math.random() * 100)
    for (let i = 0; i < 10; i++) {
      if (
        random >= elementalParticlesChances[i] &&
        random < elementalParticlesChances[i + 1]
      ) {
        if (i < 3) eparticles[i] = eparticles[i].add(allowedparticles.div(10))
        if (i >= 3 && i <= 5)
          if (game.upgrades[9] > 0)
            eparticles[i] = eparticles[i].add(allowedparticles.div(10))
          else eparticles[1] = eparticles[1].add(allowedparticles.div(10))
        if (i >= 6 && i <= 8)
          if (game.upgrades[8] > 0)
            eparticles[i] = eparticles[i].add(allowedparticles.div(10))
          else eparticles[2] = eparticles[2].add(allowedparticles.div(10))
        if (i == 9)
          if (game.upgrades[10] > 0)
            eparticles[i] = eparticles[i].add(allowedparticles.div(10))
          else eparticles[0] = eparticles[0].add(allowedparticles.div(10))
        if (i >= 10 && i <= 11)
          if (game.upgrades[11] > 0)
            eparticles[i] = eparticles[i].add(allowedparticles.div(10))
          else eparticles[0] = eparticles[0].add(allowedparticles.div(10))
        if (i == 12)
          if (game.upgrades[12] > 0)
            eparticles[i] = eparticles[i].add(allowedparticles.div(10))
          else eparticles[0] = eparticles[0].add(allowedparticles.div(10))
      }
    }
  }
  game.elementalparticles = game.elementalparticles.sub(allowedparticles)
}
function sortEparticles(r) {
  if(game.elementalparticles.e < 4)
  {
  if (game.elementalparticles.gte(100)) sortElementalParticles(r)
  if (game.elementalparticles.gte(10)) sortElementalParticles100()
  if (game.elementalparticles.gte(1)) sortElementalParticles10()
  }
  else
  sortElementalParticles(r)
  if(game.elementalparticles.lt(0))
  game.elementalparticles = Decimal(0)
}
function getAllElementalParticlesEffect()
{
for(let i = 0; i < 13; i++)
{
 console.log(i + " "+ getElementalParticleEffect(i).formateNumber()) 
}

}
