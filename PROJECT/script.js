const inputbox=document.getElementById("input-box");
const Listcontainer=document.getElementById("List-container")

function addTask()
{
    if(inputbox.value===''){
        alert("You must write something")
        savedata()
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        Listcontainer.appendChild(li);
        let span=document.createElement("span")
        span.innerHTML="\u00d7";
        li.appendChild(span);
        savedata()
    }
    inputbox.value="";
    savedata()

}
Listcontainer.addEventListener("click",function(e){

    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");

    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
},false);

function savedata(){
    localStorage.setItem("data",Listcontainer.innerHTML);
}

function showTask(){
    Listcontainer.innerHTML=localStorage.getItem("data");


}
showTask()