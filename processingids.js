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
  "#11 Unlock Positron(Lepton)",
  "#12 Unlock Bosons",
  "#13 Unlock Higgs Boson",
  "#14 +0.1 to Upgrade #4 Base ",
  "#15 +1 Particle Base Speed",
  "#16 Primorial Particles Upgrades Autobuyer ",
  "#17 /2 Primorial Particles Upgrades Autobuyer Interval",
  "#18 Upgrades #3,#4,#5 are bought 100 at once",
  "#19 x2 Elemental Particles Gain",
  "#20 Unlock Neutrino",
  "#21 /2 Primorial Particles Upgrades Autobuyer Interval",
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
  "All Previous Particles Effect",
  "Elemental Particles Gain"
]
let milestonedescription = [
  "#1 Upgrade #8 is always saved, 4x Elemental Particles gain,<br> 4x Particles per sorting",
  "#2 Disable Upgrade #1, x50 primorial particles gain, Leptons are Always Unlocked",
  "#3 Primorial Particles Upgrades are always saved , x4 Primorial Particles gain",
  "#4 Gain 5% of Elemental Particles Per Second",
  "#5 Sorting Particles is free, sort particles automaticly",
  "#6 Proton Prestiges Dont reset anything, gain 100% of Protons Per Second",
]
let milestonenames = ["protonprestiges","protonprestiges","protonprestiges","protonprestiges","protonprestiges","protonprestiges"]
let milestonecosts = ["1","2","3","5","7","10"]
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
  "elementalparticles",
  "elementalparticles",
]

let counternames = ["Primorial particles", "Elemental particles","Protons","Protons"]
let powercounternames = ["Power","Power","Neutrons","Protons prestiges"]
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
  "Photon",
  "Higgs Boson",
  "Neutrino",
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
  "^ ",
  "x "
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
let prestigelist = { elementalparticles: true, protons:true }
let atomcomponents = []
let totalatomcomponents = 20
let upgradelimits = []
let atomnames = ["Hydrogen","Deuterium","Tritium","Helium-3","Helium-4"]
let atomsymbols = ["x "," "," "," "," "]
let atomdescription = ["Protons Gain","Soon","Soon","Soon","Soon"]
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
if(game.milestones[1] == 1)
upgradelimits[0] = 0

for (let i = 6; i < 9; i++) {
  upgradelimits[i] = 1
}
for(let i = 8; i < 12;i++)
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
upgradelimits[19] = 0
if(game.upgrades[12] == 1)
upgradelimits[19] = 1
upgradelimits[20] = 0

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
for (let i = 0; i < 14; i++) {
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
for (let i = 0; i < atomnames.length; i++) {
  tag = document.createElement("p")
  tag.setAttribute("class", "atom")
  tag.setAttribute("id", "atom" + i)
  tag.innerHTML =
    atomnames[i] +
    '<p id="atomcontainer' +
    i +
    '" class="atomcontainer"> 0 </p>  ' +
    atomsymbols[i] +
    '<p id="atommultiplier' +
    i +
    '" class="atomdescription"> 0 </p> ' +
    " " +
    atomdescription[i]
  e.atomsdiv.appendChild(tag)
}
for(let i = 0; i < milestonedescription.length;i++)
{
  tag = document.createElement("p")
  tag.setAttribute("class", "milestone")
  tag.setAttribute("id", "milestone" + i)
  tag.innerHTML = milestonedescription[i] + "<br>"+milestonecosts[i]+ " " + getMilestoneName(i)
  e.milestonesdiv.appendChild(tag)
}

for(let i = 0 ; i < totalatomcomponents ; i++)
{

  tag = document.createElement("p")
  tag.setAttribute("class", "atomcomponent")
  tag.setAttribute("id", "atomcomponent" + i)
  e.atomdisplay.appendChild(tag)
  
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
function getMilestoneName(n) {
  if (milestonenames[n] == "protonprestiges")
    return (
      " " +
      milestonenames[n].charAt(0).toUpperCase() +
      milestonenames[n].substring(1, 6) +
      " " +
      milestonenames[n].slice(6)
    )
  else return " " + milestonenames[n].charAt(0).toUpperCase() + milestonenames[n].slice(1)
}
