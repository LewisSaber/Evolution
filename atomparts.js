function buildAtoms() {
  let distance
  for (let i = 0; i < totalatomcomponents; i++) {
    distance = Math.floor(Math.random() * 3) + 6
    atomcomponents.push(new Object())
    if (i == 0) {
      atomcomponents[i]["x"] = 35
      atomcomponents[i]["y"] = 40
    }
    if (i > 0 && i < 8) {
      atomcomponents[i].x =
        Math.cos(70 * (i - 1)) * distance + atomcomponents[0].x
      atomcomponents[i].y =
        Math.sin(70 * (i - 1)) * distance + atomcomponents[0].y
    }
    if (i > 7) {
      atomcomponents[i].x =
        Math.cos(60 * (i - 1)) * (distance + 6) + atomcomponents[0].x
      atomcomponents[i].y =
        Math.sin(60 * (i - 1)) * (distance + 6) + atomcomponents[0].y
    }

    e["atomcomponent" + i].style.top = atomcomponents[i].x + "%"
    e["atomcomponent" + i].style.left = atomcomponents[i].y + "%"
    // e["atomcomponent"+i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
    e["atomcomponent" + i].style.zIndex = Math.floor(Math.random() * 100)
  }
  e["atomcomponent" + 0].style.zIndex = 100
}
let addedprotons = 0
let addedneutrons = 0
function addAtomComponent(r) {
  let k = game.addedprotons + game.addedneutrons
  if (
    game.protons > 0 &&
    game.addedprotons < 3 &&
    r == "proton"
  ) {
    if (k <= totalatomcomponents) {
      game.addedprotons++
      game.protons = game.protons.sub(1)
      e["atomcomponent" + k].style.visibility = "visible"
      e["atomcomponent" + k].style.backgroundColor = "#d12013"
    }
  }
  if (
     game.neutrons > 0 &&
    game.addedneutrons < 5 &&
    r == "neutron"
  ) {
    if (k <= totalatomcomponents) {
      game.addedneutrons++
      game.neutrons = game.neutrons.sub(1)
      e["atomcomponent" + k].style.visibility = "visible"
      e["atomcomponent" + k].style.backgroundColor = "#edd077"
    }
  }
}
function loadAtomsDisplay() {
  buildAtoms()
  for (let i = 0; i < game.addedprotons + game.addedneutrons; i++) {
    if (i < game.addedprotons) {
      e["atomcomponent" + i].style.backgroundColor = "#d12013"
      e["atomcomponent" + i].style.visibility = "visible"
    } else {
      e["atomcomponent" + i].style.backgroundColor = "#edd077"
      e["atomcomponent" + i].style.visibility = "visible"
    }
  }
}
function makeAtom()
{
if(game.addedprotons == 1 && game.addedneutrons == 0)
{
    notification("Made Hydrogen Atom")
    atoms[0] = atoms[0].plus(1)
}
else
if(game.addedprotons == 1 && game.addedneutrons == 1)
{
    notification("Made Deuterium Atom")
    atoms[1] = atoms[1].plus(1)
}
else
if(game.addedprotons == 1 && game.addedneutrons == 2)
{
    notification("Made Tritium Atom")
    atoms[2] = atoms[2].plus(1)
}
else
if(game.addedprotons == 2 && game.addedneutrons == 1)
{
    notification("Made Helium-3 Atom")
    atoms[3] = atoms[3].plus(1)
}
else
if(game.addedprotons == 2 && game.addedneutrons == 2)
{
    notification("Made Helium-4 Atom")
    atoms[4] = atoms[4].plus(1)
}
else
notification("No such atom")
for(let i = 0; i < totalatomcomponents; i++)
e["atomcomponent" + i].style.visibility = "hidden"
game.addedneutrons = 0
game.addedprotons = 0


}