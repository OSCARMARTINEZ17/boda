// ================================
// ABRIR INVITACIÓN
// ================================

const openButton = document.getElementById("openInvitation");
const envelope = document.getElementById("envelope");

if (openButton && envelope) {
    openButton.addEventListener("click", () => {

        envelope.style.opacity = "0";

        setTimeout(() => {
            envelope.style.display = "none";
        }, 1000);

    });
}

// ================================
// CONTADOR REGRESIVO
// ================================

// CAMBIA ESTA FECHA POR LA DE TU BODA
const weddingDate = new Date("December 20, 2026 16:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance <= 0) {

        document.getElementById("days").textContent = "0";
        document.getElementById("hours").textContent = "0";
        document.getElementById("minutes").textContent = "0";
        document.getElementById("seconds").textContent = "0";

        return;
    }

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

    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    if (daysElement) daysElement.textContent = days;
    if (hoursElement) hoursElement.textContent = hours;
    if (minutesElement) minutesElement.textContent = minutes;
    if (secondsElement) secondsElement.textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ================================
// CONFIRMAR ASISTENCIA POR WHATSAPP
// ================================

function confirmarWhatsapp() {

    const nombre = document.getElementById("nombre");
    const acompanantes = document.getElementById("acompanantes");

    const nombreValor = nombre ? nombre.value.trim() : "";
    const acompanantesValor = acompanantes
        ? acompanantes.value.trim()
        : "0";

    if (nombreValor === "") {

        alert("Por favor ingresa tu nombre.");

        return;
    }

    const mensaje = `💒 CONFIRMACIÓN DE ASISTENCIA

Nombre: ${nombreValor}

Acompañantes: ${acompanantesValor}

Confirmo mi asistencia a la boda ❤️`;

    const whatsappURL =
        `https://api.whatsapp.com/send?phone=573143783740&text=${encodeURIComponent(mensaje)}`;

    window.open(whatsappURL, "_blank");
}

// ================================
// CORAZONES FLOTANTES
// ================================

function crearCorazon() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random() * window.innerWidth + "px";

    heart.style.fontSize =
        Math.random() * 20 + 15 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(crearCorazon, 1200);

// ================================
// ANIMACIONES AL HACER SCROLL
// ================================

const revealElements =
    document.querySelectorAll(".reveal");

function revealOnScroll() {

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        const visiblePoint =
            window.innerHeight - 100;

        if (elementTop < visiblePoint) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// ================================
// SCROLL SUAVE MENÚ
// ================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target =
            document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});

// ================================
// REPRODUCIR MÚSICA AL ABRIR
// ================================

if (openButton) {

    openButton.addEventListener("click", () => {

        const audio = document.querySelector("audio");

        if (audio) {

            audio.play().catch(() => {
                console.log(
                    "El navegador bloqueó la reproducción automática."
                );
            });

        }

    });

}