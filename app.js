/* =====================================
   LUMINA MAIN CONTROLLER
===================================== */


window.onload = () => {


let progress = 0;

let loading = document.getElementById("loading");

let bar = document.getElementById("loadingProgress");

let loadingText = document.getElementById("loadingText");



let messages = [

"Collecting beautiful moments...",

"Preparing your surprise...",

"Adding a little magic...",

"Almost ready ❤️"

];



let messageIndex = 0;



let loader = setInterval(()=>{


progress += 25;


bar.style.width = progress+"%";


loadingText.innerText =
messages[messageIndex];


messageIndex++;



if(progress >= 100){


clearInterval(loader);


setTimeout(()=>{


loading.classList.add("fadeOut");


setTimeout(()=>{


loading.style.display="none";


showScene("giftScene");


},1000);



},700);



}


},700);



/* Load Theme */


document.body.classList.add(
"theme-"+LUMINA.theme
);



};



function showScene(id){


document.querySelectorAll(".scene")
.forEach(scene=>{

scene.classList.add("hidden");

});



document.getElementById(id)
.classList.remove("hidden");


}




/* Gift Opening */


document
.getElementById("openGift")
.addEventListener("click",()=>{


let gift =
document.querySelector(".gift");


gift.classList.add("opening");



setTimeout(()=>{

startMusic();

showScene("birthdayScene");


loadBirthday();


},1200);



});






function loadBirthday(){



document.getElementById(
"birthdayTitle"
).innerText =
LUMINA.birthdayTitle;



document.getElementById(
"personName"
).innerText =
LUMINA.name;



typeText(

document.getElementById(
"birthdayWish"
),

LUMINA.birthdayWish

);



setTimeout(()=>{


showScene("memoryScene");


startMemoryMovie();



},9000);



}






function typeText(element,text){



element.innerHTML="";


let index=0;



let typing=setInterval(()=>{


element.innerHTML += text[index];


index++;



if(index>=text.length){

clearInterval(typing);

}



},40);



}