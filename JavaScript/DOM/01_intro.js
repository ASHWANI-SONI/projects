let init = () => {
    document.getElementById("mydiv").innerHTML = "<h1 id='ne' style='font-size: 0px;'>ASHWANI SONI</h1>";
    document.getElementById("mydiv").innerHTML += "<button id='btn1' onclick='myMove()'>Submit</button>";
}
init();
let x = 7;
let myMove = () => {
    let pos = 0;
    let ele = document.getElementById("ne");
    let id = null
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        if (pos == 100) {
            clearInterval(id);
            pos = 0;
            // id = setInterval(frame, 5);
        } else {
        pos++; 
        ele.style.fontSize = pos + "px"; 
        // ele.style.left = pos + "vw"; 
    }
}
}
// myMove();