const hour = document.getElementById("hour");
const sky = document.getElementById("sky");

let date = new Date()
var hours = date.getHours();
hour.innerHTML = `agora são ${hours} horas`

if(hours >= 6 && hours < 12){
    sky.src = "assets/manha.png"
    sky.alt = "Manhã";
    document.body.style.background = '#FC994F'
    console.log("Bom dia")
} else if (hours >=12 && hours < 18){
    sky.src = "assets/tarde.png"
    sky.alt = "Tarde";
    document.body.style.background = '#8DB9CD'
    console.log("Boa tarde")
} else {
    sky.src = "assets/noite.png"
    sky.alt = "Noite";
    document.body.style.background = '#002850'
    console.log("Boa noite")
}
