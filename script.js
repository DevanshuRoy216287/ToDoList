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

const windowTask=document.getElementById("task-window");
const container=document.getElementById("container");

function AddTasks(y) {
    if (y==1) {
        windowTask.style.display="block";
        container.style.display="block";
    }

    else {
        windowTask.style.display="none";
        container.style.display="none";
    }
}

let subjectArray = [];
let descriptionArray = [];
let dateArray = [];

function CreateTasks() {

    let subject=document.getElementById("subject").value;
    let description=document.getElementById("description").value;
    let date=document.getElementById("date").value;

    if (subject.trim() === "") {
        alert("Task should contain Subject");
    }

    else {
        windowTask.style.display="none";
        container.style.display="none";

        subjectArray.push(subject);
        descriptionArray.push(description);
        dateArray.push(date);

        let index = subjectArray.length - 1;
        ShowTasks(index);
    }
}

function ShowTasks(x) {
    let taskContainer=document.getElementById("general-tasks");

    let taskButton=document.createElement("button");
    taskButton.textContent=subjectArray[x];
    taskButton.onclick = function () {
        ShowTasksMain(x);
    };
    taskButton.className="task-button";

    taskContainer.appendChild(taskButton);
}
