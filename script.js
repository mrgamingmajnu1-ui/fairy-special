const pages = [...document.querySelectorAll(".page")];
let current = 0;


// ==========================
// NEXT / BACK
// ==========================

function show(index) {
    current = Math.max(0, Math.min(pages.length - 1, index));

    pages.forEach((page, i) => {
        page.classList.toggle("active", i === current);
    });
}

document.querySelectorAll(".next").forEach(btn => {
    btn.addEventListener("click", () => {
        show(current + 1);
    });
});

document.querySelectorAll(".back").forEach(btn => {
    btn.addEventListener("click", () => {
        show(current - 1);
    });
});


// ==========================
// YES / NO
// ==========================

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const choiceMsg = document.getElementById("choiceMsg");

let dodges = 0;

if (noBtn) {

    noBtn.addEventListener("mouseenter", () => {

        if (dodges < 2) {

            dodges++;

            noBtn.style.transform =
                `translate(${Math.random() * 140 - 70}px,
                           ${Math.random() * 60 - 30}px)`;

            if (choiceMsg) {
                choiceMsg.textContent =
                    "NO thoda shy hai 😭… par option hai ❤️";
            }

        } else {

            noBtn.style.transform = "none";

            if (choiceMsg) {
                choiceMsg.textContent =
                    "Ab NO yahin hai 😌 — choice tumhari hai.";
            }
        }
    });


    noBtn.addEventListener("click", () => {

        noBtn.style.transform = "none";

        if (choiceMsg) {
            choiceMsg.textContent =
                "Koi baat nahi, Fairy. ❤️ Thanks for honestly batana. No pressure.";
        }
    });
}


if (yesBtn) {

    yesBtn.addEventListener("click", () => {

        if (choiceMsg) {
            choiceMsg.textContent =
                "🥹❤️ Thank you, Fairy. Chalo… pehle ek achhi friendship se start karte hain.";
        }

        burst();
    });
}


// ==========================
// HEART BURST
// ==========================

function burst() {

    const box = document.getElementById("hearts");

    if (!box) return;

    for (let i = 0; i < 18; i++) {

        const h = document.createElement("span");

        h.className = "floating-heart";

        h.textContent =
            ["❤️", "💗", "✨", "💕"][
                Math.floor(Math.random() * 4)
            ];

        h.style.left =
            (45 + Math.random() * 10) + "vw";

        h.style.top =
            (48 + Math.random() * 8) + "vh";

        h.style.setProperty(
            "--hx",
            (Math.random() * 180 - 90) + "px"
        );

        box.appendChild(h);

        setTimeout(() => {
            h.remove();
        }, 2300);
    }
}


// ==========================
// CUTE SPARKLES
// ==========================

const sparkleChars = ["✦", "✧", "⋆", "♡"];

function makeSpark() {

    const s = document.createElement("span");

    s.className = "cute-spark";

    s.textContent =
        sparkleChars[
            Math.floor(Math.random() * sparkleChars.length)
        ];

    s.style.left =
        (8 + Math.random() * 84) + "vw";

    s.style.top =
        (55 + Math.random() * 38) + "vh";

    s.style.setProperty(
        "--sx",
        (Math.random() * 90 - 45) + "px"
    );

    document.body.appendChild(s);

    setTimeout(() => {
        s.remove();
    }, 1800);
}

setInterval(makeSpark, 850);


// ==========================
// BUTTON HEART
// ==========================

document.addEventListener("click", event => {

    if (event.target.tagName === "BUTTON") {

        const h = document.createElement("span");

        h.className = "cute-heart";

        h.textContent =
            ["♡", "♥", "✦"][
                Math.floor(Math.random() * 3)
            ];

        h.style.left =
            event.clientX + "px";

        h.style.top =
            event.clientY + "px";

        h.style.setProperty(
            "--hx",
            (Math.random() * 90 - 45) + "px"
        );

        document.body.appendChild(h);

        setTimeout(() => {
            h.remove();
        }, 2600);
    }
});


// ==========================
// KEYBOARD
// ==========================

document.addEventListener("keydown", event => {

    if (event.key === "ArrowRight") {
        show(current + 1);
    }

    if (event.key === "ArrowLeft") {
        show(current - 1);
    }
});


// ==========================
// 🎵 MUSIC - FIXED
// ==========================

const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

if (bgMusic && musicBtn) {

    // Force correct local file path
    bgMusic.src = "./music/song.mp3";
    bgMusic.load();


    // File loaded successfully
    bgMusic.addEventListener("canplay", () => {

        console.log("✅ Song loaded successfully");

    });


    // File loading error
    bgMusic.addEventListener("error", () => {

        console.error(
            "❌ Song load error:",
            bgMusic.error
        );

        musicBtn.textContent =
            "❌ Song Load Error";
    });


    // Music button
    musicBtn.addEventListener("click", async () => {

        try {

            if (bgMusic.paused) {

                await bgMusic.play();

                musicBtn.textContent =
                    "🎵 Music ON";

                musicBtn.classList.add("playing");

                console.log("🎵 Music playing");

            } else {

                bgMusic.pause();

                musicBtn.textContent =
                    "🎵 Music";

                musicBtn.classList.remove("playing");
            }

        } catch (error) {

            console.error(
                "❌ Music play error:",
                error
            );

            musicBtn.textContent =
                "❌ " + error.name;
        }

    });
}


// ==========================
// START
// ==========================

show(0);