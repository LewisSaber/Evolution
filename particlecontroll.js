side = {};
side["l"] = getComputedStyle(e.particlecontainer).left;
side["l"] = Number(side["l"].substring(0, side["l"].length - 2));
side["t"] = getComputedStyle(e.particlecontainer).top;
side["t"] = Number(side["t"].substring(0, side["t"].length - 2));
side["r"] = getComputedStyle(e.particlecontainer).width;
side["r"] = Number(side["r"].substring(0, side["r"].length - 2)) + side.l;
side["b"] = getComputedStyle(e.particlecontainer).height;
side["b"] = Number(side["b"].substring(0, side["b"].length - 2)) + side.t;

function drawparticles() {
  for (let i = particlesdrawn.length; i < game.activeparticles; i++) {
    tag = document.createElement("p");
    tag.setAttribute("class", "particle");

    e.body.appendChild(tag);
    vector.push(new Object());
    vector[i]["x"] = 5 - Math.floor(Math.random() * 11);
    vector[i]["y"] = 5 - Math.floor(Math.random() * 11);
    if (Math.abs(vector[i].x) < 1) vector[i].x = 1;
    if (Math.abs(vector[i].y) < 1) vector[i].y = 1;
    particlesdrawn[i] = tag;
    vector[i]["speed"] = (Math.random()*10 + 1)/ 5
    vector[i]["xc"] = getComputedStyle(particlesdrawn[i]).left;
    vector[i]["yc"] = getComputedStyle(particlesdrawn[i]).top;
    vector[i]["yc"] = Number(
      vector[i]["yc"].substring(0, vector[i]["yc"].length - 2)
    );
    vector[i]["xc"] = Number(
      vector[i]["xc"].substring(0, vector[i]["xc"].length - 2)
    );
  }
}
drawparticles();
ballsize = getComputedStyle(particlesdrawn[0]).width;
ballsize = Number(ballsize.substring(0, ballsize.length - 2));
side.r -= ballsize;
side.b -= ballsize * 3;

function hit(n = 1) {
  game.particles +=  n * (game.upgrades[2]+1);
  e.countervalue.innerText = game.particles.formateNumber();
}

function addparticle(n) {
  game.activeparticles += n;
  drawparticles();
}

function particlemove() {
  for (let i = 0; i < game.activeparticles; i++) {
    vector[i].xc += vector[i].x * get_pSpeed() * vector[i].speed;
    vector[i].yc += vector[i].y * get_pSpeed() * vector[i].speed;

    if (vector[i].xc <= side.l) {
      vector[i].x = Math.abs(vector[i].x);

      hit();
    }
    if (vector[i].yc <= side.t) {
      vector[i].y = Math.abs(vector[i].y);
      // vector[i].x += 1
      hit();
    }
    if (vector[i].xc >= side.r) {
      vector[i].x = -1 * Math.abs(vector[i].x);
      vector[i].xc = side.r;
      hit();
    }
    if (vector[i].yc >= side.b) {
      vector[i].y = -1 * Math.abs(vector[i].y);
      vector[i].yc = side.b;
      hit();
    }

    particlesdrawn[i].style.left = vector[i].xc + "px";
    particlesdrawn[i].style.top = vector[i].yc + "px";
  }
}
particlemove();
setInterval(particlemove, 10);
