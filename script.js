

let game = {}

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
  setInterval(save, 5000)
  function load() {
    reset()
    let loadgame = JSON.parse(localStorage.getItem("theEvolutionSave"))
    if (loadgame != null) {
      loadGame(loadgame)
    }
    //Keys,generators,upgrades,crates,crafts,upgrade2,upgrade3
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

  function tick()
  {


  }
   setInterval(save, game.tickinterval)