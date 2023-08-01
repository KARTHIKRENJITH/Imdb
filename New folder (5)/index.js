let buttonAll = document.querySelectorAll(".blaa").length;

for (let i = 0; i < buttonAll; i++) {
  document.querySelectorAll(".blaa")[i].addEventListener("click", handleclick);
  
}


function handleclick() {
  var buttoninnerHTML = this.innerHTML;
  this.style.color="white"
  makeSound(buttoninnerHTML);
  buttonAnimation(buttoninnerHTML)
}



function makeSound(key) {
  switch (key) {
    case "i":
      var sound1 = new Audio("r1.mp3");
      sound1.play();

      break;

    case "c":
      var sound2 = new Audio("r2.mp3");
      sound2.play();

      break;

    case "g":
      var sound3 = new Audio("r3.mp3");
      sound3.play();
      break;

    case "a":
      var sound4 = new Audio("r4.mp3");
      sound4.play();
      break;

    
  }
}

document.addEventListener("keypress",function(event){
    console.log(event)
    makeSound(event.key)
    buttonAnimation(event.key)
})




function buttonAnimation(currentkey){
    var activekey = document.querySelector("."+currentkey)
    activekey.classList.add("pressed");

    setTimeout(function(){
        activekey.classList.remove("pressed");
    }, 400);
}