var rand1  = Math.random();
rand1 =rand1*6;
rand1=Math.floor(rand1)+1;


var rand2  = Math.random();
rand2 =rand2*6;
rand2=Math.floor(rand2)+1;
if(rand1===1){
    document.querySelector(".img1").setAttribute("src","dice1.png");
}
if(rand1===2){

    document.querySelector(".img1").setAttribute("src","dice2.png");
}
if(rand1===3){

    document.querySelector(".img1").setAttribute("src","dice3.png");
}
if(rand1===4){

    document.querySelector(".img1").setAttribute("src","dice4.png");
}
if(rand1===5){

    document.querySelector(".img1").setAttribute("src","dice5.png");
}
if(rand1===6){

    document.querySelector(".img1").setAttribute("src","dice6.png");
}


                     //*************SECOND*********/

if(rand2===1){
    document.querySelector(".img2").setAttribute("src","dice1.png");
}
if(rand2===2){

    document.querySelector(".img2").setAttribute("src","dice2.png");
}
if(rand2===3){

    document.querySelector(".img2").setAttribute("src","dice3.png");
}
if(rand2===4){

    document.querySelector(".img2").setAttribute("src","dice4.png");
}
if(rand2===5){

    document.querySelector(".img2").setAttribute("src","dice5.png");
}
if(rand2===6){

    document.querySelector(".img2").setAttribute("src","dice6.png");
}


                              //***********Heding******************/
 if(rand1>rand2){
    document.getElementById("heading").textContent="🚩Player 1 wins"
 }
 if(rand1<rand2){
    document.getElementById("heading").textContent="Player 2 wins🚩"
 }
 if(rand1===rand2){
    document.getElementById("heading").textContent="🚩Draw🚩"
 }