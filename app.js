let hourHand = document.querySelector("#hour");
let minuteHand = document.querySelector("#minute");
let secondHand = document.querySelector("#second");

setInterval(() => {
    console.log("Hello");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let hrotation = 30*(hours % 12) +  minutes/2;
    let mrotation = 6*minutes + 0.1*seconds;
    let srotation = 6*seconds;

    hourHand.style.transform = `rotate(${hrotation}deg)`;
    minuteHand.style.transform = `rotate(${mrotation}deg)`;
    secondHand.style.transform = `rotate(${srotation}deg)`;

}, 1000);