

let game = {}
let particlesps
let oldtick
let ticktimer

let particlesdrawn = {}
let vector = [];
let windowy = window.innerHeight
let windowx = window.innerWidth
let ballsize
let particlespeed = Math.floor(windowx/1920  * 2) + 1
let particleperhit = 1
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
activeparticles: 1,
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
    } else formatestring = this.valueOf() >> 0
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
      
particlesps = 0
      game.particles += particlesps
e.countervalue.innerText = game.particles.formateNumber();
e.countergain.innerText = "+ " +( particlesps * (1000/game.tickinterval)).formateNumber();
  }
  ticktimer =  setInterval(tick, game.tickinterval)

  function drawparticles()
  {
      for (let i = 0; i < game.activeparticles; i++)
      {
        tag = document.createElement("p")
     tag.setAttribute("class","particle")
    
     e.body.appendChild(tag)
     vector.push(new Object())
     vector[i]["x"] = 1 - Math.floor(Math.random()* 3);
     vector[i]["y"] = 1 - Math.floor(Math.random()* 3) ;
     if (Math.abs(vector[i].x) < 1)
     vector[i].x = 1
     if (Math.abs(vector[i].y) < 1)
     vector[i].y = 1
     particlesdrawn[i] = tag
     vector[i]["xc"] = getComputedStyle(particlesdrawn[i]).left
     vector[i]["yc"] = getComputedStyle(particlesdrawn[i]).top
     vector[i]["yc"] = Number(vector[i]["yc"].substring(0,vector[i]["yc"].length-2))
     vector[i]["xc"] = Number(vector[i]["xc"].substring(0,vector[i]["xc"].length-2))
      }
ballsize = getComputedStyle(particlesdrawn[0]).width
ballsize = Number(ballsize.substring(0,ballsize.length-2))
side.r -= ballsize
side.b -= ballsize * 3

  }
  drawparticles()
function hit()
{
game.particles += particleperhit
e.countervalue.innerText = game.particles.formateNumber()

}
  function particlemove()
  {
for(let i = 0 ;i < game.activeparticles; i++)
{

    vector[i].xc += (vector[i].x*particlespeed)
    vector[i].yc += (vector[i].y*particlespeed)

    if(vector[i].xc <= side.l)
{
vector[i].x= Math.abs(vector[i].x)//
//vector[i].y += 1
hit()

}
    if(vector[i].yc <= side.t)
{vector[i].y= Math.abs(vector[i].y)
   // vector[i].x += 1
hit()
}
if(vector[i].xc >= side.r )
{
    vector[i].x= -1 * Math.abs(vector[i].x)////Math.floor(Math.random()*particlespeed )
    vector[i].xc= side.r
    hit()
}
if(vector[i].yc >= side.b )
{
    vector[i].y= -1 * Math.abs(vector[i].y)// Math.floor(Math.random()* particlespeed)
    vector[i].yc = side.b  
    hit()

}
    
    particlesdrawn[i].style.left = vector[i].xc + "px";
    particlesdrawn[i].style.top = vector[i].yc + "px";


}

  }
  particlemove()
  setInterval(particlemove,10)