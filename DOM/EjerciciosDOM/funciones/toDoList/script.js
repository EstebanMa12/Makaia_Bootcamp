const nombre = document.getElementById('nombre');
const listContainer= document.getElementById("tareas")


function addTask() {
    if(nombre.value===""){
        alert("You must write something");
    }else{
        let li=document.createElement("li");
        li.innerHTML=nombre.value;
        listContainer.appendChild(li);
    }
    
}


array=["Avanzatech","Xvxxxxxxxx","X.a.xxxxxx","X..n.xxxxx","Xvxxz.xxxx","Xvxxxa.xxx","Xvxxxxt.xx","Xvxxxxxe.x","Xvxxxxxxc.","Xvxxxxxxxh"]