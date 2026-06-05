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

        const audio =
            document.querySelector("audio");

        if (audio) {

            audio.play().catch(() => {

                console.log(
                    "El navegador bloqueó la reproducción automática."
                );

            });

        }

    });

}

// =====================================
// CUENTA REGRESIVA
// =====================================

// CAMBIA ESTA FECHA POR LA REAL

const weddingDate = new Date(
    "December 20, 2026 16:00:00"
).getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );

    const hours =
        Math.floor(
            (distance %
                (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );

    const minutes =
        Math.floor(
            (distance %
                (1000 * 60 * 60))
            /
            (1000 * 60)
        );

    const seconds =
        Math.floor(
            (distance %
                (1000 * 60))
            /
            1000
        );

    const daysElement =
        document.getElementById("days");

    const hoursElement =
        document.getElementById("hours");

    const minutesElement =
        document.getElementById("minutes");

    const secondsElement =
        document.getElementById("seconds");

    if (
        daysElement &&
        hoursElement &&
        minutesElement &&
        secondsElement
    ) {

        daysElement.textContent =
            distance > 0 ? days : 0;

        hoursElement.textContent =
            distance > 0 ? hours : 0;

        minutesElement.textContent =
            distance > 0 ? minutes : 0;

        secondsElement.textContent =
            distance > 0 ? seconds : 0;

    }

}

updateCountdown();

setInterval(updateCountdown, 1000);

// =====================================
// CONFIRMACIÓN DE ASISTENCIA
// =====================================

function cambiarAsistencia() {

    const asistencia =
        document.querySelector(
            'input[name="asistencia"]:checked'
        );

    const acompanantes =
        document.getElementById(
            "acompanantes"
        );

    if (!asistencia || !acompanantes)
        return;

    if (asistencia.value === "no") {

        acompanantes.value = "";
        acompanantes.disabled = true;

    } else {

        acompanantes.disabled = false;

    }

}

// =====================================
// ENVIAR CONFIRMACIÓN
// =====================================

function confirmarWhatsapp() {

    const nombre =
        document
            .getElementById("nombre")
            .value
            .trim();

    if (nombre === "") {

        alert(
            "Por favor ingresa tu nombre."
        );

        return;

    }

    const asistencia =
        document.querySelector(
            'input[name="asistencia"]:checked'
        );

    if (!asistencia) {

        alert(
            "Selecciona una opción."
        );

        return;

    }

    let mensaje = "";

    if (asistencia.value === "si") {

        const acompanantes =
            document.getElementById(
                "acompanantes"
            );

        const cantidad =
            acompanantes.value || 0;

        mensaje =
`💒 CONFIRMACIÓN DE ASISTENCIA

Nombre: ${nombre}

Asistencia: SÍ

Número de acompañantes: ${cantidad}

Nos vemos en la boda ❤️`;

    } else {

        mensaje =
`💒 CONFIRMACIÓN DE ASISTENCIA

Nombre: ${nombre}

Asistencia: NO

Lamentablemente no podré acompañarlos en este día tan especial.`;

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
        Math.random() *
            window.innerWidth +
        "px";

    heart.style.fontSize =
        Math.random() * 20 +
        15 +
        "px";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 6000);

}

setInterval(crearCorazon, 1200);

// =====================================
// ANIMACIONES AL HACER SCROLL
// =====================================

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );

function revealOnScroll() {

    revealElements.forEach(
        element => {

            const top =
                element.getBoundingClientRect()
                    .top;

            const visible =
                window.innerHeight - 100;

            if (top < visible) {

                element.classList.add(
                    "active"
                );

            }

        }
    );

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();

// =====================================
// SCROLL SUAVE
// =====================================

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(link => {

        link.addEventListener(
            "click",
            function (e) {

                const target =
                    document.querySelector(
                        this.getAttribute(
                            "href"
                        )
                    );

                if (!target) return;

                e.preventDefault();

                target.scrollIntoView({

                    behavior:
                        "smooth"

                });

            }
        );

    });

// =====================================
// INICIALIZACIÓN
// =====================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        cambiarAsistencia();

    }
);