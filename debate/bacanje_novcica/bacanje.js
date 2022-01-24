let container = document.querySelector(".container");
let novcic = document.querySelector(".novcic");
let flipBtn = document.querySelector("#baci-novcic");
var rezultat = document.querySelector("h1");

function reset_animation() {
    var el = document.getElementById('logo');
    el.style.animation = 'none';
    el.offsetHeight; /* trigger reflow */
    el.style.animation = null; 
  }

flipBtn.addEventListener("click", () => {
    let i = Math.floor(Math.random()*2);
    console.log(i);
    novcic.style.animation = "none";
    container.style.animation = "none";
    
    if(i){
        setTimeout(function(){
            novcic.style.animation = "spin-glava 1s forwards";
            container.style.animation = "move 1s ease"
            rezultat.style.animation = "fade 1s ease";
            rezultat.innerText = "Glava";
        },100);
    }
    else{
        setTimeout(function(){
            novcic.style.animation = "spin-pismo 1s forwards";
            container.style.animation = "move 1s ease"
            rezultat.style.animation = "fade 1s ease";
            rezultat.innerText = "Pismo";
        },100);
    }
    reset_animation();
})

