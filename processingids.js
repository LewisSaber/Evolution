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