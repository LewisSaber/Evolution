

var allElements = document.querySelectorAll('*[id]')
let e = {}
for ( let i = 0, n = allElements.length; i < n; i++)
{
e[allElements[i].id] = allElements[i];
}
let upgrades = 4;
let upgradedescription = ["Add Particle ","Increase Particle Speed","Increase Gain Per Hit","Multiply Gain By Hit"]
let costnames = ["particles","particles","particles","particles"]
let callupgrades = {}
let upgradelimits = []
for(let i = 0;i < upgrades; i++)
{
upgradelimits[i] = 1000000
}
upgradelimits[0] = 50
upgradelimits[0] = 50





function getCostName(n)
{
  return " " + costnames[n].charAt(0).toUpperCase() + costnames[n].slice(1) 
}
for(let i = 0; i < upgrades; i++)
{
tag = document.createElement("button");
tag.setAttribute("class", "upgrade");
tag.setAttribute("id", "upgrade" + i);
tag.setAttribute("onclick", "buyupgrade("+i+")")
callupgrades[i] = "buyupgrade"+i+"()"
tag.innerHTML = upgradedescription[i] + '<p class="cost" id="cost'+ i+'">0' + getCostName[i] +'</p>' 
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