/* =====================================
   LUMINA MAGICAL EFFECTS
===================================== */


/* HEARTS ❤️ */

function createHeart(){

    let heart = document.createElement("div");

    heart.className = "floating-heart";

    heart.innerHTML = "❤️";


    heart.style.left =
    Math.random()*100 + "vw";


    heart.style.animationDuration =
    (5 + Math.random()*5) + "s";


    document.body.appendChild(heart);



    setTimeout(()=>{

        heart.remove();

    },10000);

}





/* SPARKLES ✨ */

function createSparkle(){

    let sparkle =
    document.createElement("div");


    sparkle.className =
    "sparkle";


    sparkle.style.left =
    Math.random()*100 + "vw";


    sparkle.style.top =
    Math.random()*100 + "vh";


    document.body.appendChild(sparkle);



    setTimeout(()=>{

        sparkle.remove();

    },2500);

}





/* BALLOONS 🎈 */

function createBalloon(){


    let balloon =
    document.createElement("div");


    balloon.className =
    "balloon";


    balloon.style.left =
    Math.random()*100 + "vw";


    document.body.appendChild(balloon);



    setTimeout(()=>{

        balloon.remove();

    },0000);

}





/* FIREWORKS 🎆 */

function fireworks(){


    for(let i=0;i<40;i++){


        let particle =
        document.createElement("div");


        particle.className =
        "firework";


        particle.style.left =
        "50vw";


        particle.style.top =
        "40vh";



        document.body.appendChild(particle);



        let x =
        (Math.random()-0.5)*500;


        let y =
        (Math.random()-0.5)*500;



        particle.animate(

        [

        {
        transform:"translate(0,0)",
        opacity:1
        },

        {
        transform:
        `translate(${x}px,${y}px)`,
        opacity:0
        }

        ],

        {

        duration:1500,

        easing:"ease-out"

        });



        setTimeout(()=>{

            particle.remove();

        },1500);



    }

}





/* START EFFECTS */


if(LUMINA.hearts){

setInterval(
createHeart,
1800
);

}



if(LUMINA.sparkles){

setInterval(
createSparkle,
700
);

}



setInterval(
createBalloon,
8000
);




/* Final fireworks trigger */

document.addEventListener(
"click",
()=>{

if(
!document
.getElementById("finalScene")
.classList.contains("hidden")
){

fireworks();

}

}
);