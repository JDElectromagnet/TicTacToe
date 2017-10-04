//JS code goes here
var turn =false;
function play(event){
  console.log(event);
  event.target.innerHTML= turn? "X":"O";
  turn=!turn;



    if(turn==1){
  event.target.style.backgroundColor="red";
    }
    if(turn==0){
  event.target.style.backgroundColor="Green";
    }

}

// var cell0 = window.document.getElementById("8");
//
// cell0.addEventListener('click',play);
