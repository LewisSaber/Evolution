side = {}
let particleinterval
side["l"] = getComputedStyle(e.particlesdiv).left
side["l"] = Number(side["l"].substring(0, side["l"].length - 2))
side["t"] = getComputedStyle(e.particlesdiv).top
side["t"] = Number(side["t"].substring(0, side["t"].length - 2))
side["r"] = getComputedStyle(e.particlesdiv).width
side["r"] = Number(side["r"].substring(0, side["r"].length - 2)) //+ side.l;
side["b"] = getComputedStyle(e.particlesdiv).height
side["b"] = Number(side["b"].substring(0, side["b"].length - 2)) // + side.t;

let colors = [
  "#fcba03",
  "#9c052a",
  "#2746e3",
  "#05e858",
  "#000000",
  "FFFFFF",
  "#a314b3",
  "#f7a711",
  "#d13838",
  "#04dade",
  "#e32b6f",
]

function redraw() {
  e.particlesdiv.innerHTML = ""
  windowy = window.innerHeight
  windowx = window.innerWidth
  basicparticlespeed = (Math.floor((windowx / 1920) * 2) + 1) / 10
  side["l"] = getComputedStyle(e.particlesdiv).left
  side["l"] = Number(side["l"].substring(0, side["l"].length - 2))
  side["t"] = getComputedStyle(e.particlesdiv).top
  side["t"] = Number(side["t"].substring(0, side["t"].length - 2))
  side["r"] = getComputedStyle(e.particlesdiv).width
  side["r"] = Number(side["r"].substring(0, side["r"].length - 2)) //+ side.l;
  side["b"] = getComputedStyle(e.particlesdiv).height
  side["b"] = Number(side["b"].substring(0, side["b"].length - 2)) // + side.t;

  particlesdrawn = []
  drawparticles()
  ballsize = getComputedStyle(particlesdrawn[0]).width
  ballsize = Number(ballsize.substring(0, ballsize.length - 2))
  side.r -= ballsize

  side.b -= ballsize * 2 * (windowx / windowy)

  if (particleinterval != undefined) clearInterval(particleinterval)
  particleinterval = setInterval(particlemove, 10 / game.fancymode)
}

function drawparticles() {
  for (let i = particlesdrawn.length; i < game.activeparticles; i++) {
    tag = document.createElement("p")
    tag.setAttribute("class", "particle")

    e.particlesdiv.appendChild(tag)
    vector.push(new Object())
    vector[i]["x"] = 5 - Math.floor(Math.random() * 11)
    vector[i]["y"] = 5 - Math.floor(Math.random() * 11)
    if (Math.abs(vector[i].x) < 1) vector[i].x = 1
    if (Math.abs(vector[i].y) < 1) vector[i].y = 1
    particlesdrawn[i] = tag
    vector[i]["speed"] = (Math.random() * 10 + 1) / 5
    particlesdrawn[i].style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)]

    vector[i]["xc"] = getComputedStyle(particlesdrawn[i]).left
    vector[i]["yc"] = getComputedStyle(particlesdrawn[i]).top
    vector[i]["yc"] = Number(
      vector[i]["yc"].substring(0, vector[i]["yc"].length - 2)
    )
    vector[i]["xc"] = Number(
      vector[i]["xc"].substring(0, vector[i]["xc"].length - 2)
    )
  }
}

function hit(n = 1) {

  game.power = game.power.plus(Decimal(n).plus(getElementalParticleEffect(6)).mul(game.upgrades[4] + 1).mul(getElementalParticleEffect(7)).mul(game.particles.e / Math.log10(8) * game.upgrades[6] +
  1).toPower(Decimal(2).toPower(game.upgrades[5])).toPower(getElementalParticleEffect(8)))
 // console.log(Decimal(n).mul(game.upgrades[4] + 1).mul(game.particles.e / Math.log10(8) * game.upgrades[6] +
  //1).toPower(Decimal(2).toPower(game.upgrades[5])).formateNumber())
  
  pwrl = game.power.e
  gap = Decimal(n).plus(getElementalParticleEffect(0)).mul(game.upgrades[2]+1).mul(Decimal(1.011).toPower(game.upgrades[2])).mul((pwrl / Math.log10(1.2) * game.upgrades[1]) / 100 + 1).mul(Decimal(2).plus(game.upgrades[13]* 0.1).toPower(game.upgrades[3])).mul(Decimal(pwrl / 3).mul(game.upgrades[7]).plus(1)).mul(getElementalParticleEffect(1)).toPower(getElementalParticleEffect(2))
 //console.log(gap.formateNumber())
  game.particles= game.particles.plus(gap )

  if (currenttab == "particles")
    e.countervalue.innerText = game.particles.formateNumber()
  e.powervalue.innerText = game.power.formateNumber()
}

function addparticle(n) {
  game.activeparticles += n
  drawparticles()
}

function particlemove() {
  for (let i = 0; i < game.activeparticles; i++) {
    vector[i].xc +=
      (vector[i].x * get_pSpeed() * vector[i].speed) / game.fancymode
    vector[i].yc +=
      (vector[i].y * get_pSpeed() * vector[i].speed) / game.fancymode

    if (vector[i].xc <= 0) {
      vector[i].x = Math.abs(vector[i].x)
      vector[i].xc = 0
      hit()
    }
    if (vector[i].yc <= 0) {
      vector[i].y = Math.abs(vector[i].y)
      // vector[i].x += 1
      vector[i].yc = 0
      hit()
    }
    if (vector[i].xc >= side.r) {
      vector[i].x = -1 * Math.abs(vector[i].x)
      vector[i].xc = side.r
      hit()
    }
    if (vector[i].yc >= side.b) {
      vector[i].y = -1 * Math.abs(vector[i].y)
      vector[i].yc = side.b
      hit()
    }

    particlesdrawn[i].style.left = vector[i].xc + "px"
    particlesdrawn[i].style.top = vector[i].yc + "px"
  }
}
