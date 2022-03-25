let isoptionson = false;
function options() {
  if (isoptionson) {
   particleinterval = setInterval(particlemove, 10 / game.fancymode);
   e.optionsdiv.style.display ="none"
    openTab("particles",0)

    isoptionson = false;
    e.tabsdiv.style.display = "block"
    redraw();
  } else {
    clearInterval(particleinterval);
    isoptionson = true;
    e.tabsdiv.style.display = "none"
    
    e[currenttab+"div"].style.display = "none"
    e.optionsdiv.style.display ="block"
  }
}
function fancymode() {
  if (game.fancymode == 1) {
    game.fancymode = 2;
    e.fancymode.innerHTML = " Smooth Particles:<br>ON";
  } else {
    game.fancymode = 1;
    e.fancymode.innerHTML = " Smooth Particles:<br>OFF";
  }
}
function HardReset() {
  let result = prompt("Are you sure?!?(yes/no)");
if (result != null)
{
  if (result.toLowerCase() == "yes") {
    reset()
    addarrays()
  
    save()
    options()
    LOADING();
    
  }
}
}
LOADING();
