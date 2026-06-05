// =========================
// CONTADOR REGRESIVO
// =========================

const weddingDate = new Date(
    "December 20, 2026 16:00:00"
).getTime();

setInterval(() => {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}, 1000);


// =========================
// FORMULARIO RSVP
// =========================

document.getElementById("rsvpForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert("¡Gracias por confirmar tu asistencia!");

    this.reset();

});


// =========================
// CORAZONES FLOTANTES
// =========================

setInterval(() => {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 20 + 20 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 5000);

}, 500);