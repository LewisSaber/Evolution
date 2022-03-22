let upgradedescription = [
  "#1 Add Particle ",
  "#2 Increase Particle Speed",
  "#3 Increase Gain Per Hit",
  "#4 Multiply Gain Per Hit",
  "#5 Increase Power Per Hit",
  "#6 Square Power Gain",
  "#7 Log8(Particles) Multiply Power",
  "#8 Log1000(Power) Multiply Particles",
  "#9 Unlock Leptons",
  "#10 Unlock High Quarks",
  "#11 Unlock Positrons",
  "#12 Unlock Bosons",
  "#13 Unlock Higgs Boson",
  "#14 +0.1 to Upgrade #4 Base ",
  "#15 +1 Particle Base Speed",
  "#16 Primorial Particles Upgrades Autobuyer ",
  "#17 /2 Primorial Particles Upgrades Autobuyer Interval",
  "#18 Upgrades #3,#4,#5 are bought 100 at once",
  "#19 x2 Elemental Particles Gain"
]
let eparticledescription = [
  "to Primorial Particles gain base ",
  " Primorial Particles gain ",
  " primorial particles gain ",
  "to Up Quark effect",
  "to Charm Quark effect",
  "to Top Quark effect",
  " to Power gain base",
  "Power gain base",
  "Power Gain",
  "Particles Per Sorting",
  "to Elemental Particles Base Gain",
  "Leptons Effect",
  "WIP",
]
let upgrades = upgradedescription.length
let costnames = [
  "particles",
  "particles",
  "particles",
  "particles",
  "particles",
  "particles",
  "particles",
  "particles",
  "elementalparticles",
  "elementalparticles",
  "elementalparticles",
  "elementalparticles",
  "elementalparticles",
  "elementalparticles",
  "elementalparticles",
  "elementalparticles",
  "elementalparticles",
  "elementalparticles",
  "particles",
]

let counternames = ["Primorial particles", "Elemental particles"]
let particlename = [
  "Up Quark",
  "Charm Quark",
  "Top Quark",
  "Down Quark",
  "Strange Quark",
  "Bottom Quark",
  "Electron",
  "Muon",
  "Tau",
  "Positron",
  "Gluon",
  "Proton",
  "Higgs Boson",
]
let eparticleseffectsymbols = [
  "+ ",
  "x ",
  "^ ",
  "x ",
  "x ",
  "x ",
  "+ ",
  "x ",
  "^ ",
  " x ",
  " + ",
  " x ",
  "WIP",
]
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
let prestigelist = { elementalparticles: true }

let upgradelimits = []

let e = {}



function loadIDS(){
var allElements = document.querySelectorAll("*[id]")
for (let i = 0, n = allElements.length; i < n; i++) {
  e[allElements[i].id] = allElements[i]
}



for (let i = 0; i < upgrades; i++) {
  upgradelimits[i] = 1000000
}
upgradelimits[0] = 50
upgradelimits[1] = 50
upgradelimits[2] = 20000
upgradelimits[3] = 2000
upgradelimits[4] = 2000
upgradelimits[5] = 6

for (let i = 6; i < 9; i++) {
  upgradelimits[i] = 1
}
for(let i = 8; i < 13;i++)
{
  if(game.upgrades[i] == 1)
  upgradelimits[i+1] = 1
  else
  upgradelimits[i+1] = 0

}
upgradelimits[14] = 1
upgradelimits[15] = 1
upgradelimits[16] = 0
upgradelimits[17] = 1
upgradelimits[18] = 0

for (let i = 0; i < upgrades; i++) {
  tag = document.createElement("button")
  tag.setAttribute("class", "upgrade")
  tag.setAttribute("id", "upgrade" + i)
  tag.setAttribute("onclick", "buyupgrade(" + i + ")")
  tag.innerHTML =
    upgradedescription[i] +
    '<p class="cost" id="cost' +
    i +
    '">0' +
    getCostName[i] +
    "</p>"
  e.upgradesdiv.appendChild(tag)
}
for (let i = 0; i < 13; i++) {
  tag = document.createElement("p")
  tag.setAttribute("class", "eparticle")
  tag.setAttribute("id", "eparticle" + i)
  tag.innerHTML =
    particlename[i] +
    '<p id="eparticlecontainer' +
    i +
    '" class="eparticlecontainer"> 0 </p>  ' +
    eparticleseffectsymbols[i] +
    '<p id="eparticlemultiplier' +
    i +
    '" class="eparticledescription"> 0 </p> ' +
    " " +
    eparticledescription[i]
  e.elementalparticlesdiv.appendChild(tag)
}

allElements = document.querySelectorAll("*[id]")
allIds = []
for (var i = 0, n = allElements.length; i < n; ++i) {
  var el = allElements[i]
  if (el.id) {
    allIds.push(el.id)
  }
}
e = {}
for (let i = 0, n = allElements.length; i < n; i++) {
  e[allIds[i]] = allElements[i]
}

}
function getCostName(n) {
  if (costnames[n] == "elementalparticles")
    return (
      " " +
      costnames[n].charAt(0).toUpperCase() +
      costnames[n].substring(1, 9) +
      " " +
      costnames[n].slice(9)
    )
  else return " " + costnames[n].charAt(0).toUpperCase() + costnames[n].slice(1)
}