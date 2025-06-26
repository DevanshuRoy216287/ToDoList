const changingTexts=["Add New Tasks","View Task List","Have workspaces"];
const MainText=document.getElementById("main-text");
let random=0;

setInterval(() => {
    MainText.style.opacity=0;

    setTimeout(() => {
        random=(random+1)%changingTexts.length;
        MainText.innerText=changingTexts[random];
        MainText.style.opacity=1;
    }, 1000);
}, 3000);
