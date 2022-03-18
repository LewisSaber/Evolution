

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
let upgrades = 1;
let upgradedescription = ["Add Particle "]
let costnames = [" Particles"]

for(let i = 0; i < upgrades; i++)
{
tag = document.createElement("button");
tag.setAttribute("class", "upgrade");
tag.setAttribute("id", "upgrade" + i);
tag.setAttribute("onclick", "buyupgrade"+i+"()")

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