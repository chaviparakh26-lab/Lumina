/* =====================================
   LUMINA MEMORY MOVIE ENGINE
===================================== */


let currentMemory = 1;


function startMemoryMovie(){
    
document.getElementById("memoryNextBtn").style.display = "none";


currentMemory = 1;


showMemory();


}



function showMemory() {

    let image = document.getElementById("memoryImage");

    const photos = [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "6.jpg",
        "7.jpg",
        "8.jpg",
        "9.jpg",
        "10.jpg",
        "11.jpg",
        "12.jpg",
        "13.jpg",
        "14.jpg",
        "15.jpg",
        "16.jpg",
        "17.jpg",
        "18.jpg",
        "19.jpg",
        "20.jpg",
        "21.jpg",
        "22.jpg",
        "23.jpg",
        "24.jpg"
    ];

    if (currentMemory > photos.length) {
        finishMemoryMovie();
        showScene("memoryScene");

        document.getElementById("memoryNextBtn").style.display = "block";
    }

    image.classList.remove("memoryZoom");
    image.style.opacity = 0;

    setTimeout(() => {
        
        const animations = [
    "fromLeft",
    "fromRight",
    "fromTop",
    "fromBottom",
    "zoomIn",
    "rotateIn"
];

image.style.animation = "none";
void image.offsetWidth;

const randomAnimation =
animations[Math.floor(Math.random() * animations.length)];

image.style.animation =
`${randomAnimation} 1.2s ease forwards`;

        image.src = photos[currentMemory - 1];

        image.onload = () => {
            image.style.opacity = 1;
            image.classList.add("memoryZoom");
        };

        currentMemory++;

    }, 800);

    if (currentMemory <= photos.length) {
        setTimeout(() => {
            showMemory();
    }, LUMINA.photoDuration);
}   else {
        finishMemoryMovie();
}
}




function finishMemoryMovie() {

    document.getElementById("memoryNextBtn").style.display = "block";

}




function openLetter() {

    let paper = document.getElementById("letterPaper");
    let text = document.getElementById("letterText");

    text.innerText = LUMINA.letter;

    paper.style.display = "block";
    paper.classList.add("letterShow");

    document.getElementById("letterNextBtn").style.display = "block";

}


function loadFinal(){


document.getElementById(
"finalMessage"
).innerText =
LUMINA.finalMessage;



document.getElementById(
"signature"
).innerText =
LUMINA.signature;


}
document.getElementById("memoryNextBtn").addEventListener("click", () => {

    document.getElementById("memoryNextBtn").style.display = "none";

    showScene("letterScene");

    openLetter();

});

document.getElementById("letterNextBtn").addEventListener("click", () => {

    document.getElementById("letterNextBtn").style.display = "none";

    showScene("finalScene");

    loadFinal();

});