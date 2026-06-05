// =====================================
// SOBRE DE BIENVENIDA
// =====================================

const openInvitation =
    document.getElementById("openInvitation");

const envelope =
    document.getElementById("envelope");

if (openInvitation && envelope) {

    openInvitation.addEventListener("click", () => {

        envelope.style.opacity = "0";

        setTimeout(() => {

            envelope.style.display = "none";

        }, 1000);

        // Reproducir audio (si existe)
        const audio =
            document.querySelector("audio");

        if (audio) {

            audio.play().catch(() => {
                console.log("Autoplay bloqueado por el navegador");
            });

        }

    });

}

// =====================================
// CONTADOR REGRESIVO
// =====================================

// CAMBIA ESTA FECHA POR LA REAL

const weddingDate =
    new Date("December 20, 2026 16:00:00").getTime();

function updateCountdown() {

    const now =
        new Date().getTime();

    const distance =
        weddingDate - now;

    const days =
        Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours =
        Math.floor((distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60));

    const minutes =
        Math.floor((distance % (1000 * 60 * 60)) /
        (1000 * 60));

    const seconds =
        Math.floor((distance % (1000 * 60)) /
        1000);

    const daysEl =
        document.getElementById("days");

    const hoursEl =
        document.getElementById("hours");

    const minutesEl =
        document.getElementById("minutes");

    const secondsEl =
        document.getElementById("seconds");

    if (
        !daysEl ||
        !hoursEl ||
        !minutesEl ||
        !secondsEl
    ) return;

    if (distance <= 0) {

        daysEl.textContent = 0;
        hoursEl.textContent = 0;
        minutesEl.textContent = 0;
        secondsEl.textContent = 0;

        return;
    }

    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;

}

updateCountdown();

setInterval(updateCountdown, 1000);

// =====================================
// CONFIRMACIÓN WHATSAPP
// =====================================

function confirmarWhatsapp() {

    const nombre =
        document.getElementById("nombre").value.trim();

    if (nombre === "") {

        alert("Por favor ingresa tu nombre.");
        return;

    }

    const asistencia =
        document.querySelector('input[name="asistencia"]:checked');

    if (!asistencia) {

        alert("Selecciona una opción de asistencia.");
        return;

    }

    let mensaje = "";

    if (asistencia.value === "si") {

        mensaje =
`💒 CONFIRMACIÓN DE ASISTENCIA

Nombre: ${nombre}

Asistencia: SÍ

Nos vemos en la boda ❤️`;

    } else {

        mensaje =
`💒 CONFIRMACIÓN DE ASISTENCIA

Nombre: ${nombre}

Asistencia: NO

Lamentamos no poder contar contigo en este día especial.`;

    }

    const url =
        `https://api.whatsapp.com/send?phone=573143783740&text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");

}

// =====================================
// CORAZONES FLOTANTES
// =====================================

function crearCorazon() {

    const heart =
        document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random() * window.innerWidth + "px";

    heart.style.fontSize =
        (Math.random() * 20 + 15) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}

setInterval(crearCorazon, 1200);

// =====================================
// ANIMACIÓN SCROLL
// =====================================

const elements =
    document.querySelectorAll(".reveal");

function revealOnScroll() {

    elements.forEach(el => {

        const top =
            el.getBoundingClientRect().top;

        const visible =
            window.innerHeight - 100;

        if (top < visible) {

            el.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// =====================================
// SCROLL SUAVE MENÚ
// =====================================

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