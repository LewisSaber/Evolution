var allElements = document.querySelectorAll("*[id]")
let e = {}
for (let i = 0, n = allElements.length; i < n; i++) {
  e[allElements[i].id] = allElements[i]
}

let upgradedescription = [
  "Add Particle ",
  "Increase Particle Speed",
  "Increase Gain Per Hit",
  "Multiply Gain By Hit",
  "Increase Power Per Hit",
  "Square Power Gain",
  "Log8(Particles) Multiply Power",
  "Log1000(Power) Multiply Particles",
  "Unlock Leptons",
  "Unlock High Quarks",
  "Unlock Positrons",
  "Unlock Bosons",
  "Unlock Higgs Boson",
]
let eparticledescription = [ "to primorial particles gain base ", " primorial particles gain "," primorial particles gain ", "to Up Quark effect", "to Charm Quark effect" ,"to Top Quark effect"," to base power gain base", "Power gain", "Power Gain","Particles Per Sorting", "to Elemental Particles Base Gain","Elemental Particles"]
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
  
]
let counternames = ["Primorial particles", "Elemental particles"]
let particlename = ["Up Quark", "Charm Quark","Top Quark","Down Quark","Strange Quark","Bottom Quark","Electron","Moun","Tau","Positron","Gluon","Proton","Higgs Boson"]
let eparticleseffectsymbols = ["+ ","x ","^ ","x ","x ","x ","+ ","x ", "^ "," + "," + "," x " ]
let prestigelist = { elementalparticles: true }

let upgradelimits = []

for (let i = 0; i < upgrades; i++) {
  upgradelimits[i] = 1000000
}
upgradelimits[0] = 50
upgradelimits[1] = 50
upgradelimits[5] = 6

for (let i = 6; i < 13; i++) {
  upgradelimits[i] = 1
}

function getCostName(n) {
  if(costnames[n] == "elementalparticles")
  return " " + costnames[n].charAt(0).toUpperCase() + costnames[n].substring(1,9) + " "+ costnames[n].slice(9)
  else

  return " " + costnames[n].charAt(0).toUpperCase() + costnames[n].slice(1)
}
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
  tag.innerHTML = particlename[i] +
    '<p id="eparticlecontainer' + i +
    '" class="eparticlecontainer"> 0 </p>  '+ eparticleseffectsymbols[i] +
'<p id="eparticlemultiplier' +
    i +
    '" class="eparticledescription"> 0 </p> '+
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
