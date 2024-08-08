let score = 0;
cross = true
audio = new Audio('music.mp3')
setTimeout(() => {
  audio.play()
}, 1000)
document.onkeydown = function (e) {
  console.log(e.keyCode)
  if (e.keyCode == 32) {
    score = 0
    updatescore(score)
    daino = document.getElementsByClassName("dainoc")[0]
    daino.classList.add("jump")
    setTimeout(() => {
      daino.classList.remove("jump")
    }, 700)
    dragon = document.getElementById("dragon")
    gameover = document.getElementsByClassName("gameover")[0]
    dragon.classList.add("dragonani")
    gameover.style.display = 'none'

  }
  if (e.keyCode == 39) {

    daino = document.getElementsByClassName("dainoc")[0]
    dl = parseInt(window.getComputedStyle(daino, null).getPropertyValue("left"))
    daino.style.left = dl + 100 + "px"
    console.log(dl)
  }
  if (e.keyCode == 37) {
    daino = document.getElementsByClassName("dainoc")[0]
    dr = parseInt(window.getComputedStyle(daino, null).getPropertyValue("left"))
    daino.style.left = dr - 100 + "px"
    console.log(dr)
  }
  // console.log("The ke is:" + e.keyCode)
  if (e.keyCode == 38) {
    daino = document.getElementsByClassName("dainoc")[0]
    daino.classList.add("jump")
    setTimeout(() => {
      daino.classList.remove("jump")
    }, 700)
  }

  setInterval(() => {
    daino = document.getElementsByClassName("dainoc")[0]
    // console.log(daino)
    gameover = document.getElementsByClassName("gameover")[0]
    // console.log(gameover)
    dragon = document.getElementById("dragon")
    // console.log(dragon)
    dx = Number.parseInt(window.getComputedStyle(daino, null).getPropertyValue("left"))
    dy = Number.parseInt(window.getComputedStyle(daino, null).getPropertyValue("top"))
    drx = Number.parseInt(window.getComputedStyle(dragon, null).getPropertyValue("left"))
    dry = Number.parseInt(window.getComputedStyle(dragon, null).getPropertyValue("top"))
    dragonx = Math.abs(dx - drx)
    dragony = Math.abs(dy - dry)
    if (dragonx < 105 && dragony < 100) {
      dragon.classList.remove("dragonani")
      gameover.style.display = 'block'
      gameoverm = new Audio('gameover.mp3')
      gameoverm.play()
      audio.pause()
      setTimeout(()=>{
        gameoverm.pause()
      },1000)

    }
    else if (dragonx < 120 && cross) {
      score += 1;

      cross = false;
      console.log("hbbhbhjbbj")
      updatescore(score)
      setTimeout(() => {
        cross = true
      }, 1000)
    
      
    }
  }, 100)
}
function updatescore(value) {
  gamescore = document.getElementsByClassName("score")[0]
  gamescore.innerHTML = `Your score:${value}`

}
