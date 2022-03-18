

var allElements = document.querySelectorAll('*[id]')
var allIds = [];
for (var i = 0, n = allElements.length; i < n; ++i) {
  var el = allElements[i];
  if (el.id) { allIds.push(el.id); }
}
let e = {}
for ( let i = 0, n = allElements.length; i < n; i++)
{
e[allIds[i]] = allElements[i];
}
let upgrades = 4;
let upgradedescription = ["Add Particle ","Increase Particle Speed","Increase Gain Per Hit","Multiply Gain By Hit"]
let costnames = [" Particles"," Particles"," Particles"," Particles"]
let callupgrades = {}

for(let i = 0; i < upgrades; i++)
{
tag = document.createElement("button");
tag.setAttribute("class", "upgrade");
tag.setAttribute("id", "upgrade" + i);
tag.setAttribute("onclick", "callupgrades.buyupgrade"+i+"()")
callupgrades[i] = "buyupgrade"+i+"()"
tag.innerHTML = upgradedescription[i] + '<p class="cost" id="cost'+ i+'">0' + costnames[i] +'</p>' 
e.upgradesdiv.appendChild(tag);
}



 allElements = document.querySelectorAll('*[id]')
 allIds = [];
for (var i = 0, n = allElements.length; i < n; ++i) {
  var el = allElements[i];
  if (el.id) { allIds.push(el.id); }
}
 e = {}
for ( let i = 0, n = allElements.length; i < n; i++)
{
e[allIds[i]] = allElements[i];
}