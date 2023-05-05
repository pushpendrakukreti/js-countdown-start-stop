const body = document.getElementById("body").style;
const h1 = document.getElementById("h1").style;
const pause = document.getElementsByTagName("button")[0].style;
const resume = document.getElementsByTagName("button")[1].style;
const clock = document.getElementById("clockdiv").style;

body.textAlign = "center";

h1.backgroundColor = "darkred";
h1.color = "white";
h1.fontFamily = "Arial";
h1.padding = "1%";

pause.backgroundColor = "darkred";
pause.color = "white";
pause.fontSize = "150%";
pause.width = "10vw";
pause.height = "5vh";
pause.cursor = "pointer";

document.getElementsByTagName("button")[0].addEventListener("click", function () {
    pause.fontSize = "140%";
});

document.getElementsByTagName("button")[0].addEventListener("mouseout", function () {
    pause.fontSize = "150%";
});


resume.backgroundColor = "darkgreen";
resume.color = "white";
resume.fontSize = "150%";
resume.width = "10vw";
resume.height = "5vh";
resume.cursor = "pointer";

document.getElementsByTagName("button")[1].addEventListener("click", function () {
    resume.fontSize = "140%";
});

document.getElementsByTagName("button")[1].addEventListener("mouseout", function () {
    resume.fontSize = "150%";
});

clock.fontSize = "150%";
clock.marginBottom = "2%";