let searchbox = document.getElementById("search");
let btnbox = document.getElementById("btn");
let qrImage = document.getElementById("qrImg");
let toggle = document.getElementById("flexSwitchCheckDefault");
let container = document.getElementById("container");
let url = document.getElementById("para");
function qrGenerator() {
    let data = searchbox.value;
    console.log(`entered value is: ${data}`);
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + data;
    url.innerHTML = data;
}

btnbox.addEventListener("click", qrGenerator);

toggle.addEventListener("click", () => {       // for checkbox: ".checked" has to write

    if (toggle.checked) {                      
        container.style.transition = "2s"
        container.style.backgroundColor = "#000000";
        container.style.color = "orange";

    }
    else {
        container.style.transition = "2s"
        container.style.backgroundColor = "rgb(220, 148, 148)";
        container.style.color = "black";
    }
});


