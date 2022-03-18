

let game = {}
let particlesps
let oldtick
let ticktimer
let nparticlesdrawn = 100
let particlesdrawn = {}
let vector = [];
let windowy = window.screen.availHeight 
let windowx = window.screen.availWidth 
let ballsize
side = {}
side["l"] = getComputedStyle(e.particlecontainer).left
side["l"] = Number(side["l"].substring(0,side["l"].length -2))
side["t"] = getComputedStyle(e.particlecontainer).top
side["t"] = Number(side["t"].substring(0,side["t"].length -2))
side["r"] = getComputedStyle(e.particlecontainer).width
side["r"] = Number(side["r"].substring(0,side["r"].length -2)) + side.l
side["b"] = getComputedStyle(e.particlecontainer).height
side["b"] = Number(side["b"].substring(0,side["b"].length -2)) + side.t
function reset()
{
     game = {
particles: 0,
tickinterval: 1000,

    }
}
reset();

function save() {
    localStorage.setItem("theEvolutionSave", JSON.stringify(game))
  }
  setInterval(save, 1000)
  function load() {
    reset()
    let loadgame = JSON.parse(localStorage.getItem("theEvolutionSave"))
    if (loadgame != null) {
      loadGame(loadgame)
    }
   
  }
  load()
  
  
  function loadGame(loadgame) {
    //Sets each variable in 'game' to the equivalent variable in 'loadgame' (the saved file)
    for (i = 0; i < Object.keys(loadgame).length; i++) {
      if (loadgame[Object.keys(loadgame)[i]] != "undefined") {
        if (Object.keys(loadgame)[i] == "upgrade") {
          for (j = 0; j < Object.keys(game.upgrade).length; j++) {
            if (loadgame.upgrade[Object.keys(game.upgrade)[j]] == null) {
              loadgame.upgrade[Object.keys(game.upgrade)[j]] =
                game.upgrade[Object.keys(game.upgrade)[j]]
            } else {
              console.log("loading")
              game.upgrade[Object.keys(game.upgrade)[j]] =
                loadgame.upgrade[Object.keys(game.upgrade)[j]]
            }
          }
        } else if (typeof loadgame[Object.keys(loadgame)[i]] == "string") {
          game[Object.keys(loadgame)[i]] = loadgame[Object.keys(loadgame)[i]]
        } else {
          game[Object.keys(game)[i]] = loadgame[Object.keys(loadgame)[i]]
        }
      }
    }
  
  }
  Number.prototype.formateNumber = function (max = 1e5) {
    if (this.valueOf() >= max) {
      formatestring = this.valueOf().toExponential(1).replace("+", "")
    } else formatestring = this.valueOf().toFixed(1)
    return formatestring
  }

  function tick()
  {
      if(game.tickinterval != oldtick)
      {
        clearInterval(ticktimer)
        ticktimer =  setInterval(tick, game.tickinterval)
        oldtick = game.tickinterval
      }
      
particlesps = 0.1
      game.particles += particlesps
e.countervalue.innerText = game.particles.formateNumber();
e.countergain.innerText = "+ " +( particlesps * (1000/game.tickinterval)).formateNumber();
  }
  ticktimer =  setInterval(tick, game.tickinterval)

  function drawparticles()
  {
      for (let i = 0; i < nparticlesdrawn; i++)
      {
        tag = document.createElement("p")
     tag.setAttribute("class","particle")
    
     e.body.appendChild(tag)
     vector.push(new Object())
     vector[i]["x"] = 10 - Math.floor(Math.random()* 21);
     vector[i]["y"] = 10 - Math.floor(Math.random()* 21);
     particlesdrawn[i] = tag
     vector[i]["xc"] = getComputedStyle(particlesdrawn[i]).left
     vector[i]["yc"] = getComputedStyle(particlesdrawn[i]).top
     vector[i]["yc"] = Number(vector[i]["yc"].substring(0,vector[i]["yc"].length-2))
     vector[i]["xc"] = Number(vector[i]["xc"].substring(0,vector[i]["xc"].length-2))
      }
ballsize = getComputedStyle(particlesdrawn[i]).width
ballsize = Number(ballsize.substring(0,ballsize.length-2))
side.r -= ballsize
side.b -= ballsize * 3

  }
  drawparticles()
  function particlerandom(p )
  {
   let r = 1 - Math.floor(Math.random()* 3);
   return r;
  }
  function particlemove()
  {
for(let i = 0 ;i < nparticlesdrawn; i++)
{

    vector[i].xc += vector[i].x
    vector[i].yc += vector[i].y
    if(vector[i].xc <= side.l)
{
vector[i].x= Math.floor(Math.random()* 10)
vector[i].y += 1
}
    if(vector[i].yc <= side.t)
{vector[i].y= Math.floor(Math.random()* 10)
    vector[i].x += 1

}
if(vector[i].xc >= side.r )
{
    vector[i].x= - 1 * Math.floor(Math.random()* 10)
    vector[i].xc= side.r
}
if(vector[i].yc >= side.b )
{
    vector[i].y= - 1 * Math.floor(Math.random()* 10)
    vector[i].yc = side.b  
    console.log(vector[i].yc + " " + side.b ) 
}
    
    particlesdrawn[i].style.left = vector[i].xc + "px";
    particlesdrawn[i].style.top = vector[i].yc + "px";


}

  }
  particlemove()
  setInterval(particlemove,10)