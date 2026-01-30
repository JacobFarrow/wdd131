const menuButton = document.querySelector(".menu-label");
const navLinks = document.querySelector(".nav-links");

function toggleMenu() {
    navLinks.classList.toggle("show");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    if (window.innerWidth > 900) {
        navLinks.classList.remove("show");
    }
}

window.addEventListener("resize", handleResize);

const viewer = document.querySelector(".viewer");
const viewerImg = document.querySelector(".viewer img");
const closeBtn = document.querySelector(".close-viewer");

function openModal(event) {
    if (event.target.tagName === "IMG") {
        const clickedSrc = event.target.getAttribute("src");
        viewerImg.src = clickedSrc; 
        viewer.style.display = "flex";
    }
}

function closeModal() {
    viewer.style.display = "none";
}

document.querySelector(".gallery").addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

viewer.addEventListener("click", (event) => {
    if (event.target === viewer) {
        closeModal();
    }
});

window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeModal();
    }
});