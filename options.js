let isoptionson = false;
function options() {
  if (isoptionson) {
    particleinterval = setInterval(particlemove, 10 / game.fancymode);
    e.optionsdiv.style.display = "none";
    e.particlesdiv.style.display = "block";
    isoptionson = false;
    e.tabsdiv.style.display = "block"
    redraw();
  } else {
    clearInterval(particleinterval);
    isoptionson = true;
    e.particlesdiv.style.display = "none";
    e.tabsdiv.style.display = "none"
    e.optionsdiv.style.display = "block";
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

  if (result.toLowerCase() == "yes") {
    reset();
    tick();
    addarrays();
    save()
    options()
    LOADING();
  }
}
LOADING();
