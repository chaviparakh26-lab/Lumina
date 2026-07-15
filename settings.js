/* =====================================
   LUMINA PHONE EDITOR
===================================== */


document.getElementById("nameInput").value =
LUMINA.name;



document.getElementById("wishInput").value =
LUMINA.birthdayWish;



document.getElementById("letterInput").value =
LUMINA.letter;



document.getElementById("themeInput").value =
LUMINA.theme;




document
.getElementById("save")
.addEventListener("click",()=>{


let newConfig = `

const LUMINA = {

name: "${document.getElementById("nameInput").value}",

birthdayTitle: "Happy Birthday!",

birthdayWish:
\`${document.getElementById("wishInput").value}\`,

letter:
\`${document.getElementById("letterInput").value}\`,

finalMessage:
"Made with ❤️ especially for you",

signature:
"— From Chavi",

theme:
"${document.getElementById("themeInput").value}",

music:
"assets/music/birthday.mp3",

totalPhotos:25,

photoDuration:5000,

fadeDuration:1200,

fireworks:true,

hearts:true,

sparkles:true

};

`;



let file =
new Blob(
[newConfig],
{
type:"text/javascript"
}
);



let link =
document.createElement("a");


link.href =
URL.createObjectURL(file);


link.download =
"config.js";


link.click();


});