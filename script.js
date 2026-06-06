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

        const audioEl =
            document.getElementById("audio");

        if (audioEl) {

            audioEl.play().catch(() => {
                console.log("Autoplay bloqueado por el navegador");
            });

        }

    });

}

// =====================================
// CONTADOR REGRESIVO
// =====================================

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
// CONFIRMACIÓN WHATSAPP FORMULARIO
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
// CONFIRMACIÓN DOBLE
// =====================================

function confirmarAsistencia(tipo) {

    const mensaje =
`💍 CONFIRMACIÓN DE ASISTENCIA

Tipo: ${tipo}

Hola, confirmo mi asistencia a la boda ❤️`;

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
// LLUVIA DE SOBRES
// =====================================

function crearSobre() {

    const container =
        document.getElementById("envelopes");

    if (!container) return;

    const sobre =
        document.createElement("div");

    sobre.classList.add("envelope");

    sobre.innerHTML = "✉️";

    sobre.style.left =
        Math.random() * 100 + "vw";

    sobre.style.fontSize =
        (Math.random() * 20 + 10) + "px";

    sobre.style.animationDuration =
        (Math.random() * 3 + 3) + "s";

    container.appendChild(sobre);

    setTimeout(() => {
        sobre.remove();
    }, 6000);

}

setInterval(crearSobre, 400);

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
            document.querySelector(
                this.getAttribute("href")
            );

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});

// =====================================
// REPRODUCTOR VINILO
// =====================================

const audioPlayer  = document.getElementById("audio");
const btnPlay      = document.getElementById("btnPlay");
const btnRewind    = document.getElementById("btnRewind");
const btnForward   = document.getElementById("btnForward");
const progressFill = document.getElementById("progressFill");
const progressBar  = document.getElementById("progressBar");
const currentTime  = document.getElementById("currentTime");
const totalTime    = document.getElementById("totalTime");
const vinylDisc    = document.getElementById("vinyl");

function fmt(s) {

    if (!s || isNaN(s)) return "0:00";

    const m   = Math.floor(s / 60);
    const sec = Math.floor(s % 60);

    return m + ":" + (sec < 10 ? "0" : "") + sec;

}

if (btnPlay && audioPlayer) {

    btnPlay.addEventListener("click", () => {

        if (audioPlayer.paused) {

            audioPlayer.play().catch(() => {
                console.log("Reproducción bloqueada por el navegador");
            });

            btnPlay.textContent = "❚❚";

            if (vinylDisc) {
                vinylDisc.classList.add("spinning");
            }

        } else {

            audioPlayer.pause();

            btnPlay.textContent = "▶";

            if (vinylDisc) {
                vinylDisc.classList.remove("spinning");
            }

        }

    });

}

if (btnRewind && audioPlayer) {

    btnRewind.addEventListener("click", () => {

        audioPlayer.currentTime =
            Math.max(0, audioPlayer.currentTime - 10);

    });

}

if (btnForward && audioPlayer) {

    btnForward.addEventListener("click", () => {

        audioPlayer.currentTime =
            Math.min(
                audioPlayer.duration || 0,
                audioPlayer.currentTime + 10
            );

    });

}

if (audioPlayer) {

    audioPlayer.addEventListener("loadedmetadata", () => {

        if (totalTime) {
            totalTime.textContent = fmt(audioPlayer.duration);
        }

    });

    audioPlayer.addEventListener("timeupdate", () => {

        const pct = audioPlayer.duration
            ? (audioPlayer.currentTime / audioPlayer.duration) * 100
            : 0;

        if (progressFill) {
            progressFill.style.width = pct + "%";
        }

        if (currentTime) {
            currentTime.textContent = fmt(audioPlayer.currentTime);
        }

    });

    audioPlayer.addEventListener("ended", () => {

        if (btnPlay)      btnPlay.textContent       = "▶";
        if (vinylDisc)    vinylDisc.classList.remove("spinning");
        if (progressFill) progressFill.style.width  = "0%";
        if (currentTime)  currentTime.textContent   = "0:00";

    });

}

if (progressBar && audioPlayer) {

    progressBar.addEventListener("click", (e) => {

        const rect = progressBar.getBoundingClientRect();
        const pct  = (e.clientX - rect.left) / rect.width;

        if (audioPlayer.duration) {
            audioPlayer.currentTime = pct * audioPlayer.duration;
        }

    });

}