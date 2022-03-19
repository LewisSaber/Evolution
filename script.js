let game = {};
let particlesps;
let oldtick;
let ticktimer;
let eparticles = [];
let particlesdrawn = [];
let vector = [];
let windowy = 1280//window.innerHeight;
let windowx = 1024//window.innerWidth;
let ballsize;
let basicparticlespeed = (Math.floor((windowx / 1920) * 2) + 1) / 10;
let particleperhit = 1;

BigInt.prototype.toJSON = function() { return this.toString() }


function resetupgrades() {
  for (let i = 0; i < upgrades; i++) game.upgrades[i] = 0;
}
function addarrays() {
  for (let i = game.upgrades.length; i < upgrades; i++) game.upgrades[i] = 0;
  for (let i = game.eparticles.length; i < 12; i++) game.eparticles[i] = "0";
  for (let i = eparticles.length; i < 12; i++) eparticles[i] = "0";


}
function reset() {
  game = {
    particles: BigInt(0),
    tickinterval: 1000,
    activeparticles: 1,
    upgrades: [],
    power: BigInt(0),
    eparticles: [],
    fancymode: 1,

  };
  resetupgrades();
  
}
reset();

function save() {
  for (let i = eparticles.length; i < 12; i++) game.eparticles[i] = eparticles[i].toString();
  localStorage.setItem("theEvolutionSave", JSON.stringify(game));
}

function load() {
  reset();
  let loadgame = JSON.parse(localStorage.getItem("theEvolutionSave"));
  if (loadgame != null) {
    loadGame(loadgame);
  }
}
load();

function loadGame(loadgame) {
  //Sets each variable in 'game' to the equivalent variable in 'loadgame' (the saved file)
  for (i = 0; i < Object.keys(loadgame).length; i++) {
    if (loadgame[Object.keys(loadgame)[i]] != "undefined") {
      if (Object.keys(loadgame)[i] == "upgrade") {
        for (j = 0; j < Object.keys(game.upgrade).length; j++) {
          if (loadgame.upgrade[Object.keys(game.upgrade)[j]] == null) {
            loadgame.upgrade[Object.keys(game.upgrade)[j]] =
              game.upgrade[Object.keys(game.upgrade)[j]];
          } else {
            console.log("loading");
            game.upgrade[Object.keys(game.upgrade)[j]] =
              loadgame.upgrade[Object.keys(game.upgrade)[j]];
          }
        }
      } else if (typeof loadgame[Object.keys(loadgame)[i]] == "string") {
        
        game[Object.keys(loadgame)[i]] = BigInt(loadgame[Object.keys(loadgame)[i]]);
      } else {
        game[Object.keys(game)[i]] = loadgame[Object.keys(loadgame)[i]];
      }
    }
    
  }
 
}
for(let i = 0; i <game.eparticles.length;i++)
  {
   eparticles[i] = BigInt(game.eparticles[i])
  } 
setInterval(save, 1000);

addarrays();

BigInt.prototype.formateNumber = function (max = 5) {
  formatestring = this.toString()
  if (formatestring.length >= max) {
    formatestring = formatestring[0] + "." + formatestring[1] + "e" +  (formatestring.length-1);
  } 
  return formatestring;
};
Number.prototype.formateNumber = function (max = 1e5) {
  if (this.valueOf() >= max) {
    formatestring = this.valueOf().toExponential(1).replace("+", "");
  } else formatestring = this.valueOf() >> 0;
  return formatestring;
};
function get_pSpeed(){
  return basicparticlespeed * (game.upgrades[1]+1)
}
function tick() {
  if (game.tickinterval != oldtick) {
    clearInterval(ticktimer);
    ticktimer = setInterval(tick, game.tickinterval);
    oldtick = game.tickinterval;
  }

  particlesps = 0;
//  game.particles += particlesps;
  e.countervalue.innerText = game.particles.formateNumber();
  //e.countergain.innerText ="+ " + (particlesps * (1000 / game.tickinterval)).formateNumber();
}
ticktimer = setInterval(tick, game.tickinterval);
function reveal()
{}