function allowDrop(ev) {
    ev.preventDefault();
}

function allowDrop2(ev) {
    document.getElementById("div2").innerHTML = "";
    //ev.innerHTML = "";
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    //console.log(ev.target.className);
    if (ev.target.getElementsByTagName("div").length > 17) {
        alert("full of area");
        return;
    }
    if (ev.target.className === "drag-area") {
        var el = document.getElementById(data).cloneNode(true);
        el.draggable = false;
        el.className = "drop-div";
        el.style.backgroundColor = Math.floor(Math.random() * 2) ? "#99FF99" : "#CCDDFF";
        ev.target.appendChild(el);
    }
}

function drop2(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    //console.log(ev.target.className);
    if (ev.target.className === "drag-area") {
        var el = document.getElementById(data).cloneNode(true);
        el.draggable = false;
        el.className = "drop-div";
        el.style.backgroundColor = Math.floor(Math.random() * 2) ? "#99FF99" : "#CCDDFF";
        ev.target.appendChild(el);
    }
}